/*
 * @Author: maggot-code
 * @Date: 2021-11-16 15:30:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 16:56:40
 * @Description: file content
 */
const state = {
    routingLoad: false,
    routing: []
}
const getters = {
    isRoutingLoad(state) {
        return state.routingLoad;
    },
    getRouting(state) {
        return state.routing;
    },
    hasRouting(state) {
        return state.routing.length > 0;
    }
}
const mutations = {
    _setRoutingLoad(state, status) {
        state.routingLoad = status;
    },
    _setRouting(state, routing) {
        state.routing = routing;
    }
}
const actions = {
    setRoutingLoad({ commit }, status) {
        commit('_setRoutingLoad', status ?? true);
    },
    setRouting({ commit }, routing) {
        commit('_setRouting', routing ?? []);
    }
}

function useRouterStoreModule() {
    return {
        namespaced: true,
        state,
        getters,
        mutations,
        actions
    }
}

export default useRouterStoreModule;