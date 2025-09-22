import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CRM System</h3>
            <p className="text-sm">
              Empowering businesses with seamless sales and customer management.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-400">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:support@crmsystem.com"
                className="hover:text-blue-400"
              >
                support@crmsystem.com
              </a>
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+18002764357" className="hover:text-blue-400">
                +1-800-CRM-HELP
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} CRM System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
