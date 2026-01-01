import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-5 text-white">
      <div className="mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About IndRailway</h3>
            <p className="text-gray-300">
              Your reliable partner for train travel across India. We offer
              comfortable and affordable train services connecting major cities
              and tourist destinations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/home" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trains" className="hover:text-cyan-400">
                  Find Trains
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-cyan-400">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/user/profile" className="hover:text-cyan-400">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/help" className="hover:text-cyan-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-cyan-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-cyan-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-600 p-2 hover:bg-cyan-600"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-600 p-2 hover:bg-cyan-600"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
              <a
                href="mailto:support@indrailway.com"
                className="rounded-full bg-gray-600 p-2 hover:bg-cyan-600"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          <p>&copy; 2025 IndRailway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
