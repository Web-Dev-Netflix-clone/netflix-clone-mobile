// Hier kunnen we axios configureren om die API van Alfijah door de hele app aan te spreken.
// Die link moet dus verandert worden wanneer we weten hoe haar API heet.

import Axios from 'axios';

export const API_URL = process.env.API_URL || 'https://localhost:3000';
export const DEFAULT_MESSAGE_TIMEOUT = 2000;

export const axios = Axios.create({
  baseURL: 'http://localhost:3000',
});
