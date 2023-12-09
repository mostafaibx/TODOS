
export enum colors {
  '#10B981',
  '#16A34A',
  '#1E40AF',
  '#F59E0B',
  '#84CC16',
  '#7C3AED',
  '#9333EA',
  '#E11D48',
  '#4c51bf',
}

export enum icons {
  '&#127891;',
  '&#127944;',
  '&#127821;',
  '&#x1F5DD;',
  '&#x270F;',
  '&#127838;',
  '&#x1F575;',
  '&#128161;',
  '&#129516;',
  '&#128181;'
}

export type Task = {
  id?: number;
  listId: string;
  title: string;
  completed: boolean;
};

export type List = {
  id?: number;
  userId: string;
  title: string;
  color: colors;
  icon: icons;
  tasks?: Task[] | [];
};

export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  lists?: List[] | [];
}
