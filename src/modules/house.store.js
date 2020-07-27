import { houseService } from "@/services/house.service";

export default {
    state: {
        isLoading: false,
        houses: [],
        filterBy: {
            location: "",
            checkIn: '',
            checkOut: '',
            adultNumber: 0,
            childrenNumber: 0,
            rating: "",
            type: "",
        },
    },
    getters: {
        filterBy(state) {
            return state.filterBy;
        },
        houses(state) {
            return state.houses;
        },
        housesCount(state) {
            return state.houses.length;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy;
        },
        // getFilter(state) {
        //     return state.filterBy;
        // },
        setHouses(state, { houses }) {
            state.houses = houses;
            // console.log('mutations setHouses:',houses);
        },
        removeHouse(state, { id }) {
            const idx = state.houses.findIndex((house) => house._id === id);
            state.houses.splice(idx, 1);
        },
        addHouse(state, { savedHouse }) {
            state.houses.unshift(savedHouse);
        },
        updateHouse(state, { savedHouse }) {
            const idx = state.houses.findIndex(
                (house) => house._id === savedHouse._id
            );
            state.houses.splice(idx, 1, savedHouse);
        },
    },
    actions: {
        async loadHouses(context, { filterBy }) {
            try {
                console.log('state.filterBy', context.state)
                if (!filterBy) {
                    filterBy = {...context.state.filterBy };
                }
                context.commit({ type: "setFilter", filterBy });
                const houses = await houseService.query(filterBy);
                context.commit({ type: "setHouses", houses });
                return houses;
            } catch (err) {
                console.log("Store.loadHouses error:", err);
                throw err;
            }

        },
        async removeHouse({ commit }, { id }) {
            try {
                await houseService.remove(id);
                commit({ type: "removeHouse", id });
            } catch (err) {
                console.log("Store.removeHouse error:", err);
            }
        },
        async saveHouse({ commit }, { house }) {
            const type = house._id ? "updateHouse" : "addHouse";
            // if (!house._id) house.createdAt = Date.now();
            try {
                await houseService.save(house);
                commit({ type, house });
                return house;
            } catch (err) {
                console.log("Store.saveHouse error:", err);
            }
        },
    },
}