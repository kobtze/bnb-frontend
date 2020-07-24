import { orderService } from '@/services/order.service.js';

export default {
    state: {
        orders: [],
    },
    getters: {
        orders(state) {
            return state.orders
        }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
    },
    actions: {
        async loadOrders({ commit, state }) {
            try {
                const orders = await orderService.query()
                commit({ type: 'setOrders', orders })
                return orders
            } catch (err) {
                console.log('Error:', err);
                throw err
            }
        },
    }
}