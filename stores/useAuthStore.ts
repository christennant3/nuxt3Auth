import { type } from 'os';
import { defineStore } from 'pinia';


interface User {
  id: number;
  firstname: string;
  email: string;
}

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {


  state: () => ({
    token: null as string | null,
    // user: {
    //   id: 0,
    //   firstname: '',
    //   email: '',
    //   token: null as string | null,
    // } as User,


  }),

  actions: {
    setToken(token : string) {
      this.token = token
    },

    setUser(user: User) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user)) 
    }

  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  }
  
})