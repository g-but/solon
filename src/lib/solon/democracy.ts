import { prisma } from "@/lib/db";
import { BitcoinSignatureAuth } from "@/lib/bitcoin/signatures";

export class Democracy {
  sig = new BitcoinSignatureAuth();

  async submitVote(sessionId: string, memberId: string, vote_choice: 'yes' | 'no' | 'abstain', public_key: string) {
    const vote = await prisma.votes.create({
      data: {
        voting_session_id: sessionId,
        member_id: memberId,
        vote_choice,
        weight: 1.0,
        bitcoin_signature: `sig_vote_${sessionId}_${memberId}`,
      }
    });
    const verified = await this.sig.verifyVote(vote as any, public_key);
    await prisma.voting_sessions.update({
      where: { id: sessionId },
      data: { total_votes_cast: { increment: 1 } }
    });
    return { vote, verified };
  }
}

