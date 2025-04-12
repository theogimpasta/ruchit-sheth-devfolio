
import { Mail, Phone, MapPin, Github, Linkedin, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would be replaced with actual form submission logic
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-portfolio-dark-purple text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Get In Touch</h1>
            <p className="text-xl text-gray-300 animate-on-scroll">
              Let's collaborate on your next project
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 bg-portfolio-purple/10 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5 text-portfolio-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@example.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 bg-portfolio-purple/10 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5 text-portfolio-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-10 w-10 bg-portfolio-purple/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-portfolio-purple" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Mumbai, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-bold mt-12 mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href="https://leetcode.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <Code className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">LeetCode</span>
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
