const initialState = {
  activeBounty: [],
  pastBounty: [],
}

const bountyReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_BOUNTY')
  {
    return {
      activeBounty: [ ...action.payload.activeBounty ],
      pastBounty: [ ...action.payload.pastBounty ],
    }
  }

  return state
}

export default bountyReducer
