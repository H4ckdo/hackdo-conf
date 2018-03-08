/**
 * @function prometify
 * @param  {type} cb {description}
 * @return {type} {description}
 */
const prometify = async (cb) => {
  try {
    let result = cb();
    return await Promise.resolve(result);
  } catch (error) {
    return await Promise.reject(error);
  }
}

module.exports = prometify;