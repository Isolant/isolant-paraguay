import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['var(--font-poppins-regular)'],
        'poppins-medium': ['var(--font-poppins-medium)'],
        'poppins-semibold': ['var(--font-poppins-semibold)']
      },
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
