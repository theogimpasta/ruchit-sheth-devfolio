
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "C++", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "SCSS", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "React.js", category: "frontend" },
    { name: "MongoDB", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "Next.js", category: "frontend" },
    { name: "Git", category: "tools" },
    { name: "TensorFlow", category: "ml" },
    { name: "scikit-learn", category: "ml" },
    { name: "PyTorch", category: "ml" },
    { name: "LLMs", category: "ml" },
    { name: "NLP", category: "ml" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredSkills = filter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <>
      <section className="py-12 md:py-20 bg-portfolio-dark-purple text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">About Me</h1>
            <p className="text-xl text-gray-300 animate-on-scroll">
              Software Developer specializing in web development and machine learning
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Ruchit Sheth, a passionate Software Developer based in Mumbai. 
                  With expertise in both web development and machine learning, I enjoy 
                  creating innovative solutions that combine the best of both worlds.
                </p>
                <p>
                  My journey in software development began with a fascination for creating 
                  things that live on the internet. Fast-forward to today, and I've had the 
                  privilege of building software for a variety of projects.
                </p>
                <p>
                  My focus is on building accessible, inclusive products and digital 
                  experiences for a variety of clients.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative rounded-2xl bg-gradient-to-br from-portfolio-purple/80 to-portfolio-light-purple/80 p-1">
                <div className="bg-background rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-portfolio-purple mr-2">•</span>
                      <span>Based in Mumbai, India</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-purple mr-2">•</span>
                      <span>Software Developer with expertise in web and ML technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-purple mr-2">•</span>
                      <span>Passionate about creating innovative tech solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-purple mr-2">•</span>
                      <span>Continuous learner, always exploring new technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">My Skills</h2>
          
          <div className="mb-8 flex justify-center animate-on-scroll">
            <Tabs defaultValue="all" className="w-full max-w-xl" onValueChange={setFilter}>
              <TabsList className="grid grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="ml">ML/AI</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex flex-wrap justify-center animate-on-scroll">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-on-scroll">
                <CardContent className="p-6">
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center text-muted-foreground">
                    Project {i} Image
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Title {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    Project description goes here. You can fill in the details about your project.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">MongoDB</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-muted-foreground italic">More projects coming soon...</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">Experience</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-border animate-on-scroll">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Company Name {i}</h3>
                    <p className="text-portfolio-purple font-medium">Position Title</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Jan 202{i} - Present
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Description of roles and responsibilities. You can fill in the details 
                  about your work experience, achievements, and the technologies you used.
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-muted-foreground italic">More details to be added...</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
