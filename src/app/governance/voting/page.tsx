"use client";
import { useState } from 'react';
import PageLayout from '@/components/ui/page-layout';

export default function VotingSystemPage() {
  const [selectedVote, setSelectedVote] = useState<string | null>(null);

  return (
    <PageLayout 
      title="Democratic Voting System" 
      description="Cryptographically verified voting with complete transparency"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Live Voting Demo */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">Active Votes</h2>
          
          <div className="space-y-4">
            <VoteProposal
              id="treasury-001"
              title="Approve Q4 Marketing Budget"
              description="Allocate ₿ 0.5 for marketing initiatives including conference sponsorships and digital advertising"
              deadline="2 days remaining"
              yesVotes={7}
              noVotes={2}
              totalEligible={12}
              isActive={true}
              onVote={setSelectedVote}
              userHasVoted={false}
            />
            
            <VoteProposal
              id="governance-002"
              title="Update Voting Threshold to 60%"
              description="Change the minimum approval threshold for treasury decisions from 50% to 60%"
              deadline="5 days remaining"
              yesVotes={4}
              noVotes={1}
              totalEligible={12}
              isActive={true}
              onVote={setSelectedVote}
              userHasVoted={true}
            />

            <VoteProposal
              id="marketplace-003"
              title="Add New Service Category: Legal Services"
              description="Expand marketplace to include vetted legal service providers for organizational compliance"
              deadline="Completed"
              yesVotes={9}
              noVotes={1}
              totalEligible={12}
              isActive={false}
              onVote={setSelectedVote}
              userHasVoted={true}
            />
          </div>
        </div>

        {/* Voting Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureBox
            title="Cryptographic Signatures"
            description="Every vote is cryptographically signed and verified"
            icon="🔐"
          />
          <FeatureBox
            title="Anonymous Options"
            description="Choose between public and anonymous voting modes"
            icon="🎭"
          />
          <FeatureBox
            title="Weighted Voting"
            description="Configurable voting weights based on stake or role"
            icon="⚖️"
          />
          <FeatureBox
            title="Real-time Results"
            description="Live vote tallies with instant result updates"
            icon="📊"
          />
          <FeatureBox
            title="Audit Trail"
            description="Complete voting history with verification tools"
            icon="📋"
          />
          <FeatureBox
            title="Proposal System"
            description="Structured proposal creation and discussion"
            icon="💡"
          />
        </div>
      </div>
    </PageLayout>
  );
}

function VoteProposal({ 
  id, 
  title, 
  description, 
  deadline, 
  yesVotes, 
  noVotes, 
  totalEligible, 
  isActive, 
  onVote, 
  userHasVoted 
}: {
  id: string;
  title: string;
  description: string;
  deadline: string;
  yesVotes: number;
  noVotes: number;
  totalEligible: number;
  isActive: boolean;
  onVote: (id: string) => void;
  userHasVoted: boolean;
}) {
  const yesPercentage = ((yesVotes / totalEligible) * 100).toFixed(1);
  const noPercentage = ((noVotes / totalEligible) * 100).toFixed(1);

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--navy)]">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {isActive ? 'Active' : 'Completed'}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Results ({yesVotes + noVotes}/{totalEligible} voted)</span>
          <span>{deadline}</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="flex h-full rounded-full overflow-hidden">
            <div className="bg-green-500" style={{ width: `${yesPercentage}%` }}></div>
            <div className="bg-red-500" style={{ width: `${noPercentage}%` }}></div>
          </div>
        </div>
        
        <div className="flex justify-between text-sm mt-2">
          <span className="text-green-600">Yes: {yesVotes} ({yesPercentage}%)</span>
          <span className="text-red-600">No: {noVotes} ({noPercentage}%)</span>
        </div>
      </div>

      {isActive && (
        <div className="flex space-x-3">
          {!userHasVoted ? (
            <>
              <button 
                onClick={() => onVote(id)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Vote Yes
              </button>
              <button 
                onClick={() => onVote(id)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Vote No
              </button>
            </>
          ) : (
            <div className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg font-medium">
              ✓ You have voted
            </div>
          )}
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            View Details
          </button>
        </div>
      )}
    </div>
  );
}

function FeatureBox({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-[var(--navy)] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}