import PageLayout from '@/components/ui/page-layout';

export default function SecurityPage() {
  return (
    <PageLayout 
      title="Cryptographic Security Model" 
      description="Bitcoin-grade security for organizational governance and financial operations"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <SecurityFeature
            title="Multi-Signature Bitcoin Wallet"
            description="Enterprise-grade Bitcoin custody with configurable signature requirements"
            details={[
              'M-of-N signature schemes',
              'Hardware wallet integration', 
              'Time-locked transactions',
              'Emergency recovery procedures'
            ]}
          />
          <SecurityFeature
            title="Cryptographic Vote Verification"
            description="Tamper-proof voting with mathematical verification"
            details={[
              'Digital signature validation',
              'Zero-knowledge proofs',
              'Blockchain anchoring',
              'Independent verification'
            ]}
          />
          <SecurityFeature
            title="Immutable Decision Records"
            description="Permanent record of all organizational decisions"
            details={[
              'Hash chain integrity',
              'Timestamped decisions',
              'Public verification',
              'Audit trail transparency'
            ]}
          />
          <SecurityFeature
            title="Privacy-Preserving Operations"
            description="Maximum transparency with appropriate privacy controls"
            details={[
              'Anonymous voting options',
              'Selective disclosure',
              'Role-based permissions',
              'Data minimization'
            ]}
          />
        </div>

        <div className="bg-[var(--navy)] text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Security Guarantees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Financial Security</h4>
              <p className="text-gray-300 text-sm">Multi-signature Bitcoin custody with enterprise-grade security practices</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Vote Integrity</h4>
              <p className="text-gray-300 text-sm">Cryptographically verified voting with tamper-proof results</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Data Immutability</h4>
              <p className="text-gray-300 text-sm">Blockchain-anchored records that cannot be altered or deleted</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function SecurityFeature({ title, description, details }: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}