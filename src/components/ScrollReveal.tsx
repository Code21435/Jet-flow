import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.section:not(.hero-section) h1, .section:not(.hero-section) h2, .section:not(.hero-section) h3, .card, .human-card, .transformation-item, .grid-2-services > div, .grid-2-contact > div, .reveal-element'
      );
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
