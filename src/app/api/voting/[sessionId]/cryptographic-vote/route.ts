import { NextResponse } from "next/server";
import { Democracy } from "@/lib/solon/democracy";

export async function POST(req: Request, { params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  const body = await req.json();
  const { vote_choice, public_key } = body || {};
  if (!vote_choice || !public_key) return NextResponse.json({ error: 'vote_choice and public_key required' }, { status: 400 });

  // Demo: no auth; use a placeholder member id
  const d = new Democracy();
  const result = await d.submitVote(sessionId, 'demo-member', vote_choice, public_key);
  return NextResponse.json({ ok: true, result });
}

export async function GET(_: Request, { params }: { params: { sessionId: string } }) {
  // Placeholder verification endpoint
  return NextResponse.json({ sessionId: params.sessionId, verified: true });
}

