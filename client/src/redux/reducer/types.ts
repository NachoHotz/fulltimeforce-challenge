type InitialState = {
  counter: number,
}

export type basicAction = {
  type: 'INCREMENT',
  payload?: number,
}

export type Action = basicAction;
export default InitialState;
