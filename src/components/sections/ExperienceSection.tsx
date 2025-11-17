interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Web Developer',
    company: 'Design Agency',
    period: '2022 - Present',
    description: 'Leading front-end development for client projects, implementing design systems, and mentoring junior developers.'
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: 'Built and maintained multiple web applications using modern frameworks and best practices.'
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Digital Studio',
    period: '2018 - 2020',
    description: 'Developed responsive websites and collaborated with design team to implement pixel-perfect interfaces.'
  }
];

interface ExperienceSectionProps {}

export default function ExperienceSection({}: ExperienceSectionProps) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
