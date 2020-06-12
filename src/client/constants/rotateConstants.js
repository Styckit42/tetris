export const STATE_0 = 'STATE_0';
export const STATE_1 = 'STATE_1';
export const STATE_2 = 'STATE_2';
export const STATE_3 = 'STATE_3';
export const ROTATE_I = {
  STATE_0: [
    { x: 2, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 2 },
  ],
  STATE_1: [
    { x: 1, y: 2 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: -2, y: -1 },
  ],
  STATE_2: [
    { x: -2, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 1, y: -2 },
  ],
  STATE_3: [
    { x: -1, y: -2 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 2, y: 1 },
  ],
};

export const ROTATE_J = {
  STATE_0: [
    { x: 2, y: 0 },
    { x: 1, y: -1 },
    { x: 0, y: 0 },
    { x: -1, y: 1 },
  ],
  STATE_1: [
    { x: 0, y: 2 },
    { x: 1, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: -1 },
  ],
  STATE_2: [
    { x: -2, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: -1 },
  ],
  STATE_3: [
    { x: 0, y: -2 },
    { x: -1, y: -1 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
};

export const ROTATE_O = {
  STATE_0: [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ],
  STATE_1: [
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
  ],
  STATE_2: [
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
  ],
  STATE_3: [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
  ],
};

export const ROTATE_L = {
  STATE_0: [
    { x: 0, y: 2 },
    { x: 1, y: -1 },
    { x: 0, y: 0 },
    { x: -1, y: 1 },
  ],
  STATE_1: [
    { x: -2, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: -1 },
  ],
  STATE_2: [
    { x: 0, y: -2 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: -1 },
  ],
  STATE_3: [
    { x: 2, y: 0 },
    { x: -1, y: -1 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
};

export const ROTATE_S = {
  STATE_0: [
    { x: 1, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: -1 },
    { x: 0, y: 0 },
  ],
  STATE_1: [
    { x: -1, y: 1 },
    { x: -2, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 0 },
  ],
  STATE_2: [
    { x: -1, y: -1 },
    { x: 0, y: -2 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
  ],
  STATE_3: [
    { x: 1, y: -1 },
    { x: 2, y: 0 },
    { x: -1, y: -1 },
    { x: 0, y: 0 },
  ],
};

export const ROTATE_Z = {
  STATE_0: [
    { x: 2, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: 1 },
  ],
  STATE_1: [
    { x: 0, y: 2 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: -1 },
  ],
  STATE_2: [
    { x: -2, y: 0 },
    { x: -1, y: -1 },
    { x: 0, y: 0 },
    { x: 1, y: -1 },
  ],
  STATE_3: [
    { x: 0, y: -2 },
    { x: 1, y: -1 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
};

export const ROTATE_T = {
  STATE_0: [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: 0, y: 0 },
    { x: -1, y: 1 },
  ],
  STATE_1: [
    { x: -1, y: 1 },
    { x: 1, y: 1 },
    { x: 0, y: 0 },
    { x: -1, y: -1 },
  ],
  STATE_2: [
    { x: -1, y: -1 },
    { x: -1, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: -1 },
  ],
  STATE_3: [
    { x: 1, y: -1 },
    { x: -1, y: -1 },
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
};

export const WALLKICK_DEFAULT = {
  STATE_0: [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 3, y: -1 },
    { x: 1, y: 3 },
    { x: -1, y: 0 },
  ],
  STATE_1: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: -3 },
    { x: 1, y: 0 },
  ],
  STATE_2: [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 3 },
    { x: 1, y: 0 },
  ],
  STATE_3: [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: -3 },
    { x: -1, y: 0 },
  ],
};

export const WALLKICK_I = {
  STATE_0: [
    { x: 0, y: 0 },
    { x: -2, y: 0 },
    { x: 3, y: 0 },
    { x: -3, y: 1 },
    { x: 3, y: -3 },
  ],
  STATE_1: [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 3, y: 0 },
    { x: -3, y: -2 },
    { x: 3, y: 3 },
  ],
  STATE_2: [
    { x: 0, y: 0 },
    { x: 2, y: 0 },
    { x: -3, y: 0 },
    { x: 3, y: -1 },
    { x: -3, y: 3 },
  ],
  STATE_3: [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 3, y: 0 },
    { x: -3, y: -2 },
    { x: 3, y: 3 },
  ],
};
