/**
 * @function Users
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
module.exports = (state, action = {}) => {
  let { payload, type } = action;
  if(type === 'ADD_MESSAGE') {
    let messageUpdate = state.data.map(item => Object.assign({}, item));
    messageUpdate.push({name: payload});
    return { ...state, data: messageUpdate }
  }
  return { ...state }
}
