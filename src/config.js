//this file allows the development server URL & deployed server URL to be submstitued automatically when it is deployed
const prod = {
    // SERVER_URL: 'https://agile-tor-91190.herokuapp.com',
    SERVER_URL : 'https://ifeellike-mai.herokuapp.com'
};

const dev = {
    SERVER_URL : 'http://localhost:3000'
};
const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;

