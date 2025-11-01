
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, Award, Target, Eye, Heart, Users, Trophy, BookOpen, Microscope, Palette, Globe, MapPin, Mail, Phone, Download, ZoomIn, ChevronRight, Star, Sparkles } from 'lucide-react';

// Custom Hook for Intersection Observer
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};