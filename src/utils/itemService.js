import tokenService from "./tokenService";

const BASE_URL = "/api/items/";

export default {
  create,
};

// function create(item) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//             // Add this header - don't forget the space after Bearer
//             'Authorization': 'Bearer ' + tokenService.getToken()
//         },
//         body: JSON.stringify(item)
//     };
//     return fetch(BASE_URL, options).then(res => res.json());
// }

function create(item) {
  console.log(item);
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .then((item) => console.log(item));
}

// export function getAll() {
//     return fetch(BASE_URL).then((res) => res.json());
// }
