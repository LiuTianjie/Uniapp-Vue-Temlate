import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfo', () => {
  const data = ref({ userName: '测试用户' })
  const login = (info) => {
    data.value = info
  }
  const logOut = () => {
    data.value = {
      userName: ''
    }
  }
  return { data, login, logOut }
}, {
  unistorage: true,
})