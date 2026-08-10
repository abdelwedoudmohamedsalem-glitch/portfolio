import { Binary, Network, ShieldCheck } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const strengths = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Secure",
    text: "Understand risks and help protect systems and network environments.",
  },
  {
    icon: Network,
    number: "02",
    title: "Connect",
    text: "Build reliable infrastructure: addressing, routing, VLANs, and network services.",
  },
  {
    icon: Binary,
    number: "03",
    title: "Build",
    text: "Develop useful tools and applications with a pragmatic, structured approach.",
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Curious by nature. Methodical by design."
            description="Passionate about cybersecurity, I am developing a hybrid profile at the intersection of infrastructure, software development, and network defense. My goal is to make every system more reliable, one environment at a time."
          />
        </Reveal>
        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Reveal delay={index * 0.1} key={strength.number}>
                <article className="strength-card">
                  <div className="strength-card-top">
                    <span>{strength.number}</span>
                    <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="about-signal">
            <span>CURRENTLY</span>
            <p>I am looking for an internship to deepen my skills in systems and network security in a stimulating environment.</p>
            <a href="#contact">Let&apos;s talk <span>↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
