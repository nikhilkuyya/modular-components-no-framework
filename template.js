function templateString() {
  var n = 5;
  console.log("template output", `hi n = ${n}`);
  console.log(tag`hi n = ${n} wow`);
  function tag(...args) {
    console.log("input ", args);
    return arguments;
  }
}

module.exports = templateString;
