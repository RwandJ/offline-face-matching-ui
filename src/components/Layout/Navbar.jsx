export default function Navbar() {
  return (
    <header className="w-full bg-white border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <span className="font-semibold text-gray-800">
          Offline Face Matching
        </span>
      </div>

      <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
        System Ready
      </span>
    </header>
  );
}
