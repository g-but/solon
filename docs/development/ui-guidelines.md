created_date: 2025-08-26
last_modified_date: 2025-08-26
last_modified_summary: Introduced navy/white theme, new header/footer, mega menu, accessibility, tests

## UI Guidelines

- **Brand colors**: Navy (`#1e293b`), Navy Light (`#334155`), Navy Dark (`#0f172a`), Accent (`#f1f5f9`). Exposed as CSS variables in `src/app/globals.css`.
- **Typography**: Favor strong hierarchy with navy headings, gray body text. Maintain high contrast.
- **Navigation**:
  - Header component: `src/components/ui/navigation.tsx`
  - Items from config: `src/lib/site-config.ts`
  - Mega menu opens on hover (desktop) and supports click/focus for accessibility.
  - Mobile menu collapses with CTA buttons.
- **Footer**: `src/components/ui/footer.tsx` with 4 columns and legal links.
- **Logo**: `src/components/ui/logo.tsx` (shield with scales) in navy/white.
- **Pages**: Wrap content within the shell defined in `src/app/layout.tsx`.
- **Testing**:
  - Playwright e2e: `tests/e2e/` validates header/footer presence and landing content.
  - Puppeteer smoke: `tests/puppeteer/smoke.mjs` ensures hero renders.

## Developer Notes

- Centralize nav data and theme tokens in `src/lib/site-config.ts` and CSS variables.
- Prefer semantic HTML, ARIA roles (`menubar`, `menu`, `menuitem`) where applicable.
- Keep components small and focused; avoid duplication; reuse tokens and utility classes.




