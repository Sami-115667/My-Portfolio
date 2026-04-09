import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const recipientEmail = 'shamsurrahman07052001@gmail.com';

  const contactInfo = [
    { 
      icon: <Mail size={24} />, 
      title: 'Email', 
      value: recipientEmail,
      link: `mailto:${recipientEmail}`
    },
    { 
      icon: <Phone size={24} />, 
      title: 'Phone', 
      value: '+8801866362585',
      link: 'tel:+8801866362585'
    },
    { 
      icon: <MapPin size={24} />, 
      title: 'Location', 
      value: 'Dhaka, Bangladesh',
      link: 'https://www.google.com/maps/place/Dhaka/data=!4m2!3m1!1s0x3755b8b087026b81:0x8fa563bbdd5904c2?sa=X&ved=1t:242&ictx=111'
    },
  ];

  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      name: 'GitHub', 
      link: 'https://github.com/Sami-115667' 
    },
    { 
      icon: <Linkedin size={24} />, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/md-shamsur-rahman-sami-0a677b246/' 
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formState.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formState.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject || 'New message from portfolio website',
      message: formState.message,
      _subject: formState.subject || 'New message from portfolio website',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: unknown) {
      setSubmitError(
        error instanceof Error ? error.message : 'Unable to send the message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const socialItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={formVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 p-4 rounded-lg mb-6"
              >
                <p className="font-medium">Thanks for reaching out! I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-error-100 dark:bg-error-900 text-error-800 dark:text-error-200 p-4 rounded-lg mb-6"
                  >
                    <p className="font-medium">{submitError}</p>
                  </motion.div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`input ${formErrors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-error-600 dark:text-error-400">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`input ${formErrors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-error-600 dark:text-error-400">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="input"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input resize-none ${formErrors.message ? 'border-error-500 focus:ring-error-500' : ''}`}
                    placeholder="I'd like to discuss a potential project..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">{formErrors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2" size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            variants={infoVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:bg-gray-50 dark:hover:bg-dark-600 p-3 rounded-lg transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <motion.div
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialItemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span className="ml-2 font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.p 
                className="mt-8 text-center text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                I'm currently available for freelance work and full-time positions.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;