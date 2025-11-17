import Button from '../ui/Button';

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1 className="hero-title">
            Web Designer & Developer
          </h1>
          <p className="hero-description">
            Creating beautiful, functional, and user-centered digital experiences.
            I specialize in modern web design and development.
          </p>
          <div className="hero-cta">
            <Button variant="primary" href="#work">
              View Work
            </Button>
            <Button variant="secondary" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
