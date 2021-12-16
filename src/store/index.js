import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/index'

Vue.use(Vuex);

const actions = {};

const mutations = {};

const state = {};

const getters = {};

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    modules: {
        home
    }
});
