/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12161C',     
        panel: '#1A2028',    
        line: '#2A313D',     
        paper: '#EDEEF0',  
        muted: '#8891A0',    
        amber: '#E8A33D',    
        'amber-dim': '#B9812E',
        ok: '#6FCF97',       
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
