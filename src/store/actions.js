const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


export const increment = (val) =>({ type:INCREMENT ,...val});