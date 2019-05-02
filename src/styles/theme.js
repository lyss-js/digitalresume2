const theme = {
  colors: {
    dark: '#2d333a',
    main: '#3a4149',
    darkNavy: '#020c1b',
    navy: '#0a192f',
    lightNavy: '#172a45',
    darkGrey: '#323232',
    mediumGrey: '#2d3952',
    blueGrey: '#293d5a',
    grey: '#4c5772',
    lightGrey: '#8f9ba6',
    slate: '#8f9ba6',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    offWhite: '#dce7ff',
    white: '#f9f9f9',
    pink: '#FF647F',
    orange: '#FF9E64',
    green: '#64ffda',
    blue: '#71AFFF',
    darkestGrey: '#23282c',
    highlight: 'rgba(41, 61, 90, 0.99)',
    transGreen: 'rgba(255, 255, 255, 0.5)',
    transNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNav: '#23282c',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    Helvetica: 'HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif' 

  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '2px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
