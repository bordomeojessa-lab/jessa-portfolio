const PHOTO_URL = "/jessa-photo.png";
const CV_URL = "/Jessa_Bordomeo_CV_2026-05-14.pdf";
const PRIMARY_EMAIL = "bordomeojessa@gmail.com";
const SECONDARY_EMAIL = "bordomeojessa@outlook.com";
const PHONE_NUMBER = "+63 976 001 1699";
const PHONE_LINK = "+639760011699";
const MAIL_SUBJECT = "Portfolio Inquiry - Jessa Bordomeo";
const MAIL_BODY = "Hi Jessa,%0D%0A%0D%0AI saw your portfolio and would like to connect with you.%0D%0A%0D%0AThank you.";
const MAILTO_LINK = `mailto:${PRIMARY_EMAIL}?cc=${SECONDARY_EMAIL}&subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${MAIL_BODY}`;

const metrics = [
  {
    value: "9+",
    label: "Years Professional Experience\nacross IT, PM & HR",
    icon: "people",
  },
  {
    value: "BA/PM",
    label: "IT foundation in Business Analysis\nand Project Management",
    icon: "growth",
  },
  {
    value: "WMA",
    label: "Current Workforce Management\n& Analytics Head",
    icon: "check",
  },
  {
    value: "100%",
    label: "Data, Systems & People\nCentered Impact",
    icon: "target",
  },
];

const projects = [
  {
    title: "Workforce Planning Dashboard",
    tag: "Analytics & Planning",
    tagStyle: "bg-emerald-100 text-emerald-800",
    description:
      "Workforce visibility, headcount stewardship, request pipelines, forecasting assumptions, and governance monitoring in one strategic dashboard.",
    bullets: ["Headcount analytics", "Request pipeline visibility", "Workforce insights", "Scenario assumptions"],
    mockup: "dashboard",
  },
  {
    title: "Attendance Management System",
    tag: "Systems & Automation",
    tagStyle: "bg-indigo-100 text-indigo-800",
    description:
      "End-to-end attendance and request management with approval workflows, role-based access, time edits, leave, OT, WFH, and real-time reporting.",
    bullets: ["Role-based user access", "Approval routing engine", "Leave, OT, WFH workflows", "Automated reporting"],
    mockup: "attendance",
  },
  {
    title: "Electronic Hiring Request Workflow",
    tag: "Workflow & Governance",
    tagStyle: "bg-orange-100 text-orange-800",
    description:
      "Digital hiring request process with automated routing, governance controls, approval visibility, budget-path considerations, and audit tracking.",
    bullets: ["Automated routing logic", "Governance approvals", "Request tracking", "Audit and status visibility"],
    mockup: "workflow",
  },
  {
    title: "Workforce Schedule Tracker",
    tag: "Operations & Coordination",
    tagStyle: "bg-sky-100 text-sky-800",
    description:
      "Hybrid work scheduling and calendar-friendly coordination for team visibility, workforce coverage, and operational alignment.",
    bullets: ["Hybrid schedule visibility", "WFH coordination", "Calendar integration", "Team availability tracking"],
    mockup: "schedule",
  },
];

const tools = [
  { name: "Google Workspace", icon: "G" },
  { name: "Google Apps Script", icon: "⚡" },
  { name: "Google Sheets", icon: "▦" },
  { name: "Data Visualization", icon: "◔" },
  { name: "HTML / CSS / JavaScript", icon: "5" },
  { name: "Workflow Automation", icon: "↻" },
  { name: "Dashboard Design", icon: "▣" },
  { name: "Process Design", icon: "◇" },
  { name: "Project Management", icon: "☑" },
  { name: "Reporting & Analytics", icon: "↗" },
];

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 10.5 12 15m0 0 4.5-4.5M12 15V3" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.37-.277.527-.752.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function IconBubble({ type }) {
  const common = "flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-3xl";

  const icons = {
    people: "👥",
    growth: "📈",
    check: "☑",
    target: "◎",
  };

  const color = type === "target" ? "bg-orange-50 text-orange-700" : "bg-emerald-50 text-emerald-700";

  return <div className={`${common} ${color}`}>{icons[type]}</div>;
}

