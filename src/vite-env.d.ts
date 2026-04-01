/// <reference types="vite/client" />

declare module "gsap/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: string | Element | (string | Element)[], vars?: object);
    revert(): void;
    split(vars?: object): SplitText;
  }
}
