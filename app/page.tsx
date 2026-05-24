export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          DevOps Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Incident Response Playbooks in Seconds
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Select your tech stack, incident type, and severity — get a step-by-step playbook with role assignments and escalation paths, ready to share with your team.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $22/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Kubernetes","AWS","PostgreSQL","Node.js","Redis","Nginx"].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{s}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Pick your stack", desc: "Choose service type, cloud provider, and incident category." },
            { step: "2", title: "Set severity & team", desc: "Define P1–P4 severity and map roles like on-call, lead, comms." },
            { step: "3", title: "Export playbook", desc: "Download a Markdown or PDF playbook ready for Confluence or Notion." },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-xl mb-2">Step {item.step}</div>
              <div className="font-semibold text-white mb-1">{item.title}</div>
              <div className="text-sm text-[#8b949e]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$22<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to respond faster</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited playbook generation",
              "20+ service templates (K8s, AWS, DB…)",
              "P1–P4 severity workflows",
              "Role & escalation path builder",
              "Markdown + PDF export",
              "Slack-ready summary snippets",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "What incident types are supported?",
              a: "We cover outages, degraded performance, security incidents, data pipeline failures, and more — across cloud, database, and application layers.",
            },
            {
              q: "Can I customize the generated playbooks?",
              a: "Yes. Every playbook is fully editable. You can add custom steps, adjust role assignments, and re-export at any time.",
            },
            {
              q: "Is there a free trial?",
              a: "We don't offer a free trial, but you can cancel anytime within the first month for a full refund if the tool doesn't fit your workflow.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Incident Response Templater. All rights reserved.
      </footer>
    </main>
  );
}
