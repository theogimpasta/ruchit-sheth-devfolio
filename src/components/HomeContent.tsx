
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div className="container py-16">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Ruchit Sheth</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Software Developer passionate about building innovative solutions
        </p>
        <div className="flex gap-4 mt-8">
          <Link to="/about">
            <Button className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="gap-2">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
