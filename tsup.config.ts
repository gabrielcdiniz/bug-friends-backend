import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src"],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: !options.watch,
}));
