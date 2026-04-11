import { Upload, ScanSearch, Lightbulb, MessageCircle, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    title: 'Upload Document',
    description: 'Upload your contract or PDF securely for analysis.',
    Icon: Upload,
  },
  {
    title: 'AI Analysis',
    description: 'Our AI scans clauses, risks, and key terms instantly.',
    Icon: ScanSearch,
  },
  {
    title: 'Get Insights',
    description: 'Understand obligations, risks, and important highlights.',
    Icon: Lightbulb,
  },
  {
    title: 'Ask Questions',
    description: 'Interact with your document using grounded AI chat.',
    Icon: MessageCircle,
  },
];

/**
 * Landing-only “How it works” flow — visual only; does not affect routing or app logic.
 */
export default function FlowSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-0 sm:mt-20" aria-labelledby="how-it-works-heading">
      <div className="rounded-2xl border border-surface-3/80 bg-surface-1/50 p-6 shadow-[0_0_0_1px_rgba(124,58,237,0.06)] backdrop-blur-md sm:p-8 lg:p-10">
        <h2
          id="how-it-works-heading"
          className="text-center text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          How it works
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-500">
          Four steps from upload to grounded answers — same experience inside the analyzer.
        </p>

        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-stretch lg:justify-center lg:gap-2">
          {STEPS.flatMap((step, index) => {
            const { title, description, Icon } = step;
            const card = (
              <article
                key={title}
                className="landing-flow-step group relative flex min-w-0 flex-1 flex-col rounded-xl border border-surface-3/90 bg-surface-0/60 px-4 py-5 text-center sm:px-5 lg:max-w-[14rem] xl:max-w-none"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/35 bg-brand/10 text-brand-light transition-colors duration-200 group-hover:border-brand/50 group-hover:bg-brand/15">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">{description}</p>
              </article>
            );

            if (index === STEPS.length - 1) {
              return [card];
            }

            return [
              card,
              <div
                key={`flow-arrow-${index}`}
                className="hidden shrink-0 items-center justify-center self-center px-1 text-brand/40 lg:flex"
                aria-hidden
              >
                <ChevronRight size={22} strokeWidth={1.5} />
              </div>,
            ];
          })}
        </div>

        <div className="mx-auto mt-6 h-px max-w-xs bg-gradient-to-r from-transparent via-brand/25 to-transparent lg:hidden" />
      </div>
    </section>
  );
}
