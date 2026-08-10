import { Code2, Radar, Server, Waypoints } from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const groups = [
  { icon: Radar, title: "Cybersecurity", skills: ["Kali Linux", "pfSense", "Suricata", "FortiGate", "ESET XDR"] },
  { icon: Waypoints, title: "Systems & networks", skills: ["Active Directory", "OpenVPN", "Routing", "VLANs", "VirtualBox"] },
  { icon: Code2, title: "Development", skills: ["Python", "Java", "HTML / CSS / JS", "PHP", "SQL"] },
  { icon: Server, title: "Tools & frameworks", skills: ["Nmap", "Hydra", "Wireshark", "Spring Boot", "Flask"] },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container skills-layout">
        <Reveal className="skills-intro">
          <SectionHeading
            eyebrow="Skills"
            title="Strong technical foundations."
            description="A constantly evolving toolkit for more efficient and better protected systems."
          />
          <div className="language-list">
            <span>AR <b>•</b> Native</span>
            <span>FR <b>•</b> Intermediate</span>
            <span>EN <b>•</b> Intermediate</span>
          </div>
        </Reveal>
        <div className="skill-groups">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal delay={index * 0.08} key={group.title}>
                <article className="skill-group">
                  <div className="skill-group-heading">
                    <span><Icon aria-hidden="true" size={19} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
