# Solon - Bitcoin-Native Governance Platform

## Overview

Solon is a Next.js application that provides Bitcoin-native governance and treasury management for organizations. It features cryptographic voting, transparent decision-making, and complete financial transparency through Bitcoin blockchain integration.

## Architecture

### Tech Stack
- **Frontend**: Next.js 14.2.5 with React 18.3.1
- **Styling**: Tailwind CSS 3.4.9 with custom design system
- **Database**: Prisma with PostgreSQL
- **Testing**: Playwright + Puppeteer
- **Language**: TypeScript 5.5.3

### Design System
- **Primary Colors**: Navy (`--navy: #1e293b`)
- **Accent Colors**: Orange (`--solon-orange: #f97316`)
- **Typography**: System fonts with custom spacing
- **Components**: Modular, reusable UI components

## Key Features

### 1. Bitcoin Treasury Management
- Multi-signature wallet integration
- Real-time balance tracking
- Transaction transparency
- Automated financial reporting
- **Demo URL**: `/treasury/bitcoin`

### 2. Democratic Voting System
- Cryptographic vote verification
- Real-time vote tallies
- Anonymous and public voting options
- Proposal creation and management
- **Demo URL**: `/governance/voting`

### 3. Mega Menu Navigation
- Platform: Overview, Features, Security, Integration
- Governance: Voting System, Decision Making, Transparency, Audit Trail
- Treasury: Bitcoin Treasury, Transaction History, Budget Tracking, Financial Reports
- Marketplace: Service Directory, Procurement, Vendor Management, Contract Tracking
- Resources: Documentation, About, Support, Contact

### 4. Complete Page Coverage
All navigation links lead to functional pages with interactive demos and consistent design.

## Development

### Getting Started
```bash
npm install
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run Playwright tests
- `npm run test:puppeteer` - Run Puppeteer smoke tests
- `npm run test:puppeteer:mega` - Test mega menu functionality

### Code Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (dashboard)/       # Dashboard routes
│   ├── (marketing)/       # Marketing pages
│   ├── about/            # About page
│   ├── features/         # Features page
│   ├── security/         # Security page
│   ├── integration/      # API integration docs
│   ├── governance/       # Governance pages
│   └── treasury/         # Treasury pages
├── components/            # Reusable React components
│   ├── ui/               # Core UI components
│   ├── marketing/        # Marketing-specific components
│   ├── dashboard/        # Dashboard components
│   └── bitcoin/          # Bitcoin-related components
├── lib/                  # Utility libraries
│   ├── solon/           # Core Solon logic
│   ├── bitcoin/         # Bitcoin integration
│   ├── db.ts            # Database utilities
│   └── site-config.ts   # Navigation and site config
└── i18n/                # Internationalization
```

### Component Guidelines

#### Navigation Component (`src/components/ui/navigation.tsx`)
- Responsive mega menu with hover/click functionality
- Descriptive dropdown items with icons and descriptions
- Mobile-friendly collapsible menu
- Proper ARIA attributes for accessibility

#### Page Layout (`src/components/ui/page-layout.tsx`)
- Consistent page structure across all routes
- Standardized headers and spacing
- Responsive design patterns

#### Interactive Demos
- Treasury: Live Bitcoin balance, transaction history, payment proposals
- Voting: Active proposals with real vote counts, interactive voting buttons
- Security: Cryptographic verification examples

## API Integration

### Treasury API
```typescript
GET /api/treasury/balance       # Current Bitcoin balance
GET /api/treasury/transactions  # Transaction history
POST /api/treasury/proposal     # Create payment proposal
```

### Voting API
```typescript
GET /api/voting/active          # Active vote proposals
POST /api/voting/cast           # Cast cryptographic vote
GET /api/voting/results         # Vote results and audit
```

### Governance API
```typescript
GET /api/governance/decisions   # Decision history
POST /api/governance/decision   # Record decision
GET /api/governance/audit       # Audit trail
```

## Testing

### Puppeteer Tests
- Mega menu functionality tests
- Navigation flow tests
- Interactive element tests
- Visual regression tests

### Running Tests
```bash
npm run test:puppeteer:mega     # Test mega menu specifically
npm run test:e2e                # Full end-to-end tests
```

## Design Principles

1. **Radical Transparency**: Every action is visible and verifiable
2. **Cryptographic Security**: Bitcoin-grade security for all operations  
3. **User Experience**: Intuitive interfaces for complex blockchain operations
4. **Consistency**: Unified design language across all components
5. **Accessibility**: WCAG compliance with proper ARIA labels

## Navigation Structure

The site uses a hierarchical mega menu with the following structure:

### Platform
- Overview → `/` (Platform introduction)
- Features → `/features` (Complete feature breakdown)
- Security → `/security` (Cryptographic security model)
- Integration → `/integration` (API and integration guides)

### Governance  
- Voting System → `/governance/voting` (Democratic voting demo)
- Decision Making → `/governance/decisions` (Proposal tools)
- Transparency → `/governance/transparency` (Public audit)
- Audit Trail → `/governance/audit` (Transaction history)

### Treasury
- Bitcoin Treasury → `/treasury/bitcoin` (Multi-sig wallet demo)
- Transaction History → `/treasury/transactions` (Financial records)
- Budget Tracking → `/treasury/budget` (Real-time monitoring)
- Financial Reports → `/treasury/reports` (Automated reporting)

### Marketplace
- Service Directory → `/marketplace/services` (Vetted providers)
- Procurement → `/marketplace/procurement` (Transparent buying)
- Vendor Management → `/marketplace/vendors` (Vendor relations)
- Contract Tracking → `/marketplace/contracts` (Contract lifecycle)

### Resources
- Documentation → `/docs` (Complete documentation)
- About → `/about` (Mission and team)
- Support → `/support` (Help and support)
- Contact → `/contact` (Contact information)

## Deployment

### Environment Variables
```bash
NEXT_PUBLIC_APP_URL=https://solon.org
DATABASE_URL=postgresql://...
BITCOIN_RPC_URL=...
```

### Production Build
```bash
npm run build
npm start
```

## Contributing

1. Follow the existing code style and component patterns
2. Maintain design consistency using the established design system
3. Test all interactive functionality with Puppeteer
4. Ensure all navigation links work (no 404s)
5. Update this documentation when adding new features

## Security Considerations

- All Bitcoin operations use multi-signature security
- Cryptographic signatures for vote verification
- No sensitive data in client-side code
- Proper input validation and sanitization
- Regular security audits of smart contracts and wallet logic

## Live Demo Features

The application showcases real Bitcoin governance capabilities:

- **Live Treasury**: Real Bitcoin balances and transaction history
- **Active Voting**: Interactive proposals with live vote counts
- **Transparency**: Public verification of all decisions and transactions
- **Mega Menu**: Rich navigation with contextual information

This represents a complete, production-ready governance platform that tells the story of transparent, Bitcoin-native organizational operations.