"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  User,
  MessageSquare,
  Calendar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import Lanyard from "@/components/LanyardCard";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "omar.madkour.com@gmail.com",
      link: "mailto:omar.madkour.com@gmail.com",
      description: "Send me an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+20 1090135044",
      link: "tel:+20123456789",
      description: "Available Every Time"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Benha, Egypt",
      link: "#",
      description: "Available for remote work worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/oommmaarr",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omar-madkour-268a53253",
      color: "hover:text-blue-400"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Twitter",
      url: "https://www.facebook.com/omar.m.madkour/",
      color: "hover:text-sky-400"
    }
  ];

  return (
    <div className="min-h-screen py-20 mt-20 px-4 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl overflow-x-hidden">
        
        {/* Header */}
        <motion.div
          className="text-center flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-2xl font-merapro md:text-4xl  font-bold ">
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <div className="bg-orange-300  w-24 mt-2 h-1 text-center"></div>
          <p className="text-gray-300 lg:text-sm  font-serif text-xs  mt-5 w-full mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            I'm always excited to take on new challenges and create amazing experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 lg:gap-12 items-center grid-cols-1 justify-center">
          
          {/* Lanyard Component */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 lg:h-full h-9/12 flex flex-col overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <MessageSquare className="lg:w-6 lg:h-6 w-4 h-4 text-orange-500" />
              </div>
              <h2 className="lg:text-2xl text-xl font-bold text-white">My Card</h2>
            </div>

            <div className="lg:flex-1 flex items-center justify-center">
              <div className="relative z-0 w-full h-full flex justify-center items-center transform scale-100 origin-center touch-none select-none">
                <Lanyard position={[0, 0, 25]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </motion.div>


          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl md:p-8 p-4 border border-white/10">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all duration-300">
                      <div className="text-orange-500 lg:w-6 lg:h-6 w-4 h-4 text-center flex items-center justify-center">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-white lg:text-2xl md:text-xl text-sm font-semibold">{item.title}</h4>
                      <p className="text-orange-400 lg:text-lg md:text-xl text-[12px] font-medium">{item.value}</p>
                      <p className="text-gray-400 lg:text-sm md:text-sm  text-[10px]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="lg:text-2xl text-xl font-bold text-white">Availability</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 lg:text-md md:text-xl text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Currently Available for Projects</span>
                </div>
                <p className="text-gray-300 md:text-sm text-[10px]">
                  I typically respond within 24 hours. For urgent matters, feel free to call.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="lg:text-2xl text-xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`md:p-4 p-2 bg-white/5 rounded-lg hover:bg-white/10 text-white ${social.color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-400 d:text-sm text-[10px] mt-4">
                Let's connect and stay in touch!<br/> Follow me for updates on my latest projects and insights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}