import Tag from '../ui/Tag';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with seamless checkout experience and inventory management.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'Portfolio CMS',
    description: 'Content management system designed specifically for creative professionals and agencies.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization and reporting capabilities.',
    tags: ['React', 'D3.js', 'Firebase'],
    link: '#'
  }
];

interface ProjectsSectionProps {}

export default function ProjectsSection({}: ProjectsSectionProps) {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              className="project-card"
            >
              <div className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
