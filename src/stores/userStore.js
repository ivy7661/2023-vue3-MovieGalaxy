import { defineStore } from 'pinia';
import { addDays } from '@/utils/helpers';

export default defineStore('userStore', {
  state: () => ({
    user: null
  }),
  actions: {
    setUserCookie(userId, token) {
      const getDateTime = addDays(new Date(), 2);
      document.cookie = `userToken=${token}; expires=${new Date(getDateTime)}; path=/`;
      document.cookie = `userId=${userId}; expires=${new Date(getDateTime)}; path=/`;
    }
  },
  setUser(newUser) {
    // console.log('newUser', newUser);
    this.user = {
      ...newUser
    };

    // this.reGetAllData();
  }
});
