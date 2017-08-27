const initialState = []

const bountyReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_BOUNTY')
  {
    return [...action.payload]
  }

  return state
}

export default bountyReducer
