module.exports = {
  login: function(req, res) {
    let data = req.body;
    let responseCases = {
      success: {
        omit: ["id", "rol"],
        authentication: true
      },
      errors: {
        notFound: {
          details: "User not found"
        },
        forbidden: {
          details: "Email or password are invalid"
        }
      }
    };
    if(req.session.userId) {
      res.notAllow({
        error: {
          details: "Already login",
          status: 405
        }
      });
    } else {
      res.dispatchModel(User.login(data, req), responseCases);
    }
  },//end loginUser

  logout: function(req, res) {
    let session = req.session;
    let responseCases = {
      success: {
        authentication: false
      },
      errors: {
        notAllow: {
          details: "Already logout"
        }
      }
    }
    res.dispatchModel(User.logout(session), responseCases);
  }//end logout
};
