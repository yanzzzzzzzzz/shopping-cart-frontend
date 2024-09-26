import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userName: '',
    id: 0,
  }),
  actions: {
    setLoggedIn(status: boolean) {
      this.isLoggedIn = status;
    },
    setUserName(userName: string) {
      this.userName = userName;
    },
    setId(id: number) {
      this.id = id;
    },
  },
});
