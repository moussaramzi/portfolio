export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  detailsKey?: string;
  technologies?: {
    src: string;
    srcDark?: string;
    alt: string;
    labelKey: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "project4",
    titleKey: "project4.title",
    descriptionKey: "project4.description",
    image: "/projects/project4/project4.webp",
    link: "/projects/project4",
    technologies: [
      {
        src: "/tech/skill-icons--dotnet.svg",
        alt: "Dot NET",
        labelKey: "tech.dotNEt",
      },
      {
        src: "/tech/skill-icons--javascript.svg",
        alt: "JavaScript",
        labelKey: "tech.javascript",
      },
      {
        src: "/tech/skill-icons--tailwindcss-dark.svg",
        alt: "Tailwind CSS",
        labelKey: "tech.tailwindCSS",
      },
      {
        src: "/tech/skill-icons--github-dark.svg",
        srcDark: "/tech/skill-icons--github.svg",
        alt: "GitHub",
        labelKey: "tech.github",
      },
    ],
  },
  {
    id: "recipe-microservice",
    titleKey: "recipe.title",
    descriptionKey: "recipe.description",
    image: "/projects/microservice/recipe-microservice.webp",
    link: "/projects/recipe-microservice",
    technologies: [
      {
        src: "/tech/skill-icons--docker.svg",
        alt: "Docker",
        labelKey: "tech.docker",
      },
      {
        src: "/tech/skill-icons--java-dark.svg",
        alt: "Java",
        labelKey: "tech.java",
      },
      {
        src: "/tech/skill-icons--github-dark.svg",
        srcDark: "/tech/skill-icons--github.svg",
        alt: "GitHub",
        labelKey: "tech.github",
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql",
      },
      {
        src: "/tech/skill-icons--mongodb.svg",
        alt: "MongoDB",
        labelKey: "tech.mongodb",
      },
    ],
  },
  {
    id: "pos",
    titleKey: "pos.title",
    descriptionKey: "pos.description",
    image: "/projects/pos/pos.webp",
    link: "/projects/pos",
    technologies: [
      {
        src: "/tech/skill-icons--laravel-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql",
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql",
      },
      {
        src: "/tech/skill-icons--github-dark.svg",
        srcDark: "/tech/skill-icons--github.svg",
        alt: "GitHub",
        labelKey: "tech.github",
      },
    ],
  },
];
