import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'paramagurusrm@gmail.com',
      description: 'Send me an email anytime',
      action: 'mailto:paramagurusrm@gmail.com',
      color: 'text-primary'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+91 9344242785',
      description: 'Call me for urgent matters',
      action: 'tel:+919344242785',
      color: 'text-success'
    },
    {
      icon: 'MapPin',
      title: 'Location',
      value: 'Chennai, Tamil Nadu',
      description: 'Available for remote work',
      action: '#',
      color: 'text-cosmic-purple'
    },
    {
      icon: 'Calendar',
      title: 'Schedule',
      value: 'Book a Meeting',
      description: 'Let\'s discuss your project',
      action: '#',
      color: 'text-energetic-coral'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Work <span className="text-gradient">Together</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects, 
            full-time opportunities, and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactMethods?.map((method, index) => (
                <motion.a
                  key={method?.title}
                  href={method?.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-6 rounded-xl glass-effect border border-border hover:border-primary/30 transition-all duration-300 group hover-lift"
                >
                  <div className={`p-3 rounded-lg bg-background/50 ${method?.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={method?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg">{method?.title}</h3>
                    <p className="text-text-secondary font-medium">{method?.value}</p>
                    <p className="text-text-secondary text-sm">{method?.description}</p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-text-secondary group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl glass-effect border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/paramaguru' },
                  { name: 'GitHub', icon: 'Github', url: 'https://github.com/paramaguru' },
                  { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/paramaguru' },
                  { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/paramaguru' }
                ]?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-effect border border-border hover:border-primary/50 transition-all duration-300 group hover-lift"
                  >
                    <Icon 
                      name={social?.icon} 
                      size={20} 
                      className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl glass-effect border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Input
                label="Subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData?.subject}
                onChange={handleInputChange}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-success/10 border border-success/20 text-success text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full btn-morph bg-energetic-coral hover:bg-energetic-coral/90 text-white border-0 shadow-neon-coral"
                iconName="Send"
                iconPosition="right"
                iconSize={18}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;