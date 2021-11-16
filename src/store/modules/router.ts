/*
 * @Author: maggot-code
 * @Date: 2021-11-16 15:30:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 01:09:44
 * @Description: file content
 */
import { isNil } from '@/utils/is';
import { getRoutingCached } from '@/utils/cached';

const state = {
    install: false,
    routing: []
}
const getters = {
    hasInstall(state) {
        return state.install;
    },
    getRouting(state) {
        const routing = getRoutingCached();
        if (state.routing.length <= 0) {
            state.routing = isNil(routing) ? [] : routing;
        }
        return state.routing;
    }
}
const mutations = {
    _setInstall(state, status) {
        state.install = status;
    },
    _setRouting(state, routing) {
        state.routing = routing;
    }
}
const actions = {
    setInstall({ commit }, status) {
        commit('_setInstall', status ?? true);
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