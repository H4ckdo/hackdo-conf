let fixtures = {
  order: ['User'],
  User: [
    {
      name: 'esneyder',
      email: 'esnene02@gmail.com',
      password: '123456',
      rol: 'superadmin'
    }
  ]
};

module.exports = {
  resolve: function(env) {
    if(env) return fixtures;
    return {};
  }
};
