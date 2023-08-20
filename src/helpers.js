import { TIMEOUT_SEC } from './config.js';

export const importAll = function (r) {
  return r.keys().map(r);
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    // console.log(res);

    const data = await res.json();
    // console.log(data);

    if (!res.ok) throw new Error(`${data.error.message}`);
    // or res.status
    // throw new Error('Hello World');
    return data;
  } catch (err) {
    // if (err) console.log('🔥');
    // console.error(err);
    throw err;
  }
};

export const calcFahrenheit = function (celTemp) {
  return (+celTemp * 1.8 + 32).toFixed(1);
};

export const calcCelsius = function (fahTemp) {
  return ((+fahTemp - 32) * 0.5556).toFixed(1);
};
