# Contact Section — Design Spec

**Date:** 2026-05-22
**Project:** tomas-vivaldi-cv revamp
**Section:** Contact (final section before footer)
**Component:** `app/components/ContactMe.tsx` (full rewrite)

## Goal

Replace the existing `ContactMe.tsx` with a Dior · Surrealist · Utilitarian editorial layout consistent with the rest of the revamped site (Hero, About, Experience, Projects, Skills). Display contact links (email + LinkedIn) prominently and provide a contact form. Form submits via `mailto:` to keep zero backend infrastructure.

## Approach — Editorial Split

3-column layout: 52px left rail | links column (40%) | form column (60%). Form is intentionally displaced +12px right to break the grid (surrealist dissonance). Ghost section number `VI` sits behind the links column at 3% opacity. Concentric ring on the top boundary continues the motif from Hero↔Experience and Experience↔Projects transitions.

## Layout

```
┌──────────────────────────────────────────────────────┐
│  [52px rail]  │  LEFT COL (40%)   │  RIGHT COL (60%) │
│               │                   │                  │
│  (empty)      │  VI (ghost, 340px)│   [form]         │
│               │                   │   displaced      │
│               │  Get in touch     │   +12px right    │
│               │  (overflows rail) │                  │
│               │                   │                  │
│               │  EMAIL    value ↗ │                  │
│               │  LINKEDIN value ↗ │                  │
│               │                   │                  │
│               │  * available      │  35.6762° N      │
│               │    for remote †   │  (mid-section,   │
│               │                   │   orphan)        │
└──────────────────────────────────────────────────────┘
```

**Breakpoints:**
- Desktop (≥1024px): 3-col as above
- Tablet (768–1023px): drop rail, single column, links stack above form, full width
- Mobile (<768px): single column, ghost `VI` scales to 180px, coordinate hidden, form displacement reduced to +6px

