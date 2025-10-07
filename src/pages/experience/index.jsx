import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';
import TimelineItem from './components/TimelineItem.jsx';
import ExperienceStats from './components/ExperienceStats.jsx';
import SkillsUsed from './components/SkillsUsed.jsx';
import TestimonialCard from './components/TestimonialCard.jsx';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock experience data
  const experiences = [
    {
      id: 1,
      position: "Full Stack Developer",
      company: "Mindreams Infotech",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      startDate: "2023-06-01",
      endDate: null,
      description: `Leading full-stack development initiatives with a focus on scalable web and mobile applications. Responsible for architecting solutions using modern frameworks including React.js, Django, and Flutter. Collaborated with cross-functional teams to deliver high-quality software solutions that meet business requirements and user expectations.`,
      achievements: [
        "Developed and deployed 8+ full-stack web applications using React.js and Django",
        "Built 3 mobile applications using Flutter with 95%+ user satisfaction ratings",
        "Implemented RESTful APIs serving 10,000+ daily active users",
        "Optimized database queries resulting in 40% improvement in application performance",
        "Led code reviews and mentored 2 junior developers on best practices",
        "Integrated third-party services including payment gateways and social media APIs",
        "Implemented automated testing suites reducing bug reports by 60%",
        "Designed responsive UI/UX components used across multiple projects"
      ],
      technologies: [
        "React.js", "Next.js", "TypeScript", "Django", "Python", "Flutter", "Dart",
        "PostgreSQL", "MySQL", "Redis", "Docker", "AWS", "Git", "Tailwind CSS",
        "REST APIs", "GraphQL", "Firebase", "Linux", "Nginx", "Celery", "HTML5", "CSS3"
      ],
      projects: [
        {
          name: "E-Commerce Platform",
          description: "Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard",
          technologies: ["React.js", "Django", "PostgreSQL", "Stripe API"],
          impact: "Increased client revenue by 35%"
        },
        {
          name: "Task Management Mobile App",
          description: "Cross-platform mobile application for team collaboration and project management",
          technologies: ["Flutter", "Firebase", "Provider", "SQLite"],
          impact: "5000+ downloads in first month"
        },
        {
          name: "Real-time Chat Application",
          description: "Scalable messaging platform with file sharing and group chat capabilities",
          technologies: ["React.js", "Django Channels", "WebSocket", "Redis"],
          impact: "Handles 1000+ concurrent users"
        }
      ],
      metrics: [
        { value: "15+", label: "Projects Completed" },
        { value: "99.5%", label: "Uptime Achieved" },
        { value: "40%", label: "Performance Boost" }
      ]
    },
    {
      id: 2,
      position: "Junior Developer Intern",
      company: "TechStart Solutions",
      location: "Remote",
      type: "Internship",
      startDate: "2023-01-01",
      endDate: "2023-05-31",
      description: `Gained hands-on experience in web development fundamentals and modern JavaScript frameworks. Contributed to various client projects while learning industry best practices and agile development methodologies. Focused on frontend development with React.js and backend integration.`,
      achievements: [
        "Completed 5 client projects during internship period",
        "Learned React.js, Node.js, and MongoDB from scratch",
        "Contributed to open-source projects on GitHub",
        "Participated in daily standups and sprint planning meetings",
        "Received excellent feedback from senior developers and mentors"
      ],
      technologies: [
        "React.js", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB",
        "Express.js", "Git", "Bootstrap", "jQuery", "REST APIs"
      ],
      projects: [
        {
          name: "Portfolio Website",
          description: "Responsive portfolio website for a local business with contact forms and gallery",
          technologies: ["React.js", "CSS3", "Node.js"],
          impact: "Client acquired 20+ new customers"
        },
        {
          name: "Inventory Tracker",
          description: "Simple inventory management system for small businesses",
          technologies: ["React.js", "MongoDB", "Express.js"],
          impact: "Reduced manual tracking time by 70%"
        }
      ],
      metrics: [
        { value: "5", label: "Projects Delivered" },
        { value: "100%", label: "On-time Completion" },
        { value: "4.8/5", label: "Mentor Rating" }
      ]
    }
  ];

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Senior Technical Lead",
      company: "Mindreams Infotech",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `Paramaguru is an exceptional developer with strong problem-solving skills. His ability to learn new technologies quickly and implement them effectively is remarkable. He consistently delivers high-quality code and is always willing to help team members.`,
      rating: 5,
      relationship: "Direct Supervisor"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Project Manager",
      company: "Mindreams Infotech", 
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `Working with Paramaguru has been a pleasure. He communicates well with stakeholders, meets deadlines consistently, and his technical expertise in full-stack development is impressive. A valuable team member who I would recommend without hesitation.`,
      rating: 5,
      relationship: "Project Collaborator"
    },
    {
      id: 3,
      name: "Arun Krishnan",
      position: "Frontend Developer",
      company: "Mindreams Infotech",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      content: `Paramaguru mentored me during my initial months at the company. His guidance on React.js best practices and code optimization techniques helped me grow significantly as a developer. He's patient, knowledgeable, and always approachable.`,
      rating: 5,
      relationship: "Team Member"
    }
  ];

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/paramaguru-resume.pdf';
    link.download = 'Paramaguru_Resume.pdf';
    link?.click();
  };

  const handleContactMe = () => {
    // Scroll to contact section or navigate to contact
    window.location.href = 'mailto:paramaguru.dev@gmail.com';
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Experience - Paramaguru | Full Stack Developer</title>
        <meta name="description" content="Explore Paramaguru's professional journey as a Full Stack Developer at Mindreams Infotech. View detailed project achievements, technology implementations, and career progression." />
        <meta name="keywords" content="Paramaguru experience, full stack developer, Mindreams Infotech, React Django Flutter, professional timeline" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cosmic-purple/5"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
                <Icon name="Briefcase" size={16} />
                <span>Professional Journey</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Work <span className="text-gradient">Experience</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
                A comprehensive timeline of my professional growth, showcasing real-world impact through 
                scalable applications, innovative solutions, and collaborative team achievements.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="btn-morph bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-primary"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={18}
                >
                  Download Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleContactMe}
                  className="btn-morph border-energetic-coral text-energetic-coral hover:bg-energetic-coral hover:text-white"
                  iconName="Mail"
                  iconPosition="left"
                  iconSize={18}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceStats />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Professional <span className="text-gradient">Timeline</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Detailed journey through my professional roles, achievements, and the impact 
                I've made at each stage of my career.
              </p>
            </div>

            <div className="relative">
              {experiences?.map((experience, index) => (
                <TimelineItem
                  key={experience?.id}
                  experience={experience}
                  isLast={index === experiences?.length - 1}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Used */}
        <section className="py-16 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsUsed />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What Colleagues <span className="text-gradient">Say</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Testimonials and recommendations from team members, supervisors, and 
                project collaborators I've worked with.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial?.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cosmic-purple/10 to-energetic-coral/10"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="glass-effect rounded-2xl p-8 lg:p-12 border border-border">
              <Icon name="Rocket" size={48} className="text-primary mx-auto mb-6" />
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Work <span className="text-gradient">Together?</span>
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how my experience can contribute to your team's success.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleContactMe}
                  className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white shadow-neon-coral"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={18}
                >
                  Start a Conversation
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/paramaguru', '_blank')}
                  className="btn-morph border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  iconName="Linkedin"
                  iconPosition="left"
                  iconSize={18}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Floating Resume Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={handleDownloadResume}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-primary hover:scale-110 transition-all duration-300"
          iconName="Download"
          iconSize={20}
        />
      </div>
    </div>
  );
};

export default Experience;