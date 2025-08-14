export default function Loading() {
  return (
    <div className="p-4 space-y-4">
      <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
          >
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-2" />
            <div className="h-3 w-1/3 bg-gray-200 dark:bg-gray-600 rounded animate-pulse mb-4" />

            <div className="h-8 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
