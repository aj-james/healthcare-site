

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../index.css"; // Tailwind import

// --- Layout Components ---
const Nav = () => (
  <nav className="w-full shadow bg-white">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold">HC</div>
        <div>
          <Link to="/" className="font-semibold text-lg text-sky-700">FreeCare Project</Link>
          <div className="text-xs text-gray-500">Toward Universal Healthcare</div>
        </div>
      </div>

      <div className="hidden md:flex gap-4 text-sm">
        <Link to="/">Introduction</Link>
        <Link to="/history">History</Link>
        <Link to="/extent">Extent</Link>
        <Link to="/repercussions">Repercussions</Link>
        <Link to="/fixes">Fixes</Link>
        <Link to="/about">Our Org</Link>
        <Link to="/resources">MLA Resources</Link>
      </div>
    </div>
  </nav>
);

const Hero = ({ title, subtitle }) => (
  <header className="bg-sky-50 py-10 border-b">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-sky-800">{title}</h1>
      <p className="mt-3 text-gray-700 text-lg">{subtitle}</p>
    </div>
  </header>
);

// --- Placeholder Pages (Content will be re-added after Tailwind loads correctly) ---
function Introduction() {
  return (
    <main>
      <Hero title="Introduction" subtitle="The moral and structural crisis of American healthcare." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>This is where the full introduction content will go once Tailwind is verified working.</p>
      </div>
    </main>
  );
}

function History() {
  return (
    <main>
      <Hero title="History" subtitle="How the system was built." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">History</h2>
      </div>
    </main>
  );
}

function Extent() {
  return (
    <main>
      <Hero title="Extent" subtitle="Scope of the crisis." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Extent of the Problem</h2>
      </div>
    </main>
  );
}

function Repercussions() {
  return (
    <main>
      <Hero title="Repercussions" subtitle="Human and economic consequences." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">Repercussions</h2>
      </div>
    </main>
  );
}

function Fixes() {
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
            "Adopt a universal financing model (single-payer or public option with strong regulation)",
            "Unify benefit design to eliminate underinsurance",
            "Expand primary care and public health investment",
            "Tackle racial inequities via targeted funding and accountability",
          ]}
        />

        <h3 className="text-lg font-semibold mt-8">Administrative Waste Comparison</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={adminWaste}>
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="waste" fill="#10b981" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold">Embedded: How Universal Healthcare Works</h4>
            <div className="aspect-video rounded overflow-hidden mt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pZHiIGFLN8Y?si=X9PO0KTGCSQreiAm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Embedded: Why the U.S. Model Fails</h4>
            <div className="aspect-video rounded overflow-hidden mt-2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/u9x4cRWqPPM?si=lBZKbbR4kA5_9Fe9"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Embedded: International Comparison</h4>
          <div className="aspect-video rounded overflow-hidden mt-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BytzrjEfyfA?si=eeoGyF0oS2tzvMg7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
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
      <Hero title="About Us" subtitle="Mission and goals." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">About the Organization</h2>
      </div>
    </main>
  );
}

function Resources() {
  return (
    <main>
      <Hero title="Resources" subtitle="MLA citations and documents." />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold">MLA Bibliography</h2>
      </div>
    </main>
  );
}

// --- MAIN ROUTER ---
export default function HealthcareSite() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/history" element={<History />} />
        <Route path="/extent" element={<Extent />} />
        <Route path="/repercussions" element={<Repercussions />} />
        <Route path="/fixes" element={<Fixes />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}
