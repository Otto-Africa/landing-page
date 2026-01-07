import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'animate-in'
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            // Optionally unobserve after animation
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          } else if (!options.once) {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [threshold, rootMargin, animationClass, options.once]);

  return ref;
};

