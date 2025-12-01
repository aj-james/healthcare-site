
// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

// ---- Utility components ----
const Nav = () => (
  <header className="w-full shadow bg-white sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-800">Healthcare Justice Project</div>
      <nav className="space-x-4 flex flex-wrap">
        <Link to="/" className="text-sm hover:underline hover:text-blue-700">Introduction</Link>
        <Link to="/history" className="text-sm hover:underline hover:text-blue-700">Historical Roots</Link>
        <Link to="/extent" className="text-sm hover:underline hover:text-blue-700">Current Crisis</Link>
        <Link to="/opposition" className="text-sm hover:underline hover:text-blue-700">Opposition</Link>
        <Link to="/repercussions" className="text-sm hover:underline hover:text-blue-700">Repercussions</Link>
        <Link to="/solutions" className="text-sm hover:underline hover:text-blue-700">Solutions</Link>
        <Link to="/resources" className="text-sm hover:underline hover:text-blue-700">Research & Sources</Link>
      </nav>
    </div>
  </header>
);

const Hero = ({ title, subtitle }) => (
  <section className="bg-gradient-to-r from-blue-50 to-white py-12 border-b">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-serif font-bold mb-4 text-gray-900">{title}</h1>
      <p className="text-gray-700 text-lg">{subtitle}</p>
    </div>
  </section>
);

const DataCard = ({ title, value, source, color = "blue" }) => (
  <div className={`bg-white p-6 rounded-lg shadow border-l-4 border-${color}-500`}>
    <h3 className="font-bold text-gray-800">{title}</h3>
    <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
    <p className="text-sm text-gray-500 mt-2">{source}</p>
  </div>
);

const MiniBarChart = ({ data = [], title, yLabel }) => {
  const max = Math.max(...data.map(d => d.value), 1);
  const width = 600;
  const height = 200;
  const barW = Math.floor(width / data.length) - 10;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-semibold mb-4">{title}</h4>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
        {data.map((d, i) => {
          const barH = (d.value / max) * (height - 40);
          const x = i * (barW + 10) + 30;
          const y = height - barH - 20;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={barH} fill="#3b82f6" rx="3" />
              <text x={x + barW / 2} y={height - 5} fontSize="10" textAnchor="middle">{d.label}</text>
              <text x={x + barW / 2} y={y - 6} fontSize="10" textAnchor="middle">{d.value}</text>
            </g>
          );
        })}
        <text x="10" y="20" fontSize="12" textAnchor="start">{yLabel}</text>
      </svg>
    </div>
  );
};

const ComparisonTable = ({ data }) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="py-3 px-4 text-left">Metric</th>
          <th className="py-3 px-4 text-left">United States</th>
          <th className="py-3 px-4 text-left">OECD Average</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="py-3 px-4 font-medium">{row.metric}</td>
            <td className="py-3 px-4">{row.us}</td>
            <td className="py-3 px-4">{row.oecd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ---- Page content ----
function Introduction() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="The Death of Care" 
        subtitle="How profit motives created America's broken healthcare system" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">The American Paradox</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="font-bold">The United States spends more on healthcare than any other nation, yet its outcomes consistently rank among the lowest in the developed world.</span> In 2023, health expenditure reached approximately $12,914 per person, almost twice the average of the 38 high-income countries (OECD Health at a Glance 2023). Despite this, millions of Americans remain uninsured or underinsured, and medical debt drives many into bankruptcy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <DataCard 
              title="Per Capita Spending" 
              value="$12,914" 
              source="OECD 2023" 
              color="blue"
            />
            <DataCard 
              title="Uninsured Americans" 
              value="28 million" 
              source="Health System Tracker 2023" 
              color="red"
            />
            <DataCard 
              title="Medical Debt Bankruptcies" 
              value="66%" 
              subtitle="of all personal bankruptcies"
              source="NBER 2023" 
              color="orange"
            />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">International Spending Comparison</h3>
          <MiniBarChart
            title="Health Expenditure Per Capita (2023)"
            yLabel="USD"
            data={[
              { label: "US", value: 12914 },
              { label: "Germany", value: 8456 },
              { label: "Canada", value: 6857 },
              { label: "UK", value: 5698 },
              { label: "OECD Avg", value: 6987 },
            ]}
          />

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-lg mb-3">The Core Argument</h4>
            <p className="text-gray-700">
              "The failures of the U.S. healthcare system are deliberate and unfair, fueled by greed, racism, and denial, and universal healthcare is the only solution consistent with American values."
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Key Performance Indicators</h3>
          <ComparisonTable
            data={[
              { metric: "Infant Mortality (per 1,000)", us: "5.4", oecd: "3.8" },
              { metric: "Life Expectancy (years)", us: "76.4", oecd: "80.3" },
              { metric: "Admin Costs (% of spending)", us: "8%", oecd: "2-3%" },
              { metric: "Uninsured Population", us: "8.4%", oecd: "<1%" },
            ]}
          />
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Embedded Analysis: How We Got Here</h3>
          <div className="aspect-video rounded-lg overflow-hidden">
           <iframe width="560" height="315" 
             src="https://www.youtube.com/embed/gXBPKE28UF0?si=cQgSYgGzm9WAW-Uq" 
             title="Why American Healthcare Cost So Much" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen></iframe>
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/dK4EV9wJPm0?si=CtTwX9265p_FC9fE" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This documentary examines the historical and political factors that shaped America's unique healthcare system.
          </p>
        </section>
      </div>
    </main>
  );
}

