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

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const calcFahrenheit = function (celTemp) {
  return (+celTemp * 1.8 + 32).toFixed(1);
};

export const calcCelsius = function (fahTemp) {
  return ((+fahTemp - 32) * 0.5556).toFixed(1);
};
