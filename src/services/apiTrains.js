import { RESULTS_PER_PAGE } from "../utils/constants";
import supabase from "./supabase";
import { trains as localTrains, stations as localStations, trainTypes as localTrainTypes } from "../data/data";

export async function getAllTrains() {
  const { data, error } = await supabase.from("trains").select("*");
  if (error) {
    console.error(error);
    // Fallback to local data
    return localTrains;
  }
  return data && data.length > 0 ? data : localTrains;
}

export async function getPopularTrains() {
  const { data, error } = await supabase.from("popularTrains").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getTrains({ trainFrom, trainTo, page, filter }) {
  try {
    // Try to fetch from Supabase first
    const { data: stationsData, error: stationsError } = await supabase
      .from("stations")
      .select("id, name");
    
    const { data: trainTypesData, error: typesError } = await supabase
      .from("trainTypes")
      .select("id, name");
    
    const { data: allTrains, error } = await supabase
      .from("trains")
      .select("*", { count: "exact" });
    
    // If Supabase fails or returns no data, use local data
    const stationsToUse = stationsError || !stationsData ? localStations : stationsData;
    const trainsToUse = error || !allTrains || allTrains.length === 0 ? localTrains : allTrains;
    const trainTypesToUse = typesError || !trainTypesData ? localTrainTypes : trainTypesData;

    // Create a map of station ID to name for quick lookup
    const stationMap = {};
    stationsToUse.forEach((s) => {
      stationMap[s.id] = s.name;
    });

    // Create a map of train type name to ID
    const typeMap = {};
    if (trainTypesToUse) {
      trainTypesToUse.forEach((t) => {
        typeMap[t.name] = t.id;
      });
    }

    // Normalize station names for comparison
    const fromStationLower = trainFrom?.trim()?.toLowerCase();
    const toStationLower = trainTo?.trim()?.toLowerCase();

    // If no stations are provided, return empty array
    if (!fromStationLower || !toStationLower) {
      return { data: [], count: 0 };
    }

    // Filter trains by stations and type
    const filteredTrains = trainsToUse?.filter((train) => {
      if (!train.stations || !Array.isArray(train.stations)) return false;
      
      // Apply type filter if provided
      if (filter && filter.type) {
        const filterTypeId = typeMap[filter.type];
        if (filterTypeId && train.typeId !== filterTypeId) {
          return false;
        }
      }
      
      // Find stations in the train's route that match the from/to stations
      let hasFromStation = false;
      let hasToStation = false;
      let fromIndex = -1;
      let toIndex = -1;

      for (let i = 0; i < train.stations.length; i++) {
        const station = train.stations[i];
        const stationName = stationMap[station.stationId]?.trim().toLowerCase();
        
        if (stationName === fromStationLower && fromIndex === -1) {
          hasFromStation = true;
          fromIndex = i;
        }
        if (stationName === toStationLower && toIndex === -1) {
          hasToStation = true;
          toIndex = i;
        }
      }
      
      // Both stations must exist and from must come before to
      return hasFromStation && hasToStation && fromIndex < toIndex;
    }) || [];

    // Transform filtered trains to match UI expectations
    const transformedTrains = filteredTrains.map((train) => {
      // Find the from and to station info
      const fromStationIndex = train.stations.findIndex(
        (s) => stationMap[s.stationId]?.trim().toLowerCase() === fromStationLower
      );
      const toStationIndex = train.stations.findIndex(
        (s) => stationMap[s.stationId]?.trim().toLowerCase() === toStationLower
      );

      const fromStationObj = train.stations[fromStationIndex];
      const toStationObj = train.stations[toStationIndex];

      // Calculate duration
      const fromTime = fromStationObj.departureTime || "00:00";
      const toTime = toStationObj.arrivalTime || "00:00";
      const [fromH, fromM] = fromTime.split(":").map(Number);
      const [toH, toM] = toTime.split(":").map(Number);
      
      let hours = toH - fromH;
      let minutes = toM - fromM;
      
      if (minutes < 0) {
        hours--;
        minutes += 60;
      }
      
      if (hours < 0) {
        hours += 24;
      }

      // Format duration as "HH:MM"
      const durationStr = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

      return {
        ...train,
        // Properties for TrainItem component
        number: train.trainNumber || train.name,
        level: train.trainTypeName || "Express",
        time: durationStr,
        trainFrom: stationMap[fromStationObj.stationId],
        trainTo: stationMap[toStationObj.stationId],
        go: fromStationObj.departureTime,
        arrive: toStationObj.arrivalTime,
        stopin: toStationIndex - fromStationIndex - 1, // Number of stops between from and to
        // Random display price between 600 and 1000 (inclusive)
        displayPrice:
          typeof train.displayPrice === "number"
            ? train.displayPrice
            : Math.floor(Math.random() * (1000 - 600 + 1)) + 600,
      };
    });

    // Apply pagination to filtered results
    if (page) {
      const from = (page - 1) * RESULTS_PER_PAGE;
      const to = from + RESULTS_PER_PAGE - 1;
      return { 
        data: transformedTrains.slice(from, to + 1),
        count: transformedTrains.length 
      };
    }

    return { data: transformedTrains, count: transformedTrains.length };
  } catch (err) {
    console.error("getTrains error:", err);
    throw err;
  }
}

export async function getTrainById(id) {
  try {
    const { data, error } = await supabase
      .from("trains")
      .select("*")
      .eq("id", id)
      .single();
    
    // If Supabase fails or returns no data, use local data
    if (error || !data) {
      console.log("Falling back to local data for train:", id);
      const localTrain = localTrains.find(t => t.id === Number(id));
      if (!localTrain) {
        throw new Error("Train not found");
      }
      
      // Transform local train data to match expected format
      return {
        ...localTrain,
        number: localTrain.trainNumber || localTrain.name,
        level: localTrain.trainTypeName || "Express",
        displayPrice:
          typeof localTrain.displayPrice === "number"
            ? localTrain.displayPrice
            : Math.floor(Math.random() * (1000 - 600 + 1)) + 600,
      };
    }
    
    // Transform Supabase data to match expected format
    return {
      ...data,
      number: data.trainNumber || data.name,
      level: data.trainTypeName || "Express",
    };
  } catch (err) {
    console.error("getTrainById error:", err);
    // Fallback to local data
    const localTrain = localTrains.find(t => t.id === Number(id));
    if (!localTrain) {
      throw new Error("Train not found");
    }
    
    return {
      ...localTrain,
      number: localTrain.trainNumber || localTrain.name,
      level: localTrain.trainTypeName || "Express",
    };
  }
}

export async function getTrainType(id) {
  const { data, error } = await supabase
    .from("trainTypes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
