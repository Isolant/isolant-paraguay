import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        lightBlue: '#15BEF0',
        darkBlue: '#263A48',
        secondary: '#EE2E27',
      },
    },
  },
  plugins: [],
}
export default config
