import { prisma } from "@/lib/db";

export class SolonGovernance {
  async getSpendingInfluencedVotes(orgId: string) {
    const votes = await prisma.voting_sessions.findMany({ where: { organization_id: orgId } });
    return votes.map(v => ({ id: v.id, title: v.title }));
  }

  async getServiceDecisionOutcomes(decisionId: string) {
    const decision = await prisma.decisions.findUnique({ where: { id: decisionId } });
    return { decisionId, status: decision?.status ?? 'unknown' };
  }

  async getBudgetVotingHistory(budgetId: string) {
    const budget = await prisma.budget_allocations.findUnique({ where: { id: budgetId } });
    if (!budget?.approved_by_vote) return [];
    const vote = await prisma.voting_sessions.findUnique({ where: { id: budget.approved_by_vote } });
    return vote ? [vote] : [];
  }
}

