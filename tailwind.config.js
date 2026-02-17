/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f7ad1f',
          dark: '#e0831f'
        },
        accent: {
          blue: '#4a57a8'
        },
        base: {
          DEFAULT: '#0b0d1b',
          secondary: '#15172e',
          card: '#1d2242'
        },
        border: '#2a3060',
        muted: '#9ca3af'
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#d1d5db',
        muted: '#9ca3af'
      },
      fontFamily: {
        display: ['Maven Pro', 'system-ui', 'sans-serif'],
        ui: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1' }],
        'h1': ['64px', { lineHeight: '1.1' }],
        'h2': ['36px', { lineHeight: '1.2' }],
        'h3': ['30px', { lineHeight: '1.25' }],
        'body-lg': ['18px', { lineHeight: '1.56' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.43' }],
        'caption': ['12px', { lineHeight: '1.33' }]
      },
      backgroundImage: {
        'gradient-degra': 'linear-gradient(135deg, #e0831f 0%, #f7ad1f 100%)',
        'gradient-linear': 'linear-gradient(180deg, #1d2242 0%, #101429 100%)',
        'gradient-hero': 'linear-gradient(180deg, transparent 0%, #0b0d1b 100%)'
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)'
      },
      backgroundColor: {
        'brand/10': 'rgba(247, 173, 31, 0.1)'
      }
    }
  },
  plugins: []
};
