import {useConfigStore} from "../store/config";

export const initializeApp = () => {
    const config = useConfigStore();

    config.initializeColorScheme();
    config.initializeHotkeys();
}