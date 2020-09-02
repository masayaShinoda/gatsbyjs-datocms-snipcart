// const path = require('path');
// const data = require('./productsData.js');

// exports.createPages = ({ boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   // Your component that should be rendered for every item in JSON.
//   const template = path.resolve(`src/template.js`);

//   // Create pages for each JSON entry.
//   data.forEach(({ page }) => {
//     const path = page;

//     createPage({
//       path,
//       component: template,

//       // Send additional data to page from JSON (or query inside template)
//       context: {
//         path
//       }
//     });
//   });
// };
