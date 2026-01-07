# Gemini Best Practices for Solon

This repo is optimized for Gemini CLI and agent workflows. Follow these practices for safe, fast collaboration.

## Working Style
- Plan first: maintain a concise plan with clear, verifiable steps.
- Group actions: batch related edits and commands, announce briefly before running.
- Be surgical: change only what the task requires; avoid unrelated refactors.
- Prefer clarity: keep code simple, well-structured, and consistent with existing patterns.

## Files & Editing
- Use `replace` and `write_file` for all edits.
- Avoid large, sweeping changes. Keep edits targeted and incremental.
- Match the project style (naming, file locations, exports, formatting).

## Testing & Validation
- Run specific tests first (unit/E2E tied to your changes), then broader tests if needed.
- Use Playwright for E2E (`npm run test:e2e`) and Puppeteer smoke (`npm run test:puppeteer`).
- When DB isn’t configured, dashboard pages render demo data to keep tests green.

## Security & Data Integrity
- No secrets in code. Use `.env` and avoid committing credentials.
- Treat Bitcoin and signature integrations as production-grade: validate inputs, verify signatures, and log audit trails.
- Keep third-party calls behind lib adapters (`lib/bitcoin/*`).

## Bitcoin Integrations
- BTCPay and signature verification are stubbed. Replace with real clients progressively.
- All financial actions must map to Bitcoin transactions and be auditable.
- Expose mempool links and signatures in the UI for transparency.

## API & DB
- Use Prisma models from `prisma/schema.prisma`.
- Keep API routes minimal, typed, and defensive (validate inputs, return helpful errors).
- Avoid breaking schemas without migrations; coordinate changes with the team.

## i18n & Brand
- Primary language: English, then DE/FR/IT.
- Keep user-facing text in i18n JSON files (`/i18n`).
- Maintain Solon brand voice: Bitcoin-first, transparency, cryptographic democracy.

## Approvals & Sandbox
- Ask for approval before network or destructive operations.
- Prefer read-only commands to explore; escalate only when necessary.
- Summarize what you’re about to do before running important commands.

## Performance & Reliability
- Keep pages resilient to missing services (DB, BTCPay) with sensible fallbacks.
- Log and fail safely in APIs; never crash the process on recoverable errors.

## When in Doubt
- Confirm assumptions with a concise question.
- Offer next-step options rather than over-building.
