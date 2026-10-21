/**
 * All user-facing and SEO-facing wording for this site.
 *
 * The KEY STRUCTURE is identical across every site in the network — same
 * groups, same keys, same order — so the apps stay interchangeable and a
 * component written for one works on all of them.
 *
 * The WORDS are deliberately unique to this site. That is not decoration: the
 * eleven brands are separate domains serving the same catalogue, and if they
 * shipped the same titles, descriptions and headings, Google would treat them
 * as duplicate content and suppress all but one. Every string that reaches a
 * <title>, a meta description, an <h1>/<h2> or a JSON-LD field must therefore
 * read differently here than on the sibling sites.
 *
 * goldenspinhq's angle: what a spin offer is actually WORTH. Not how large the
 * headline number is, but what survives the wagering, the max-bet rule, the
 * eligible-games list and the cash-out cap. Taken from the brief in
 * sites/goldenspinhq.html.
 *
 * ── The line this file does not cross ───────────────────────────────────────
 * The mockup's review page carries an "Avg. payout time" per casino. No column
 * holds that, so nothing here promises a per-operator figure of that kind —
 * the same restraint the sibling sites keep. The method is described; the only
 * number on a card is `casino.rating`, which is real.
 */
export const COPY = {
  // SEO identity. These three reach the <title>, the meta description and the
  // keywords tag on EVERY page that does not set its own — which is most of
  // them — so they are the strings most likely to be read as duplicate content
  // if a sibling domain ships the same words.
  site: {
    titleTail: 'Free Spins Worth Claiming',
    description: 'claims every spin offer, plays through the wagering and cashes out — then rates what the bonus was actually worth, not what the banner said.',
    keywords: [
      'slot casino checks',
      'slot casino payout test',
      'rtp checked slot casinos',
      'slot casino bonus wagering',
      'mobile slot casinos reviewed',
    ],
  },
  nav: {
    casinos: 'Casinos',
    specialOffers: 'Bonuses',
    categories: 'Categories',
  },
  home: {
    /**
     * The VISIBLE heading over the bonus-type row.
     *
     * The row used to carry no heading at all — the chips were taken to
     * speak for themselves. They do not: arriving mid-page at a band of
     * unlabelled buttons between the hero and the casino list, there is
     * nothing saying what the set IS, and nothing a screen reader can
     * announce for the landmark beyond a generic label nobody wrote for
     * this page.
     *
     * Worded differently on every domain, like every other <h2> here:
     * eleven sites serve one catalogue, and a shared heading is
     * duplicate content.
     */
    bonusTypesTitle: 'Spin Offers By Type',
    heroEyebrow: 'Gold-rated spin offers',
    // Split in two so the JSX keeps its emphasised highlight while the words
    // change. The highlighted half is what wears the gold gradient (see
    // `.text-gold-gradient`), so it has to be the phrase worth emphasising —
    // here the claim about VALUE, not the word "golden", which is only the
    // brand's name.
    heroHeadline: 'Golden spins,',
    heroHighlight: 'tested for real value',
    heroSubtitle: 'A headline number means nothing until it meets the wagering, the max-bet rule and the cash-out cap. We claim the offer, play it through, and rate what is left.',
    topCasinosTitle: 'Top Spin Casinos',
    topCasinosSubtitle: 'Ranked by what their spin offers are actually worth. Narrow them down by category.',
    featuredCasinos: 'Browse rankings',
    specialOffers: 'See bonus offers',
    viewAll: 'View all',
    // Leads the home <title>; the year and brand are appended in page.tsx.
    homeTitle: 'Free Spin Offers, Tested For Real Value',
    faqTitle: 'How We Test A Spin Offer',
    metaDescription: 'Free-spin and bonus offers claimed, played through and cashed out before they are rated — with the wagering, caps and eligible games stated in full.',
    // ── The "How a casino earns its place" band ───────────────────────────
    // Numbered because these ARE a sequence: each stage runs on what the one
    // before it produced. Numbering a set that is not ordered is decoration;
    // numbering this one is information.
    methodTitle: 'How we test a spin offer',
    methodSubtitle: 'Three steps, the same for every casino on the list.',
    methodSteps: [
      {
        kicker: '01 — Claim',
        title: 'Claim the spins',
        body:
          'A real account, opened the way a new player would open it, and the advertised offer claimed exactly as advertised — including whatever the signup flow quietly attaches to it.',
      },
      {
        kicker: '02 — Spin',
        title: 'Play the wagering',
        body:
          'Spin value, eligible slots, the max-bet rule while wagering and the multiplier itself, all checked against what the terms page says rather than what the promo banner says.',
      },
      {
        kicker: '03 — Cash out',
        title: 'Take the winnings out',
        body:
          'What the cap allows, what verification asks for, and which methods are actually offered at the end. An offer you cannot withdraw from is worth nothing, whatever its headline number.',
      },
    ],
  },
  casinos: {
    pageTitle: 'Every Casino We Test',
    pageDescription: 'The full list, with what each operator is offering in spins and where it places once the terms are taken into account.',
    offersHeading: 'Spin Offers At This Casino',
    // Tail of the summary-panel H2: `{casino.name} at a glance`.
    glanceHeadingTail: 'at a glance',
    reviewTitleTail: 'Spin Offer Review',
    reviewSignature: 'Offer claimed, played through and cashed out before it was rated.',
    reviewSummary: 'with its spin offer claimed, played through and cashed out before it was rated.',
    visitCasino: 'Play Now',
    readReview: 'Read Review',
    // Labels the glance row. "Value rating" because that is what this brand
    // rates — what an offer is worth once its terms are applied. The number
    // beside it is `casino.rating`, the editorial score out of five.
    rating: 'Value rating',
    noResults: 'No casinos match this filter yet. Try another category.',
  },
  /**
   * The page behind one bonus type (/bonuses/[slug]).
   *
   * `metaSuffix` is appended to the type's name when the admin wrote no
   * description, so the meta line is still specific to the page rather than
   * boilerplate shared by eight of them.
   */
  bonusCategory: {
    metaSuffix: 'every bonus of this kind on the board, with the terms that come attached.',
    countOne: 'bonus',
    countMany: 'bonuses',
  },

  specialOffers: {
    pageTitle: 'Spin Offers Worth Claiming',
    pageDescription: 'Every offer currently listed here, with the wagering requirement, the max-bet rule and the cash-out cap stated wherever the operator states them.',
    offerMetaSuffix: 'Terms read from the operator’s own page before it went on the list.',
    claim: 'Claim Bonus',
    noResults: 'No spin offers are listed right now.',
  },
  categories: {
    pageTitle: 'Casino Categories',
    pageDescription: 'The same three-step test behind every list — pick the category you came for.',
    categoryMetaSuffix: 'ranked by what their spin offers are worth once the terms are applied.',
    noResults: 'Nothing listed here yet.',
  },
  newsletter: {
    title: 'New spin offers, every Friday.',
    subtitle: 'What landed this week, what the terms actually say, and which offers quietly got worse.',
    placeholder: 'Email address',
    button: 'Subscribe',
    checking: 'Checking…',
    // The spam line is NOT optional wording. This is a double opt-in list: an
    // unconfirmed subscriber never receives anything again, and the verify mail
    // is the single most likely message to be filtered — new sender, one link,
    // no history. Telling people where to look is the difference between a
    // signup and a dead row.
    success:
      'Nearly there — check your inbox and confirm your address to finish. '
      + 'If nothing arrives, it may be sitting in spam or junk.',
    // Shown when the API reports email_sent=false — the site is still
    // collecting addresses but its sending is switched off in the admin.
    successNoEmail:
      'You’re on the list. We are not sending confirmation emails from this site at the moment.',
    error: 'That did not send. Please try again.',
  },
  footer: {
    tagline: 'Independent ratings of casino spin offers — claimed, played and cashed out. We may earn a commission from links on this site; it never changes a placement.',
    // Registered postal address, shown beside the copyright line. A physical
    // address in the footer is what mailbox providers and the gambling
    // affiliate compliance checks both look for, and it must match the address
    // used in the email templates.
    // Registered postal address, shown beside the copyright line. A physical
    // address in the footer is what mailbox providers and the gambling
    // affiliate compliance checks both look for, and it must match the address
    // used in the email templates and on the Contact page.
    //
    // The footer still skips the <address> element when this is blank (see
    // layout.tsx), which is what a newly cloned site ships with.
    postalAddress: '9 Willow Lane, Manchester, M20 4FG, United Kingdom',
    disclaimer:
      'Gambling is for adults aged 18 or over and carries real financial risk. Set deposit limits, never chase losses, and only stake what you can afford to lose.',
  },
  errors: {
    notFound: 'That page is not on the board.',
    apiError: 'Could not load this content. Please try again in a moment.',
  },
  reviews: {
    heading: 'Player Verdicts',
    empty: 'No verdicts yet — be the first to say how this one played.',
    formTitle: 'Add Your Verdict',
    formIntro: 'Your verdict appears on this page as soon as you post it.',
    nameLabel: 'Your name',
    emailLabel: 'Email (optional, never published)',
    ratingLabel: 'Rating',
    titleLabel: 'Headline (optional)',
    bodyLabel: 'Your verdict',
    bodyPlaceholder: 'How did it actually go — spins, wagering, withdrawal, support?',
    submit: 'Post Verdict',
    success: 'Thanks — your verdict is now live. Scroll up to see it.',
    successPending: 'Thanks — your verdict has been submitted and will appear once approved.',
    error: 'That did not send. Please check the form and try again.',
    ratingSummary: (avg: number, total: number) =>
      `${avg.toFixed(1)} out of 5 from ${total} ${total === 1 ? 'verdict' : 'verdicts'}`,
  },
} as const
