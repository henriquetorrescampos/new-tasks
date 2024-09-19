import uuid from "react-native-uuid";

export const activities = [
  {
    id: uuid.v4(), //generates a random UUID
    name: "Estudar",
    description: "Estudar para DevInHouse",
    status: true,
    date: "16/09/2024",
  },
  {
    id: uuid.v4(), //generates a random UUID
    name: "Ler",
    description: "Ler sobre economia",
    status: true,
    date: "18/10/2024",
  },
  {
    id: uuid.v4(), //generates a random UUID
    name: "Assistir",
    description: "Assistir The Office",
    status: true,
    date: "10/10/2024",
  },
];
