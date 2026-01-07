"use client";

import type { VotingSession } from "@/lib/solon/types";

export interface VotingInterfaceProps {
  session: VotingSession;
  userWallet: string;
  canVote: boolean;
}

export default function VotingInterface({ session, userWallet, canVote }: VotingInterfaceProps) {
  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[var(--navy)]">{session.title}</h2>
          <p className="text-sm text-gray-600">Voting type: {session.voting_type}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          Session: {session.status}
        </div>
      </header>

      <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
        <p className="text-sm text-gray-700">Connected wallet: <span className="font-mono">{userWallet || '—'}</span></p>
        <div className="mt-4 flex gap-3">
          {['yes', 'no', 'abstain'].map((choice) => (
            <button
              key={choice}
              disabled={!canVote}
              className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700 hover:text-[var(--navy)]"
              onClick={async () => {
                await fetch(`/api/voting/${session.id}/cryptographic-vote`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ vote_choice: choice, public_key: userWallet })
                });
                alert('Vote submitted (demo)');
              }}
            >
              {choice.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
        <h3 className="font-semibold text-[var(--navy)]">Live Tally</h3>
        <div className="mt-2 grid grid-cols-3 gap-4 text-center">
          <Tally label="YES" value={session.tally?.yes ?? 0} color="text-green-600" />
          <Tally label="NO" value={session.tally?.no ?? 0} color="text-red-600" />
          <Tally label="ABSTAIN" value={session.tally?.abstain ?? 0} color="text-amber-600" />
        </div>
      </div>
    </section>
  );
}

function Tally({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}

