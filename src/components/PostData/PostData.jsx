import fetch from 'isomorphic-fetch';

// * snip *

export function PostData(data) {
  componentDidMount() {
    return fetch('https://alert-amigo-api.herokuapp.com/products', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
  }
}