**Background:** `--bg` (#f5f0e8). No dark backgrounds anywhere.

## Section Title

- Text: `Get in touch`
- Font: Cormorant Garamond Italic, 64px, weight 300
- Color: `--ink` (#1c1810)
- Position: top of left column, overflows ~24px into the rail (bleed-left surrealist element, matches Hero `Tomas Vivaldi`)
- Margin-bottom: 64px

## Contact Links (left column)

Each link is a sparse editorial row:

```
LABEL           VALUE                    ↗
────────────────────────────────────────────
EMAIL           tms.vivaldi@gmail.com    ↗
LINKEDIN        Tomas Vivaldi            ↗
```

**Row structure:**
- Grid: `[100px label] [1fr value] [auto arrow]`
- Padding: 16px vertical
- Border-bottom: 1px solid `--rule` (rgba(28,24,16,0.08))

**Label:**
- Font: DM Mono 400, 10px, uppercase
- Color: `--ink-mute` (#9a8e7a)
- Letter-spacing: 0.15em

**Value:**
- Font: DM Sans 300, 15px
- Color: `--ink` (#1c1810)

**Arrow `↗`:**
- Color: `--accent` (#8c3b28)
- Opacity: 0 by default, animates to 1 on row hover

**Hover behavior:**
- Value: `x: 0 → 4px`, spring (stiffness: 300, damping: 24)
- Arrow: `opacity: 0 → 1`, same spring

**Links:**
- Email: `<a href="mailto:tms.vivaldi@gmail.com">`
- LinkedIn: `<a href="https://linkedin.com/in/tomas-vivaldi-89475619a" target="_blank" rel="noopener noreferrer">`

**Margin annotation (below links):**
- Text: `* available for remote †`
- Font: DM Mono 400, 9px, italic
- Color: `--ink-pale` (#bdb09e)
- Indent: 24px left

## Form (right column)

Layout — single column, vertical stack:

```
NAME                          ← floating label (DM Mono 10px upper)
__________________________    ← underline input only

EMAIL
__________________________

MESSAGE
__________________________
__________________________    ← 3-row textarea
__________________________

                    SEND →    ← text-only submit, right-aligned italic
```

**Container:** `transform: translateX(12px)` (off-grid dissonance)

**Inputs (text, email):**
- No border-box, no background
- Bottom border: 1px solid `--rule`
- Padding: 12px 0
- Font: DM Sans 300, 14px, `--ink`
- Label sits above (real `<label>` element, not placeholder)
- On focus:
  - Bottom border darkens to `--ink`
  - Border animates width `0 → 100%` from left, duration 0.4s, easing `cubic-bezier(0.22, 1, 0.36, 1)`
  - Label color transitions `--ink-mute → --accent`, duration 0.2s

**Textarea (message):**
- Same styling as inputs
- Rows: 3
- Resize: vertical only

**Labels:**
- Font: DM Mono 400, 10px, uppercase, letter-spacing 0.15em
- Color: `--ink-mute`
- Margin-bottom: 8px (above input)
- Real `<label htmlFor>` for accessibility

**Submit:**
- Element: `<button type="submit">`
- Text: `SEND →`
- Font: Cormorant Garamond Italic, 18px, weight 300
- Color: `--accent`
- No background, no border
- Alignment: right
- Margin-top: 32px
- Hover: arrow `x: 0 → 6px`, spring (same as link rows)

**Form library:** react-hook-form (existing dependency).

**Submission:**
```ts
const onSubmit: SubmitHandler<Inputs> = (data) => {
  const subject = encodeURIComponent(`Contact from ${data.name}`);
  const body = encodeURIComponent(`${data.message}\n\n(${data.email})`);
  window.location.href = `mailto:tms.vivaldi@gmail.com?subject=${subject}&body=${body}`;
};
```

**Validation:**
- All three fields required (`register("name", { required: true })`, etc.)
- On invalid submit attempt: each invalid field's bottom border turns `--accent` for 600ms, then reverts
- No inline error messages (keeps editorial minimalism)

**Type:**
```ts
type Inputs = {
  name: string;
  email: string;
  message: string;
};
```

## Surrealist Elements

1. **Ghost `VI`** — Roman numeral six, 340px Cormorant Garamond weight 300, 3% opacity, `--ink`, absolutely positioned top-left behind links column, `pointer-events: none`, `aria-hidden="true"`. Scales to 180px on mobile.

2. **Title bleeds left** — `Get in touch` overflows ~24px into the rail via negative margin-left, matches Hero `Tomas Vivaldi` bleed.

3. **Form off-grid** — entire form container `translateX(12px)` on desktop, `translateX(6px)` on mobile.

4. **Concentric ring on top boundary** — small SVG ring (~80px diameter), sits exactly on the top edge between Skills and Contact sections. Centered horizontally. Animates on enter: `strokeDashoffset` from full → 0 over 1.2s.

5. **Lone floating coordinate** — `35.6762° N`, DM Mono 10px, `--ink-pale`, italic. Right-aligned in the gap between left col and form, vertically centered in the section. `aria-hidden="true"`. Hidden on mobile.

## Motion

**Section entrance (Framer Motion, `whileInView`):**
- Container: `{ opacity: 0, y: 32 } → { opacity: 1, y: 0 }`, duration 0.8s, easing `[0.22, 1, 0.36, 1]`
- Stagger children: 0.08s delay between title, links block, form
- Concentric ring: SVG `strokeDashoffset` full → 0, duration 1.2s, easing `[0.22, 1, 0.36, 1]`
- Ghost `VI`: opacity 0 → 0.03, duration 1.5s, delay 0.4s

**Micro-interactions:**
- Link row hover: value `x: 0 → 4`, arrow `opacity: 0 → 1`, spring `{ stiffness: 300, damping: 24 }`
- Input focus: bottom border width `0 → 100%` from left, duration 0.4s, easing `[0.22, 1, 0.36, 1]`
- Input focus label: color `--ink-mute → --accent`, duration 0.2s
- Submit hover: arrow `x: 0 → 6`, spring same as link
- Invalid submit: bottom border color `--rule → --accent`, holds 600ms, reverts

**No Three.js in this section** — keeps the closing section clean. Three.js confined to Hero BG and Skills.

## Accessibility

- All form labels are real `<label htmlFor>` elements (visible, screen reader accessible)
- All required inputs have `aria-required="true"`
- Submit is `<button type="submit">` — keyboard accessible
- Focus ring: 2px `--accent` outline with 4px offset, visible on tab focus (not just hover)
- Ghost `VI`, coordinate annotation, margin annotation: `aria-hidden="true"`
- Color contrast: `--ink` on `--bg` = 13.5:1 (AAA); `--ink-mute` on `--bg` = 4.7:1 (AA)
- Reduced motion: when `prefers-reduced-motion: reduce`, disable spring and translate animations; opacity fades remain
- LinkedIn external link: `rel="noopener noreferrer"`

## Dependencies

**Keep:**
- `react-hook-form` (already installed)
- `framer-motion` (already installed)

**Remove (no longer needed for Contact):**
- `@heroicons/react` (used for `PhoneIcon`, `EnvelopeIcon`)
- `react-social-icons` (used for LinkedIn icon)

If neither is used elsewhere in the revamped site, uninstall during implementation. If used elsewhere, leave installed.

## Out of Scope

- Phone number display (existing component shows `+81 090-6653-9737`; revamp drops it per goals)
- Subject field (existing form has it; revamp drops per Form fields decision)
- Backend submission (EmailJS, API route) — kept `mailto:` per submission decision
- Internationalization
- Spam protection (mailto is client-side, no server to attack)

## Open Questions

None. All design decisions finalized in brainstorming.

## File Changes Summary

- `app/components/ContactMe.tsx` — full rewrite
- `app/globals.css` — add Contact-specific utility classes if needed (likely none; uses palette tokens already defined for the revamp)
- `package.json` — potentially remove `@heroicons/react`, `react-social-icons` (decide during implementation based on usage elsewhere)
