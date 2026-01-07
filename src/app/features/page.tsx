import PageLayout from '@/components/ui/page-layout';

export default function FeaturesPage() {
  return (
    <PageLayout 
      title="Platform Features" 
      description="Complete feature breakdown of Solon's Bitcoin-native governance platform"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Bitcoin Treasury"
          description="Multi-signature Bitcoin wallet with complete transaction transparency"
          icon="💰"
          features={['Multi-sig security', 'Real-time balances', 'Transaction history', 'Budget tracking']}
        />
        <FeatureCard
          title="Cryptographic Voting"
          description="Tamper-proof voting system with cryptographic signatures"
          icon="🗳️"
          features={['Digital signatures', 'Vote verification', 'Anonymous voting', 'Audit trail']}
        />
        <FeatureCard
          title="Transparency Engine"
          description="Complete organizational transparency with blockchain verification"
          icon="👁️"
          features={['Public records', 'Decision tracking', 'Financial reports', 'Audit logs']}
        />
        <FeatureCard
          title="Service Marketplace"
          description="Transparent procurement with vendor management"
          icon="🏪"
          features={['Vendor directory', 'Procurement process', 'Contract tracking', 'Payment automation']}
        />
        <FeatureCard
          title="Global Operations"
          description="Bitcoin-native operations without traditional banking"
          icon="🌍"
          features={['No bank accounts', 'Global payments', 'Currency agnostic', 'Instant settlement']}
        />
        <FeatureCard
          title="API Integration"
          description="Complete API suite for custom integrations"
          icon="🔌"
          features={['REST APIs', 'Webhooks', 'SDKs', 'Documentation']}
        />
      </div>
    </PageLayout>
  );
}

function FeatureCard({ title, description, icon, features }: {
  title: string;
  description: string;
  icon: string;
  features: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--navy)] mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}