import { ArrowUpRight, Database, Layers3, ShieldAlert, ShoppingBag } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    icon: ShieldAlert,
    index: "01",
    title: "Final project — IDS/IPS lab",
    text: "Designed a virtualized banking environment with pfSense, Suricata, Active Directory, and OpenVPN. Nmap scans and Hydra attacks were detected and blocked in IPS mode.",
    tags: ["Suricata", "pfSense", "AD / VPN"],
    accent: "cyan",
    report: true,
  },
  {
    icon: ShoppingBag,
    index: "02",
    title: "Store e-commerce",
    text: "Built an e-commerce site with HTML, CSS, JavaScript, and PHP, then explored an advanced Magento version.",
    tags: ["PHP", "JavaScript", "Magento"],
    accent: "violet",
  },
  {
    icon: Database,
    index: "03",
    title: "Bank accounts",
    text: "A small bank-account management project built with Spring Boot to strengthen backend fundamentals.",
    tags: ["Java", "Spring Boot", "SQL"],
    accent: "lime",
  },
  {
    icon: Layers3,
    index: "04",
    title: "Network services & apps",
    text: "Set up Samba file sharing and developed a teacher-management app with Flutter and Flask.",
    tags: ["Samba", "Flutter", "Flask"],
    accent: "orange",
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal>
          <div className="projects-heading">
            <SectionHeading
              eyebrow="Selected projects"
              title="Apply, test, improve."
              description="Academic projects that reflect my interest in real-world environments and security challenges."
            />
            <div className="projects-heading-actions">
              <span className="project-count">04 PROJECTS</span>
              <a className="github-link" href="/documents/RPFE.pdf" target="_blank" rel="noreferrer">Read final project report <ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
          </div>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal delay={index * 0.08} key={project.index}>
                <article className={`project-card ${project.accent}`}>
                  <div className="project-card-top">
                    <span className="project-index">{project.index}</span>
                    <span className="project-icon"><Icon aria-hidden="true" size={23} strokeWidth={1.7} /></span>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                  <div className="project-card-bottom">
                    <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    {project.report ? (
                      <a className="project-report" href="/documents/RPFE.pdf" target="_blank" rel="noreferrer">Report <ArrowUpRight aria-hidden="true" size={15} /></a>
                    ) : (
                      <span className="project-arrow"><ArrowUpRight aria-hidden="true" size={18} /></span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
