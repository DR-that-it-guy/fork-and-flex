export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#17251f]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10">
        <header className="flex items-center justify-between border-b border-[#17251f]/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#17251f] text-sm font-bold text-[#f5f1e8]">
              F&amp;F
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Fork &amp; Flex
            </span>
          </div>
          <span className="rounded-full border border-[#17251f]/15 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em]">
            Foundation ready
          </span>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#c5502d]">
              Fitness for the day you actually have
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              No reset. Just your next realistic move.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#17251f]/70">
              Fork &amp; Flex adapts workouts and food guidance when plans change,
              energy drops, or life gets in the way.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#17251f] p-7 text-[#f5f1e8] shadow-2xl shadow-[#17251f]/15 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0a57d]">
              Today changed?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Tell us what happened.
            </h2>
            <div className="mt-8 space-y-3">
              {[
                "I missed my workout",
                "My meals went off plan",
                "I only have 15 minutes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#e46f47] px-5 py-4 text-center text-sm font-semibold text-white">
              Find my next move
            </div>
          </div>
        </section>

        <footer className="border-t border-[#17251f]/10 py-5 text-sm text-[#17251f]/55">
          Adaptive training · practical nutrition · no guilt spirals
        </footer>
      </div>
    </main>
  );
}
