"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "chapter-0", label: "Intro" },
  { id: "chapter-1", label: "About" },
  { id: "chapter-2", label: "Selected work" },
  { id: "chapter-3", label: "Approach" },
  { id: "chapter-4", label: "Contact" },
];

export default function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const updateActiveChapter = () => {
      const lastChapterId = chapters[chapters.length - 1].id;
      const lastChapter = document.getElementById(lastChapterId);
      const isAtPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (isAtPageBottom && lastChapter) {
        setActiveChapter(lastChapterId);
        return;
      }

      const currentChapter = [...chapters]
        .reverse()
        .find((chapter) => {
          const element = document.getElementById(chapter.id);
          return element && element.getBoundingClientRect().top <= window.innerHeight * 0.45;
        });

      if (currentChapter) {
        setActiveChapter(currentChapter.id);
      }
    };

    updateActiveChapter();
    window.addEventListener("scroll", updateActiveChapter, { passive: true });
    window.addEventListener("resize", updateActiveChapter);

    return () => {
      window.removeEventListener("scroll", updateActiveChapter);
      window.removeEventListener("resize", updateActiveChapter);
    };
  }, []);

  return (
    <nav className="chapter-nav" aria-label="Page sections">
      {chapters.map((chapter, index) => (
        <a
          className="chapter-link"
          href={`#${chapter.id}`}
          aria-label={`${String(index + 1).padStart(2, "0")} ${chapter.label}`}
          aria-current={activeChapter === chapter.id ? "location" : undefined}
          key={chapter.id}
        >
          <span className="chapter-line" />
          <span className="chapter-tooltip">{chapter.label}</span>
        </a>
      ))}
    </nav>
  );
}
