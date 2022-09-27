import { counterTypes } from "./ActionTypes"

export const incrementCounter = () => ({
  type: counterTypes.increment
})

export const decrementCounter = () => ({
  type: counterTypes.decrement
})

export const resetCounter = () => ({
  type : counterTypes.reset
})