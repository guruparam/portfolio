import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import ProfileImage from '../../../../assets/images/profile-image.jpeg';

const AboutPreview = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: 'GraduationCap',
      title: 'Education',
      description: 'B.Sc. Botany from Annamalai University (2021-2024)',
      color: 'text-cosmic-purple'
    },
    {
      icon: 'Code',
      title: 'Experience',
      description: 'Full-Stack Developer at Mindreams Infotech',
      color: 'text-primary'
    },
    {
      icon: 'Brain',
      title: 'Specialization',
      description: 'AI Integration & Modern Web Technologies',
      color: 'text-success'
    },
    {
      icon: 'Rocket',
      title: 'Mission',
      description: 'Building scalable solutions for tomorrow',
      color: 'text-energetic-coral'
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
              >
                <Icon name="User" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">About Me</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-foreground"
              >
                From Botany to
                <span className="block text-gradient"> Tech Innovation</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary leading-relaxed"
              >
                My unique journey from studying the natural world to mastering digital ecosystems 
                brings a fresh perspective to software development. I combine analytical thinking 
                with creative problem-solving to build applications that truly make a difference.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights?.map((item, index) => (
                <motion.div
                  key={item?.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg glass-effect border border-border hover:border-primary/30 transition-all duration-300 group hover-lift"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-background/50 ${item?.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={item?.icon} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm">{item?.title}</h3>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item?.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
                className="btn-morph border-primary text-primary hover:bg-primary/10"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={18}
              >
                Learn More About Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-cosmic-purple to-energetic-coral rounded-2xl opacity-20 blur"></div>
              
              <div className="relative bg-background rounded-2xl p-1">
                <div className="aspect-[4/5] overflow-hidden rounded-xl">
                  <Image
                  src={ProfileImage}
                  alt="Paramaguru - Full Stack Developer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 rounded-lg glass-effect border border-success/30 bg-success/10"
              >
                <Icon name="Code" size={24} className="text-success" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 p-3 rounded-lg glass-effect border border-primary/30 bg-primary/10"
              >
                <Icon name="Zap" size={24} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;