
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

const projects = [
  {
    number: "01",
    title: "MindTrack",
    category: "Web Application",
    description:
      "A mental wellness tracking platform designed to help healthcare professionals monitor patient progress, mood patterns and assessment results through interactive dashboards.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "Chart.js",
    ],
    github: "https://github.com/bhoomika-b-s/Mind-Track",
  },
  {
    number: "02",
    title: "UPI Fraud Reporting Portal",
    category: "Full Stack Project",
    description:
      "A reporting platform that allows users to submit UPI fraud and scam complaints. It includes an admin dashboard, complaint tracking and risk categorization.",
    technologies: [
      "React",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Groq",
    ],
    github:
      "https://github.com/bhoomika-b-s/FraudReportingPortal",
  },
  {
    number: "03",
    title: "TravelEase",
    category: "Travel Technology",
    description:
      "A travel recovery prototype that helps passengers explore alternative travel options when flight delays or cancellations affect their onward journeys.",
    technologies: [
      "React",
      "JavaScript",
      "Supabase",
      "CSS",
    ],
    github: "",
  },
  {
    number: "04",
    title: "Drowsiness Detection System",
    category: "Python Project",
    description:
      "A driver safety project that detects signs of drowsiness using facial landmarks and eye aspect ratio, with an audio alert to warn the driver.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Pygame",
    ],
    github: "",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "JavaScript", "Java (Basics)"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js"],
  },
  {
    title: "Database & Backend",
    skills: ["Supabase", "PostgreSQL", "Express.js"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Git", "GitHub", "Chart.js"],
  },
];

