//this file allows the development server URL & deployed server URL to be submstitued automatically when it is deployed
const prod = {
  url: {
    API_URL: 'https://agile-tor-91190.herokuapp.com/',
  }
};

const dev = {
  url: {
    API_URL : 'http://localhost:3000/'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
