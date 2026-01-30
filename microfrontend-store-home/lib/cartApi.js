import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5197/api/cart',
  headers: {'Content-Type': 'application/json'}
});

const cartService = {
  getCart: () => API.get('/'),
  addToCart: (item) => API.post('/', item),
  increaseQuantity: (id) => API.put(`/increase/${id}`),
  decreaseQuantity: (id) => API.put(`/decrease/${id}`),
  removeFromCart: (id) => API.delete(`/${id}`),
};

export default cartService;