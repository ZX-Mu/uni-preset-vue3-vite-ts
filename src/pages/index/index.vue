<template>
    <view class="content h-[100vh]">
        <image class="logo" src="/static/logo.png" />
        <view class="mt-[20rpx]">
            <text class="title">{{ title }}</text>
        </view>
        <button class="mt-[32rpx]" @click="toPage">to new page</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')

const toPage = () => {
    console.log('to new page >')
    uni.navigateTo({
        url: '/pages/test/index',
    })
}
</script>

<style lang="scss" setup>
.content {
    @apply flex flex-col items-center justify-center;
    background: $uni-bg-color-grey;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin: 0rpx auto;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
