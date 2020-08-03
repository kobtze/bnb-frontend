import { orderService } from '@/services/order.service.js';

export default {
    state: {
        orders: [],
    },
    getters: {
        guestOrders(state) {
            return state.guestOrders
        },
        hostOrders(state) {
            return state.hostOrders
        },
        searchBy(state) {
            return state.searchBy
        },
        orders(state) {
            return state.orders
        }
    },
    mutations: {
        setHostOrders(state, { hostOrders }) {
            state.hostOrders = hostOrders;
        },
        setGuestOrders(state, { guestOrders }) {
            state.guestOrders = guestOrders;
        },
        setSearch(state, { searchBy }) {
            state.searchBy = searchBy
        },
        setOrders(state, {orders}) {
            state.orders = orders
        }
    },
    actions: {
        async loadOrders(context, { userId }) {
            try {
                const orders = await orderService.query(userId)
                context.commit({ type: 'setOrders', orders })
                return orders
            } catch (err) {
                console.log('Error:', err);
                throw err
            }
        },
        clearOrders(context) {
            context.commit({ type: 'setOrders', orders: [] })
        },
        async createOrder({ commit }, { order }) {
            await orderService.create(order)
        }
    }
}