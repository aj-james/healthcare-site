// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css"; // make sure this file exists (you've already added Tailwind directives)

// ---- Utility components ----
const Nav = () => (
  <header className="w-full shadow bg-white">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold">HC - FreeCare Project</div>
      <nav className="space-x-4">
        <Link to="/" className="text-sm hover:underline">Introduction</Link>
        <Link to="/history" className="text-sm hover:underline">History</Link>
        <Link to="/extent" className="text-sm hover:underline">Extent</Link>
        <Link to="/repercussions" className="text-sm hover:underline">Repercussions</Link>
        <Link to="/fixes" className="text-sm hover:underline">Fixes</Link>
        <Link to="/about" className="text-sm hover:underline">Our Org</Link>
        <Link to="/resources" className="text-sm hover:underline">MLA Resources</Link>
      </nav>
    </div>
  </header>
);

const Hero = ({ title, subtitle }) => (
  <section className="bg-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-serif font-bold mb-2">{title}</h1>
      <p className="text-gray-700">{subtitle}</p>
    </div>
  </section>
);

const BulletList = ({ items = [] }) => (
  <ul className="list-disc pl-6 space-y-1">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

// Lightweight SVG bar chart (no external libs)
const MiniBarChart = ({ data = [] }) => {
  // data: [{ label, value }]
  const max = Math.max(...data.map(d => d.value), 1);
  const width = 600;
  const height = 200;
  const barW = Math.floor(width / data.length) - 10;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48 bg-white rounded">
      {data.map((d, i) => {
        const barH = (d.value / max) * (height - 40);
        const x = i * (barW + 10) + 30;
        const y = height - barH - 20;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={barH} fill="#10b981" rx="3" />
            <text x={x + barW / 2} y={height - 5} fontSize="10" textAnchor="middle">{d.label}</text>
            <text x={x + barW / 2} y={y - 6} fontSize="10" textAnchor="middle">{d.value}</text>
          </g>
        );
      })}
    </svg>
  );
};

// ---- Page content ----
// Note: I kept the prose concise and placed bullets/infographics placeholders; paste in more of your essay text where prompted.

function Introduction() {
  return (
    <main>
      <Hero title="Introduction" subtitle="The moral and structural crisis of American healthcare." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          The United States healthcare system spends more per capita than peer nations yet produces worse outcomes for many
          communities - a contradiction rooted in politics and policy rather than accident. This site synthesizes research,
          policy analysis, and community testimony to argue the crisis is structural and fixable but requires political will.
        </p>

        <h3 className="font-semibold">At a glance</h3>
        <BulletList
          items={[
            "Highest per-capita spending with middling outcomes (Commonwealth Fund, 2022).",
            "Millions uninsured or underinsured despite high expenditure (KFF, 2023).",
            "Medical debt and bankruptcy as common consequences (Himmelstein et al., 2009).",
          ]}
        />

        <h3 className="font-semibold">Embedded explainer</h3>
        <div className="aspect-video rounded overflow-hidden mt-2">
          {/* keep a paid/free source in mind; this is a placeholder you can swap */}
          <iframe
            src="https://www.youtube.com/embed/pZHiIGFLN8Y?si=X9PO0KTGCSQreiAm"
            title="How single payer works"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <h3 className="font-semibold">Quick visual - Administrative overhead</h3>
        <MiniBarChart
          data={[
            { label: "US", value: 8 }, // relative administrative cost
            { label: "Canada", value: 3 },
            { label: "UK", value: 2 },
            { label: "France", value: 3 },
          ]}
        />
      </div>
    </main>
  );
}

function History() {
  return (
    <main>
      <Hero title="History" subtitle="How employer-based coverage and policy choices shaped today's system." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">History</h2>
        <p>
          Employer-based coverage, racial exclusions in mid-20th-century policymaking, and the ascendancy of private insurers
          created a fragmented architecture that increases cost and reduces access. These historical choices continue to shape
          contemporary outcomes.
        </p>

        <h4 className="font-semibold mt-4">Key turning points</h4>
        <BulletList
          items={[
            "Post-WWII employer tax incentives that tied coverage to jobs.",
            "Mid-century policy decisions that excluded groups from early programs.",
            "Growth of private, profit-driven insurers and the rise of complex billing.",
          ]}
        />

        <h4 className="font-semibold mt-6">Timeline</h4>
        <ul className="pl-4 list-decimal space-y-2">
          <li>1930s–1940s: Early private insurance expansion</li>
          <li>1965: Medicare and Medicaid establish public backbone</li>
          <li>1990s–2000s: Managed care and consolidation</li>
        </ul>
      </div>
    </main>
  );
}

function Extent() {
  return (
    <main>
      <Hero title="Extent of the Problem" subtitle="Metrics and lived outcomes" />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Extent of the Problem</h2>
        <p>
          Access gaps, high costs, and inequitable outcomes are measurable across multiple indicators — insurance coverage,
          life expectancy, maternal mortality, and financial insecurity from medical bills.
        </p>

        <h4 className="font-semibold mt-4">Indicators</h4>
        <BulletList
          items={[
            "Percent uninsured by year and income strata",
            "Maternal mortality rates disaggregated by race",
            "Medical bankruptcy filings and household debt",
          ]}
        />

        <h4 className="font-semibold mt-6">Chart - Uninsured trend (sample)</h4>
        <MiniBarChart
          data={[
            { label: "2010", value: 16 },
            { label: "2015", value: 11 },
            { label: "2020", value: 9 },
            { label: "2023", value: 10 },
          ]}
        />
      </div>
    </main>
  );
}

