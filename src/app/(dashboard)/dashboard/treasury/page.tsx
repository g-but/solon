import BitcoinTreasury from "@/components/dashboard/bitcoin-treasury";
import { prisma } from "@/lib/db";

export default async function TreasuryPage() {
  try {
    const org = (await prisma.organizations.findFirst()) || ({ id: 'demo-org' } as any);
    const txs = await prisma.bitcoin_transactions.findMany({
      where: { organization_id: org.id },
      orderBy: { transaction_date: 'desc' },
      take: 10
    });
    const balanceSats = txs.reduce((acc, t) => acc + Number(t.amount_sats), 0);
    return (
      <main className="space-y-6">
        <BitcoinTreasury organizationId={org.id} walletBalance={balanceSats} recentTransactions={txs as any} />
      </main>
    );
  } catch {
    // Fallback demo rendering when DB is not available
    const demoTxs = [
      { txid: 'demo-tx-1', amount_sats: 21000, category: 'operations', transaction_date: new Date().toISOString() },
    ] as any;
    return (
      <main className="space-y-6">
        <BitcoinTreasury organizationId={'demo-org'} walletBalance={21000} recentTransactions={demoTxs} />
      </main>
    );
  }
}
