import axios from 'axios';

const ip_address = "192.168.1.8"
export default axios.create({ baseURL: `http://${ip_address}:8000` });

