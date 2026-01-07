import { NextResponse } from "next/server";
import { computeTransparency } from "@/lib/solon/transparency";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orgId = searchParams.get('orgId');
  if (!orgId) return NextResponse.json({ error: 'orgId required' }, { status: 400 });
  const metrics = await computeTransparency(orgId);
  return NextResponse.json({ orgId, metrics });
}

