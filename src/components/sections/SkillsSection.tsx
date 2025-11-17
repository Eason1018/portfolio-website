import Tag from '../ui/Tag';

interface SkillCategory {
  id: number;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    id: 3,
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping']
  },
  {
    id: 4,
    title: 'Tools',
    skills: ['Git', 'Docker', 'VS Code', 'Webpack', 'Vite', 'CI/CD']
  }
];

interface SkillsSectionProps {}

export default function SkillsSection({}: SkillsSectionProps) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
