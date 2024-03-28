<template>
    <view class="content h-[100vh]">
        <view class="mt-[200rpx]">
            <text class="text-[32rpx]">title: {{ title }}</text>
        </view>
        <view class="flex mt-[30rpx]">
            <button @click="update">更新值</button>
            <button @click="retry">恢复值</button>
        </view>
        <button class="mt-[30rpx]" @click="toPage">back index</button>
    </view>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import {useTestStore} from '@/stores/test'

const store = useTestStore()

const title = ref(store.title)

const update = () => {
    store.updateContent('title', '啊哈哈')
}
const retry = () => {
    store.$reset()
}
watch(() => store.title, (val) => {
    title.value = val
})
const toPage = () => {
    console.log('to index >')
    uni.navigateTo({
        url: '/pages/index/index'
    })
}


</script>

<style lang="scss" setup>

.content {
    @apply flex flex-col items-center;
}

</style>
