module.exports = (index) => {
  console.log("clicked decrement");
  return {
    type:"decrement",
    index:index
  }
}
