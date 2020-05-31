export default {
    state: {
        name: 'rania'
    },
    getters: {
        nameCapital: (state) => {
            return state.name.toUpperCase();
        }
    },
    mutations: {
        setName: (state, payload) => {
            state.name = payload;
        }
    }
}