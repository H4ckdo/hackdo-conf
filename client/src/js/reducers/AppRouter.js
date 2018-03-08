/**
 * @function AppRouter
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
module.exports = (state, action = {}) => {
  let { payload = {}, type = '' } = action;
  if (type === 'SET_PAGE') {
    return { ...state, payload, reduxEvent: true };
  }
  return { ...state, reduxEvent: true  };
}