export default function Home() {
  return (
    <main>
      {/* HOME SECTION */}

      <section id="home" className="hero section-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            COMPUTER SCIENCE ENGINEERING STUDENT
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Bhoomika <span>B S.</span>
          </h1>

          <h2>
            Aspiring Software Developer
          </h2>

          <p className="hero-description">
            I am a Computer Science Engineering student
            passionate about technology, web development
            and creating meaningful digital solutions.
            I enjoy learning new technologies and turning
            ideas into practical projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>

          <div className="social-links">
            <a
  href="https://www.linkedin.com/in/bhoomika-b-s/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>
            <a
              href="https://github.com/bhoomika-b-s"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a href="#contact">
              Contact ↗
            </a>
          </div>
        </div>

        
{/* PERSONAL PROFILE PHOTO */}
<div className="hero-visual">
  <div className="photo-glow"></div>

  <div className="profile-frame">
    <div className="photo-label">
      <span className="status-dot"></span>
      AVAILABLE TO LEARN & COLLABORATE
    </div>

    <img
      src="/my-photo.jpeg"
      alt="Bhoomika B S"
      className="profile-photo"
    />

    <div className="photo-caption">
      <h3>Bhoomika B S</h3>
      <p>Aspiring Software Developer</p>
    </div>
  </div>

  <div className="photo-floating-tag">
    ✦ Turning Ideas Into Reality
  </div>
</div>

      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="section-container section">
        <SectionTitle
          subtitle="GET TO KNOW ME"
          title="About Me"
        />

        <div className="about-grid">
          <div className="about-main">
            <h3>
              Curious mind. Creative thinker.
              <span> Future developer.</span>
            </h3>

            <p>
              I am Bhoomika B S, a Computer Science
              Engineering student at Sahyadri College
              of Engineering & Management, Mangalore.
            </p>

            <p>
              I am interested in web development,
              software engineering and application
              development. I enjoy exploring new
              technologies, collaborating with teams
              and developing projects that solve
              real-world problems.
            </p>

            <p>
              My goal is to continuously improve my
              technical skills and grow into a
              capable software developer.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <span>01</span>
              <h4>Problem Solving</h4>
              <p>Enjoy finding practical solutions to challenges.</p>
            </div>

            <div className="detail-card">
              <span>02</span>
              <h4>Team Collaboration</h4>
              <p>Love sharing ideas and working with people.</p>
            </div>

            <div className="detail-card">
              <span>03</span>
              <h4>Continuous Learning</h4>
              <p>Always exploring new technologies and skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section id="skills" className="section-container section">
        <SectionTitle
          subtitle="MY TECHNICAL TOOLKIT"
          title="Skills & Technologies"
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section id="projects" className="section-container section">
        <SectionTitle
          subtitle="WHAT I'VE BUILT"
          title="Featured Projects"
        />

        <p className="section-description">
          Here are some of the projects I have worked on
          while exploring software development and
          solving practical problems.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}

      <section
        id="experience"
        className="section-container section"
      >
        <SectionTitle
          subtitle="MY JOURNEY"
          title="Experience & Activities"
        />

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-label">
                LEADERSHIP
              </span>
              <h3>Class Representative</h3>
              <p>
                Took responsibility for class coordination,
                communication and student activities.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-label">
                TEAM EXPERIENCE
              </span>
              <h3>IDT Team Leader</h3>
              <p>
                Worked with team members, coordinated
                responsibilities and contributed to
                collaborative activities.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-label">
                VOLUNTEERING
              </span>
              <h3>DevHost 2025 – Synergia DevTalk</h3>
              <p>
                Volunteered during the DevHost event,
                contributing to event activities and coordination.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-label">
                HACKATHON
              </span>
              <h3>Versathon 1.0</h3>
              <p>
                Participated in the college hackathon and
                earned Top Performer recognition.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}

      <section
        id="education"
        className="section-container section"
      >
        <SectionTitle
          subtitle="MY ACADEMIC BACKGROUND"
          title="Education"
        />

        <div className="education-grid">

          <div className="education-card">
            <span className="education-year">
              2025 – 2029
            </span>
            <h3>Bachelor of Engineering</h3>
            <h4>Computer Science & Engineering</h4>
            <p>
              Sahyadri College of Engineering & Management,
              Mangalore
            </p>
            <span className="education-score">
              CGPA: 9.75
            </span>
          </div>

          <div className="education-card">
            <span className="education-year">
              2022 – 2024
            </span>
            <h3>Pre-University Course</h3>
            <h4>Expert PU College</h4>
            <p>Higher Secondary Education</p>
            <span className="education-score">
              97.33%
            </span>
          </div>

          <div className="education-card">
            <span className="education-year">
              2022
            </span>
            <h3>SSLC</h3>
            <h4>Sharada Vidyalaya, Kodialbail</h4>
            <p>Secondary School Education</p>
            <span className="education-score">
              94%
            </span>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}

      <section
        id="achievements"
        className="section-container section"
      >
        <SectionTitle
          subtitle="MILESTONES"
          title="Achievements & Recognition"
        />

        <div className="achievement-grid">

          <div className="achievement-card">
            <span className="achievement-icon">🏆</span>
            <h3>Versathon 1.0</h3>
            <p>
              Top Performer recognition at the college
              hackathon.
            </p>
          </div>

          <div className="achievement-card">
            <span className="achievement-icon">🥇</span>
            <h3>Best Out of Waste</h3>
            <p>
              Secured First Prize at Sinchana.
            </p>
          </div>

          <div className="achievement-card">
            <span className="achievement-icon">💻</span>
            <h3>IIT Bombay Techfest</h3>
            <p>
              Participated in the Maze Solver event
              with teammates.
            </p>
          </div>

          <div className="achievement-card">
            <span className="achievement-icon">🤝</span>
            <h3>DevHost 2025</h3>
            <p>
              Contributed as a volunteer at Synergia DevTalk.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="section-container section"
      >
        <SectionTitle
          subtitle="LET'S CONNECT"
          title="Get In Touch"
        />

        <div className="contact-grid">
          <div className="contact-info">
            <h3>
              Have an idea?
              <span> Let's build something together.</span>
            </h3>

            <p>
              I am always interested in learning,
              collaborating and exploring opportunities
              in technology and software development.
            </p>

            <div className="contact-item">
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/bhoomika-b-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/bhoomika-b-s ↗
              </a>
            </div>

            <div className="contact-item">
              <span>GITHUB</span>
              <a
                href="https://github.com/bhoomika-b-s"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/bhoomika-b-s ↗
              </a>
            </div>

            <div className="contact-item">
              <span>LOCATION</span>
              <p>Mangalore, Karnataka, India</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          BHOOMIKA<span>.</span>
        </a>

        <p>
          Designed & Developed by Bhoomika B S
        </p>

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

    </main>
  );
}
