import React, {Component} from 'react';
import axios from 'axios';
import ButtonCreateEvent from './ButtonCreateEvent'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import config from '../config';

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '5px'
}

const wishlistPhoto = {
  maxWidth: '100%',
  maxHeight: '200px'
}

const SERVER_URL = config.SERVER_URL;

const ALL_RESTAURANTS_URL = SERVER_URL + '/restaurants.json'

const getRestaurantURL = (id) => {
  return SERVER_URL + `/restaurants/${id}.json`
}

class ShowRestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: []
    }
    this.updateList = this.updateList.bind(this)
    console.log(config.SERVER_URL);
  }

  updateList() {
    console.log('updateList');
    axios.get(ALL_RESTAURANTS_URL).then((response) => {
      console.log(response.data);
      console.log(this.props.user.id);
      const restaurants = response.data.filter((restaurant) =>
        restaurant.user_id === this.props.user.id
      );
      this.setState({restaurantList: restaurants});
    })
  }

  componentDidMount() {
    this.updateList();
  }


  render() {
    return(
      <CardDeck style={style}>
        <Row >
          {this.state.restaurantList.map(restaurant =>
            <Col key={restaurant.id} style={{marginTop: '5px'}} lg={6}>
              <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <div>
                      <h3>{restaurant.name}</h3>
                      {restaurant.image && <img style={wishlistPhoto} src={restaurant.image} alt={restaurant.name}></img>}
                      <ButtonCreateEvent restaurant={restaurant} style={{margin: '5px'}}/>
                      <ButtonRemove updateList={this.updateList} restaurant={restaurant}/>
                      <p>Address: {restaurant.address}</p>
                      {restaurant.website && <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>}
                      {restaurant.contact && <p>Contact: {restaurant.contact}</p>}
                      {restaurant.rating && <p>Rating: {restaurant.rating}/5</p>}
                      {restaurant.price_level && <p>Price level: {restaurant.price_level}/5</p>}
                    </div>

                </Card.Body>
              </Card>
          </Col>
          )}
        </Row>
      </CardDeck>

    )
  }
}

function ButtonRemove(props) {

  function _handleDelete(callback) {
    const RESTAURANT_URL = getRestaurantURL(props.restaurant.id)
    console.log("RESTAURANT_URL", RESTAURANT_URL);
    axios.delete(RESTAURANT_URL, {id: props.restaurant.id}).then((response) => {
      callback(response)
    })
  }

  return(
    <button onClick={() => {
      _handleDelete(() => {
        props.updateList()
      });
    }}>Remove from list</button>
  )
}

export default ShowRestaurantList
