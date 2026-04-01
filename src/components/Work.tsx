import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const projects = [
  {
    name: "Gradcut",
    category: "Streaming / Microservices",
    tools: "Kubernetes, Node.js, FFmpeg, JavaScript",
    image: "/images/gradcut.png",
  },
  {
    name: "EOS",
    category: "Live Streaming / AI Transcription",
    tools: "Node.js, Pulumi, AWS, TypeScript",
  },
  {
    name: "Project Ronny Innovation",
    category: "E-Commerce Store Management",
    tools: "React, Node.js, Express, MongoDB, CRON",
  },
  {
    name: "3pl Terminal",
    category: "Warehouse Management",
    tools: "React, Node.js, Express, MongoDB, Swagger",
  },
  {
    name: "Le Gourmet",
    category: "Restaurant Management",
    tools: "React, React Native, Node.js, Socket.io",
  },
  {
    name: "Ms Medi",
    category: "Medical POS System",
    tools: "React, Node.js, Express, MongoDB",
  },
  {
    name: "Junity",
    category: "LMS Platform",
    tools: "React, GraphQL, DynamoDB, AWS Amplify",
  },
  {
    name: "SullyMac",
    category: "Network Device Management",
    tools: "React, Django, Python, MySQL",
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
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image || "/images/placeholder.webp"}
                alt={project.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
