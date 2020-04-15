const BASE_URL = "/routes/api/items.js";

export function create(item) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}
