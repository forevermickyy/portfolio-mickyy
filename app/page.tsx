import Image from "next/image";
import ChapterNav from "./chapter-nav";
import TechOrbit from "./tech-orbit";

const projects = [
  {
    number: "01",
    name: "MikeAI",
    category: "AI learning assistant · Web app",
    description:
      "An AI-powered learning workspace for creating quizzes, automating research, and turning ideas into prompts.",
    href: "https://github.com/forevermickyy/ai-learning-assistant",
    image: "/project1.png",
    imageAlt: "MikeAI learning assistant website landing page",
  },
  {
    number: "02",
    name: "Ecommerce Site",
    category: "Ecommerce · Online marketplace",
    description:
      "An online store for browsing and buying phones and accessories, with product discovery and customer accounts.",
    href: "https://github.com/forevermickyy/E-commerce",
    image: "/project3.png",
    imageAlt: "Omar Phones & Accessories ecommerce website",
  },
  {
    number: "03",
    name: "DeFi",
    category: "Cryptocurrency · Exchange platform",
    description:
      "A crypto exchange experience for exploring, buying, selling, and tracking digital currencies.",
    href: "https://github.com/forevermickyy/crypto-yt",
    image: "/project4.png",
    imageAlt: "DeFi cryptocurrency exchange website",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#chapter-0" aria-label="Mickyy, home">
          mickyy<span className="wordmark-dot">.</span>
        </a>
        <span className="header-note">Junior software engineer</span>
        <a className="header-link" href="#chapter-4">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <ChapterNav />

      <main>
        <section className="hero section-wrap" id="chapter-0">
          <div className="eyebrow"><span className="status-dot" /> Building full-stack software</div>
          <div className="hero-content">
            <div className="hero-heading">
              <p className="section-kicker">Junior software engineer · Accra, Ghana</p>
              <h1>
                Hi, I&apos;m
                <br />
                <span>Michael.</span>
              </h1>
            </div>
            <div className="hero-aside">
              <p className="hero-intro">
                I build full-stack websites, applications, and systems—from
                the interface people use to the logic that powers it. I enjoy
                turning practical ideas into useful software and learning
                something new with every project.
              </p>
              <a className="text-link" href="#chapter-2">
                A few things I&apos;ve made <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Full-stack developer</span>
            <span>React · TypeScript · Java</span>
            <a href="#chapter-1">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-ring orbit-ring-one" />
            <span className="orbit-ring orbit-ring-two" />
            <span className="orbit-spark">✳</span>
          </div>
        </section>

        <section className="about section-wrap" id="chapter-1">
          <div className="section-heading">
            <p className="section-kicker">01 / About &amp; skills</p>
            <span className="section-index">A junior engineer who likes to build</span>
          </div>
          <div className="about-grid">
            <div className="about-intro">
              <p className="about-overline">A little about how I work</p>
              <h2>
                I like to
                <br />
                make things
                <br />
                <span>work.</span>
              </h2>
              <div className="about-copy">
                <p>
                  I&apos;m a junior software engineer focused on building
                  full-stack websites, applications, and systems. I enjoy
                  working across the stack, from shaping an interface to
                  connecting it with the logic and data behind it.
                </p>
                <p>
                  My toolkit includes React, JavaScript, Next.js, TypeScript,
                  Java, and Python. I&apos;m always building, improving,
                  and learning through hands-on projects.
                </p>
              </div>
              <div className="about-socials">
                <a
                  className="text-link"
                  href="https://github.com/forevermickyy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/michael-quansah-94abb7278/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <TechOrbit />
          </div>
          <div className="about-footnote">
            <span>Curious by nature. Focused on the details.</span>
            <a href="#chapter-2">Selected projects <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="work section-wrap" id="chapter-2">
          <div className="section-heading">
            <p className="section-kicker">02 / Selected work</p>
            <span className="section-index">A handful of ideas, made real</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
                >
                  <div className="project-art">
                    <Image
                      className="project-image"
                      src={project.image}
                      alt={project.imageAlt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 620px) 86vw, (max-width: 900px) 38vw, 25vw"
                    />
                  </div>
                  <div className="project-meta">
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <span className="project-number">{project.number} ↗</span>
                    </div>
                    <p className="project-category">{project.category}</p>
                    <p className="project-description">{project.description}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <p className="work-note">
            A few things I&apos;ve built across learning, commerce, and finance.
            <a href="https://github.com/forevermickyy" target="_blank" rel="noopener noreferrer">
              Explore more on GitHub <span aria-hidden="true">↗</span>
            </a>
          </p>
        </section>

        <section className="approach section-wrap" id="chapter-3">
          <div className="section-heading">
            <p className="section-kicker">03 / The approach</p>
            <span className="section-index">Websites, applications, and systems</span>
          </div>
          <div className="approach-grid">
            <h2>
              Build with
              <br />
              purpose<span className="accent">.</span>
              <br />
              Keep
              <br />
              learning<span className="accent">.</span>
            </h2>
            <div className="approach-list">
              <article className="approach-item">
                <span className="approach-number">01</span>
                <div>
                  <h3>Understand the problem</h3>
                  <p>Get clear on the people, purpose, and practical needs before choosing how to build.</p>
                </div>
              </article>
              <article className="approach-item">
                <span className="approach-number">02</span>
                <div>
                  <h3>Build across the stack</h3>
                  <p>Connect thoughtful interfaces with reliable application logic and systems.</p>
                </div>
              </article>
              <article className="approach-item">
                <span className="approach-number">03</span>
                <div>
                  <h3>Keep getting better</h3>
                  <p>Learn by making, improve the details, and take on new technical challenges.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="chapter-4">
          <div className="section-heading">
            <p className="section-kicker">04 / Your turn</p>
            <span className="section-index">Have something in mind?</span>
          </div>
          <div className="contact-main">
            <h2>
              Let&apos;s make
              <br />
              it <span className="contact-italic">happen.</span>
            </h2>
            <a className="contact-button" href="mailto:mmquansah01@gmail.com">
              <span>Tell me about it</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-bottom">
            <ul>
              <li><a href="https://wa.me/233207333553" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:mmquansah01@gmail.com">mmquansah01@gmail.com</a></li>
            </ul>
            <span>Good things start with a conversation.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#chapter-0">
          mickyy<span className="wordmark-dot">.</span>
        </a>
        <span>Made with care, wherever you are.</span>
        <a href="#chapter-0">Back to top ↑</a>
      </footer>
    </>
  );
}
