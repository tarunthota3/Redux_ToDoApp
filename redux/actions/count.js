module.exports = (index) => {
  console.log("clicked count");
  return {
    type:"count",
    index:index
  }
}
