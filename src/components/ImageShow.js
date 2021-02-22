import React, {Component} from 'react'
import axios from 'axios'

class ImageShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
    this.fetchImage = this.fetchImage.bind(this)
  }

  fetchImage(reference) {
    const generateURL = function(reference) {
      return [
        'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=',
        reference,
        '&key=AIzaSyBTRHwGzxqChaQTIV0yYJS4e8z91KGB0Fk'
      ].join('')
    };

    axios.get(generateURL(reference)).then((response) => {
      // this.setState({
      //   image: response
      // })
      this.setState({image: response.config.url})
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
