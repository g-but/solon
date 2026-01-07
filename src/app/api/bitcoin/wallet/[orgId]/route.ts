import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { BTCPayClient } from "@/lib/bitcoin/btcpay";

export async function GET(_: Request, { params }: { params: { orgId: string } }) {
  const { orgId } = params;
  const org = await prisma.organizations.findUnique({ where: { id: orgId } });
  if (!org) return NextResponse.json({ error: 'Organization not found' }, { status: 404 });

  // In production, map xpub -> wallet id; here use stub
  const client = new BTCPayClient();
  const w = await client.getWalletBalance(`wallet_${orgId}`);
  const txs = await prisma.bitcoin_transactions.findMany({
    where: { organization_id: orgId },
    orderBy: { transaction_date: 'desc' },
    take: 25,
  });
  return NextResponse.json({ balance_sats: w.balance_sats, transactions: txs });
}

export async function PUT(req: Request, { params }: { params: { orgId: string } }) {
  const body = await req.json();
  const { txid, category } = body;
  if (!txid || !category) return NextResponse.json({ error: 'txid and category required' }, { status: 400 });
  const updated = await prisma.bitcoin_transactions.update({ where: { txid }, data: { category } });
  return NextResponse.json(updated);
}

