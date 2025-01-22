declare module "split-text-js" {
  export default class SplitTextJS {
    constructor(element: HTMLElement | string, options?: SplitTextOptions);

    words: HTMLElement[];
    chars: HTMLElement[];
    spaces: HTMLElement[];
    originalText: string;
  }

  interface SplitTextOptions {
    type?: "words" | "chars" | "spaces" | string;
    absolute?: boolean;
    tagName?: string;
  }
}
