import {h} from 'preact'

export default function BauReactCss(input?: {
    document?: Document;
    target?: HTMLElement;
  }): {
    styled: (string, any) => h;
    css: (any) => string;
    keyframes: (any) => string;
    createGlobalStyles: (any) => any;
  };