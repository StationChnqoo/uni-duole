<script setup lang="ts">
	import { ref } from 'vue'
	import { useCounterStore, useDuoleStore } from '@/stores';
	const title = ref('Hello')
	const counterStore = useCounterStore();
	const duoleStore = useDuoleStore();
	const onClick = () => {
		counterStore.increment();
		duoleStore.isHawk = !duoleStore.isHawk
	}

	const onGamePress = (game : string) => {
		duoleStore.defaultGame = game
	}

	const onAutoResumePress = (e : any) => {
		duoleStore.autoResume = e.detail.value;
	}
</script>

<template>
	<view class="content">
		<view class="card">
			<text class="title">请选择游戏</text>
			<view style="height: 12rpx;" />
			<view class="cards">
				<view class="game" :class="duoleStore.defaultGame == 'gj' ? 'checked' : 'unchecked'" @click="onGamePress('gj')">
					<text class="game-title">够级（带🦅）</text>
					<view style="height: 10rpx;" />
					<text class="game-message">4副牌、6副牌</text>
				</view>
				<view style="width: 12rpx;" />
				<view class="game" :class="duoleStore.defaultGame == 'bh' ? 'checked' : 'unchecked'" @click="onGamePress('bh')">
					<text class="game-title">保皇（带💣）</text>
					<view style="height: 10rpx;" />
					<text class="game-message">潍坊保皇、疯狂保皇</text>
				</view>
			</view>
		</view>
		<view style="height: 24rpx;" />
		<view class="card">
			<text class="title">设置</text>
			<view style="height: 12rpx;" />
			<view class="setting-line">
				<text class="setting-label">自动恢复牌局</text>
				<switch :checked="duoleStore.autoResume" @change="onAutoResumePress" />
			</view>
		</view>
		<view style="height: 24rpx;" />
		<button class="start-button">快速开始</button>
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

		.card {
			border-radius: 24rpx;
			padding: 16rpx 24rpx;
			background-color: white;
			flex-direction: column;
			display: flex;

			.title {
				font-size: 32rpx;
				color: #333;
				font-weight: 500;
			}

			.setting-line {
				flex-direction: row;
				align-items: center;
				display: flex;
				justify-content: space-between;
			}

			.setting-label {
				font-size: 32rpx;
				color: #333;
			}

			.cards {
				display: flex;

				.game {
					flex: 1;
					border-radius: 10rpx;
					padding: 12rpx 24rpx;

					.game-message {
						font-size: 28rpx;
						color: #666;
					}

					.game-title {
						font-size: 32rpx;
						color: #333;
					}

				}

				.game.unchecked {
					border: 1px solid #eee;
				}

				.game.checked {
					border: 1px solid #05be22;
				}
			}
		}

		.start-button {
			width: 100%;
			background-color: #05be22;
			color: #fff;
		}
	}
</style>