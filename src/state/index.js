import { createGlobalState } from "react-hooks-global-state";

export const { setGlobalState, useGlobalState } = createGlobalState({
    productName: 'Curly Fries',
    size: '',
    type: '',
    price: 169.99,
})