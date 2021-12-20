/*
 * @Author: maggot-code
 * @Date: 2021-11-16 15:30:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 09:44:53
 * @Description: file content
 */
import { toRaw } from 'vue';
import { getRoutingCached } from '@/utils/cached';

type RouterState = {
    install: boolean;
    routing: Array<any>;
};

const state: RouterState = {
    install: false,
    routing: []
}
const getters = {
    hasInstall(state: RouterState) {
        return state.install;
    },
    hasRouting(state: RouterState) {
        return state.routing.length > 0;
    },
    getRouting(state: RouterState) {
        const routing = getRoutingCached();

        if (!state.install) {
            state.routing = routing ?? [];
        }


        return toRaw(state.routing);
    }
}
const mutations = {
    _setInstall(state: RouterState, status: boolean) {
        state.install = status;
    },
    _setRouting(state: RouterState, routing: Array<any>) {
        state.routing = toRaw(routing);
    }
}
const actions = {
    setInstall({ commit }, status: boolean) {
        commit('_setInstall', status ?? true);
    },
    setRouting({ commit }, routing: Array<any>) {
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