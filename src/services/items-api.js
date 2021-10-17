import tokenService from "../utils/tokenService";
const BASE_URL = "/api/items/";

// export default {
//   create,
//   getAll,
//   delete: deleteOne,
//   update,
// };

// function create(item) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       // Add this header - don't forget the space after Bearer
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(item)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }

export function getAll() {
  const options = {
    method: 'GET',
    headers: {
        Authorization: "Bearer " + tokenService.getToken(),
    }
  }
  return fetch(BASE_URL + 'inventory', options)
    .then(res => res.json())
}

export function create(item) {
  return fetch(
    BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(item),
    }
  )
    .then((res) => res.json())
    .then((item) => console.log(`THIS ${item}`));
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function update(item) {
  return fetch(`${BASE_URL}${item._id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
}
