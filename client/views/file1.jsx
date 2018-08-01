import React from 'react';
import {Input,Button,Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Increment from '../../redux/actions/increment.js';
import Decrement from '../../redux/actions/decrement.js';
import Count from '../../redux/actions/count.js';


class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      inputText:""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.deleteCard = this.deleteCard.bind(this);
  }
  handleClick(){

    console.log("clicked");
  }
  handleChange(e,value){

    this.setState({inputText:e.target.value});

  }
  deleteCard(id){
    console.log("delete",id);
    this.props.handleDecrement(id);
  }

  render() {

    console.log(this.props);

    return (
      <div style={{margin:'2% 2% 2% 2%'}}>
      <Input onChange={this.handleChange} placeholder="type something"/>
      <Button style={{marginLeft:'2%'}} onClick={()=>this.props.handleIncrement(this.state.inputText)}>Add card</Button>
      <h1 style={{float:'right',margin:'0 50% 0 0'}}>The length of array is: {this.props.data.data.length}</h1>

      {this.props.data.data.map((item)=>{
        return <Card>
          <Card.Header style={{margin:'3% 0% 3% 4%'}}>Content {item.datavalue}</Card.Header>
          {/* <Card.Content>Index {item.index}</Card.Content> */}
          <Card.Content extra>
          <Button onClick={this.deleteCard.bind(this,item)}>Delete</Button>
        </Card.Content>
        </Card>
      })}


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.card}
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrement:Increment,
    handleDecrement:Decrement,
    handleCount:Count
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Test);
