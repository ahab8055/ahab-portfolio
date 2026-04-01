import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Asapp Studio, Lahore</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built a recruitment platform (Cogen) for companies, recruiters, and
              candidates using React JS and React Native. Developed Rental Booth, a
              salon seat rental dashboard with MERN stack and Stripe payments.
              Created SullyMac, a network device management system with React JS
              and Django/Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Developer</h4>
                <h5>Devrol Solution, Lahore</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Maintained a performance tracking dashboard for company goal and task
              management using React JS, Serverless Node.js, and MySQL. Built Le
              Gourmet, a full restaurant management system supporting multiple user
              roles with React JS, React Native, Node.js, Serverless, and
              Socket.io.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Qbatch, Lahore</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Created Project Ronny Innovation, an Amazon and Walmart store
              management platform using MERN stack and CRON jobs. Built 3pl
              Terminal, a warehouse management application with Swagger and test
              cases. Recreated frontend and migrated backend for Prepare4u from
              Flask/Python to React JS and PostgreSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Optima Geeks, Lahore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built Gradcut, a live graduation video cutting service using
              microservices, Kubernetes, and FFmpeg. Developed EOS, an AWS-based
              streaming and cutting platform with Node.js, Pulumi, and AI-powered
              transcription. Created Happy Hour Hound, a web scraping tool for
              restaurant happy hour data in MERN stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
