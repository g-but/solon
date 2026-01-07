import PageLayout from '@/components/ui/page-layout';

export default function BitcoinTreasuryPage() {
  return (
    <PageLayout 
      title="Bitcoin Treasury Management" 
      description="Multi-signature wallet management with complete transparency"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Live Demo Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">Live Treasury Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">Current Balance</h3>
              <div className="text-3xl font-bold text-orange-600">₿ 2.47851234</div>
              <div className="text-sm text-orange-700 mt-1">≈ $142,847 USD</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">This Month</h3>
              <div className="text-3xl font-bold text-green-600">₿ 0.15420000</div>
              <div className="text-sm text-green-700 mt-1">≈ $8,924 USD received</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Pending Votes</h3>
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-sm text-blue-700 mt-1">Treasury proposals active</div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              <TransactionRow
                type="received"
                amount="₿ 0.05000000"
                description="Monthly funding from donors"
                timestamp="2 hours ago"
                txId="bc1q...7a8f"
              />
              <TransactionRow
                type="sent"
                amount="₿ 0.01250000"
                description="Development team payment"
                timestamp="1 day ago"
                txId="bc1q...9b2c"
              />
              <TransactionRow
                type="received"
                amount="₿ 0.10000000"
                description="Grant funding approved"
                timestamp="3 days ago"
                txId="bc1q...4d5e"
              />
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[var(--navy)] mb-4">Try It Yourself</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="bg-[var(--navy)] text-white px-6 py-3 rounded-lg hover:bg-[var(--navy-light)] transition-colors font-medium">
                Create Payment Proposal
              </button>
              <button className="border border-[var(--navy)] text-[var(--navy)] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                View Wallet Details
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">Multi-Signature Security</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Configurable M-of-N signature requirements</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Hardware wallet integration support</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Emergency recovery procedures</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[var(--navy)] mb-4">Complete Transparency</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>All transactions publicly verifiable</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Real-time balance updates</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[var(--navy)] mr-3 mt-2 flex-shrink-0"></div>
                <span>Automated financial reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function TransactionRow({ type, amount, description, timestamp, txId }: {
  type: 'sent' | 'received';
  amount: string;
  description: string;
  timestamp: string;
  txId: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className={`w-3 h-3 rounded-full ${type === 'received' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <div>
          <div className="font-medium text-gray-900">{description}</div>
          <div className="text-sm text-gray-500">{timestamp} • {txId}</div>
        </div>
      </div>
      <div className={`font-mono font-semibold ${type === 'received' ? 'text-green-600' : 'text-red-600'}`}>
        {type === 'received' ? '+' : '-'}{amount}
      </div>
    </div>
  );
}