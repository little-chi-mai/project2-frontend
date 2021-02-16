import React, {Component} from 'react';

class EventUpdateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      date:'',
      introduction:'',
      user:'',
      restaurant_id: this.props.restaurant_id
    }
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange = (event) => {
    const {name,value} = event.target;
    this.setState ({
      [name]:value,
    })
  }

  render(){
    return(
      <div>
        <h2>Update Event</h2>
        <h3>Venue:</h3>
        <form onSubmit = {this._handleSubmit}>
          <label>Title</label>
          <input name='title' onChange = {this._handleChange}/>
          <label>Date</label>
          <input placeholder='2020-12-31' name='date' onChange = {this._handleChange}/>
          <label>Summary</label>
          <textarea name='introduction'onChange = {this._handleChange}/>

          <button>Create Event</button>
        </form>
      </div>
    )
  }
}
