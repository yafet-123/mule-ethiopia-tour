import { motion } from 'framer-motion';

/**
 * Parses the raw content array (strings of <h3> and <p> HTML) into segments
 * and renders them with beautiful editorial typography.
 *
 * Structure per post: alternating <h3> headings and <p> paragraphs.
 * We group them into sections: each section = one heading + its paragraphs.
 */

function parseBlocks(contentArr) {
  const sections = [];
  let current = null;

  contentArr.forEach((block) => {
    const isHeading = block.trim().startsWith('<h3');
    if (isHeading) {
      if (current) sections.push(current);
      // Strip the <h3> tags to get text
      const text = block.replace(/<h3[^>]*>/g, '').replace(/<\/h3>/g, '').trim();
      current = { heading: text, paragraphs: [] };
    } else if (block.trim().startsWith('<p')) {
      // Strip <p> tags
      const text = block.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '').trim();
      if (current) {
        current.paragraphs.push(text);
      } else {
        // Paragraph before any heading (intro)
        sections.push({ heading: null, paragraphs: [text] });
        current = null;
      }
    }
  });
  if (current) sections.push(current);
  return sections;
}

const SECTION_ICONS = ['✦', '◈', '⬡', '◉', '⟡', '✺', '◆', '⬢'];

export default function ArticleContent({ content }) {
  if (!content || content.length === 0) {
    return (
      <p className="text-ink/40 italic text-lg py-8 text-center">Content coming soon…</p>
    );
  }

  const sections = parseBlocks(content);

  return (
    <div className="py-10 sm:py-14 space-y-0">
      {sections.map((section, sIdx) => (
        <motion.div
          key={sIdx}
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: sIdx * 0.05 }}
        >
          {/* Section wrapper with left accent */}
          <div className={`group relative mb-12 ${sIdx > 0 ? 'pt-2' : ''}`}>

            {/* Section heading */}
            {section.heading && (
              <div className="flex items-start gap-4 mb-5">
                {/* Decorative icon pill */}
                <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-clay-500 text-ink text-xs font-black shadow-md select-none">
                  {SECTION_ICONS[sIdx % SECTION_ICONS.length]}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-ink leading-tight sm:text-3xl mt-0.5">
                  {section.heading}
                </h3>
              </div>
            )}

            {/* Left border accent line alongside paragraphs */}
            <div className="relative pl-0 sm:pl-0">
              {section.paragraphs.map((para, pIdx) => {
                const isFirst = sIdx === 0 && pIdx === 0;

                return (
                  <p
                    key={pIdx}
                    className={[
                      'mb-5 leading-[1.85] text-ink/75 tracking-[0.01em]',
                      isFirst
                        ? 'text-[1.15rem] first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none'
                        : 'text-[1.05rem]',
                    ].join(' ')}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                );
              })}
            </div>

            {/* Section divider (not after last section) */}
            {sIdx < sections.length - 1 && (
              <div className="mt-10 flex items-center gap-4" aria-hidden="true">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sand-300 to-transparent" />
                <span className="text-gold-400/60 text-xs">✦</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sand-300 to-transparent" />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
