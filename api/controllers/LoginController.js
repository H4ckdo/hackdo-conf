module.exports = {
  loginUser: function(req, res) {
    let data = req.body;
    let response_cases = {
      success: {
        authentication: true
      }
    }
    res.dispatchModel(User.login(data), response_cases);
  },//end loginUser

  loginEnterprise: function(req, res) {
    let data = req.body;
    let response_cases = {
      success: {
        authentication: true
      }
    }
    res.dispatchModel(User.login(data), response_cases);
  },//end loginEnterprise

  logout: function(req, res) {
    let data = req.session;
    let response_cases = {
      success: {
        authentication: false
      }
    }
    res.dispatchModel(User.logout(data), response_cases);
  }//end logout
};
