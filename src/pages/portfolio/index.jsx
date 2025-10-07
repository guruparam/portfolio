import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectFilters from './components/ProjectFilters.jsx';
import ProjectStats from './components/ProjectStats.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [activeComplexity, setActiveComplexity] = useState('all');

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      category: "Full Stack Web Application",
      description: "A comprehensive e-commerce solution with AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard.",
      longDescription: `This project represents a complete digital transformation solution for modern retail businesses. Built with scalability in mind, it handles thousands of concurrent users while maintaining sub-second response times. The AI recommendation engine uses collaborative filtering and content-based algorithms to increase conversion rates by 35%.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Django", "PostgreSQL", "Redis", "TensorFlow", "AWS", "Docker"],
      status: "Live",
      type: "web",
      complexity: "expert",
      liveUrl: "https://demo-ecommerce.paramaguru.dev",
      githubUrl: "https://github.com/paramaguru/ai-ecommerce",
      metrics: {
        stars: 127,
        users: "2.5k",
        performance: "98/100",
        uptime: "99.9%",
        loadTime: "1.2s"
      },
      features: [
        "AI-powered product recommendations with 35% conversion improvement",
        "Real-time inventory synchronization across multiple warehouses",
        "Advanced analytics dashboard with predictive insights",
        "Multi-currency and multi-language support",
        "Automated fraud detection and prevention system",
        "Progressive Web App with offline capabilities"
      ],
      architecture: `The platform follows a microservices architecture with React/Next.js frontend, Django REST API backend, and PostgreSQL database. Redis handles caching and session management, while TensorFlow powers the recommendation engine. The system is containerized with Docker and deployed on AWS with auto-scaling capabilities.`,
      challenges: [
        {
          problem: "Handling high-traffic spikes during flash sales without performance degradation",
          solution: "Implemented Redis caching, database query optimization, and AWS auto-scaling with load balancers to handle 10x traffic increases seamlessly"
        },
        {
          problem: "Real-time inventory synchronization across multiple warehouses and sales channels",
          solution: "Built an event-driven architecture using Redis pub/sub for instant inventory updates and conflict resolution algorithms"
        }
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Mobile & Web Application",
      description: "Cross-platform healthcare solution with patient management, appointment scheduling, telemedicine capabilities, and secure medical records.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=800&h=600&fit=crop",
      technologies: ["Flutter", "Django", "PostgreSQL", "WebRTC", "Firebase", "JWT"],
      status: "Live",
      type: "mobile",
      complexity: "advanced",
      liveUrl: "https://healthcare-demo.paramaguru.dev",
      githubUrl: "https://github.com/paramaguru/healthcare-system",
      metrics: {
        stars: 89,
        users: "1.2k",
        performance: "95/100",
        uptime: "99.8%",
        loadTime: "0.9s"
      },
      features: [
        "Secure patient data management with HIPAA compliance",
        "Real-time video consultations with WebRTC integration",
        "Automated appointment scheduling and reminders",
        "Electronic prescription management",
        "Medical history tracking and analytics",
        "Multi-role access control for doctors, nurses, and administrators"
      ],
      architecture: `Built with Flutter for cross-platform mobile experience and Django for robust backend API. PostgreSQL ensures data integrity while Firebase handles real-time notifications. WebRTC enables secure video consultations with end-to-end encryption.`,
      challenges: [
        {
          problem: "Ensuring HIPAA compliance while maintaining user-friendly experience",
          solution: "Implemented end-to-end encryption, secure authentication with JWT, and comprehensive audit logging while keeping the UI intuitive"
        }
      ]
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      category: "Data Visualization Platform",
      description: "Interactive dashboard for real-time data visualization with customizable widgets, advanced filtering, and automated reporting capabilities.",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Django", "WebSocket", "PostgreSQL", "Redis"],
      status: "Live",
      type: "web",
      complexity: "intermediate",
      liveUrl: "https://analytics-demo.paramaguru.dev",
      githubUrl: "https://github.com/paramaguru/analytics-dashboard",
      metrics: {
        stars: 156,
        users: "3.1k",
        performance: "96/100",
        uptime: "99.7%",
        loadTime: "1.1s"
      },
      features: [
        "Real-time data streaming with WebSocket connections",
        "Customizable dashboard widgets with drag-and-drop interface",
        "Advanced filtering and data aggregation capabilities",
        "Automated report generation and email scheduling",
        "Multi-tenant architecture with role-based permissions",
        "Export functionality for charts and data tables"
      ],
      architecture: `React frontend with D3.js for advanced visualizations, Django backend with WebSocket support for real-time updates. PostgreSQL stores historical data while Redis manages real-time data streams and caching.`,
      challenges: [
        {
          problem: "Handling large datasets while maintaining smooth real-time updates",
          solution: "Implemented data pagination, efficient WebSocket connections, and optimized D3.js rendering with virtual scrolling"
        }
      ]
    },
    {
      id: 4,
      title: "Social Media Management Tool",
      category: "SaaS Platform",
      description: "Comprehensive social media management platform with content scheduling, analytics, team collaboration, and multi-platform integration.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS S3", "Social APIs"],
      status: "In Development",
      type: "web",
      complexity: "advanced",
      githubUrl: "https://github.com/paramaguru/social-media-tool",
      metrics: {
        stars: 73,
        users: "800",
        performance: "94/100",
        uptime: "99.5%",
        loadTime: "1.3s"
      },
      features: [
        "Multi-platform content scheduling and publishing",
        "Advanced analytics and engagement tracking",
        "Team collaboration with approval workflows",
        "Content calendar with drag-and-drop interface",
        "Automated hashtag suggestions and optimization",
        "Social listening and competitor analysis"
      ],
      architecture: `React SPA with Node.js backend, MongoDB for flexible data storage, and Redis for caching. Integrates with multiple social media APIs and uses AWS S3 for media storage.`,
      challenges: [
        {
          problem: "Managing rate limits across multiple social media APIs",
          solution: "Built a queue system with intelligent rate limiting and retry mechanisms to optimize API usage across platforms"
        }
      ]
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      category: "Decentralized Application",
      description: "Secure and transparent voting platform built on blockchain technology with smart contracts and cryptographic verification.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?w=800&h=600&fit=crop",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      status: "Completed",
      type: "web",
      complexity: "expert",
      githubUrl: "https://github.com/paramaguru/blockchain-voting",
      metrics: {
        stars: 201,
        users: "500",
        performance: "92/100",
        uptime: "99.9%",
        loadTime: "2.1s"
      },
      features: [
        "Immutable vote recording on blockchain",
        "Anonymous voting with cryptographic verification",
        "Real-time vote counting and results",
        "Smart contract-based election management",
        "IPFS integration for decentralized storage",
        "MetaMask integration for secure authentication"
      ],
      architecture: `React frontend with Web3.js for blockchain interaction, Solidity smart contracts deployed on Ethereum, and IPFS for decentralized file storage. MetaMask provides secure wallet integration.`,
      challenges: [
        {
          problem: "Ensuring voter anonymity while preventing double voting",
          solution: "Implemented zero-knowledge proofs and cryptographic hashing to maintain anonymity while creating unique voter identifiers"
        }
      ]
    },
    {
      id: 6,
      title: "AI Content Generator",
      category: "AI/ML Application",
      description: "Advanced content generation platform using GPT models for creating blog posts, social media content, and marketing materials.",
      image: "https://images.pixabay.com/photo/2023/01/26/22/13/ai-generated-7747173_1280.jpg?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "FastAPI", "OpenAI GPT", "PostgreSQL", "Docker"],
      status: "Live",
      type: "web",
      complexity: "advanced",
      liveUrl: "https://ai-content.paramaguru.dev",
      githubUrl: "https://github.com/paramaguru/ai-content-generator",
      metrics: {
        stars: 94,
        users: "1.8k",
        performance: "97/100",
        uptime: "99.6%",
        loadTime: "1.0s"
      },
      features: [
        "Multi-format content generation (blogs, social media, ads)",
        "Custom tone and style adjustments",
        "SEO optimization suggestions",
        "Content plagiarism detection",
        "Team collaboration and content approval workflows",
        "Analytics for content performance tracking"
      ],
      architecture: `React frontend with Python FastAPI backend, integrated with OpenAI GPT models. PostgreSQL stores user data and content history, with Docker containerization for scalable deployment.`,
      challenges: [
        {
          problem: "Managing API costs while providing unlimited content generation",
          solution: "Implemented intelligent caching, content optimization, and tiered pricing model to balance cost efficiency with user experience"
        }
      ]
    }
  ];

  // Featured project (first project)
  const featuredProject = projects?.[0];

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    return projects?.filter(project => {
      const matchesFilter = activeFilter === 'all' || 
        project?.technologies?.some(tech => 
          activeFilter === 'react' && tech?.toLowerCase()?.includes('react') ||
          activeFilter === 'django' && tech?.toLowerCase()?.includes('django') ||
          activeFilter === 'flutter' && tech?.toLowerCase()?.includes('flutter') ||
          activeFilter === 'fullstack' && (
            project?.technologies?.some(t => ['react', 'next.js']?.some(f => t?.toLowerCase()?.includes(f))) &&
            project?.technologies?.some(t => ['django', 'node.js', 'python']?.some(b => t?.toLowerCase()?.includes(b)))
          ) ||
          activeFilter === 'ai' && project?.technologies?.some(t => 
            ['ai', 'ml', 'tensorflow', 'gpt', 'openai']?.some(ai => t?.toLowerCase()?.includes(ai))
          )
        );

      const matchesType = activeType === 'all' || project?.type === activeType;
      const matchesComplexity = activeComplexity === 'all' || project?.complexity === activeComplexity;

      return matchesFilter && matchesType && matchesComplexity;
    });
  }, [activeFilter, activeType, activeComplexity, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Paramaguru | Full Stack Developer Projects</title>
        <meta name="description" content="Explore Paramaguru's diverse portfolio of full-stack applications including React, Django, Flutter projects with AI integration, live demos, and technical deep-dives." />
        <meta name="keywords" content="portfolio, full stack developer, React projects, Django applications, Flutter apps, AI integration, web development, mobile development" />
        <meta property="og:title" content="Portfolio - Paramaguru | Full Stack Developer Projects" />
        <meta property="og:description" content="Discover innovative full-stack projects showcasing expertise in React, Django, Flutter, and AI technologies with live demos and source code." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://paramaguru.dev/portfolio" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Icon name="FolderOpen" size={20} className="text-primary" />
                  <span className="text-primary font-medium">Project Showcase</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
                  My Portfolio
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore my diverse collection of full-stack applications showcasing expertise in 
                  <span className="text-primary font-medium"> React</span>, 
                  <span className="text-electric-cyan font-medium"> Django</span>, 
                  <span className="text-cosmic-purple font-medium"> Flutter</span>, and 
                  <span className="text-energetic-coral font-medium"> AI integration</span>. 
                  Each project demonstrates scalable architecture, innovative solutions, and real-world impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    iconName="ArrowDown"
                    iconPosition="right"
                    iconSize={20}
                    className="btn-morph shadow-neon-primary"
                  >
                    Explore Projects
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/paramaguru', '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={20}
                    className="btn-morph"
                  >
                    View GitHub
                  </Button>
                </div>
              </motion.div>

              {/* Project Stats */}
              <ProjectStats projects={projects} />
            </div>
          </section>

          {/* Featured Project */}
          <section className="py-16 px-6 lg:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
              <FeaturedProject project={featuredProject} />
            </div>
          </section>

          {/* All Projects */}
          <section id="projects" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  All Projects
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Filter and explore projects by technology stack, type, and complexity level. 
                  Each project includes live demos, source code, and detailed technical insights.
                </p>
              </motion.div>

              {/* Project Filters */}
              <ProjectFilters
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                activeType={activeType}
                setActiveType={setActiveType}
                activeComplexity={activeComplexity}
                setActiveComplexity={setActiveComplexity}
              />

              {/* Projects Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProjects?.length > 0 ? (
                  filteredProjects?.map((project, index) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                    <p className="text-muted-foreground mb-6">
                      No projects match your current filter criteria. Try adjusting your filters.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveFilter('all');
                        setActiveType('all');
                        setActiveComplexity('all');
                      }}
                      iconName="RotateCcw"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Load More / Pagination could go here */}
              {filteredProjects?.length > 0 && (
                <div className="text-center mt-16">
                  <p className="text-muted-foreground mb-6">
                    Showing {filteredProjects?.length} of {projects?.length} projects
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/paramaguru', '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={20}
                    className="btn-morph"
                  >
                    View More on GitHub
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-cosmic-purple/10 to-energetic-coral/10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Let's collaborate on your next project. I bring full-stack expertise, 
                  innovative solutions, and a passion for creating scalable applications 
                  that make a real impact.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    iconName="Mail"
                    iconPosition="left"
                    iconSize={20}
                    className="btn-morph bg-energetic-coral hover:bg-energetic-coral/90 shadow-neon-coral"
                  >
                    Let's Work Together
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    iconName="Download"
                    iconPosition="left"
                    iconSize={20}
                    className="btn-morph"
                  >
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;