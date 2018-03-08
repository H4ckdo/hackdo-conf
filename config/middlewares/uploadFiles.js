const multer = require('multer');
module.exports = () => {
  let payload = multer({ dest: 'uploads/' }).single('avatar');
  let path = ['/api'];
  return { payload, path }
}