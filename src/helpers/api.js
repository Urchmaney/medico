const get = (url, token) => fetch(url,
  {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(result => result.json());

const post = (url, payload, token = '') => fetch(url,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then(result => result.json());

export { get, post };
