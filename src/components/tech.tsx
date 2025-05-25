import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef, RefObject } from "react";

function getSkillLevel(skill: number): string {
  if (skill >= 90) return "Expert";
  if (skill >= 75) return "Advanced";
  if (skill > 50) return "Intermediate";
  if (skill >= 25) return "Basic";
  return "Beginner";
}
interface TechIconProps {
  src: string;
  alt: string;
  label: string;
  skill: number;
  level?: string;
  srcDark?: string;
  visible?: boolean; 
}

export function TechIcon({
  src,
  alt,
  label,
  skill,
  level,
  srcDark,
  visible = true, 
}: TechIconProps) {
  const [loaded, setLoaded] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const skillLevel = level || getSkillLevel(skill);

  const [effectiveSrc, setEffectiveSrc] = useState(src);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      setShowSkill(true);
    } else {
      setShowSkill(false);
    }
  }, [visible]);

  useEffect(() => {
    let start: number | null = null;
    const duration = 400;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressPercentage = Math.min((elapsed / duration) * skill, skill);
      setProgress(progressPercentage);

      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (showSkill) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setProgress(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showSkill, skill]);

  useEffect(() => {
    if (typeof window === "undefined" || !document.documentElement) {
      setEffectiveSrc(src);
      return;
    }

    const updateSourceBasedOnDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setEffectiveSrc(isDark && srcDark ? srcDark : src);
    };

    updateSourceBasedOnDarkMode();

    const observer = new MutationObserver(() => {
      updateSourceBasedOnDarkMode();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [src, srcDark]);

  return (
    <div
      ref={iconRef}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-16 h-16 mb-2 relative">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        )}
        <img
          src={effectiveSrc}
          alt={alt}
          className={`w-16 h-16 object-contain rounded-full transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            console.error(`Failed to load image: ${effectiveSrc}`);
            setEffectiveSrc("/tech/skill-icons--github-dark.svg");
          }}
        />
      </div>
      <span className="mt-2 ">{label}</span>

      <div
        className={`overflow-hidden transition-all duration-2000 ease-in-out ${
          showSkill ? "max-h-20 mt-4" : "max-h-0"
        } w-32`}
      >
        <div className="bg-gray-300 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-blue-500 dark:text-blue-400 pt-2">
          {skillLevel}
        </div>
      </div>
    </div>
  );
}

function useSectionVisible<T extends HTMLElement>(threshold = 0.5): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return [ref, visible];
}

export function Tools() {
  const { t } = useTranslation("tech");

  const [frontendRef, frontendVisible] = useSectionVisible<HTMLDivElement>(0.5);
  const [backendRef, backendVisible] = useSectionVisible<HTMLDivElement>(0.5);
  const [otherRef, otherVisible] = useSectionVisible<HTMLDivElement>(0.5);

  return (
    <section id="tools" className="py-16 items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">{t("tech.title")}</h2>
        <p className="text-lg mb-10 lg:mx-52">
         {t("tech.description")}
        </p>

        <p className="text-lg  mb-8">{t("tech.frontend")}</p>
        <div
          ref={frontendRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <TechIcon
            src="/tech/skill-icons--react-dark.svg"
            alt="React"
            label="React js/native"
            skill={60}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--angular-dark.svg"
            alt="Angular"
            label="Angular"
            skill={65}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--flutter-dark.svg"
            alt="Flutter"
            label="Flutter"
            skill={35}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--sass.svg"
            alt="Scss"
            label="Scss"
            skill={60}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--javascript.svg"
            alt="Javascript"
            label="Javascript"
            skill={78}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--tailwindcss-dark.svg"
            alt="Tailwind"
            label="Tailwind css"
            skill={80}
            visible={frontendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--typescript.svg"
            alt="Typescript"
            label="Typescript"
            skill={80}
            visible={frontendVisible}
          />
        </div>

        <p className="text-lg  mb-8">{t("tech.backend")}</p>
        <div
          ref={backendRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
        >
          <TechIcon
            src="/tech/skill-icons--laravel-dark.svg"
            alt="Laravel"
            label="Laravel PHP"
            skill={55}
            visible={backendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--mysql-dark.svg"
            alt="MySQL"
            label="MySQL"
            skill={80}
            visible={backendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--java-dark.svg"
            alt="Java"
            label="Java"
            skill={65}
            visible={backendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--dotnet.svg"
            alt="DotNet"
            label="DotNet"
            skill={80}
            visible={backendVisible}
          />
          <TechIcon
            src="/tech/skill-icons--nodejs-dark.svg"
            alt="Nodejs"
            label="Nodejs"
            skill={85}
            visible={backendVisible}
          />
        </div>

        <p className="text-lg  mb-8">{t("tech.other")}</p>
        <div
          ref={otherRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          <TechIcon
            src="/tech/skill-icons--github-dark.svg"
            srcDark="/tech/skill-icons--github.svg"
            alt="Git"
            label="Git"
            skill={75}
            visible={otherVisible}
          />
          <TechIcon
            src="/tech/skill-icons--docker.svg"
            alt="Docker"
            label="Docker"
            skill={65}
            visible={otherVisible}
          />
        </div>
      </div>
    </section>
  );
}
