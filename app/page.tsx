export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Stop Guessing Why Your{' '}
          <span className="text-[#58a6ff]">Queries Are Slow</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your slow query logs and get an instant cost breakdown by table scans, joins, and index usage — with actionable optimization suggestions.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $59/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Instant access after payment.</p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-left">
          {[
            { icon: '🔍', title: 'Table Scan Detection', desc: 'Identify full table scans costing you the most execution time.' },
            { icon: '🔗', title: 'Join Cost Analysis', desc: 'Break down nested loop, hash, and merge join costs per query.' },
            { icon: '⚡', title: 'Index Recommendations', desc: 'Get specific index suggestions to eliminate expensive operations.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-white font-semibold mb-1 text-sm">{f.title}</div>
              <div className="text-[#8b949e] text-xs leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$59</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited query log uploads',
              'Full execution plan analysis',
              'Table scan + join cost breakdown',
              'Index optimization suggestions',
              'PostgreSQL, MySQL, MariaDB support',
              'Export reports as PDF/CSV',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Now — $59/mo
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and MariaDB slow query logs are fully supported. We parse EXPLAIN and EXPLAIN ANALYZE output to generate cost breakdowns.',
            },
            {
              q: 'Is my query data stored or shared?',
              a: 'No. Query logs are processed in-memory and never persisted to disk or shared with third parties. Your data stays private.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your Lemon Squeezy customer portal with no questions asked. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold text-sm mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} QueryCost. All rights reserved.
      </footer>
    </main>
  )
}
