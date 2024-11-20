import { defineConfig } from "vite";

export default defineConfig({
	build: {
		sourcemap: true,
		rollupOptions: {
			input: {
				index: "index.html",
				gifts: "src/pages/gifts.html",
				contact: "src/pages/contacts.html",
			},
		},
	},
	base: "/maria2721-JSFE2024Q4/christmas-shop/",
});
