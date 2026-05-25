export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#08090C',
        midnight: '#0A0F1C',
        navy: '#0E1B33',
        navy2: '#13223E',
        gold: '#C9A961',
        goldDim: '#A8884A',
        pearl: '#F4F5F7',
        fog: '#9CA3AF',
        ash: '#2E323B'
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