function MockDashboard() {
  return (
    <div className="h-44 overflow-hidden rounded-t-2xl bg-[#08243E] p-4 text-white">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2 w-32 rounded-full bg-white/70" />
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
          <div className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["935", "286", "319", "58"].map((item) => (
          <div key={item} className="rounded-lg bg-white/10 p-2">
            <div className="text-sm font-bold">{item}</div>
            <div className="mt-1 h-1 w-10 rounded-full bg-teal-300" />
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-[1fr_0.8fr] gap-3">
        <div className="rounded-xl bg-white/10 p-3">
          <div className="mb-3 h-2 w-20 rounded-full bg-white/40" />
          <div className="flex h-20 items-end gap-1">
            {[35, 50, 42, 70, 58, 82, 64, 90].map((height, index) => (
              <div key={index} className="w-full rounded-t bg-blue-400" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white/10 p-3">
          <div className="mb-3 h-2 w-16 rounded-full bg-white/40" />
          <div className="space-y-2">
            {[70, 48, 88, 58].map((width, index) => (
              <div key={index} className="h-2 rounded-full bg-emerald-300" style={{ width: `${width}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockAttendance() {
  return (
    <div className="h-44 overflow-hidden rounded-t-2xl bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-32 rounded-full bg-slate-800" />
          <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
        </div>
        <div className="h-8 w-8 rounded-full bg-blue-100" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Present", "33%"],
          ["WFH", "36%"],
          ["OT", "8.5"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
            <div className="h-2 w-10 rounded-full bg-emerald-200" />
            <div className="mt-3 text-sm font-bold text-slate-800">{value}</div>
            <div className="mt-1 text-[10px] text-slate-400">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Requests", "Overtime", "Corrections"].map((item) => (
          <div key={item} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
            <div className="h-2 w-12 rounded-full bg-blue-200" />
            <div className="mt-3 h-3 w-16 rounded-full bg-slate-200" />
            <div className="mt-2 text-[10px] text-slate-400">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockWorkflow() {
  return (
    <div className="h-44 overflow-hidden rounded-t-2xl bg-white p-4">
      <div className="mb-4 h-3 w-36 rounded-full bg-slate-800" />
      <div className="grid grid-cols-4 gap-3 text-center text-[9px] text-slate-500">
        {["Submitted", "Review", "Approval", "Budget"].map((item, index) => (
          <div key={item}>
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-400">
              {index + 1}
            </div>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className="mx-auto my-4 h-px w-4/5 bg-slate-200" />
      <div className="grid grid-cols-3 gap-3 text-center text-[9px] text-slate-500">
        {["Clarify", "Route", "Approve"].map((item) => (
          <div key={item}>
            <div className="mx-auto mb-2 h-7 w-16 rounded-lg border border-slate-200 bg-slate-50" />
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockSchedule() {
  return (
    <div className="h-44 overflow-hidden rounded-t-2xl bg-slate-50">
      <div className="flex h-full">
        <div className="w-16 bg-[#08243E] p-3">
          <div className="mb-4 h-3 w-8 rounded-full bg-white/60" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-2 w-9 rounded-full bg-white/20" />
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-slate-800" />
            <div className="h-6 w-20 rounded-full border border-slate-100 bg-white" />
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["M", "T", "W", "T", "F"].map((day) => (
              <div key={day} className="text-center text-[9px] text-slate-400">
                {day}
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-2">
            {["bg-blue-200", "bg-emerald-200", "bg-orange-200", "bg-purple-200"].map((color, index) => (
              <div key={color} className="grid grid-cols-5 gap-1">
                {[0, 1, 2, 3, 4].map((item) => (
                  <div key={item} className={`h-5 rounded ${item === index ? color : "border border-slate-100 bg-white"}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMockup({ type }) {
  if (type === "dashboard") return <MockDashboard />;
  if (type === "attendance") return <MockAttendance />;
  if (type === "workflow") return <MockWorkflow />;
  return <MockSchedule />;
}

function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <ProjectMockup type={project.mockup} />
      <div className="p-5">
        <h3 className="text-xl font-bold leading-tight text-slate-950">{project.title}</h3>
        <div className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-medium ${project.tagStyle}`}>{project.tag}</div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-700">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-emerald-700">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-slate-950">
      <section className="relative overflow-hidden bg-[#061B2C] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,183,77,0.18),transparent_26%),radial-gradient(circle_at_12%_12%,rgba(67,188,205,0.16),transparent_24%)]" />
        <div className="absolute left-1/2 top-36 hidden h-64 w-64 -translate-x-1/2 rounded-full border border-white/5 md:block" />
        <div className="absolute left-[48%] top-36 hidden h-40 w-64 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.06))] md:block" />

        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <div className="flex min-w-0 shrink-0 items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/70 text-2xl font-bold text-amber-300">
                JB
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest">JESSA BORDOMEO</p>
                <p className="max-w-[260px] text-xs font-semibold leading-snug text-amber-300 sm:max-w-none">
                  Workforce Management & Analytics Head
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-sm font-medium text-white/90 lg:flex xl:gap-8">
              <a href="#work" className="hover:text-amber-300">Work</a>
              <a href="#systems" className="hover:text-amber-300">Systems</a>
              <a href="#about" className="hover:text-amber-300">About</a>
              <a href="#skills" className="hover:text-amber-300">Skills</a>
              <a href="#insights" className="hover:text-amber-300">Insights</a>
              <a href="#contact" className="hover:text-amber-300">Let’s Connect</a>
            </nav>

            <a
              href={CV_URL}
              download="Jessa_Bordomeo_CV_2026.pdf"
              className="hidden min-w-[150px] items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-amber-300/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
            >
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-28 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20">
          <div>
            <div className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              <span className="h-px w-10 bg-amber-300" />
              Workforce Strategy. Data. Systems. Impact.
            </div>

            <h1 className="text-6xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
              Hi, I’m <span className="text-amber-300">Jessa.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-2xl font-semibold leading-snug text-white md:text-3xl">
              I bridge IT project delivery and workforce strategy to build systems, dashboards, and insights that help organizations make better decisions.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              I started in the IT field as a Business Analyst and Project Manager, translating business needs into technical requirements, implementation plans, and process improvements. Today, as a Workforce Management and Analytics Head, I apply that same BA/PM discipline to workforce planning, dashboards, process automation, and staffing governance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Workforce Analytics", "Systems Development", "Process Automation", "Project Management", "Governance & Planning"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold shadow-sm backdrop-blur">
                  <span className="mr-2 text-amber-300">⌁</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img src={PHOTO_URL} alt="Jessa Bordomeo" className="h-[360px] w-full rounded-[1.25rem] object-cover object-top md:h-[470px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-14 max-w-7xl px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={metric.value} className={`flex items-center gap-6 p-8 ${index !== metrics.length - 1 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""}`}>
              <IconBubble type={metric.icon} />
              <div>
                <div className="text-3xl font-extrabold text-slate-950 lg:text-4xl">{metric.value}</div>
                <p className="mt-1 whitespace-pre-line text-sm leading-5 text-slate-600">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Systems I Design & Build</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Turning complex work into simple, scalable systems.
            </h2>
          </div>
          <a href="#systems" className="inline-flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-sm hover:shadow-md">
            View All Projects
            <ArrowRightIcon />
          </a>
        </div>

        <div id="systems" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto grid max-w-7xl gap-8 px-6 pb-8 lg:grid-cols-[1.25fr_0.85fr] lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">Tools & Technologies</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">The tools I use to build solutions</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {tools.map((tool) => (
              <div key={tool.name} className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl font-extrabold text-[#0B2740] shadow-sm">
                  {tool.icon}
                </div>
                <p className="text-xs font-semibold leading-4 text-slate-800">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="about" className="relative overflow-hidden rounded-3xl bg-[#08243E] p-8 text-white shadow-xl">
          <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-emerald-400/10" />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">How I Work</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            My approach is simple. People first. Data informed. Systems that last.
          </h2>

          <div className="mt-8 space-y-6">
            {[
              ["I listen & understand", "I start with the real problem, not the tool."],
              ["I design with purpose", "I create solutions that are practical, scalable, and user-friendly."],
              ["I deliver impact", "I focus on results that improve how people work and decide."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-amber-300">✦</div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50 text-3xl shadow-sm">☕</div>
              <div>
                <p className="max-w-3xl text-xl font-bold leading-snug text-slate-950 md:text-2xl">
                  I believe good systems empower people, and data tells the story we need to hear.
                </p>
                <div className="mt-5 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-2">
                  <a href={`tel:${PHONE_LINK}`} className="inline-flex items-center gap-2 hover:text-slate-950">
                    <PhoneIcon />
                    {PHONE_NUMBER}
                  </a>
                  <a href={`mailto:${PRIMARY_EMAIL}`} className="inline-flex items-center gap-2 hover:text-slate-950">
                    <MailIcon />
                    {PRIMARY_EMAIL}
                  </a>
                  <a href={`mailto:${SECONDARY_EMAIL}`} className="inline-flex items-center gap-2 hover:text-slate-950 sm:col-span-2">
                    <MailIcon />
                    {SECONDARY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div id="contact" className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <a href={MAILTO_LINK} className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#08243E] px-7 py-4 text-sm font-bold text-white shadow-sm hover:bg-[#061B2C]">
                Let’s Work Together
                <ArrowRightIcon />
              </a>
              <a href={CV_URL} download="Jessa_Bordomeo_CV_2026.pdf" className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-amber-300/70 bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-sm hover:shadow-md">
                Download CV
                <DownloadIcon />
              </a>
              <a href={`mailto:${PRIMARY_EMAIL}?cc=${SECONDARY_EMAIL}`} className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-sm hover:shadow-md">
                Email Me
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-400 lg:px-10">
        © 2026 Jessa Bordomeo. All rights reserved.
      </footer>
    </main>
  );
}
