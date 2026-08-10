import { ArrowUpRight, Copy, Mail, MapPin, Phone } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-main">
              <p className="eyebrow"><span /> CONTACT</p>
              <h2>Let&apos;s build something <em>strong.</em></h2>
              <p>Looking for a motivated junior profile for an internship in systems, networks, or cybersecurity? Let&apos;s talk.</p>
              <a className="contact-email" href="mailto:abdelwedoudmohamedsalem@gmail.com">
                abdelwedoudmohamedsalem@gmail.com <ArrowUpRight aria-hidden="true" size={21} />
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:abdelwedoudmohamedsalem@gmail.com"><Mail aria-hidden="true" size={18} /><span><small>EMAIL</small>Send a message</span></a>
              <a href="tel:+22238634664"><Phone aria-hidden="true" size={18} /><span><small>PHONE</small>+222 38 63 46 64</span></a>
              <div><MapPin aria-hidden="true" size={18} /><span><small>LOCATION</small>Nouakchott, Mauritania</span></div>
              <a className="contact-cv" href="/cv/resume.pdf" target="_blank" rel="noreferrer"><Copy aria-hidden="true" size={17} /> View my résumé</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
