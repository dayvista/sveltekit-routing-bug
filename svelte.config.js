import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter()

		// prerender: {
		// 	entries: ['*', '/test-1', '/test-2']
		// }
	}
}

export default config
