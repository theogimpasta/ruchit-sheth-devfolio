
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.15),transparent_50%)]"></div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hi, I'm <span className="text-portfolio-purple">Ruchit Sheth</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
                Software Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I build innovative solutions with cutting-edge technologies,
                specializing in web development and machine learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/about">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="aspect-square rounded-full bg-portfolio-purple/10 p-1.5">
                <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,#9b87f5,#D6BCFA)]">
                  <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-white/20">
                    RS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground text-lg">
              I specialize in creating robust applications and exploring cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border animate-on-scroll">
              <div className="h-12 w-12 bg-portfolio-purple/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-6 w-6 text-portfolio-purple">🌐</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-muted-foreground">
                Building modern, responsive web applications using the latest technologies
                including React.js, Next.js, and Node.js.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border animate-on-scroll">
              <div className="h-12 w-12 bg-portfolio-purple/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-6 w-6 text-portfolio-purple">🧠</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Developing intelligent systems using TensorFlow, PyTorch, and other ML frameworks
                with a focus on NLP and LLMs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border animate-on-scroll">
              <div className="h-12 w-12 bg-portfolio-purple/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-6 w-6 text-portfolio-purple">📱</div>
              </div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Creating end-to-end solutions with expertise in both front-end and back-end
                technologies including MongoDB and Express.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <Button asChild size="lg" className="mx-auto">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
