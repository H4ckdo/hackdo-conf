const { URI, MODEL_START = "safe" } = process.env.NODE_ENV === "production" ? require('./env/production.js') : require('./env/development.js');
mongoose.Promise = Promise;
mongoose.set("debug", process.env.NODE_ENV === "development");
const options = {  };

/**
 * @function tryConnection
 * @return {type} {description}
 * @description try to connect handle error and success case, mongoose.connect() use a promise that dont call catch
 */
const tryConnection = () => {
  return (
    new Promise((resolve, reject) =>
      mongoose.connect(URI, options).then(resolve, reject))
  )
}

module.exports = () => {
  return surePromise(
    Promise.all([
      tryConnection()
    ])
  )
}
