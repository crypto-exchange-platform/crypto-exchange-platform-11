export const footerParticlesConfig = {
  particles: {
    number: {
      value: 40,
      density: { enable: true, value_area: 800 },
    },
    color: { value: '#06b6d4' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.3,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false },
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 0.6,
      direction: 'top',
      random: false,
      straight: false,
      out_mode: 'out',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
};
 