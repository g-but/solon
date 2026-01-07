export type UUID = string;

export interface Organization {
  id: UUID;
  name: string;
  type: 'nonprofit' | 'dao' | 'cooperative' | 'government';
  bitcoin_wallet_xpub: string;
  governance_model: 'democratic' | 'consensus' | 'delegated';
  country: string;
  primary_language: 'en' | 'de' | 'fr' | 'it';
}

export interface BitcoinTransaction {
  id: UUID;
  organization_id: UUID;
  txid: string;
  amount_sats: number;
  category: string;
  description?: string;
  to_address?: string;
  from_address?: string;
  block_height?: number | null;
  transaction_date: string; // ISO
}

export interface Decision {
  id: UUID;
  organization_id: UUID;
  title: string;
  description?: string;
  decision_type: 'policy' | 'budget' | 'service_procurement';
  status: 'proposed' | 'voting' | 'approved' | 'rejected';
  effectiveness_kpi?: Record<string, unknown>;
  origin_member_id?: UUID;
  bitcoin_signature?: string;
  voting_deadline?: string;
}

export interface VotingSession {
  id: UUID;
  organization_id: UUID;
  decision_id: UUID | null;
  title: string;
  voting_type: 'simple_majority' | 'consensus' | 'weighted';
  status: 'active' | 'closed' | 'pending';
  start_date: string;
  end_date?: string;
  total_votes_cast: number;
  bitcoin_signature_required: boolean;
  tally?: { yes: number; no: number; abstain: number };
}

export interface Vote {
  id: UUID;
  voting_session_id: UUID;
  member_id: UUID;
  vote_choice: 'yes' | 'no' | 'abstain';
  weight: number;
  bitcoin_signature: string;
  signed_at: string;
}

export interface ServiceRequest {
  id: UUID;
  organization_id: UUID;
  title: string;
  description?: string;
  budget_sats?: number;
  status: 'open' | 'bidding' | 'awarded' | 'completed';
}

