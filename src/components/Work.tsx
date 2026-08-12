import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

type Project = {
  name: string;
  category: string;
  tools: string;
  image?: string;
  live?: string;
  github?: string;
  metric: string;
};

const projects: Project[] = [
  {
    name: "Gradcut",
    category: "Streaming / Microservices",
    tools: "Kubernetes, Node.js, FFmpeg, JavaScript",
    image: `${import.meta.env.BASE_URL}images/projects/gradcut.png`,
    live: "https://gradcut.com/",
    metric: "Live graduation streaming + auto clip-cutting for 1000s of students",
  },
  {
    name: "EOS",
    category: "Live Streaming / AI Transcription",
    tools: "Node.js, Pulumi, AWS, TypeScript",
    image: `${import.meta.env.BASE_URL}images/projects/eos.png`,
    live: "https://www.editonthespot.com/",
    metric: "Multi-tenant live streaming on AWS ECS/Lambda, scales to many concurrent streams",
  },
  {
    name: "TamTracker",
    category: "E-Commerce Store Management",
    tools: "Next.js, AWS SST, Postgres, Drizzle, CRON, OpenAI",
    image: `${import.meta.env.BASE_URL}images/projects/tamtracker.png`,
    live: "https://tamtracker.io/",
    metric: "Lead-gen SaaS connecting LinkedIn/Google Ads + HubSpot",
  },
  {
    name: "CropGuard",
    category: "AgriTech / Risk Dashboard",
    tools: "Next.js, Postgres, Django",
    live: "https://www.cropguard.ai/",
    metric: "Crop risk dashboard (Next.js + Postgres + Django)",
  },
  {
    name: "Qreates",
    category: "AI Product Photography",
    tools: "SST, Drizzle, Clerk",
    live: "https://qreates.com/",
    metric: "AI product photography, SST + Drizzle + Clerk",
  },
  {
    name: "Stax Fun",
    category: "AI Visual Coding",
    tools: "React, Flask, Stripe",
    live: "https://stax.fun/",
    metric: "AI visual coding platform (React + Flask + Stripe)",
  },
  {
    name: "Happy Hour Hound",
    category: "Deal Aggregator / AI Scraping",
    tools: "AWS Serverless, AI web scraping",
    live: "https://happyhourhound.com",
    metric: "AI web-scraping deal aggregator, AWS Serverless",
  },
  {
    name: "Patrol6",
    category: "Security / Identity",
    tools: "Confidential stack",
    metric: "Private / NDA",
  },
  {
    name: "3pl Terminal",
    category: "Warehouse Management",
    tools: "React, Node.js, Express, MongoDB, Swagger",
    metric: "Private / NDA",
  },
  {
    name: "Le Gourmet",
    category: "Restaurant Management",
    tools: "React, React Native, Node.js, Socket.io",
    metric: "Private / NDA",
  },
  {
    name: "Ms Medi",
    category: "Medical POS System",
    tools: "React, Node.js, Express, MongoDB, Material UI",
    image: `${import.meta.env.BASE_URL}images/projects/msmedi.png`,
    metric: "Private / NDA",
  },
  {
    name: "Junity",
    category: "LMS Platform",
    tools: "React, GraphQL, DynamoDB, AWS Amplify",
    metric: "Private / NDA",
  },
  {
    name: "SullyMac",
    category: "Network Device Management",
    tools: "React, Django, Python, MySQL",
    metric: "Private / NDA",
  },
  {
    name: "Croptalk",
    category: "AgriTech",
    tools: "Confidential stack",
    metric: "Private / NDA",
  },
];

const Work = () => {
  useEffect(() => {
    const flex = document.querySelector(".work-flex") as HTMLElement;
    const boxes = flex.querySelectorAll<HTMLElement>(".work-box");
    const lastBox = boxes[boxes.length - 1];

    // Measure once after ScrollSmoother is created (useEffect runs after sibling useEffects).
    // offsetLeft is transform-independent, so it's accurate regardless of smooth-scroll state.
    const dist =
      flex.offsetLeft +
      lastBox.offsetLeft +
      lastBox.offsetWidth -
      window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${dist}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    tl.to(".work-flex", {
      x: -dist,
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p className="work-metric">{project.metric}</p>
                <div className="work-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
              <WorkImage
                image={
                  project.image ||
                  `${import.meta.env.BASE_URL}images/placeholder.webp`
                }
                alt={project.name}
                link={project.live}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
