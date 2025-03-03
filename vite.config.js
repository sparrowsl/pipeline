import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: ['e26c-2c0f-2a80-4f3-ec10-ad7e-c531-b278-aeb.ngrok-free.app']
	}
});
