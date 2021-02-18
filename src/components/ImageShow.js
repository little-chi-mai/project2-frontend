import React, {Component} from 'react'
import axios from 'axios'

class ImageShow extends Component {
  constructor() {
    super();
    this.state = {
      image: ''
    }
  }

  fetchRandomImage(reference) {
    const generateURL = function(reference) {
      return [
        'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=',
        reference,
        '&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA'
      ].join('')
    };

    axios.get(generateURL(reference)).then((response) => {
      // this.setState({
      //   image: response
      // })
      console.log(response)
    });
  }

  render() {
    return(
      <div>
        // Image coming soon
      </div>
    )
  }
}

export default ImageShow
