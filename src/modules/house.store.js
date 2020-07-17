import { houseService } from '../services/house.service';

export default {
    strict: true,
    state: {
        houses: [],
        filterBy: {
            checkIn: null,
            checkOut: null,
            guestCount: null,
            location: null,
        }
    },
    getters: {
        houses(state) {
            return state.houses;
        },
        housesCount(state) {
            return state.housesLength;
        }
    },
    mutations: {
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        setHouses(state, { houses }) {
            state.houses = houses
                // console.log('mutations setHouses:',houses);
        },
        removeHouse(state, { id }) {
            const idx = state.houses.findIndex(house => house._id === id);
            state.houses.splice(idx, 1)
        },
        addHouse(state, { savedHouse }) {
            state.houses.unshift(savedHouse)
        },
        updateHouse(state, { savedHouse }) {
            const idx = state.houses.findIndex(house => house._id === savedHouse._id)
            state.houses.splice(idx, 1, savedHouse)
        }
    },
    actions: {
        async loadHouses({ commit, state }) {
            // commit({ type: 'setIsLoading', isLoading: true })
            try {
                const houses = await houseService.query(state.filterBy)
                    // console.log('actions loadHouses:',houses);
                commit({ type: 'setHouses', houses })
                    // commit({ type: 'setIsLoading', isLoading: false })
                return houses
            } catch (err) {
                console.log('Store.loadHouses error:', err);
            }
        },
        async removeHouse({ commit }, { id }) {
            try {
                await houseService.remove(id)
                commit({ type: 'removeHouse', id })
            } catch (err) {
                console.log('Store.removeHouse error:', err);
            }
        },
        async saveHouse({ commit }, { house }) {
            const type = (house._id) ? 'updateHouse' : 'addHouse';
            // if (!house._id) house.createdAt = Date.now();
            try {
                await houseService.save(house)
                commit({ type, house })
                return house;
            } catch (err) {
                console.log('Store.saveHouse error:', err);
            }
        }
    }
}