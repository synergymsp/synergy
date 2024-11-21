const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-bg': "url('/bg/ab-bg.jpg')",
        'services-sec-bg': "url('/bg/sr-bg.png')",
        'services-bg': "url('/bg/sr-box-bg.jpg')",
        'counter-sec': "url('/bg/counter-bg.webp')",
        'faq-sec': "url('/bg/faq-bg-1.jpg')",
        'faq-sec-two': "url('/bg/faq-bg-2.jpg')",
        'cta-sec': "url('/bg/cta-sec-bg.webp')",
        'process-sec': "url('/bg/process-bg-1.jpg')",
        'footer-sec': "url('/shape/bg-footer-1-1.jpg')",
        'services-details-img': "url('/bg/services-details-bg.webp')",
        'quote-box': "url('/bg/quote-box.webp')",
      },
      colors: {
        theme: '#0E5AF2',
        title: '#1A1A1A',
        body: '#878D97',
        smoke: '#EFF1F5',
        secondary: '#EEF2FB',
        black: '#000000',
        white: '#ffffff',
        yellow: '#fec624',
        success: '#28a745',
        error: '#dc3545',
        border: '#E0E0E0',
      },
      screens: {
        sm2: '400px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      spacing: {
        'container-gutters': '30px', 
      },
      boxShadow: {
        'dropdown-shadow': 'rgba(0, 0, 0, 0.09) 0px 10px 60px 0px, rgba(231, 13, 60, 0.004) 0px 3px 0px 0px',
        'shadow1': 'rgba(173, 136, 88, 0.5) 0px 0px 20px -8px',
        'shadow2': '0px 7px 37px rgba(96, 125, 185, 0.11)',
        'shadow3': '0px 18px 13px rgba(234, 240, 250, 0.5)',
        'shadow4': '0px 10px 31px rgba(169, 177, 193, 0.17)',
        'shadow5': '0px 10px 31px rgba(169, 177, 193, 0.07)',
        'shadow6': '0px 0px 77px 10px rgba(170, 170, 170, 0.13)',
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
};

export default config;
