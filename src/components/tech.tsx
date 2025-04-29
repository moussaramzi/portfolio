import { useState, useEffect, useRef } from "react";

function getSkillLevel(skill: number): string {
  if (skill >= 90) return "Expert";
  if (skill >= 75) return "Advanced";
  if (skill > 50) return "Intermediate";
  if (skill >= 25) return "Basic";
  return "Beginner";
}

export function TechIcon({ src, alt, label, skill, level }: { src: string; alt: string; label: string; skill: number; level?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const skillLevel = level || getSkillLevel(skill);

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

  return (
    <div 
      className="flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setShowSkill(true)}
      onMouseLeave={() => setShowSkill(false)}
      onClick={() => setShowSkill((prev) => !prev)}
    >
      <div className="w-16 h-16 mb-2 relative">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse"></div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-16 h-16 object-contain rounded-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <span className="mt-2">{label}</span>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${showSkill ? "max-h-20 mt-4" : "max-h-0"} w-32`}
      >
        <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-blue-500 pt-2">
        {skillLevel}
        </div>
      
      </div>
    </div>
  );
}




export function Tools() {
    return (
      <section id="tools" className="py-16 text-white items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10">Tech title</h2>
  
          <p className="text-lg text-gray-400 mb-8">Frontend Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <TechIcon src="/tech/skill-icons--react-dark.svg" alt="React" label="React js/native" skill={90} />
            <TechIcon src="/tech/skill-icons--angular-dark.svg" alt="Angular" label="Angular" skill={85}  />
            <TechIcon src="/tech/skill-icons--flutter-dark.svg" alt="Flutter" label="Flutter" skill={50} />
            <TechIcon src="/tech/skill-icons--sass.svg" alt="Scss" label="Scss" skill={60}  />
            <TechIcon src="/tech/skill-icons--javascript.svg" alt="Javascript" label="Javascript" skill={80}  />
            <TechIcon src="/tech/skill-icons--tailwindcss-dark.svg" alt="Tailwind" label="Tailwind css" skill={90}  />
            <TechIcon src="/tech/skill-icons--typescript.svg" alt="Typescript" label="Typescript" skill={85}  />
          </div>
  
          <p className="text-lg text-gray-400 mb-8">Backend Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <TechIcon src="/tech/skill-icons--laravel-dark.svg" alt="Laravel" label="Laravel PHP" skill={50}  />
            <TechIcon src="/tech/skill-icons--mysql-dark.svg" alt="MySQL" label="MySQL" skill={80} />
            <TechIcon src="/tech/skill-icons--java-dark.svg" alt="Java" label="Java" skill={75}  />
            <TechIcon src="/tech/skill-icons--dotnet.svg" alt="DotNet" label="DotNet" skill={85} />
            <TechIcon src="/tech/skill-icons--nodejs-dark.svg" alt="Nodejs" label="Nodejs" skill={90}  />
          </div>

          <p className="text-lg text-gray-400 mb-8">Other Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <TechIcon src="/tech/skill-icons--github.svg" alt="Git" label="Git" skill={75} />
          <TechIcon src="/tech/skill-icons--docker.svg" alt="Docker" label="Docker" skill={65} />

          </div>
        </div>
      </section>
    );
  }