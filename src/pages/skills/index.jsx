import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header.jsx';
import SkillHeader from './components/SkillHeader.jsx';
import SkillFilter from './components/SkillFilter.jsx';
import SkillCategory from './components/SkillCategory.jsx';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Skills Data
  const skillsData = [
    {
      name: 'Frontend',
      description: 'Modern UI/UX development with responsive design',
      skills: [
        {
          id: 1,
          name: 'React.js',
          category: 'Frontend',
          icon: 'Code',
          gradient: 'from-primary to-electric-cyan',
          proficiency: 95,
          experience: '3+ years',
          projectsCount: 15,
          endorsements: 12,
          achievements: [
            'Built 15+ production React applications',
            'Expert in React Hooks and Context API',
            'Performance optimization specialist'
          ],
          certifications: ['React Developer', 'Frontend Expert']
        },
        {
          id: 2,
          name: 'Next.js',
          category: 'Frontend',
          icon: 'Zap',
          gradient: 'from-cosmic-purple to-primary',
          proficiency: 90,
          experience: '2+ years',
          projectsCount: 8,
          endorsements: 10,
          achievements: [
            'SSR and SSG implementation expert',
            'API routes and middleware specialist',
            'Performance optimization with Next.js'
          ],
          certifications: ['Next.js Professional']
        },
        {
          id: 3,
          name: 'TypeScript',
          category: 'Frontend',
          icon: 'FileCode',
          gradient: 'from-professional-blue to-primary',
          proficiency: 88,
          experience: '2+ years',
          projectsCount: 12,
          endorsements: 8,
          achievements: [
            'Type-safe application development',
            'Advanced TypeScript patterns',
            'Migration from JavaScript to TypeScript'
          ],
          certifications: ['TypeScript Expert']
        },
        {
          id: 4,
          name: 'Tailwind CSS',
          category: 'Frontend',
          icon: 'Palette',
          gradient: 'from-success to-primary',
          proficiency: 92,
          experience: '2+ years',
          projectsCount: 20,
          endorsements: 15,
          achievements: [
            'Custom design system creation',
            'Responsive design mastery',
            'Component library development'
          ],
          certifications: []
        },
        {
          id: 5,
          name: 'JavaScript ES6+',
          category: 'Frontend',
          icon: 'Code2',
          gradient: 'from-warning to-primary',
          proficiency: 94,
          experience: '3+ years',
          projectsCount: 25,
          endorsements: 18,
          achievements: [
            'Modern JavaScript patterns expert',
            'Async/await and Promise mastery',
            'ES6+ features implementation'
          ],
          certifications: ['JavaScript Professional']
        },
        {
          id: 6,
          name: 'HTML5 & CSS3',
          category: 'Frontend',
          icon: 'Layout',
          gradient: 'from-energetic-coral to-primary',
          proficiency: 96,
          experience: '3+ years',
          projectsCount: 30,
          endorsements: 20,
          achievements: [
            'Semantic HTML structure expert',
            'CSS Grid and Flexbox mastery',
            'Cross-browser compatibility specialist'
          ],
          certifications: ['Web Standards Expert']
        }
      ]
    },
    {
      name: 'Backend',
      description: 'Server-side development and API architecture',
      skills: [
        {
          id: 7,
          name: 'Django',
          category: 'Backend',
          icon: 'Server',
          gradient: 'from-success to-cosmic-purple',
          proficiency: 90,
          experience: '2+ years',
          projectsCount: 10,
          endorsements: 12,
          achievements: [
            'RESTful API development expert',
            'Django ORM and database optimization',
            'Authentication and authorization systems'
          ],
          certifications: ['Django Professional']
        },
        {
          id: 8,
          name: 'Python',
          category: 'Backend',
          icon: 'Code',
          gradient: 'from-primary to-success',
          proficiency: 92,
          experience: '3+ years',
          projectsCount: 18,
          endorsements: 15,
          achievements: [
            'Full-stack Python development',
            'Data structures and algorithms expert',
            'Web scraping and automation'
          ],
          certifications: ['Python Developer', 'Guvi Python']
        },
        {
          id: 9,
          name: 'Node.js',
          category: 'Backend',
          icon: 'Cpu',
          gradient: 'from-success to-primary',
          proficiency: 85,
          experience: '2+ years',
          projectsCount: 8,
          endorsements: 10,
          achievements: [
            'Express.js application development',
            'Real-time applications with Socket.io',
            'Microservices architecture'
          ],
          certifications: []
        },
        {
          id: 10,
          name: 'REST APIs',
          category: 'Backend',
          icon: 'Globe',
          gradient: 'from-professional-blue to-cosmic-purple',
          proficiency: 93,
          experience: '3+ years',
          projectsCount: 20,
          endorsements: 16,
          achievements: [
            'RESTful service design patterns',
            'API documentation and testing',
            'Rate limiting and security implementation'
          ],
          certifications: ['API Design Expert']
        }
      ]
    },
    {
      name: 'Mobile',
      description: 'Cross-platform mobile application development',
      skills: [
        {
          id: 11,
          name: 'Flutter',
          category: 'Mobile',
          icon: 'Smartphone',
          gradient: 'from-primary to-electric-cyan',
          proficiency: 88,
          experience: '2+ years',
          projectsCount: 6,
          endorsements: 8,
          achievements: [
            'Cross-platform mobile app development',
            'State management with Provider/Bloc',
            'Native platform integration'
          ],
          certifications: ['Flutter Developer']
        },
        {
          id: 12,
          name: 'Dart',
          category: 'Mobile',
          icon: 'Code',
          gradient: 'from-cosmic-purple to-primary',
          proficiency: 86,
          experience: '2+ years',
          projectsCount: 6,
          endorsements: 7,
          achievements: [
            'Dart language proficiency',
            'Asynchronous programming patterns',
            'Object-oriented design principles'
          ],
          certifications: []
        },
        {
          id: 13,
          name: 'React Native',
          category: 'Mobile',
          icon: 'Smartphone',
          gradient: 'from-success to-primary',
          proficiency: 82,
          experience: '1+ years',
          projectsCount: 4,
          endorsements: 5,
          achievements: [
            'Cross-platform mobile development',
            'Native module integration',
            'Performance optimization'
          ],
          certifications: []
        }
      ]
    },
    {
      name: 'AI & Machine Learning',
      description: 'Artificial Intelligence and Machine Learning integration',
      skills: [
        {
          id: 14,
          name: 'OpenAI API',
          category: 'AI & ML',
          icon: 'Brain',
          gradient: 'from-energetic-coral to-cosmic-purple',
          proficiency: 85,
          experience: '1+ years',
          projectsCount: 5,
          endorsements: 6,
          achievements: [
            'GPT integration in web applications',
            'Prompt engineering optimization',
            'AI-powered chatbot development'
          ],
          certifications: []
        },
        {
          id: 15,
          name: 'Machine Learning',
          category: 'AI & ML',
          icon: 'Cpu',
          gradient: 'from-primary to-energetic-coral',
          proficiency: 78,
          experience: '1+ years',
          projectsCount: 3,
          endorsements: 4,
          achievements: [
            'Supervised learning algorithms',
            'Data preprocessing and analysis',
            'Model training and evaluation'
          ],
          certifications: ['ML Fundamentals']
        },
        {
          id: 16,
          name: 'TensorFlow',
          category: 'AI & ML',
          icon: 'Brain',
          gradient: 'from-warning to-cosmic-purple',
          proficiency: 75,
          experience: '1+ years',
          projectsCount: 2,
          endorsements: 3,
          achievements: [
            'Neural network implementation',
            'Deep learning model development',
            'Computer vision applications'
          ],
          certifications: []
        }
      ]
    },
    {
      name: 'Database',
      description: 'Database design and management systems',
      skills: [
        {
          id: 17,
          name: 'PostgreSQL',
          category: 'Database',
          icon: 'Database',
          gradient: 'from-professional-blue to-primary',
          proficiency: 87,
          experience: '2+ years',
          projectsCount: 12,
          endorsements: 10,
          achievements: [
            'Complex query optimization',
            'Database schema design',
            'Performance tuning and indexing'
          ],
          certifications: ['PostgreSQL Professional']
        },
        {
          id: 18,
          name: 'MongoDB',
          category: 'Database',
          icon: 'Database',
          gradient: 'from-success to-primary',
          proficiency: 83,
          experience: '2+ years',
          projectsCount: 8,
          endorsements: 7,
          achievements: [
            'NoSQL database design',
            'Aggregation pipeline mastery',
            'Sharding and replication'
          ],
          certifications: []
        },
        {
          id: 19,
          name: 'MySQL',
          category: 'Database',
          icon: 'Database',
          gradient: 'from-warning to-primary',
          proficiency: 85,
          experience: '3+ years',
          projectsCount: 15,
          endorsements: 12,
          achievements: [
            'Relational database design',
            'Stored procedures and triggers',
            'Backup and recovery strategies'
          ],
          certifications: ['MySQL Developer']
        }
      ]
    },
    {
      name: 'DevOps',
      description: 'Development operations and deployment automation',
      skills: [
        {
          id: 20,
          name: 'Docker',
          category: 'DevOps',
          icon: 'Package',
          gradient: 'from-primary to-professional-blue',
          proficiency: 82,
          experience: '2+ years',
          projectsCount: 10,
          endorsements: 8,
          achievements: [
            'Containerization of applications',
            'Multi-stage Docker builds',
            'Docker Compose orchestration'
          ],
          certifications: []
        },
        {
          id: 21,
          name: 'Git & GitHub',
          category: 'DevOps',
          icon: 'GitBranch',
          gradient: 'from-cosmic-purple to-primary',
          proficiency: 94,
          experience: '3+ years',
          projectsCount: 30,
          endorsements: 20,
          achievements: [
            'Version control workflow expert',
            'Git branching strategies',
            'CI/CD pipeline setup'
          ],
          certifications: ['Git Professional']
        },
        {
          id: 22,
          name: 'AWS',
          category: 'DevOps',
          icon: 'Cloud',
          gradient: 'from-warning to-primary',
          proficiency: 78,
          experience: '1+ years',
          projectsCount: 5,
          endorsements: 4,
          achievements: [
            'EC2 and S3 deployment',
            'Lambda functions development',
            'CloudFormation templates'
          ],
          certifications: []
        }
      ]
    },
    {
      name: 'Tools & Others',
      description: 'Development tools and additional technologies',
      skills: [
        {
          id: 23,
          name: 'VS Code',
          category: 'Tools',
          icon: 'Code',
          gradient: 'from-primary to-electric-cyan',
          proficiency: 96,
          experience: '3+ years',
          projectsCount: 50,
          endorsements: 25,
          achievements: [
            'Advanced debugging techniques',
            'Extension development',
            'Workspace optimization'
          ],
          certifications: []
        },
        {
          id: 24,
          name: 'Figma',
          category: 'Tools',
          icon: 'Palette',
          gradient: 'from-energetic-coral to-primary',
          proficiency: 85,
          experience: '2+ years',
          projectsCount: 20,
          endorsements: 12,
          achievements: [
            'UI/UX design collaboration',
            'Component system design',
            'Prototyping and wireframing'
          ],
          certifications: []
        },
        {
          id: 25,
          name: 'Postman',
          category: 'Tools',
          icon: 'Send',
          gradient: 'from-warning to-cosmic-purple',
          proficiency: 90,
          experience: '3+ years',
          projectsCount: 25,
          endorsements: 15,
          achievements: [
            'API testing automation',
            'Collection and environment setup',
            'Mock server creation'
          ],
          certifications: []
        }
      ]
    }
  ];

  // Filter and search logic
  const filteredCategories = useMemo(() => {
    let filtered = skillsData?.map(category => ({
      ...category,
      skills: category?.skills?.filter(skill => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
          skill?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
          skill?.category?.toLowerCase()?.includes(searchTerm?.toLowerCase());

        // Category filter
        const matchesCategory = activeFilter === 'all' || 
          (activeFilter === 'frontend' && category?.name === 'Frontend') ||
          (activeFilter === 'backend' && category?.name === 'Backend') ||
          (activeFilter === 'mobile' && category?.name === 'Mobile') ||
          (activeFilter === 'ai' && category?.name === 'AI & Machine Learning') ||
          (activeFilter === 'database' && category?.name === 'Database') ||
          (activeFilter === 'devops' && category?.name === 'DevOps') ||
          (activeFilter === 'tools' && category?.name === 'Tools & Others');

        // Proficiency filters
        const matchesProficiency = 
          (activeFilter === 'expert' && skill?.proficiency >= 90) ||
          (activeFilter === 'advanced' && skill?.proficiency >= 75) ||
          (activeFilter === 'intermediate' && skill?.proficiency >= 60) ||
          (!['expert', 'advanced', 'intermediate']?.includes(activeFilter));

        return matchesSearch && (matchesCategory || matchesProficiency);
      })
    }))?.filter(category => category?.skills?.length > 0);

    return filtered;
  }, [activeFilter, searchTerm]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Skills Laboratory - Paramaguru Portfolio</title>
        <meta name="description" content="Interactive showcase of technical expertise with modern frameworks, AI integration, and full-stack development capabilities. Explore React, Django, Flutter & AI skills." />
        <meta name="keywords" content="React, Django, Flutter, Python, JavaScript, TypeScript, AI, Machine Learning, Full Stack Developer" />
        <meta property="og:title" content="Skills Laboratory - Paramaguru Portfolio" />
        <meta property="og:description" content="Interactive showcase of technical expertise with modern frameworks and AI integration" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <motion.main
          variants={pageVariants}
          initial="initial"
          animate="animate"
          className="pt-16"
        >
          {/* Background Effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-16">
            <SkillHeader />
            
            <SkillFilter 
              categories={skillsData}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Skills Categories */}
            <div className="space-y-8">
              {filteredCategories?.length > 0 ? (
                filteredCategories?.map((category, index) => (
                  <SkillCategory
                    key={category?.name}
                    category={category}
                    skills={category?.skills}
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="glass-effect rounded-xl p-12 border border-border max-w-md mx-auto">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No Skills Found
                    </h3>
                    <p className="text-text-secondary mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <button
                      onClick={() => {
                        setActiveFilter('all');
                        setSearchTerm('');
                      }}
                      className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                    >
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default Skills;