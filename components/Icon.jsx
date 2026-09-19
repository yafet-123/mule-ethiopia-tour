import { uiPaths } from '@/components/icons/ui';
import { socialPaths } from '@/components/icons/social';
import CategoryGlyph from '@/components/icons/categories';

/**
 * <Icon />, single entry point for the icon system.
 *
 *   <Icon name="star" size={16} />
 *   <Icon name="whatsapp" size={22} className="text-green-500" />
 *   <Icon name="trek" size={24} className="text-clay-500" />
 */
export default function Icon({ name, size = 20, className = '', ...rest }) {
  if (name in socialPaths) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" {...rest}>
        <path fill="currentColor" d={socialPaths[name]} />
      </svg>
    );
  }

  if (['city', 'church', 'culture', 'trek', 'boat', 'festival', 'ibex'].includes(name)) {
    return <CategoryGlyph name={name} size={size} className={className} {...rest} />;
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" {...rest}>
      {uiPaths[name] || null}
    </svg>
  );
}

export { CategoryGlyph };