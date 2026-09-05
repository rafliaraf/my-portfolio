'use client';

export default function TechTicker() {
  const stack = [
    { category: 'Design & Prototyping', item: 'Figma' },
    { category: 'Creative Suite', item: 'CorelDRAW' },
    { category: 'Digital Imaging', item: 'Adobe Photoshop' },
    { category: 'Full-Stack Framework', item: 'Laravel' },
    { category: 'CSS Architecture', item: 'Tailwind CSS' },
    { category: 'Core Language', item: 'JavaScript' },
    { category: 'Programming & Logic', item: 'Java & C' },
    { category: 'Version Control', item: 'Git & GitHub' },
    { category: 'Enterprise Backend', item: 'PHP' },
  ];

  return (
    <section className="relative border-y border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...stack, ...stack].map((tech, i) => (
          <div key={i} className="inline-flex items-center gap-3 mx-6 sm:mx-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-red-500/80 px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
              {tech.category}
            </span>
            <span className="text-sm sm:text-base font-semibold text-neutral-200 tracking-wide">
              {tech.item}
            </span>
            <span className="text-neutral-700 ml-4">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
