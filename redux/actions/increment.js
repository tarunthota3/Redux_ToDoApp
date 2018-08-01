module.exports = (data) => {
  console.log(data);
  return {
    type:"increment",
    data:data
  }
}
