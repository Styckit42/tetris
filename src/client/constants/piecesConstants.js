export const I = 'I';
export const T = 'T';
export const O = 'O';
export const S = 'S';
export const Z = 'Z';
export const L = 'L';
export const J = 'J';

export const BRICKS_I = [
  { x: 3, y: 1, color: 'blue' },
  { x: 4, y: 1, color: 'blue' },
  { x: 5, y: 1, color: 'blue' },
  { x: 6, y: 1, color: 'blue' },
];

export const BRICKS_O = [
  { x: 4, y: 0, color: 'yellow' },
  { x: 5, y: 0, color: 'yellow' },
  { x: 4, y: 1, color: 'yellow' },
  { x: 5, y: 1, color: 'yellow' },
];

export const BRICKS_T = [
  { x: 4, y: 0, color: 'purple' },
  { x: 3, y: 1, color: 'purple' },
  { x: 4, y: 1, color: 'purple' },
  { x: 5, y: 1, color: 'purple' },
];

export const BRICKS_S = [
  { x: 4, y: 0, color: 'green' },
  { x: 5, y: 0, color: 'green' },
  { x: 3, y: 1, color: 'green' },
  { x: 4, y: 1, color: 'green' },
];

export const BRICKS_Z = [
  { x: 3, y: 0, color: 'red' },
  { x: 4, y: 0, color: 'red' },
  { x: 4, y: 1, color: 'red' },
  { x: 5, y: 1, color: 'red' },
];

export const BRICKS_L = [
  { x: 5, y: 0, color: 'orange' },
  { x: 3, y: 1, color: 'orange' },
  { x: 4, y: 1, color: 'orange' },
  { x: 5, y: 1, color: 'orange' },
];

export const BRICKS_J = [
  { x: 3, y: 0, color: 'blue' },
  { x: 3, y: 1, color: 'blue' },
  { x: 4, y: 1, color: 'blue' },
  { x: 5, y: 1, color: 'blue' },
];

/*
export const STACK_B = [
  { x: 0, y: 19, color: 'blue' },
  { x: 1, y: 19, color: 'blue' },
  { x: 2, y: 19, color: 'blue' },
  { x: 3, y: 19, color: 'blue' },
  { x: 5, y: 19, color: 'blue' },
  { x: 6, y: 19, color: 'blue' },
  { x: 7, y: 19, color: 'blue' },
  { x: 8, y: 19, color: 'blue' },
  { x: 9, y: 19, color: 'blue' },
  { x: 0, y: 18, color: 'blue' },
  { x: 1, y: 18, color: 'blue' },
  { x: 5, y: 18, color: 'blue' },
  { x: 6, y: 18, color: 'blue' },
  { x: 7, y: 18, color: 'blue' },
  { x: 8, y: 18, color: 'blue' },
  { x: 9, y: 18, color: 'blue' },
];

export const STACK_V = [
  { x: 0, y: 19, color: 'blue' },
  { x: 1, y: 19, color: 'blue' },
  { x: 2, y: 19, color: 'blue' },
  { x: 3, y: 19, color: 'blue' },
  { x: 5, y: 19, color: 'blue' },
  { x: 6, y: 19, color: 'blue' },
  { x: 7, y: 19, color: 'blue' },
  { x: 8, y: 19, color: 'blue' },
  { x: 9, y: 19, color: 'blue' },
  { x: 0, y: 18, color: 'blue' },
  { x: 1, y: 18, color: 'blue' },
  { x: 2, y: 18, color: 'blue' },
  { x: 6, y: 18, color: 'blue' },
  { x: 7, y: 18, color: 'blue' },
  { x: 8, y: 18, color: 'blue' },
  { x: 9, y: 18, color: 'blue' },
];

export const STACK_O = [
  { x: 0, y: 19, color: 'blue' },
  { x: 1, y: 19, color: 'blue' },
  { x: 2, y: 19, color: 'blue' },
  { x: 3, y: 19, color: 'blue' },
  { x: 5, y: 19, color: 'blue' },
  { x: 6, y: 19, color: 'blue' },
  { x: 7, y: 19, color: 'blue' },
  { x: 8, y: 19, color: 'blue' },
  { x: 9, y: 19, color: 'blue' },
  { x: 0, y: 18, color: 'blue' },
  { x: 1, y: 18, color: 'blue' },
  { x: 2, y: 18, color: 'blue' },
  { x: 3, y: 18, color: 'blue' },
  { x: 5, y: 18, color: 'blue' },
  { x: 6, y: 18, color: 'blue' },
  { x: 7, y: 18, color: 'blue' },
  { x: 8, y: 18, color: 'blue' },
  { x: 9, y: 18, color: 'blue' },
  { x: 0, y: 17, color: 'blue' },
  { x: 1, y: 17, color: 'blue' },
  { x: 2, y: 17, color: 'blue' },
  { x: 5, y: 17, color: 'blue' },
  { x: 6, y: 17, color: 'blue' },
  { x: 7, y: 17, color: 'blue' },
  { x: 8, y: 17, color: 'blue' },
  { x: 9, y: 17, color: 'blue' },
];

export const STACK_TROU = [
  { x: 0, y: 19, color: 'blue' },
  { x: 1, y: 19, color: 'blue' },
  { x: 2, y: 19, color: 'blue' },
  { x: 3, y: 19, color: 'blue' },
  { x: 5, y: 19, color: 'blue' },
  { x: 6, y: 19, color: 'blue' },
  { x: 7, y: 19, color: 'blue' },
  { x: 8, y: 19, color: 'blue' },
  { x: 9, y: 19, color: 'blue' },
  { x: 0, y: 18, color: 'blue' },
  { x: 1, y: 18, color: 'blue' },
  { x: 2, y: 18, color: 'blue' },
  { x: 3, y: 18, color: 'blue' },
  { x: 5, y: 18, color: 'blue' },
  { x: 6, y: 18, color: 'blue' },
  { x: 8, y: 18, color: 'blue' },
  { x: 9, y: 18, color: 'blue' },
  { x: 0, y: 17, color: 'blue' },
  { x: 1, y: 17, color: 'blue' },
  { x: 2, y: 17, color: 'blue' },
  { x: 3, y: 17, color: 'blue' },
  { x: 5, y: 17, color: 'blue' },
  { x: 6, y: 17, color: 'blue' },
  { x: 7, y: 17, color: 'blue' },
  { x: 8, y: 17, color: 'blue' },
  { x: 9, y: 17, color: 'blue' },
]; */