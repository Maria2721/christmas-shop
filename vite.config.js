import { defineConfig } from "vite";

export default defineConfig({
	build: {
		sourcemap: true,
		rollupOptions: {
			input: {
				index: "index.html",
				gifts: "src/pages/gifts.html",
			},
		},
	},
	base: "/",
});
