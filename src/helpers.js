import { TIMEOUT_SEC } from './config.js';

export const importAll = function (r) {
  return r.keys().map(r);
};

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url, { mode: 'cors' });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.error.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const calcFahrenheit = function (celTemp) {
  return (+celTemp * 1.8 + 32).toFixed(1);
};

export const calcCelsius = function (fahTemp) {
  return ((+fahTemp - 32) * 0.5556).toFixed(1);
};
