import Vue from 'vue';
import Vuex from 'vuex';
import { REQUESTED_DOGE, REQUESTED_DOGE_FAILURE, REQUESTED_DOGE_SUCCESS } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogeSrc: '',
    loading: false,
    error: false,

  },
  mutations: {
    [REQUESTED_DOGE](state) {
      state.loading = true;
    },
    [REQUESTED_DOGE_SUCCESS](state, payload) {
      state.dogeSrc = payload.message;
      state.loading = false;
      state.error = false;
    },
    [REQUESTED_DOGE_FAILURE](state) {
      state.error = true;
    },
  },
  actions: {
    fetchDoge({ commit }) {
      commit(REQUESTED_DOGE);
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => commit(REQUESTED_DOGE_SUCCESS, data))
        .catch(() => commit(REQUESTED_DOGE_FAILURE));
    },
  },
  modules: {
  },
});
