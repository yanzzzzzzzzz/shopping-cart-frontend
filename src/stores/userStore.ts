import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userName: '',
  }),
  actions: {
    setLoggedIn(status: boolean) {
      this.isLoggedIn = status;
    },
    setUserName(userName: string) {
      this.userName = userName;
    },
  },
});
