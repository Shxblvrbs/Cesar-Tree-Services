module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#00ffff',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.png')",
        // banner: "url('./assets/bg-video.mp4')",
        services: "url('./assets/services.png')",
      },
      backgroundSize: {
        services: '90%',
      },
      zIndex: {
        site: -2,
      },
    },
  },
  plugins: [],
};
