import React, {Component} from 'react'
import axios from 'axios'
import config from '../config'

const SERVER_URL = config.SERVER_URL;

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
      this.props._handleUpdate(this.state.image);
    });
  }

  componentDidMount() {
    this.fetchImage(this.props.photoreference)
  }

  componentDidUpdate(prevProps) {
    if (this.props.photoreference !== prevProps.photoreference) {
      this.fetchImage(this.props.photoreference);
    }
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
