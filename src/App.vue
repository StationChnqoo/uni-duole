<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	import { useCounterStore } from './stores'

	onLaunch(() => {
		console.log("App Launch");
		
	});
	onShow(() => {
		console.log("App Show");
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>
<style>
	@import "./wxcomponents/vant/common/index.wxss";
</style>