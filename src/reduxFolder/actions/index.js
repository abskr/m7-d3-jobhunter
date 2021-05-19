export const addToFavAction = (jobObj) => ({
  type: 'ADD_JOB_TO_FAV',
  payload: jobObj
})

export const removeFromFavAction = (jobObj) => ({
  type: 'REMOVE_JOB_FROM_FAV',
  payload: jobObj,
});