# Solon - Bitcoin-Native Governance Platform

## Overview

Solon is a **Next.js 14** application for Bitcoin-native governance and treasury management. It features cryptographic voting, transparent decision-making, and Bitcoin blockchain integration.

## Architecture

```
solon/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (marketing)/  # Landing pages
│   │   ├── (dashboard)/  # Dashboard routes
│   │   ├── api/          # API routes (Bitcoin, voting)
│   │   ├── governance/   # Governance pages
│   │   └── treasury/     # Treasury pages
│   ├── components/       # React components
│   │   ├── ui/          # Core UI components
│   │   ├── dashboard/   # Dashboard components
│   │   └── bitcoin/     # Bitcoin-related components
│   ├── lib/             # Utilities
│   │   ├── solon/       # Core Solon logic
│   │   └── bitcoin/     # Bitcoin integration
│   └── i18n/            # Internationalization
├── prisma/              # Database schema
└── tests/               # Playwright & Puppeteer tests
```

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14.2.5 (App Router) |
| Database | PostgreSQL with Prisma ORM |
| Styling | Tailwind CSS |
| Testing | Playwright, Puppeteer |
| Bitcoin | BTCPay/Bitcoin Core (stubs) |

## Quick Start

```bash
# Setup
cp .env.example .env
npm install

# Database
npm run prisma:generate
npm run prisma:push

# Development
npm run dev
```

## Critical Rules

### 1. Design System

| Element | Value |
|---------|-------|
| Primary | Bitcoin Orange `#F7931A` |
| Background | Navy `#1e293b` |
| Accent | Orange `#f97316` |

### 2. Four Pillars

Solon is built on four pillars:
1. **Transparent Treasury** - Bitcoin wallet + transaction history
2. **Democratic Voting** - Cryptographic vote verification
3. **Decision Making** - Proposal tools
4. **Audit Trail** - Complete transparency

### 3. API Structure

```typescript
// Treasury
GET /api/treasury/balance
GET /api/treasury/transactions
POST /api/treasury/proposal

// Voting
GET /api/voting/active
POST /api/voting/cast
GET /api/voting/results

// Governance
GET /api/governance/decisions
POST /api/governance/decision
GET /api/governance/audit
```

### 4. Navigation Structure

- **Platform**: Overview, Features, Security, Integration
- **Governance**: Voting, Decisions, Transparency, Audit
- **Treasury**: Bitcoin, Transactions, Budget, Reports
- **Marketplace**: Services, Procurement, Vendors, Contracts
- **Resources**: Docs, About, Support, Contact

## Environment Variables

```bash
NEXT_PUBLIC_APP_URL=https://solon.org
DATABASE_URL=postgresql://...
BITCOIN_RPC_URL=...
```

## Don't

- Skip cryptographic verification for votes
- Expose private keys or wallet secrets
- Hardcode Bitcoin addresses
- Commit .env files

## Testing

```bash
npm run test:e2e           # Playwright tests
npm run test:puppeteer     # Smoke tests
npm run test:puppeteer:mega  # Mega menu tests
```

---

**See `AGENTS.md` for universal agent guidelines.**
