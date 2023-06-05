import { useEffect, useState } from 'react';

export const useInterval = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [names] = useState(['Jufa-Developer', 'FullStack Developer']);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % names.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [names]);

  return {
    currentIndex,
    scrolled,
    names
  };
};
