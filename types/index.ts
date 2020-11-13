// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:

export type FrontMatter = {
  title?: string;
  subtitle?: string;
  introduction?: string;
  time?: {
    text?: string;
    minutes?: number;
    time?: number;
    words?: number;
  };
};
