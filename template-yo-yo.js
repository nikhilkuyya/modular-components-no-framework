const html = require("yo-yo");
var n = 5;
const root = document.body.appendChild("div");
function updateHTML() {
  html.update(root`<h1>${n}</h1>`);
}
module.exports = updateHTML;
