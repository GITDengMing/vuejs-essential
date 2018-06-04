import Vue from 'vue';
import Vuex from 'vuex';
import ls from '../utils/localStorage';
import router from '../router';
import * as moreActions from './actions'
import * as moreGetters from './getters'

Vue.use(Vuex);

const state = {
  user: ls.getItem('user'),
  auth: ls.getItem('auth'),
  //auth : false
  // 所有文章状态
  articles: ls.getItem('articles'),
  searchValue: '',
  origin: location.origin
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
  },
   // 更改所有文章的事件类型
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
    ls.setItem('articles', articles)
  },
  // 更新搜索值的事件类型
  UPDATE_SEARCH_VALUE(state, searchValue) {
    state.searchValue = searchValue
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
  },
  updateUser({ commit }, user) {
    const stateUser = state.user
    if (stateUser && typeof stateUser === 'object') {
      // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
      user = { ...stateUser, ...user }
    }
    commit('UPDATE_USER', user)
  },
  ...moreActions
};

// 添加 getters
const getters = {
  getArticleById: (state, getters) => (id) => {
    let articles = getters.computedArticles

    if (Array.isArray(articles)) {
      articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
      return articles.length ? articles[0] : null
    } else {
      return null
    }
  },
  // 混入 moreGetters, 你可以理解为 getters = Object.assign(getters, moreGetters)
  ...moreGetters
}

const store = new Vuex.Store({
  state,//共享的状态，不能直接更改状态，但是可以像 store.state.user 这样访问一个状态
  getters,
  mutations,//更改状态的方法，我们可以在这里更改状态，调用方法是像 store.commit('UPDATE_USER', user) 
            //这样提交一个事件类型，这里不能包含异步操作
  actions //类似于 mutations，但我们不在这里直接更改状态，而是提交前面的 mutation，
          //调用方法是像 store.dispatch('login') 这样分发一个事件，这里可以包含异步操作
});

export default store;
