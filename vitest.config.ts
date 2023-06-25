import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    name: 'Bug Friends',
    reporters: ['verbose', 'html'],
    passWithNoTests: true,
    coverage: {
      enabled: true,
    },
  },
});
