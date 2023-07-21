import axios from 'axios';

export const instanceWallet = axios.create({
  baseURL: 'https://wallet.goit.ua/',
});

export const setAuthHeader = token => {
  instanceWallet.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const instanceMono = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});
