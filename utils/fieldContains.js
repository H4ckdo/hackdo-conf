/**
 * @function fieldContains
 * @param  {Object} field {description}
 * @param  {boolean} contains {description}
 * @return {Object} {Object}
 */
const fieldContains = (field, contains = false) => {
  let result = {};
  if (contains) {
    let varName = _.keys(field)[0];
    result[varName] = new RegExp(field[varName], 'i');
  } else {
    result = field;
  }
  return result;
}

module.exports = fieldContains;