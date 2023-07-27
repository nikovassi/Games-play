import GameCard from "../GameCatalog/GameCard";

const baseUrl = "http://localhost:3030/data";

export function getAll() {
  return fetch(`${baseUrl}/movies`)
        .then((res) => res.json())
        
}

export const getOne = (id) => fetch(`${baseUrl}/movies/${id}`).then(res => res.json());

export const getLatest = () => fetch(`${baseUrl}/movies`).then(res => res.json());