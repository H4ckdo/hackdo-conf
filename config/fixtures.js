let fixtures = {
  order: ['User', 'Event'],
  User: [
    {
      name: 'esneyder',
      email: 'esnene02@gmail.com',
      password: '123456',
      rol: 'superadmin'
    }
  ],
  Event: [
    {
      name: "Hackdo",
      startAt: "2017/01/03",
      endAt: "2017/03/03",
      eventType: "presential",
      location: "Quibdo Calle 24 18-128"
    }
  ]
};

module.exports = {
  resolve: function(env) {
    if(env) return fixtures;
    return {};
  }
};
