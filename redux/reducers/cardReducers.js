module.exports = (state = {
  data:[],
  length:0
},action)=>{
  switch (action.type) {
    case "increment":
        var data = state.data;
        if(state.length == 0){
          data.push({index:0,datavalue:action.data})
        }
        else{
          data.push({index:data[data.length-1].index+1,datavalue:action.data})
        }
      return{
        data:data,
        length:data.length
      }
      break;
    case "decrement":
      var data = state.data.filter((item,i) => {
          if(JSON.stringify(item) != JSON.stringify(action.index))
            return item
      })

      return{
        data:data,
        length:data.length
      }
      break;
  }
  return state;
};
