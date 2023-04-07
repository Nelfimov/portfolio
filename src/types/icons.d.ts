export interface Icons {
  [value: string]: {
    label: string;
    src: string;
  };
}

export type IconsList = {
  [value in 'general' | 'tech']: Icons;
};
