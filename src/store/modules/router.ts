/*
 * @Author: maggot-code
 * @Date: 2021-11-16 15:30:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 19:16:23
 * @Description: file content
 */
import { toRaw } from 'vue';
import { getRoutingCached } from '@/utils/cached';

const state = {
    install: false,
    routing: []
}
const getters = {
    hasInstall(state) {
        return state.install;
    },
    hasRouting(state) {
        return state.routing.length > 0;
    },
    getRouting(state) {
        const routing = getRoutingCached();

        if (!state.install) {
            state.routing = routing ?? [];
        }


        return toRaw(state.routing);
    }
}
const mutations = {
    _setInstall(state, status) {
        state.install = status;
    },
    _setRouting(state, routing) {
        state.routing = toRaw(routing);
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