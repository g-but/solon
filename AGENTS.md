# AGENTS.md - Solon

> Universal guide for AI coding agents (Claude, Codex, Gemini, Cursor)

## Project Overview

**Solon** is a Bitcoin-native governance platform for transparent treasury management and cryptographic democracy.

| Aspect | Details |
|--------|---------|
| Type | Governance web application |
| Framework | Next.js 14 (App Router) |
| Database | PostgreSQL with Prisma |
| Styling | Tailwind CSS |
| Testing | Playwright, Puppeteer |
| Theme | Bitcoin Orange + Navy |

## Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Database
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push schema to DB

# Build
npm run build
npm run lint

# Testing
npm run test:e2e              # Playwright E2E
npm run test:puppeteer        # Smoke tests
npm run test:puppeteer:mega   # Mega menu tests
```

## Project Structure

```
solon/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/       # Public landing pages
│   │   ├── (dashboard)/       # Dashboard routes
│   │   ├── api/               # API routes
│   │   │   ├── bitcoin/       # Wallet endpoints
│   │   │   └── voting/        # Voting endpoints
│   │   ├── governance/        # Voting, decisions, audit
│   │   └── treasury/          # Bitcoin treasury
│   ├── components/
│   │   ├── ui/               # Core UI (navigation, layout)
│   │   ├── dashboard/        # Treasury, voting interfaces
│   │   └── bitcoin/          # Bitcoin components
│   ├── lib/
│   │   ├── solon/            # Core business logic
│   │   ├── bitcoin/          # Bitcoin integration
│   │   └── site-config.ts    # Navigation config
│   └── i18n/                 # Translations
├── prisma/                   # Database schema
└── tests/                    # E2E tests
```

## Code Style Guidelines

### Component Pattern
```typescript
// src/components/dashboard/bitcoin-treasury.tsx
interface BitcoinTreasuryProps {
  orgId: string;
  balance: number;
  transactions: Transaction[];
}

export function BitcoinTreasury({ orgId, balance, transactions }: BitcoinTreasuryProps) {
  return (
    <div className="rounded-lg bg-navy p-6">
      <h2 className="text-solon-orange font-bold">{balance} BTC</h2>
      {/* Transaction list */}
    </div>
  );
}
```

### API Route Pattern
```typescript
// src/app/api/voting/[sessionId]/cryptographic-vote/route.ts
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { sessionId: string } }
) {
  const { vote, signature } = await request.json();
  
  // Verify cryptographic signature
  const isValid = verifySignature(vote, signature);
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  
  // Record vote
  const result = await recordVote(params.sessionId, vote);
  return NextResponse.json(result);
}
```

## Key Patterns

### 1. Bitcoin Integration (Stubbed)
```typescript
// lib/bitcoin/wallet.ts - Replace with real BTCPay integration
export async function getWalletBalance(orgId: string): Promise<number> {
  // Stub: Replace with BTCPay Server API
  return 2.5; // BTC
}
```

### 2. Cryptographic Voting
All votes must be cryptographically signed and verifiable.

### 3. Design Tokens
```css
--navy: #1e293b;
--solon-orange: #f97316;
--bitcoin-orange: #F7931A;
```

## Navigation URLs

| Section | URL |
|---------|-----|
| Treasury | `/treasury/bitcoin` |
| Voting | `/governance/voting` |
| Decisions | `/governance/decisions` |
| Audit | `/governance/audit` |

## Don't

- Skip cryptographic verification
- Expose wallet private keys
- Hardcode Bitcoin addresses
- Use non-standard colors (stick to design system)
- Skip mega menu navigation tests

## Pre-Commit Checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test:puppeteer:mega` passes (mega menu)
- [ ] All navigation links work (no 404s)

---

**Last Updated**: 2026-01-08
