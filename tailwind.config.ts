import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'blue': {
        1000: '#091115',
        500: '#eaeef0',
        600: '#abbbc3',
        700: '#587886',
        800: ' #2e5668',
        900: '#1c343e',
      },
      'green': {
        100: '#f4faf9',
        300: '#d5ebe8',
        600: '#aad6d1',
        900: ' #95ccc5',
      },
      'red': {
        100: '#fff3f2',
        300: '#ffcfcb',
        600: '#ff9e96',
        900: '#ff867c',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config

// --blue-1000: #091115;
// --blue-500: #eaeef0;
// --blue-600: #abbbc3;
// --blue-700: #587886;
// --blue-800: #2e5668;
// --blue-900: #1c343e;
// --green-100: #f4faf9;
// --green-300: #d5ebe8;
// --green-600: #aad6d1;
// --green-900: #95ccc5;
// --red-100: #fff3f2;
// --red-300: #ffcfcb;
// --red-600: #ff9e96;
// --red-900: #ff867c;