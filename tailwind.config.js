// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwindcss-animate")],
// }



/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  container: {
    center: 'true',
    padding: '2rem',
    screens: {
      '2xl': '1400px'
    }
  },
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      salem: {
        '50': '#f3faf4',
        '100': '#e3f5e6',
        '200': '#c8eacf',
        '300': '#9cd9a9',
        '400': '#6abe7c',
        '500': '#45a259',
        '600': '#338244',
        '700': '#2c693a',
        '800': '#275431',
        '900': '#21462a',
        '950': '#0e2513'
      },
      thunderbird: {
        '50': '#fff5ec',
        '100': '#ffe8d3',
        '200': '#ffcda6',
        '300': '#ffa96e',
        '400': '#ff7a33',
        '500': '#ff550c',
        '600': '#f43902',
        '700': '#d02804',
        '800': '#a0200c',
        '900': '#811e0d',
        '950': '#460a04'
      },
      spring: {
        '50': '#eefff8',
        '100': '#d7fff0',
        '200': '#b1ffe2',
        '300': '#74ffcc',
        '400': '#31f7ae',
        '500': '#07f49e',
        '600': '#00bb76',
        '700': '#03925e',
        '800': '#09724d',
        '900': '#095e42',
        '950': '#003523',
      },
      kingfisher: {
        '50': '#f9f5ff',
        '100': '#f2e7ff',
        '200': '#e7d3ff',
        '300': '#d4b1ff',
        '400': '#b97fff',
        '500': '#9f4ffd',
        '600': '#892cf1',
        '700': '#751bd5',
        '800': '#651cad',
        '900': '#53188b',
        '950': '#42047e',
      },
      base: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'bg-accent-primary': 'var(--color-bg-accent-primary)',
        'bg-accent-secondary': 'var(--color-bg-accent-secondary)'
      },
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      }
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes: {
      'accordion-down': {
        from: {
          height: '0'
        },
        to: {
          height: 'var(--radix-accordion-content-height)'
        }
      },
      'accordion-up': {
        from: {
          height: 'var(--radix-accordion-content-height)'
        },
        to: {
          height: '0'
        }
      }
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out'
    },
    screens: {
      mobilesm: '330px',
      tablet: '640px',
      laptop: '1024px',
      laptop2: '1079px',
      desktop: '1280px',
      desktoplg: '1510px'
    },
    spacing: {
      '5%': '5%',
      '95%': '95%',
      '70%': '70%',
      '55%': '55%',
      '90%': '90%',
      '80%': '80%',
      '20%': '20%',
      '18%': '18%',
      '16%': '16%',
      '10%': '10%',
      '14%': '14%',
      '47%': '47%'
    }
  }
};
export const plugins = [require("tailwindcss-animate")];