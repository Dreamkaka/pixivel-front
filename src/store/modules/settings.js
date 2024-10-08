import storage from "store2";
import CONFIG from "@/config";

const NAMESPACE = "settings";

const state = {
  settings: JSON.parse(storage.get(NAMESPACE, "{}")),
};

const mutations = {
  set(state, data) {
    state.settings[data["key"]] = data["value"];
    storage.set(NAMESPACE, JSON.stringify(state.settings));
  },
  pull(state) {
    state.settings = JSON.parse(storage.get(NAMESPACE, "{}"));
  },
  push(state) {
    storage.set(NAMESPACE, JSON.stringify(state.settings));
  },
};

const getters = {
  get: (state) => (key) => {
    if (state.settings[key]) {
      return state.settings[key];
    }
    if (CONFIG.SETTINGS_DEFAULT[key]) {
      return CONFIG.SETTINGS_DEFAULT[key];
    }
    return null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
