import { Building2, GraduationCap } from "lucide-react";
import Image from "next/image";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Learning through real work."
            description="Focused academic training, complemented by a first immersion in a security team."
          />
        </Reveal>
        <div className="timeline">
          <Reveal delay={0.05}>
            <article className="timeline-item featured-timeline">
              <div className="timeline-date">2025 — 2026</div>
              <div className="timeline-dot"><Building2 aria-hidden="true" size={17} /></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-title-brand">
                    <Image alt="Banque Nationale de Mauritanie" className="timeline-logo timeline-logo-bnm" height={58} src="/images/brands/bnm.png" width={58} />
                    <div><p className="timeline-tag">EXPERIENCE</p><h3>Academic internship · Security department</h3></div>
                  </div>
                  <span className="timeline-company">BNM · 1 month</span>
                </div>
                <p>Contributed to administering and monitoring information-security solutions at the National Bank of Mauritania.</p>
                <ul className="timeline-points">
                  <li>Configured and managed FortiGate firewalls.</li>
                  <li>Deployed and validated the ESET XDR agent on more than 80 workstations.</li>
                  <li>Diagnosed DNS and connectivity incidents to support network security.</li>
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.13}>
            <article className="timeline-item">
              <div className="timeline-date">2025 — 2026</div>
              <div className="timeline-dot"><GraduationCap aria-hidden="true" size={17} /></div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div className="timeline-title-brand">
                    <Image alt="Université de Nouakchott Al Asriya" className="timeline-logo" height={45} src="/images/brands/una.png" width={50} />
                    <div><p className="timeline-tag">EDUCATION</p><h3>Third-year degree — Development & administration</h3></div>
                  </div>
                  <span className="timeline-company">In progress</span>
                </div>
                <p>Development, intranet and internet administration · Faculty of Science and Technology, University of Nouakchott Al Asriya.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
