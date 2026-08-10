"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, FileText, Mail } from "lucide-react";

const heroMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="21" height="21">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.44 8.02h4.61V24H.44V8.02ZM8 8.02h4.42v2.18h.06c.62-1.17 2.12-2.4 4.36-2.4C21.5 7.8 22.36 10.86 22.36 14.84V24h-4.6v-8.13c0-1.94-.04-4.43-2.7-4.43-2.7 0-3.11 2.1-3.11 4.29V24H7.34V8.02H8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" width="21" height="21">
      <path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.68c1.02 0 2.04.14 3 .41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.89.13 3.19.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.09.81 2.2v3.26c0 .32.22.7.83.58A12 12 0 0 0 12 0Z" />
    </svg>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero section-grid" id="home">
      <div className="hero-noise" />
      <div className="container hero-layout">
        <motion.div
          animate="visible"
          className="hero-content"
          initial={false}
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          variants={reduceMotion ? undefined : { hidden: {}, visible: {} }}
        >
          <motion.div className="availability" variants={heroMotion}>
            <span className="availability-dot" /> Available for an internship
          </motion.div>
          <motion.p className="hero-kicker" variants={heroMotion}>
            CYBERSECURITY · SYSTEMS · NETWORKS
          </motion.p>
          <motion.h1 variants={heroMotion}>
            Mohamed Salem <br />
            <em>Abdel Wedoud</em>
          </motion.h1>
          <motion.p className="hero-summary" variants={heroMotion}>
            Passionate about cybersecurity, I design and test network security
            environments. My final-year project uses Suricata and pfSense to
            detect and block intrusions in a virtualized banking laboratory.
          </motion.p>
          <motion.div className="hero-actions" variants={heroMotion}>
            <a className="button button-primary" href="#projects">
              View my projects <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-ghost" href="#contact">
              Get in touch <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </motion.div>
          <motion.div className="hero-footer" variants={heroMotion}>
            <div className="hero-socials" aria-label="Contact links">
              <a aria-label="Envoyer un email" href="mailto:abdelwedoudmohamedsalem@gmail.com">
                <Mail aria-hidden="true" size={21} />
              </a>
              <a aria-label="Consulter le CV" href="/cv/resume.pdf" target="_blank" rel="noreferrer">
                <FileText aria-hidden="true" size={20} />
              </a>
              <a aria-label="Profil LinkedIn de Mohamed Salem Abdel Wedoud" href="https://www.linkedin.com/in/mohamed-salem-abdel-wedoud-a7bb9736b/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              <a aria-label="Profil GitHub de Mohamed Salem Abdel Wedoud" href="https://github.com/abdelwedoudmohamedsalem-glitch" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
          className="hero-portrait-wrap"
          initial={false}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1], y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <Image
              alt="Portrait of Mohamed Salem Abdel Wedoud"
              className="portrait"
              height={640}
              priority
              sizes="(max-width: 760px) 280px, 430px"
              src="/images/profile/profile.jpeg"
              width={512}
            />
          </div>
          <div className="portrait-label" aria-label="Cybersecurity enthusiast">
            <span className="label-icon"><Check aria-hidden="true" size={14} /></span>
            <span><strong>Cybersecurity enthusiast</strong><small>Detect. Defend. Improve.</small></span>
          </div>
          <div className="portrait-index">01 <span>/</span> 05</div>
        </motion.div>
      </div>
      <div className="hero-ticker" aria-hidden="true">
        <div>
          <span>NETWORK SECURITY</span><b>✦</b><span>SYSTEMS ADMINISTRATION</span><b>✦</b><span>WEB DEVELOPMENT</span><b>✦</b><span>NETWORK SECURITY</span><b>✦</b><span>SYSTEMS ADMINISTRATION</span><b>✦</b>
        </div>
      </div>
    </section>
  );
}
