export default (app) => {
  app.use('/1.0/', require('../api').default);

  // Default route.
  app.route('*').get((req, res) => {
    res.send('<h1 style="text-align:center;margin:10% 0 0 0;">HELIX NEBULA 1.0</h1><br/><h2 style="text-align:center;margin:0;">¡we are watching you!</h2>');
  });
};
