import VotingInterface from "@/components/dashboard/voting-interface";
import VotingWalletConnector from "./VotingWalletConnector";
import { prisma } from "@/lib/db";
import { Suspense } from "react";

export default async function VotingPage() {
  let session: any;
  try {
    session = await prisma.voting_sessions.findFirst({ orderBy: { start_date: 'desc' } });
  } catch {
    // ignore and fallback
  }
  session = session || {
    id: 'demo-session',
    title: 'Adopt Bitcoin-Treasury Budget 2025',
    voting_type: 'simple_majority',
    status: 'active',
    organization_id: 'demo-org',
    decision_id: null,
    start_date: new Date(),
    total_votes_cast: 0,
    bitcoin_signature_required: true
  } as any;

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Open Vote</h1>
      <Suspense>
        <VotingWalletConnector />
      </Suspense>
      <VotingInterface session={{ ...(session as any), tally: { yes: 0, no: 0, abstain: 0 } }} userWallet={''} canVote={true} />
    </main>
  );
}
