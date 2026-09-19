import Icon from '@/components/Icon';

/**
 * <TestimonialCard />, review card with initials avatar block.
 */
export default function TestimonialCard({ review, className = '' }) {
  const initials = review.name
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <figure
      className={`flex h-full flex-col rounded-3xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7 ${className}`}
    >
      <div className="flex items-center gap-1 text-gold-500" aria-label={`${review.rating} star review`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon key={i} name="star" size={15} className={i <= review.rating ? '' : 'opacity-30'} />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
        “{review.quote}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-sand-200 pt-5">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest-500 to-forest-700 font-serif text-sm font-semibold text-sand-50 shadow-[0_6px_14px_-6px_rgba(20,56,47,0.6)]"
        >
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{review.name}</p>
          <p className="text-xs text-ink/50">
            {review.from} · {review.tour}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}