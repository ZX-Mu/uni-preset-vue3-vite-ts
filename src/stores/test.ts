/**
 * @Author: zhaoxin
 * @Date: 2024/3/27 17:03
 * @Description: desc
 */

import { defineStore } from 'pinia'

type Content = {
    title: string,
    [propName: string]: any
}

export const useTestStore = defineStore('testStore', {
    state: () => ({
        content: {
            title: '测试测试啊',
        } as Content
    }),
    getters: {
        title: (state) => {
            return state.content.title
        }
    },
    actions: {
        updateContent(key: string, value: any) {
            console.log('update content key(%s), value(%s)', key, value)
            this.content[key] = value
        }
    }
})
