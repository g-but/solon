import { prisma } from "@/lib/db";

export interface TransparencyMetrics {
  financialTransparency: number;
  decisionAuditability: number;
  participationRate: number;
  corruptionRisk: number;
  costEfficiency: number;
}

export async function computeTransparency(orgId: string): Promise<TransparencyMetrics> {
  // Simplified placeholder computation
  const txCount = await prisma.bitcoin_transactions.count({ where: { organization_id: orgId } });
  const decisions = await prisma.decisions.count({ where: { organization_id: orgId } });
  const votes = await prisma.votes.count({ where: { voting_session: { organization_id: orgId } } });

  return {
    financialTransparency: Math.min(100, txCount * 10),
    decisionAuditability: Math.min(100, decisions * 8),
    participationRate: Math.min(100, votes * 5),
    corruptionRisk: Math.max(0, 100 - txCount * 5),
    costEfficiency: Math.min(100, 25 + txCount * 2)
  };
}

