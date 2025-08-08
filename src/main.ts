import App from './App'
import { createSSRApp } from 'vue';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export function createApp() {
	const app = createSSRApp(App);
	const pinia = createPinia()
	pinia.use(piniaPluginPersistedstate)
	app.use(pinia as any);
	return {
		app,
		pinia, // 此处必须将 Pinia 返回
	};
}
