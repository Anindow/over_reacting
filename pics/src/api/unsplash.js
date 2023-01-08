import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID 6yuUIvW7_EiihMCwB5cuk660qnf9aF9pdgIF8pZfg0w",
  },
});

