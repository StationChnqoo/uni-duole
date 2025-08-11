<script setup lang="ts">
	import { ref } from 'vue'
	import { useCounterStore, useDuoleStore } from '@/stores';
	const title = ref('Hello')
	const counterStore = useCounterStore();
	const duoleStore = useDuoleStore();
</script>

<template>
	<view class="content">
		<text>保皇</text>
	</view>
</template>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		background-color: #f0f0f0;
		flex: 1;
		height: 100vh;
	}
</style>