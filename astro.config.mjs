// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  

  integrations: [
    
    icon({
      include: {
        mdi: ['whatsapp', 'instagram', 'facebook'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});