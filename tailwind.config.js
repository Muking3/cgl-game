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
      rose: {
        '50': '#fff0f8',
        '100': '#ffe3f4',
        '200': '#ffc6e9',
        '300': '#ff98d6',
        '400': '#ff58b8',
        '500': '#ff279a',
        '600': '#ff0f7b',
        '700': '#df0058',
        '800': '#b80049',
        '900': '#980340',
        '950': '#5f0022',
      },
      poppy: {
        '50': '#fff8eb',
        '100': '#fdeac8',
        '200': '#fbd28c',
        '300': '#fab54f',
        '400': '#f89b29',
        '500': '#f2760e',
        '600': '#d65409',
        '700': '#b2370b',
        '800': '#902a10',
        '900': '#772310',
        '950': '#440f04',
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