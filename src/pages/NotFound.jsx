import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center dark:bg-[#050F1A]">
      <h1 className="text-8xl font-bold text-red-500">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-full bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
