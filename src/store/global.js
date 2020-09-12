export default {
	state: {
		data: {},
	},
	mutations: {
		DATA_RECEPTION(state, value) {
			state.data = value;
		},
	},
	actions: {
		setData({ commit }, value) {
			commit('DATA_RECEPTION', value)
		},
	},
	getters: {
		getData(state) {
			return state.data.email;
		}
	}
}
