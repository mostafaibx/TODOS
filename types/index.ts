
// supposed to be enums but I found some issues during iterations
// will check how to handle enums or move this to assets or even store it on db
export const colors = [
  '#10B981',
  '#16A34A',
  '#1E40AF',
  '#F59E0B',
  '#84CC16',
  '#7C3AED',
  '#9333EA',
  '#E11D48',
  '#4c51bf'
]

export const icons = [
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
]

export type Task = {
  id?: string;
  listId: string;
  title: string;
  completed: boolean;
};

export type List = {
  id?: string;
  userId: string;
  title: string;
  color: string;
  icon: string;
  tasks?: Task[] | [];
};

export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  lists?: List[] | [];
}

export type UserSignupData = {
  username: string
  email: string
  password: string
  confirmPassword: string
}
