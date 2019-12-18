import { Store } from "vuex";
import { Socket } from "phoenix";
import schedule from './modules/schedule';
import createSchedulePlugin from './plugins/createSchedulePlugin';
import { IRootState } from './types';

const createStore = (socket: Socket): Store<IRootState> => {
    const store = new Store({
        modules: {
            schedule,
        },
        plugins: [createSchedulePlugin(socket)],
    });

    return store;
};

export default createStore;
