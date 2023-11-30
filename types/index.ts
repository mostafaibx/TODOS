export type colorstest =
  | "emerald-600"
  | "green-500"
  | "sky-700"
  | "amber-400"
  | "lime-600"
  | "violet-800"
  | "fuchsia-700"
  | "rose-600"
  | "indigo-700";
export type colors =
  | "#10B981"
  | "#16A34A"
  | "#1E40AF"
  | "#F59E0B"
  | "#84CC16"
  | "#7C3AED"
  | "#9333EA"
  | "#E11D48"
  | "#4c51bf";

export type Task = {
  id: number;
  title: string;
  statu: boolean;
};

export type List = {
  id: number;
  title: string;
  color: colors;
  icon: string;
  tasks: Task[] | [];
};
