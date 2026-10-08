import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize lightweight scroll reveal observer matching live website behavior
if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed', 'visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  const initRevealElements = () => {
    if (isReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .section-reveal').forEach((el) => {
        el.classList.add('is-revealed', 'visible');
      });
      return;
    }

    document.querySelectorAll('.reveal-on-scroll:not(.is-revealed), .section-reveal:not(.visible)').forEach((el) => {
      revealObserver.observe(el);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRevealElements);
  } else {
    initRevealElements();
  }

  // Observe dynamically mounted elements during client-side route transitions
  const mutationObserver = new MutationObserver(() => {
    initRevealElements();
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);