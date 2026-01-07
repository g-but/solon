# Solon — Bitcoin-Native Governance (MVP)

Solon implements Bitcoin-first treasury transparency and cryptographic democracy.
This MVP scaffolds Pillar 1 (Transparent Transaction System) and Pillar 4 (Open Vote System), with Solon brand identity and messaging.

## Stack
- Next.js 14 (App Router), Tailwind CSS
- PostgreSQL + Prisma ORM
- BTCPay/Bitcoin Core stubs (replace with real integrations)

## Getting Started
1. Copy `.env.example` to `.env` and set variables
2. Ensure PostgreSQL is available and `DATABASE_URL` is set
3. Generate Prisma client and push schema:
   - `npm run prisma:generate`
   - `npm run prisma:push`
4. Run the dev server: `npm run dev`

## Key Paths
- `src/app/(marketing)/page.tsx` — Landing page with Solon Hero
- `src/components/dashboard/bitcoin-treasury.tsx` — Treasury (Pillar 1)
- `src/components/dashboard/voting-interface.tsx` — Voting (Pillar 4)
- `src/app/api/bitcoin/wallet/[orgId]` — Wallet balance + transactions
- `src/app/api/voting/[sessionId]/cryptographic-vote` — Submit vote
- `prisma/schema.prisma` — Database schema

## Branding & Messaging
- Bitcoin orange primary (`#F7931A`), dark background
- Clear value proposition and four pillars visualized on landing

## Notes
- Signature and BTCPay integrations are stubbed for local development
- Add Clerk auth and real wallet signature verification in Phase 2

