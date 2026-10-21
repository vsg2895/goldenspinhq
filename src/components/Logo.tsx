import Link from 'next/link'

/**
 * GoldenSpinHQ brand mark: a plum tile holding a gold "spin" arc — an almost
 * closed circle with an arrowhead, reading as both a G and a reel in motion —
 * with a four-point sparkle at its centre. Taken from
 * sites/goldenspinhq.html.
 *
 * THE GRADIENT IS THE BRAND, so the mark is stroked and filled with it rather
 * than with the flat token. An SVG gradient has to be declared as a `<defs>`
 * entry and referenced by id, which means the id must be unique in the
 * document — this component renders twice per page (header and footer), so a
 * hardcoded id would produce two elements sharing one definition. They happen
 * to be identical here, so it is harmless today and would stop being harmless
 * the moment the footer variant differed. The id is suffixed per instance.
 *
 * Inlined SVG rather than an image: it renders instantly with no extra
 * request, stays crisp at any size, and takes its colours from the theme
 * tokens.
 *
 * `onDark` is for the footer, which sits on a deeper plum than the page. The
 * mark itself needs no inversion — its tile is already the footer's colour —
 * so only the tagline shifts, where `faint` would lose contrast.
 */
export default function Logo({
  className = '',
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  const gradientId = onDark ? 'gs-logo-footer' : 'gs-logo-header'

  return (
    <Link
      href="/"
      aria-label="GoldenSpinHQ home"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        onDark ? 'focus-visible:ring-offset-[#1f0f19]' : 'focus-visible:ring-offset-cream'
      } ${className}`.trim()}
    >
      <svg
        viewBox="0 0 42 42"
        className="h-9 w-9 shrink-0 sm:h-[42px] sm:w-[42px]"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffe9a3" />
            <stop offset="0.45" stopColor="#e8b43c" />
            <stop offset="1" stopColor="#a66e14" />
          </linearGradient>
        </defs>

        <rect width="42" height="42" rx="11" fill="#1f0f19" />

        {/* The arc: open at the top right, so the arrowhead below reads as the
            direction of the spin rather than as a decoration stuck on. */}
        <path
          d="M31.2 13.6A12.5 12.5 0 1 0 33.5 22H22.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="4.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M27.4 8.2l6.6 3.4-3.6 6.4z" fill={`url(#${gradientId})`} />
        {/* The sparkle sits in flat pale gold, not the gradient: at 9px across
            a three-stop ramp has nowhere to resolve and turns to mud. */}
        <path
          d="M21 16.2l1.1 2.9 2.9 1.1-2.9 1.1-1.1 2.9-1.1-2.9-2.9-1.1 2.9-1.1z"
          fill="#ffe9a3"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink sm:text-[20px]">
          GoldenSpin<span className="text-gold-gradient">HQ</span>
        </span>
        <span
          className={`mt-[5px] text-[9px] font-semibold uppercase tracking-[0.2em] ${
            onDark ? 'text-night-muted' : 'text-muted'
          }`}
        >
          The gold standard in free spins
        </span>
      </span>
    </Link>
  )
}
