
import React from "react";
import \{ BrowserRouter as Router, Routes, Route, Link \} from "react-router-dom";\
import \{\
  AreaChart,\
  Area,\
  XAxis,\
  YAxis,\
  Tooltip,\
  ResponsiveContainer,\
  CartesianGrid,\
  BarChart,\
  Bar,\
  Legend,\
\} from "recharts";\
\
// NAV\
const Nav = () => (\
  <nav className="w-full shadow bg-white">\
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">\
      <div className="flex items-center gap-3">\
        <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">HC</div>\
        <div>\
          <Link to="/" className="font-semibold text-lg text-sky-700">FreeCare Project</Link>\
          <div className="text-xs text-gray-500">Toward Universal Healthcare</div>\
        </div>\
      </div>\
      <div className="hidden md:flex gap-4 text-sm">\
        <Link to="/">Introduction</Link>\
        <Link to="/history">History</Link>\
        <Link to="/extent">Extent</Link>\
        <Link to="/repercussions">Repercussions</Link>\
        <Link to="/fixes">Fixes</Link>\
        <Link to="/about">Our Org</Link>\
        <Link to="/resources">MLA Resources</Link>\
      </div>\
    </div>\
  </nav>\
);\
\
const Hero = (\{ title, subtitle \}) => (\
  <header className="bg-sky-50 py-10 border-b">\
    <div className="max-w-6xl mx-auto px-4">\
      <h1 className="text-3xl md:text-4xl font-bold text-sky-800">\{title\}</h1>\
      <p className="mt-3 text-gray-700 text-lg">\{subtitle\}</p>\
    </div>\
  </header>\
);\
\
// Sample data for charts\
const uninsuredTrend = [\
  \{ year: "2010", uninsured: 50 \},\
  \{ year: "2014", uninsured: 33 \},\
  \{ year: "2018", uninsured: 28 \},\
  \{ year: "2022", uninsured: 27 \},\
];\
\
const spendingData = [\
  \{ year: "2000", spend: 4500 \},\
  \{ year: "2010", spend: 8200 \},\
  \{ year: "2020", spend: 12000 \},\
  \{ year: "2024", spend: 14000 \},\
];\
\
const adminWaste = [\
  \{ system: "US", waste: 1500 \},\
  \{ system: "Canada", waste: 600 \},\
  \{ system: "UK", waste: 500 \},\
];\
\
// Shared small components\
const BulletList = (\{ items \}) => (\
  <ul className="list-disc ml-6 space-y-1">\
    \{items.map((it, idx) => (\
      <li key=\{idx\}>\{it\}</li>\
    ))\}\
  </ul>\
);\
\
// INTRODUCTION PAGE\
function Introduction() \{\
  const introImage = "https://source.unsplash.com/featured/?healthcare,patients";\
\
  return (\
    <main>\
      <Hero title="Introduction" subtitle="The moral and structural crisis of American healthcare." />\
      <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800 space-y-6">\
        <h2 className="text-2xl font-semibold">Introduction</h2>\
        <img src=\{introImage\} alt="Healthcare Crisis" className="w-full rounded-xl mb-4" />\
\
        <p>\
          The United States healthcare system spends more per capita than peer nations yet produces worse outcomes for\
          many communities - a contradiction rooted in politics and policy rather than accident. This site synthesizes\
          research, policy analysis, and community testimony to argue the crisis is structural and fixable but requires\
          political will. \
        </p>\
\
        <p>\
          Employer-based coverage, racial exclusions in mid-20th-century policymaking, and the ascendancy of private\
          insurers created a fragmented architecture that increases cost and reduces access. These historical choices\
          continue to shape contemporary outcomes. (Oberlander, 2003; KFF, 2023).\
        </p>\
\
        <h3 className="font-semibold mt-4">At a glance</h3>\
        <BulletList\
          items=\{[\
            "Highest per-capita spending with middling outcomes (Commonwealth Fund, 2022).",\
            "Millions uninsured or underinsured despite high expenditure (KFF, 2023).",\
            "Medical debt and bankruptcy as common consequences (Himmelstein et al., 2009).",\
          ]\}\
        />\
\
        <h3 className="text-lg font-semibold mt-10">How Universal or Single-Payer Works (Embedded)</h3>\
        <div className="aspect-video w-full rounded-xl overflow-hidden">\
          <iframe\
            className="w-full h-full"\
            src="https://www.youtube.com/embed/7I7A9gMZf0Q"\
            title="Single Payer Explained"\
            allowFullScreen\
          />\
        </div>\
\
        <h3 className="text-lg font-semibold mt-10">Why the U.S. Model Performs Worse (Embedded)</h3>\
        <div className="aspect-video w-full rounded-xl overflow-hidden">\
          <iframe\
            className="w-full h-full"\
            src="https://www.youtube.com/embed/3jZ5vnv-LZc"\
            title="US Healthcare Comparison"\
            allowFullScreen\
          />\
        </div>\
\
        <h3 className="text-lg font-semibold mt-10">Rising U.S. Healthcare Spending</h3>\
        <ResponsiveContainer width="100%" height=\{260\}>\
          <AreaChart data=\{spendingData\} margin=\{\{ top: 10, right: 30, left: 0, bottom: 0 \}\}>\
            <XAxis dataKey="year" />\
            <YAxis />\
            <Tooltip />\
            <CartesianGrid strokeDasharray="3 3" />\
            <Area type="monotone" dataKey="spend" stroke="#0ea5e9" fillOpacity=\{0.25\} />\
          </AreaChart>\
        </ResponsiveContainer>\
\
        <p className="text-sm text-gray-500 mt-2">Sources: James, 2025; Commonwealth Fund, 2022.</p>\
      </div>\
    </main>\
  );\
\}\
\
// HISTORY PAGE\
function History() \{\
  const timeline = [\
    \{ year: "1940s", event: 30 \},\
    \{ year: "1965", event: 50 \},\
    \{ year: "2010", event: 80 \},\
    \{ year: "2020", event: 95 \},\
  ];\
\
  return (\
    <main>\
      <Hero title="History" subtitle="How a fragmented system was built by policy accidents, not design." />\
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">\
        <h2 className="text-xl font-semibold">History</h2>\
        <img src="https://source.unsplash.com/featured/?history,medicine" alt="history" className="w-full rounded-xl" />\
\
        <p>\
          Employer-provided coverage grew from wartime wage policies; Medicare and Medicaid created essential but\
          parallel systems rather than a single national payer. Southern resistance and racialized policymaking left\
          durable gaps in coverage that persist. (Oberlander, 2003).\
        </p>\
\
        <h3 className="font-semibold mt-4">Core historical drivers</h3>\
        <BulletList\
          items=\{[\
            "Wage controls and WWII era employer-sponsored coverage.",\
            "1965 reforms that expanded coverage but did not unify financing.",\
            "Racial politics shaping program design and take-up.",\
            "Private insurer and pharmaceutical lobbying influencing rules.",\
          ]\}\
        />\
\
        <h3 className="text-lg font-semibold mt-8">Policy change timeline</h3>\
        <ResponsiveContainer width="100%" height=\{240\}>\
          <AreaChart data=\{timeline\}>\
            <XAxis dataKey="year" />\
            <YAxis />\
            <Tooltip />\
            <CartesianGrid strokeDasharray="3 3" />\
            <Area type="monotone" dataKey="event" stroke="#6366f1" fillOpacity=\{0.25\} />\
          </AreaChart>\
        </ResponsiveContainer>\
\
        <p className="text-sm text-gray-500 mt-2">Primary source synthesis: James, 2025; Oberlander, 2003.</p>\
      </div>\
    </main>\
  );\
\}\
\
// EXTENT PAGE\
function Extent() \{\
  return (\
    <main>\
      <Hero title="Extent of the Problem" subtitle="Measured in lives, dollars, and preventable suffering." />\
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">\
        <section className="bg-white shadow rounded p-6">\
          <h3 className="text-xl font-semibold">Extent</h3>\
          <img src="https://source.unsplash.com/featured/?hospital,poverty" alt="hospital poverty" className="w-full rounded-xl my-4" />\
\
          <p>\
            Millions are uninsured or underinsured; medical debt burdens households; and racial disparities mean that\
            access and outcomes follow lines of inequality. (KFF, 2023; Himmelstein et al., 2009).\
          </p>\
\
          <h4 className="font-semibold mt-4">Quick facts</h4>\
          <BulletList\
            items=\{[\
              "~27 million uninsured individuals (KFF, 2023)",\
              "~100 million adults with medical debt (Himmelstein et al., 2009)",\
              "Black Americans more likely to delay care and face worse outcomes (James, 2025)",\
            ]\}\
          />\
        </section>\
\
        <aside className="bg-white shadow rounded p-6">\
          <h3 className="font-semibold mb-3">Uninsured Trend</h3>\
          <ResponsiveContainer width="100%" height=\{220\}>\
            <AreaChart data=\{uninsuredTrend\}>\
              <XAxis dataKey="year" />\
              <YAxis />\
              <CartesianGrid strokeDasharray="3 3" />\
              <Tooltip />\
              <Area type="monotone" dataKey="uninsured" stroke="#0369a1" fillOpacity=\{0.25\} />\
            </AreaChart>\
          </ResponsiveContainer>\
\
          <h4 className="font-semibold mt-6">Visual infographic (embed)</h4>\
          <div className="aspect-video rounded overflow-hidden">\
            <iframe src="https://public.tableau.com/views/Placeholder/Sheet1?:showVizHome=no&:embed=true" title="Infographic Embed" className="w-full h-full" />\
          </div>\
        </aside>\
      </div>\
    </main>\
  );\
\}\
\
// REPERCUSSIONS PAGE\
function Repercussions() \{\
  const lifeData = [\
    \{ group: "Black Americans", expectancy: 72 \},\
    \{ group: "White Americans", expectancy: 78 \},\
    \{ group: "OECD Avg", expectancy: 82 \},\
  ];\
\
  return (\
    <main>\
      <Hero title="Repercussions" subtitle="Individual, community, and national consequences." />\
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">\
        <h2 className="text-xl font-semibold">Repercussions</h2>\
        <img src="https://source.unsplash.com/featured/?healthcare,inequality" alt="inequality" className="w-full rounded-xl" />\
\
        <p>\
          Medical debt, avoidable deaths, and diminished economic productivity follow from a system that prices care\
          as a commodity rather than guaranteeing it as a right. (Himmelstein et al).\
        </p>\
\
        <h4 className="font-semibold mt-4">Major repercussions</h4>\
        <BulletList\
          items=\{[\
            "Medical bankruptcy destabilizing families",\
            "Untreated illness reinforcing poverty cycles",\
            "Racial disparities in mortality and life expectancy",\
            "Reduced national economic productivity",\
          ]\}\
        />\
\
        <h3 className="text-lg font-semibold mt-10">Life Expectancy Comparison</h3>\
        <ResponsiveContainer width="100%" height=\{250\}>\
          <AreaChart data=\{lifeData\}>\
            <XAxis dataKey="group" />\
            <YAxis />\
            <Tooltip />\
            <CartesianGrid strokeDasharray="3 3" />\
            <Area type="monotone" dataKey="expectancy" stroke="#dc2626" fillOpacity=\{0.25\} />\
          </AreaChart>\
        </ResponsiveContainer>\
\
        <p className="text-sm text-gray-500">Data sources: Commonwealth Fund, 2022; James, 2025.</p>\
      </div>\
    </main>\
  );\
\}\
\
// FIXES PAGE\
function Fixes() \{\
  return (\
    <main>\
      <Hero title="Fixes" subtitle="Short-term aid and long-term structural transformation." />\
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">\
        <h2 className="text-xl font-semibold">Fixes</h2>\
\
        <p>\
          The pragmatic path couples immediate relief with structural reform: stabilize households now while redesigning\
          financing and delivery for equity and efficiency. \
        </p>\
\
        <h4 className="font-semibold mt-4">Short-Term Band-aid Fixes</h4>\
        <BulletList\
          items=\{[\
            "Medicaid expansion in remaining holdout states",\
            "Targeted medical debt relief and legal protections",\
            "Price caps on essential drugs like insulin",\
            "Investments in community health and mobile clinics",\
          ]\}\
        />\
\
        <h4 className="font-semibold mt-6">Long-Term Structural Fixes</h4>\
        <BulletList\
          items=\{[\
            "Adopt a universal financing model (single-payer or public option with strong regulation)",\
            "Unify benefit design to eliminate underinsurance",\
            "Expand primary care and public health investment",\
            "Tackle racial inequities via targeted funding and accountability",\
          ]\}\
        />\
\
        <h3 className="text-lg font-semibold mt-8">Administrative Waste Comparison</h3>\
        <ResponsiveContainer width="100%" height=\{260\}>\
          <BarChart data=\{adminWaste\}>\
            <XAxis dataKey="system" />\
            <YAxis />\
            <Tooltip />\
            <CartesianGrid strokeDasharray="3 3" />\
            <Bar dataKey="waste" fill="#10b981" />\
            <Legend />\
          </BarChart>\
        </ResponsiveContainer>\
\
        <div className="grid md:grid-cols-2 gap-6 mt-6">\
          <div>\
            <h4 className="font-semibold">Embedded: How Universal/Single-Payer Works</h4>\
            <div className="aspect-video rounded overflow-hidden mt-2">\
              <iframe\
                src="https://www.youtube.com/embed/7I7A9gMZf0Q"\
                title="Single Payer Explainer"\
                className="w-full h-full"\
                allowFullScreen\
              />\
            </div>\
          </div>\
\
          <div>\
            <h4 className="font-semibold">Embedded: Why the U.S. Model is Inferior</h4>\
            <div className="aspect-video rounded overflow-hidden mt-2">\
              <iframe\
                src="https://www.youtube.com/embed/3jZ5vnv-LZc"\
                title="US Model Comparison"\
                className="w-full h-full"\
                allowFullScreen\
              />\
            </div>\
          </div>\
        </div>\
\
        <p className="text-sm text-gray-500 mt-2">Evidence-based proposals drawn from policy literature and the annotated bibliography.</p>\
      </div>\
    </main>\
  );\
\}\
\
// ABOUT PAGE - fixed and expanded content\
function About() \{\
  return (\
    <main>\
      <Hero title="About FreeCare Project" subtitle="Our mission, goals, and organizational overview." />\
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">\
        <h2 className="text-xl font-semibold">Our Mission</h2>\
\
        <p>\
          FreeCare Project advocates for a universal, equitable healthcare system grounded in evidence and moral\
          clarity. We translate academic research into actionable policy proposals and community-facing materials. Our\
          agenda centers on removing financial barriers, closing racial gaps, and rebuilding public health capacity.\
        </p>\
\
        <h3 className="font-semibold mt-4">Goals</h3>\
        <BulletList\
          items=\{[\
            "Promote policy pathways to universal coverage",\
            "Public education and community organizing",\
            "Research translation and policy design",\
            "Hold institutions accountable to equity metrics",\
          ]\}\
        />\
\
        <h3 className="font-semibold mt-6">Why this matters</h3>\
        <p>\
          Healthcare is foundational to civic participation and economic stability. A system that allows medical debt,\
          prevents care, and entrenches racial gaps undermines democratic equality. Our approach combines structural\
          analysis with human-centered storytelling to build political support for lasting change.\
        </p>\
\
        <h3 className="font-semibold mt-6">How to use this site</h3>\
    \
      </div>\
    </main>\
  );\
\}\
\
// RESOURCES PAGE - MLA bibliography and links\
function Resources() \{\
  return (\
    <main>\
      <Hero title="MLA Resources" subtitle="Full MLA bibliography and embedded docs." />\
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-4">\
        <h2 className="text-xl font-semibold">MLA Sources</h2>\
        <div className="prose">\
          <p>\
            James, AJ. <em>Death of Care: Why the U.S. Healthcare System Fails Patients</em>. 2025.\
            <br />\
            Himmelstein, David U., et al. "Medical Bankruptcy in the United States, 2007." <em>American Journal of Medicine</em>, 2009.\
            <br />\
            KFF. "Key Facts About the Uninsured Population." KFF.org, 2023.\
            <br />\
            Oberlander, Jonathan. <em>The Political Life of Medicare</em>. University of Chicago Press, 2003.\
            <br />\
            Tikkanen, Roosa, and E. Abrams. "U.S. Health Care from a Global Perspective." <em>Commonwealth Fund</em>, 2022.\
          </p>\
\
      \
        </div>\
\
        <h4 className="font-semibold mt-6">Embedded Annotated Bibliography (example)</h4>\
        <div className="aspect-video rounded overflow-hidden mt-2">\
          <iframe src="/files/Annotated-Bibliography-preview.html" title="Annotated Bibliography" className="w-full h-full" />\
        </div>\
      </div>\
    </main>\
  );\
\}\
\
// Main export - routing\
export default function HealthcareSite() \{\
  return (\
    <Router>\
      <Nav />\
      <Routes>\
        <Route path="/" element=\{<Introduction />\} />\
        <Route path="/history" element=\{<History />\} />\
        <Route path="/extent" element=\{<Extent />\} />\
        <Route path="/repercussions" element=\{<Repercussions />\} />\
        <Route path="/fixes" element=\{<Fixes />\} />\
        <Route path="/about" element=\{<About />\} />\
        <Route path="/resources" element=\{<Resources />\} />\
      </Routes>\
    </Router>\
  );\
\}\
}
