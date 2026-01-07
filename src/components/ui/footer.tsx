import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <div className="text-sm font-semibold text-[var(--navy)]">Platform</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/features" className="hover:text-[var(--navy)]">Features</Link></li>
              <li><Link href="/security" className="hover:text-[var(--navy)]">Security</Link></li>
              <li><Link href="/integration" className="hover:text-[var(--navy)]">Integration</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--navy)]">Governance</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/governance/voting" className="hover:text-[var(--navy)]">Voting</Link></li>
              <li><Link href="/governance/decisions" className="hover:text-[var(--navy)]">Decisions</Link></li>
              <li><Link href="/governance/transparency" className="hover:text-[var(--navy)]">Transparency</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--navy)]">Treasury</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/treasury/bitcoin" className="hover:text-[var(--navy)]">Bitcoin Treasury</Link></li>
              <li><Link href="/treasury/transactions" className="hover:text-[var(--navy)]">Transaction History</Link></li>
              <li><Link href="/treasury/reports" className="hover:text-[var(--navy)]">Reports</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--navy)]">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-[var(--navy)]">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-[var(--navy)]">Support</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[var(--navy)]">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Solon. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/legal/terms" className="hover:text-[var(--navy)]">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-[var(--navy)]">Privacy</Link>
            <a href="https://github.com" target="_blank" className="hover:text-[var(--navy)]">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}




