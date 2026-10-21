/**
 * Frequently asked questions for this site.
 *
 * Rendered VISIBLY on the home page and emitted as FAQPage structured data from
 * this same array. Google requires the two to match; markup-only FAQ is a
 * guidelines violation, which is why the page maps over this constant rather
 * than duplicating the text.
 *
 * The wording is unique to this site: these answers are indexable page content,
 * and they are exactly the kind of text an answer engine quotes. Here they
 * explain what a spin offer is worth once its terms are applied, because that
 * is what this brand is.
 *
 * Nothing below claims a figure this site cannot show. "We log what the cap
 * allows" is a statement about method; a specific payout time per casino would
 * be a measurement no column here holds.
 */
export const FAQ_ITEMS = [
  {
    question: 'What makes a spin offer "worth" anything?',
    answer:
      'What survives its own terms. A hundred free spins at £0.10 with 40× wagering and a £50 cash-out cap is worth less than twenty spins at £0.50 with 10× and no cap — but the first number is the one on the banner. We rate what is left after the conditions are applied, not the headline.',
  },
  {
    question: 'What exactly do you check?',
    answer:
      'Spin value and which slots they run on, the wagering multiplier and what it applies to, the maximum bet allowed while wagering, the cash-out cap, the expiry, and what verification asks for at withdrawal. All of it from the operator’s own terms page.',
  },
  {
    question: 'Why read the terms page instead of the promotion?',
    answer:
      'Because the two disagree more often than you would expect, and when they do, the terms page is what a player is actually held to. A max-bet rule that appears only in the terms is the single most common way a bonus is voided after it has been won.',
  },
  {
    question: 'What is a max-bet rule and why does it matter so much?',
    answer:
      'A cap on your stake per spin while bonus funds are in play — often £5, sometimes less. Exceed it once, even by accident on a higher-stake slot, and many operators void the entire bonus and the winnings with it. It is stated on every offer page here wherever the operator states it.',
  },
  {
    question: 'Does a casino pay to rank higher?',
    answer:
      'No. We earn a commission when somebody signs up through a link here, and that arrangement has no bearing on the order of the list. An offer whose terms get worse drops regardless of what it pays.',
  },
  {
    question: 'Why do some casinos have no spin offer listed?',
    answer:
      'Because nothing is running that we would put a reader in front of. A lapsed offer comes off the list rather than sitting there with an expired date on it, and the casino keeps its page without one.',
  },
] as const
