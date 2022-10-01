export type SampleColorTypes = 'red' | 'green' | 'blue' | 'cyan' | 'magenta' | 'yellow';

export type SampleColor = {
  [key in SampleColorTypes]?: {
    name: string;
    code: string;
  };
};

export type SampleColorObject = {
  name: string;
  code: string;
};
