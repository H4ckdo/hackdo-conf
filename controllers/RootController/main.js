import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
let environment = process.env.NODE_ENV || 'development';
/**
 * @function main
 * @param  {type} req {description}
 * @param  {type} res {description}
 * @return {type} Serve the App component
 */
const main = (req, res) => {
  res.render('index', { environment })
}

module.exports = main;
