module.exports = {
    siteTitle: 'Alyssa Durante | UX Engineer',
    siteDescription:
      'Alyssa Durante is an NYC-based user experience engineer who specializes in modern, programmatically-efficient applications',
    siteKeywords:
      'Alyssa Durante, Alyssa, Durante, lyss-js, ux engineer, front-end engineer, web developer, javascript',
    siteUrl: 'https://alyssadurante.com',
    siteLanguage: 'en_US',
  
  
    name: 'Alyssa Durante',
    location: 'New York, NY',
    email: 'alyssaduranteinc@gmail.com',
    socialMedia: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alyssa-durante/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/lyss-js/',
      },
    ],
  
    navLinks: [
      {
        name: 'About',
        url: '#about',
      },
      {
        name: 'Experience',
        url: '#jobs',
      },
      {
        name: 'Work',
        url: '#projects',
      },
      {
        name: 'Contact',
        url: '#contact',
      },
    ],
    navHeight: 100,
  
    greenColor: '#64ffda',
    navyColor: '#ffffff',
    darkNavyColor: '#ffffff',
  
    srConfig: (delay = 200) => ({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
  };
  