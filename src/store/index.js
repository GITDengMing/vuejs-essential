import Vue from 'vue';
import Vuex from 'vuex';
import ls from '../utils/localStorage';
import router from '../router';

Vue.use(Vuex);

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth')
  //auth : false
}
;
const mutations = {
  UPDATE_USER(state, user) {
    state.user = user;
    ls.setItem('user', user);
  },
  UPDATE_AUTH(state, auth) {
      state.auth = auth;
      ls.setItem('auth', auth);
  }
};

const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user);
    commit('UPDATE_AUTH', true);
    router.push('/');
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name : 'Home', params : { logout :true }})
  }
};

const store = new Vuex.Store({
  state,//共享的状态，不能直接更改状态，但是可以像 store.state.user 这样访问一个状态
  mutations,//更改状态的方法，我们可以在这里更改状态，调用方法是像 store.commit('UPDATE_USER', user) 
            //这样提交一个事件类型，这里不能包含异步操作
  actions //类似于 mutations，但我们不在这里直接更改状态，而是提交前面的 mutation，
          //调用方法是像 store.dispatch('login') 这样分发一个事件，这里可以包含异步操作
});

export default store;
