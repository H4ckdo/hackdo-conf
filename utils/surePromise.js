/**
 * @function {surePromise}
 * @param  {type} promise {Incomming generic Promise function}
 * @return {type} {Object thar describe if the promise resolve right or not}
 */
const surePromise = (promise) => {
  return (
    promise
      .then(result => ({ ok: true, result }))
      .catch(error => {
        //debugger;
        return Promise.resolve({ ok: false, error })
      })
  )
}
module.exports = surePromise;