import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
   
  
  plugins: [{
   
    // Enable the Astro Sass plugin
    // This plugin allows Astro to process SCSS files
    name: 'astro-sass',
    options: {
      // Specify the entry point for your SCSS files
      // Adjust the path as per your project structure
      entry: './src/styles/main.scss'
    }
  }]
});