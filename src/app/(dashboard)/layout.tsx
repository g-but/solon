export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-8 space-y-8">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <nav className="flex gap-1 p-1">
          <a
            href="/dashboard"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--navy)] hover:bg-gray-50 rounded-md transition-colors"
          >
            Overview
          </a>
          <a
            href="/dashboard/treasury"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--navy)] hover:bg-gray-50 rounded-md transition-colors"
          >
            Treasury
          </a>
          <a
            href="/dashboard/voting"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--navy)] hover:bg-gray-50 rounded-md transition-colors"
          >
            Voting
          </a>
        </nav>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}

