/**
 * @function PopUps
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
module.exports = (state, action = {}) => {
  let { payload = {}, type = '' } = action;

  if (type === 'OPEN') {
    //console.log("ENTRA OPEN")
    return { ...state, open: true, close: false };
  }
  if (type === 'CLOSE') {
    //console.log("CLOSE")
    return { ...state, close: true, open: false };
  }
  if (type === 'CLOSE_ALL') {
    let list = state.list.map(item => Object.assign({}, item, { close: true }));
    return { ...state, list };
  }
  /*
  if (type === 'ADD_POPUP') {
    return { ...state, data: messageUpdate }
  }
  */
  return { ...state }
}
