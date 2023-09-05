import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solid()],
  vite: {
    optimizeDeps: {
      esbuildOptions:{ 
        plugins: [esbuildFlowPlugin()]
      }
    },
    plugins: [
      flowPlugin()
    ]
  }
});
