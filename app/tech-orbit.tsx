"use client";

import { useState } from "react";

const skills = [
  { name: "React", note: "Building component-driven interfaces." },
  { name: "JavaScript", note: "Bringing useful ideas to life on the web." },
  { name: "Next.js", note: "Creating full-stack web applications." },
  { name: "TypeScript", note: "Making application code easier to trust." },
  { name: "Java", note: "Developing applications and backend systems." },
  { name: "Python", note: "Exploring scripting, tools, and automation." },
];

export default function TechOrbit() {
  const [activeSkill, setActiveSkill] = useState(0);

  const moveOrbit = (direction: number) => {
    setActiveSkill((current) => (current + direction + skills.length) % skills.length);
  };

  return (
    <div className="tech-orbit" aria-label="Interactive technology orbit">
      <div className="tech-orbit-graphic">
        <svg
          className="tech-orbit-rings"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="145" />
          <circle cx="200" cy="200" r="100" />
          <path d="M55 200h290M200 55v290" />
          <circle className="tech-orbit-spark" cx="200" cy="55" r="4" />
        </svg>
        <div className="tech-orbit-center" aria-hidden="true">
          <span>&lt;/&gt;</span>
          <small>MY TOOLKIT</small>
        </div>
        {skills.map((skill, index) => {
          const angle = (index - activeSkill - 1) * (Math.PI / 3);
          const isActive = activeSkill === index;

          return (
            <button
              className={`tech-orbit-node${isActive ? " is-active" : ""}`}
              key={skill.name}
              type="button"
              style={{
                left: `${(50 + Math.cos(angle) * 36.25).toFixed(3)}%`,
                top: `${(50 + Math.sin(angle) * 36.25).toFixed(3)}%`,
              }}
              aria-pressed={isActive}
              onClick={() => setActiveSkill(index)}
            >
              {skill.name}
            </button>
          );
        })}
      </div>
      <div className="tech-orbit-caption" aria-live="polite">
        <div>
          <span className="tech-orbit-label">SELECTED TOOL</span>
          <h3>{skills[activeSkill].name}</h3>
          <p>{skills[activeSkill].note}</p>
        </div>
        <div className="tech-orbit-controls">
          <button
            type="button"
            aria-label="Previous technology"
            onClick={() => moveOrbit(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next technology"
            onClick={() => moveOrbit(1)}
          >
            →
          </button>
        </div>
      </div>
      <p className="tech-orbit-hint">Choose a technology to rotate the orbit</p>
    </div>
  );
}
