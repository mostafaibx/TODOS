const lists = [
  {
    id: 1,
    title: "My List 1",
    color: "#16A34A",
    icon: "&#127944;",
    tasks: [],
  },
  {
    id: 2,
    title: "My List 2",
    color: "#1E40AF",
    icon: "&#129516;",
    tasks: [],
  },
  {
    id: 3,
    title: "My List 3",
    color: "#F59E0B",
    icon: "&#128161;",
    tasks: [],
  },
  {
    id: 4,
    title: "My List 4",
    color: "#84CC16",
    icon: "&#x1F575;",
    tasks: [],
  },
  {
    id: 5,
    title: "My List 5",
    color: "#E11D48",
    icon: "&#127838;",
    tasks: [],
  },
];

export const useListState = () => useState("lists", () => lists);