function Repercussions() {
  return (
    <main>
      <Hero title="Repercussions" subtitle="Health, economic, and social consequences" />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Repercussions</h2>
        <p>
          Individuals suffer worse health outcomes and families experience financial shocks. At the system level, fragmentation
          creates waste and reduces preparedness; pandemics and crises reveal the weakness of a system not designed for universality.
        </p>

        <h4 className="font-semibold mt-4">Immediate harms</h4>
        <BulletList
          items={[
            "Delayed care and avoidable morbidity",
            "Debt-driven financial distress and lost savings",
            "Unequal outcomes along racial and geographic lines",
          ]}
        />

        <h4 className="font-semibold mt-6">Long-run costs</h4>
        <p>
          The system's inefficiencies mean high cumulative public and private spending with diminished return on health outcomes.
        </p>
      </div>
    </main>
  );
}

function Fixes() {
  // short sample data for chart
  const adminWaste = [
    { label: "US", value: 8 },
    { label: "Medicaid/SinglePayer", value: 2 },
    { label: "UK", value: 2 },
    { label: "Canada", value: 3 },
  ];

  return (
    <main>
      <Hero title="Fixes" subtitle="Short-term aid and long-term structural transformation." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Fixes</h2>

        <p>
          The pragmatic path couples immediate relief with structural reform: stabilize households now while redesigning
          financing and delivery for equity and efficiency.
        </p>

        <h4 className="font-semibold mt-4">Short-Term Band-aid Fixes</h4>
        <BulletList
          items={[
            "Medicaid expansion in remaining holdout states",
            "Targeted medical debt relief and legal protections",
            "Price caps on essential drugs like insulin",
            "Investments in community health and mobile clinics",
          ]}
        />

        <h4 className="font-semibold mt-6">Long-Term Structural Fixes</h4>
        <BulletList
          items={[
            "Adopt a universal financing model (single-payer or strong public option)",
            "Unify benefit design to eliminate underinsurance",
            "Expand primary care and public health investment",
            "Tackle racial inequities via targeted funding and accountability",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Administrative Waste Comparison</h3>
        <MiniBarChart data={adminWaste} />

        <div className="grid md:grid-cols-1 gap-6 mt-6">
          <div>
            <h4 className="font-semibold">How Universal/Single-Payer Works (Embedded)</h4>
            <div className="aspect-video rounded overflow-hidden mt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pZHiIGFLN8Y?si=X9PO0KTGCSQreiAm"
                title="Universal / Single Payer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mt-6">Why the U.S. Model Performs Worse (Embedded)</h4>
            <div className="aspect-video rounded overflow-hidden mt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/u9x4cRWqPPM?si=lBZKbbR4kA5_9Fe9"
                title="Why US Model Performs Worse"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mt-6">Additional explainer (Embedded)</h4>
            <div className="aspect-video rounded overflow-hidden mt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BytzrjEfyfA?si=eeoGyF0oS2tzvMg7"
                title="Single payer vs US"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2">Evidence-based proposals drawn from policy literature and the annotated bibliography.</p>
      </div>
    </main>
  );
}

function About() {
  return (
    <main>
      <Hero title="About Our Organization" subtitle="FreeCare Project - Toward Universal Healthcare" />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p>
          FreeCare Project is a student-led policy and research initiative advocating for equitable, universal health coverage.
          We produce research briefs, community testimony, and policy roadmaps to support legislative campaigns and public education.
        </p>

        <h3 className="font-semibold">Goals</h3>
        <BulletList
          items={[
            "Educate the public on structural drivers of poor outcomes.",
            "Support evidence-based legislation for universal coverage.",
            "Center racial justice and community voice in policymaking.",
          ]}
        />

        <h3 className="font-semibold mt-6">Contact / Project Team</h3>
        <p>AJ James - Project Lead. Team: research, design, policy outreach.</p>
      </div>
    </main>
  );
}

function Resources() {
  return (
    <main>
      <Hero title="MLA Resources" subtitle="Annotated bibliography and sources" />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Selected sources (MLA)</h2>

        <ol className="pl-5 list-decimal space-y-2">
          <li>Commonwealth Fund. “Mirror, Mirror” series. 2022.</li>
          <li>Kaiser Family Foundation. “Health Insurance Coverage” 2023.</li>
          <li>Himmelstein, D., et al. “Medical Bankruptcy in the United States, 2007.” Am J Public Health, 2009.</li>
          <li>Annotated Bibliography - project research notes.</li>
        </ol>

        <p className="text-sm text-gray-600 mt-4"></p>
      </div>
    </main>
  );
}

// ---- App root ----
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/history" element={<History />} />
          <Route path="/extent" element={<Extent />} />
          <Route path="/repercussions" element={<Repercussions />} />
          <Route path="/fixes" element={<Fixes />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          {/* fallback */}
          <Route path="*" element={<Introduction />} />
        </Routes>

        <footer className="border-t bg-white mt-8">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
            © FreeCare Project
          </div>
        </footer>
      </div>
    </Router>
  );
}
