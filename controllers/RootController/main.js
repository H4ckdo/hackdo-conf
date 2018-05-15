import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
let environment = process.env.NODE_ENV || 'development';
const publicServerKey = "BPlXiFG6NINNh-j7Tqhcgd2xMXYDM9_r1Wuuhbe4KB3TrCwaXQjXsdnCD_iOlh6tGF8Hyz86TMtzNxL2DJpA-Mc"
/**
 * @function main
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} Serve the App component
 */
const main = (req, res) => {
  res.render('index', { environment, publicServerKey })
}

module.exports = main;
