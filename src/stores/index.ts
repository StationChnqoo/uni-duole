import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}
	return { count, doubleCount, increment };
}, {
	persist: {
		storage: {
			getItem: (key : string) => uni.getStorageSync(key),
			setItem: (key : string, value : string) => uni.setStorageSync(key, value)
		},
	},
});

export const useDuoleStore = defineStore(
	"duole",
	() => {
		const defaultGame = ref("gj");
		const isHawk = ref(false);
		const autoResume = ref(false);
		return { defaultGame, isHawk, autoResume };
	},
	{
		persist: {
			storage: {
				getItem: (key : string) => uni.getStorageSync(key),
				setItem: (key : string, value : string) => uni.setStorageSync(key, value)
			},
		},
	}
);