import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        ${isVisible ? `animate-${animation}` : 'animate-hidden'}
        ${delay ? `delay-${delay}` : ''}
      `}
    >
      {children}
    </div>
  );
}