export const setCounter = (store, payload) => {
    store.counter = payload;
};
export const inc = (store, payload = 1) => {
    store.counter += payload;
};
export const decrement = (store) => {
    store.counter--;
};
export const reset = (store) => {
    store.counter = 0;
};