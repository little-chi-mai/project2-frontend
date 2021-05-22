import React, {Component} from 'react'
import axios from 'axios'

const SERVER_URL = 'http://localhost:3000';

class ImageShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
    this.fetchImage = this.fetchImage.bind(this)
  }

  fetchImage(reference) {
    console.log('reference', reference);
    const generateURL = function(reference) {
      return [
        SERVER_URL,
        '/fetchimage/',
        reference
      ].join('')
    };
    console.log("AXIOS GET", generateURL(reference));
    axios.get(generateURL(reference)).then((response) => {

      this.setState({image: response.data})
    });
  }

  componentDidMount() {
    this.fetchImage(this.props.photoreference)
  }

  render() {

    return(
      <div>
        <img src={this.state.image} alt=""/>
        
      </div>
    )
  }
}

export default ImageShow
