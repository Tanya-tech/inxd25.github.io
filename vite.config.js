import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    watch: {
      ignored: ['**/*.csv', '**/*.xlsx', '**/*.crdownload', '**/*.tmp', '**/scratch/**']
    }
  }
});