function History() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="Historical Roots" 
        subtitle="From wartime policies to structural inequity" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">The Employer-Based System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">World War II Origins</h3>
              <p className="text-gray-700 mb-4">
                Employer-based healthcare developed during World War II, when wage controls led companies to offer insurance instead of salary increases. According to the Kaiser Family Foundation, "employers sought non-wage forms of compensation during wartime restrictions, leading to the widespread adoption of job-based health coverage."
              </p>
              <p className="text-gray-700">
                What started as a temporary solution became the backbone of American healthcare after the World Wars. In contrast, other industrialized nations such as the United Kingdom, France, and Canada built universal systems that guaranteed coverage to all citizens as a matter of public rights (OECD Health at a Glance).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Two Divergent Philosophies</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">🇪🇺</div>
                  <span><strong>European Model:</strong> Healthcare as a public good and human right</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 text-red-800 rounded-full p-2 mr-3">🇺🇸</div>
                  <span><strong>American Model:</strong> Healthcare as a private commodity and market good</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">The Cost of Privatization</h3>
          <MiniBarChart
            title="Healthcare Spending as % of GDP (1960-2024)"
            yLabel="% of GDP"
            data={[
              { label: "1960", value: 5 },
              { label: "1980", value: 9 },
              { label: "2000", value: 13 },
              { label: "2020", value: 18 },
              { label: "2024", value: 18.5 },
            ]}
          />
          <p className="text-sm text-gray-600 mt-2">Source: Centers for Medicare and Medicaid Services</p>

          <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-bold text-lg mb-3">Structural Racism in Healthcare</h4>
            <p className="text-gray-700">
              "The racial inequities that marked mid-century America were built directly into this system. Segregated hospitals, discriminatory employment policies, and unequal access to insurance left Black and Indigenous communities disproportionately excluded from medical care" (CDC National Vital Statistics).
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold">Black Maternal Mortality</h5>
                <p className="text-2xl font-bold text-red-600">3x higher</p>
                <p className="text-sm">than white mothers during childbirth (CDC 2023)</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h5 className="font-bold">Insurance Disparities</h5>
                <p className="text-2xl font-bold text-red-600">2x more likely</p>
                <p className="text-sm">to be uninsured for Black and Hispanic Americans</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Extent() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="Current Crisis" 
        subtitle="Measuring the gap between spending and outcomes" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">The Scale of the Problem</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Insurance Coverage Gap</h3>
              <p className="text-gray-700 mb-4">
                Nearly one in ten Americans lives without health insurance, and an estimated 100 million people carry medical debt (Health System Tracker 2023). In contrast, almost all OECD nations achieve population coverage rates near 100 percent (OECD Health at a Glance).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold">The United States spends roughly 18% of GDP on healthcare, compared to an OECD average between 9 and 11 percent, yet ranks last in access, equity, and outcomes among comparable economies (Commonwealth Fund).</p>
              </div>
            </div>
            
            <MiniBarChart
              title="Administrative Waste Comparison"
              yLabel="% of Spending"
              data={[
                { label: "US", value: 8 },
                { label: "Canada", value: 2 },
                { label: "UK", value: 2 },
                { label: "France", value: 3 },
                { label: "Germany", value: 4 },
              ]}
            />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Pharmaceutical Price Crisis</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <DataCard 
              title="Average US Prescription Cost" 
              value="$1,126" 
              source="OECD 2023" 
              color="purple"
            />
            <DataCard 
              title="OECD Average Cost" 
              value="$563" 
              source="OECD 2023" 
              color="green"
            />
            <DataCard 
              title="Price Difference" 
              value="100% higher" 
              source="In US vs OECD" 
              color="red"
            />
          </div>

          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-lg mb-3">Systemic Feature, Not Bug</h4>
            <p className="text-gray-700">
              "In this structure, coverage complexity often functions as control rather than care. Denials are not rare administrative mistakes; they are systemic features of private insurance designed to contain costs (Johns Hopkins Hospital Debt Report). Americans pay more to receive less care, while the healthcare industry delivers record profits to insurers, pharmaceutical firms, and hospital networks."
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Health Outcomes Disparities</h3>
          <ComparisonTable
            data={[
              { metric: "Infant Mortality Rate", us: "5.4/1000", oecd: "3.8/1000" },
              { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
              { metric: "Avoidable Deaths", us: "33% higher", oecd: "Baseline" },
              { metric: "Chronic Disease Management", us: "Poor", oecd: "Good" },
            ]}
          />
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Embedded Analysis: The Cost of Complexity</h3>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/u9x4cRWqPPM"
              title="Why American Healthcare Costs So Much"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Opposition() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="Opposition to Reform" 
        subtitle="Corporate power and ideological resistance" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">The Forces Against Change</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Corporate Coordination</h3>
            <p className="text-gray-700 mb-4">
              Powerful industries and political alliances have worked consistently to prevent the adoption of a single-payer or universal healthcare system. A 2020 policy analysis identifies insurers, hospital systems, and pharmaceutical firms as "the major sources of opposition," noting that they coordinate through coalitions such as the Partnership for America's Health Care Future (PAHCF) to shape legislation and public opinion (NBER Working Paper No. 30982).
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Lobbying Power</h4>
              <p className="text-2xl font-bold text-red-600">$143 million</p>
              <p className="text-gray-600">spent on lobbying in 2018 alone to block Medicare for All proposals</p>
              <p className="text-sm mt-2">Source: Commonwealth Fund</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Ideological Resistance</h3>
          <p className="text-gray-700 mb-6">
            Scholars argue that American political culture equates healthcare with market freedom rather than social equity. "The belief that health care should remain a private commodity has become a defining feature of American exceptionalism in public policy" (OECD). This perspective fuels fears of "socialized medicine" and fosters divisions along class and racial lines.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Political Barriers</h4>
              <ul className="space-y-2">
                <li>• Conservative rhetoric of "government overreach"</li>
                <li>• Centrist Democrats tempering reform agendas</li>
                <li>• Campaign finance dependencies</li>
                <li>• State-level opposition to Medicaid expansion</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">The PAHCF Coalition</h4>
              <p className="text-gray-700 mb-3">Formed in 2018 to coordinate opposition:</p>
              <ul className="space-y-1 text-sm">
                <li>• America's Health Insurance Plans (AHIP)</li>
                <li>• Pharmaceutical Research and Manufacturers (PhRMA)</li>
                <li>• Federation of American Hospitals</li>
                <li>• American Medical Association (historically)</li>
              </ul>
            </div>
          </div>
        </section>
// Add this section to the Opposition page after the current content:

<section className="bg-gray-50 p-6 rounded-lg mt-6">
  <h4 className="font-bold mb-3">Specific Examples of Resistance</h4>
  <div className="space-y-4">
    <div className="p-4 bg-white rounded border">
      <h5 className="font-bold text-red-700">Union Opposition in New York</h5>
      <p className="text-sm mt-1">
        "Several New York City municipal unions opposed the proposed New York Health Act 
        on grounds that it could undermine existing health plans negotiated through collective 
        bargaining" (Health Policy Review).
      </p>
    </div>
    <div className="p-4 bg-white rounded border">
      <h5 className="font-bold text-red-700">Charity Care Failures</h5>
      <p className="text-sm mt-1">
        "Nonprofit hospitals have introduced charity care programs, yet investigative reports 
        reveal that many still sue patients for unpaid bills" (Johns Hopkins University).
      </p>
    </div>
  </div>
</section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Incrementalism vs. Structural Change</h3>
          <p className="text-gray-700 mb-4">
            "A 2022 brief from the American Public Health Association concludes that 'single-payer remains the most efficient and equitable model, but implementation faces significant political barriers' (APHA Policy Statement). Such incrementalism reflects not only caution but also the institutional inertia of a fragmented system."
          </p>
          
          <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
            <h4 className="font-bold mb-3">Even Within Reform Movements</h4>
            <p className="text-gray-700">
              "Certain unions fear that members would lose hard-won negotiated benefits under a universal system. For example, several New York City municipal unions opposed the proposed New York Health Act on grounds that it could undermine existing health plans (Health Policy Review)."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Repercussions() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="Human & Economic Costs" 
        subtitle="The devastating consequences of a broken system" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">The Burden on Americans</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Medical Bankruptcy Crisis</h3>
              <p className="text-gray-700 mb-4">
                Medical debt remains the leading cause of personal bankruptcy in the United States, cited in two-thirds of all filings (NBER). Chronic illness and delayed treatment perpetuate poverty and reduce national productivity.
              </p>
              
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="font-bold">"The moral cost is equally profound: a society that normalizes preventable suffering erodes its own democratic legitimacy."</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-4">By the Numbers</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Medical Bankruptcy Rate</p>
                  <p className="text-2xl font-bold">66%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Delayed Care Due to Cost</p>
                  <p className="text-2xl font-bold">2x higher</p>
                  <p className="text-sm">than other high-income countries</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">The Coverage Illusion</h3>
          <p className="text-gray-700 mb-6">
            "Nearly one in five insured adults report being denied a medical service by their insurer in the past year (Health System Tracker). OECD nations provide automatic coverage for basic care; the U.S. system often denies or delays treatment through pre-authorization barriers and coverage disputes."
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <DataCard 
              title="Insured Denials" 
              value="20%" 
              subtitle="of insured adults denied care"
              source="Health System Tracker" 
              color="red"
            />
            <DataCard 
              title="Cost-Related Delays" 
              value="29%" 
              subtitle="of Americans delay care"
              source="Commonwealth Fund" 
              color="orange"
            />
            <DataCard 
              title="Prescription Skipping" 
              value="18%" 
              subtitle="skip medications due to cost"
              source="KFF 2023" 
              color="purple"
            />
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">The Failure of Half-Measures</h3>
          <p className="text-gray-700 mb-4">
            "Expanding Medicaid eligibility, forgiving medical debt, or capping insulin prices are all valuable interventions, but they remain temporary palliatives. Nonprofit hospitals, for instance, have introduced charity care programs, yet investigative reports reveal that many still sue patients for unpaid bills (Johns Hopkins University)."
          </p>
          
          <div className="mt-6 p-6 bg-blue-50 rounded-lg">
            <h4 className="font-bold mb-3">The Inescapable Conclusion</h4>
            <p className="text-gray-700">
              "While these incremental reforms alleviate immediate hardship, they preserve the structural flaws of a multi-payer system. Access without affordability is still denial. As one report notes, 'piecemeal solutions comfort the privileged while leaving systemic inequities untouched' (Commonwealth Fund)."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Solutions() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="The Path Forward" 
        subtitle="Universal healthcare as the only moral and practical solution" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Addressing Counterarguments</h2>
          
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Common Arguments Against Universal Care</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                    <span>"Would increase taxes and government spending"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                    <span>"Would stifle medical innovation"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-200 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                    <span>"Reduces patient choice and freedom"</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Evidence-Based Responses</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                    <span>Total cost to citizens would decrease as administrative overhead drops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                    <span>OECD data shows universal systems maintain robust innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-200 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                    <span>Private insurance often restricts choice more than universal systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">The Economic Case for Universal Care</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                "A single-payer or universal healthcare model offers the most coherent solution for combining efficiency, equity, and accountability. Under such a system, administrative waste would shrink dramatically: studies estimate that eliminating redundant billing and insurance overhead could redirect more than $500 billion annually toward direct patient care (CMS)."
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="font-bold">Preventive care would expand, reducing long-term costs and improving population health outcomes.</p>
              </div>
            </div>
            
            <MiniBarChart
              title="Projected Annual Savings"
              yLabel="Billions USD"
              data={[
                { label: "Admin Waste", value: 500 },
                { label: "Drug Prices", value: 150 },
                { label: "Preventive Care", value: 200 },
                { label: "Total Savings", value: 850 },
              ]}
            />
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">International Success Stories</h3>
          <p className="text-gray-700 mb-6">
            "Evidence from other OECD nations disproves the argument that universal systems stifle innovation. Germany, Japan, and Sweden all maintain robust biotech and pharmaceutical industries while guaranteeing universal access. The OECD's 2023 innovation index ranks Germany and Japan above the U.S. in medical technology development despite their public financing models (World Index of Healthcare Innovation)."
          </p>
          
          <ComparisonTable
            data={[
              { metric: "Innovation Ranking", us: "3rd", oecd: "Germany 1st, Japan 2nd" },
              { metric: "Coverage Rate", us: "90%", oecd: "99-100%" },
              { metric: "Patient Satisfaction", us: "Low", oecd: "High" },
              { metric: "Wait Times", us: "Variable", oecd: "Comparable or better" },
            ]}
          />
          
          <div className="mt-6 p-6 bg-green-50 rounded-lg">
            <h4 className="font-bold mb-3">The Market Reality</h4>
            <p className="text-gray-700 italic">
              "In the U.S., the market doesn't compete to cure—it competes to bill" — Wendell Potter, former insurance executive
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Implementation Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-100 rounded-lg">
              <div className="text-2xl font-bold text-blue-800 mb-2">1</div>
              <p className="font-bold">Political Will</p>
              <p className="text-sm mt-2">Build cross-coalition support and overcome lobbying resistance</p>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-2xl font-bold text-green-800 mb-2">2</div>
              <p className="font-bold">Public Education</p>
              <p className="text-sm mt-2">Transparent communication about benefits and financing</p>
            </div>
            <div className="text-center p-4 bg-purple-100 rounded-lg">
              <div className="text-2xl font-bold text-purple-800 mb-2">3</div>
              <p className="font-bold">Phased Transition</p>
              <p className="text-sm mt-2">Learn from Medicare expansion and international models</p>
            </div>
            <div className="text-center p-4 bg-orange-100 rounded-lg">
              <div className="text-2xl font-bold text-orange-800 mb-2">4</div>
              <p className="font-bold">Equity Focus</p>
              <p className="text-sm mt-2">Center racial justice and vulnerable communities in design</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Solutions Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/BytzrjEfyfA"
                title="How Single Payer Systems Work"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
              src="https://www.youtube.com/embed/pZHiIGFLN8Y"
              title="The History of American Healthcare"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <div className="text-center p-8 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">The Final Argument</h3>
            <p className="text-lg text-gray-800 mb-4">
              "The failures of American healthcare are not accidental; they are the predictable outcome of a system designed to privilege profit over patients. Historical precedent, international comparison, and empirical evidence all point toward the same conclusion: the United States spends more and achieves less because it refuses to treat healthcare as a public right."
            </p>
            <p className="text-xl font-bold text-blue-800">
              "The death of care is not inevitable, but reversing it requires moral courage equal to the scale of the problem."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Resources() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        title="Research & Sources" 
        subtitle="Complete annotated bibliography and data sources" 
      />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Works Cited</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-bold">American Public Health Association. Policy Statement: Single-Payer and Public Health Reform.</p>
              <p className="text-gray-600">APHA, 2022, https://www.apha.org/policies-and-advocacy/public-health-policy-statements.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-bold">Centers for Disease Control and Prevention. National Vital Statistics Reports: Maternal Mortality Statistics.</p>
              <p className="text-gray-600">U.S. Department of Health and Human Services, 2023, https://www.cdc.gov/nchs/nvss/index.htm.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="font-bold">Centers for Medicare & Medicaid Services. National Health Expenditure Data.</p>
              <p className="text-gray-600">U.S. Department of Health and Human Services, 2024, https://www.cms.gov/research-statistics-data-and-systems/statistics-trends-and-reports/nationalhealthexpenddata.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <p className="font-bold">Commonwealth Fund. Mirror, Mirror 2023: Reflecting Poorly on U.S. Health Care.</p>
              <p className="text-gray-600">Aug. 2023, https://www.commonwealthfund.org/publications/fund-reports/2023/aug/mirror-mirror-2023.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <p className="font-bold">Health System Tracker. The Burden of Medical Debt in the United States.</p>
              <p className="text-gray-600">Peterson-KFF, 2023, https://www.healthsystemtracker.org/brief/the-burden-of-medical-debt-in-the-united-states/.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-bold">Himmelstein, David U., et al. Medical Bankruptcy in the United States, 2023: Still Common, Still Dangerous.</p>
              <p className="text-gray-600">National Bureau of Economic Research. Working Paper No. 30982, 2023, https://www.nber.org/papers/w30982.</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-bold">Johns Hopkins University. Hospital Debt Collection Practices Report.</p>
              <p className="text-gray-600">Bloomberg School of Public Health, 2022, https://publichealth.jhu.edu/2022/nonprofit-hospitals-sue-patients.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <p className="font-bold">Kaiser Family Foundation Employer Health Benefits Survey: 2023 Summary of Findings.</p>
              <p className="text-gray-600">KFF, 2023, https://www.kff.org/health-costs/report/2023-employer-health-benefits-survey/.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <p className="font-bold">Organisation for Economic Co-operation and Development. Health at a Glance 2023: OECD Indicators.</p>
              <p className="text-gray-600">OECD Publishing, 2023, https://www.oecd.org/health/health-at-a-glance/.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <p className="font-bold">Partnership for America's Health Care Future. Press Release: On the Future of Health Reform.</p>
              <p className="text-gray-600">2019, https://americashealthcarefuture.org.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-bold">World Index of Healthcare Innovation. 2024 Report.</p>
              <p className="text-gray-600">Foundation for Research on Equal Opportunity, 2024, https://freopp.org/world-index-of-healthcare-innovation-2024-7d0e1a6e44a6.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6">Data Visualizations & Charts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Key Metrics Dashboard</h4>
              <ul className="space-y-2">
                <li>• U.S. vs. OECD spending comparison</li>
                <li>• Administrative waste breakdown</li>
                <li>• Maternal mortality disparities</li>
                <li>• Prescription drug price analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Research Methodology</h4>
              <p className="text-sm">This project synthesizes data from peer-reviewed studies, government reports, and international health organizations. All charts reflect the most recent available data (2022-2024).</p>
            </div>
          </div>
        </section>
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
          <Route path="/opposition" element={<Opposition />} />
          <Route path="/repercussions" element={<Repercussions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Introduction />} />
        </Routes>

        <footer className="border-t bg-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Healthcare Justice Project</h4>
                <p className="text-sm text-gray-600">A research and advocacy initiative documenting America's healthcare crisis and advocating for evidence-based reform.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Research Team</h4>
                <p className="text-sm text-gray-600">AJ James - Project Lead<br/>Professor Warner - Faculty Advisor<br/>English 102 - Fall 2025</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Citation</h4>
                <p className="text-sm text-gray-600">James, AJ. "The Death of Care: How Profit Motives Corrupted American Healthcare." English 102, November 8, 2025.</p>
              </div>
            </div>
            <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
              © 2025 Healthcare Justice Project. This site is for educational purposes and based on peer-reviewed research.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
