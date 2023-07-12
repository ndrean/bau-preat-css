# CSS-in-JS package for Preact

This package is based on BauCSS and adds a `styled` component for Preact.

[![npm bundle size](https://img.badgesize.io/ndrean/bau-preact-css/main/src/bau-preactcss.js?compression=gzip)](https://bundlephobia.com/package/bau-preactcss@0.1.0)

## Usage

```js
import BauPreactCss from "bau-preactcss";

const { css, styled, keyframes, createGlobaStyles } = BauPreactCss();
```

## Worked example

<https://github.com/ndrean/bau-preact-css/tree/main/example>

## Create a class

```jsx
const class = css`
    color: var(--main-color);
`;

<p className={class} >A paragraph</p>
```

## Create a styled component

```jsx
const Btn = (props) => style("button", props)`
    cursor: pointer;
    color: ${props.color};
`;

<Btn color="blue">Blue button component</Btn>;
```

## Create a keyframe

```js
const rescale = keyframes`
    0% {transform: scale(0.5)}
    100% {transform: scale(1)}
`;

const class = css`
    color: red;
    animation: ${rescale} 1s ease infinite;
`
```

## Create global styles

```js
createGlobalStyles`
    :root {
        margin: 0px;
    }
`;
```

## Example of conditional classes

You have two ways to use it. Define a function or object that returns CSS strings:

```jsx
const styles = (props) => {
  base: `
    cursor: pointer;
    font-size: ${props.size ?? 1}em;
    border-radius: 0.3em;
    padding: 0.3em;
  `,
  danger: `
    color: red;
    animation: ${rescale} 1s ease infinite;
  `,
  disabled: `
    pointer-events: none;
    opacity: ${props.opacity};
  `;
}
```

You can do:

```jsx
const Btn = (props)=> styled('button', props)`
    ${styles(props).base +
    props.danger ? styles(props).danger : ""
    }
`
// and use it
<Btn>Base button</Btn>
<Btn danger="true" onClick={()=> alert('danger')}>Danger button</Btn>
```

The primitive `styled` lets you read the styles defined as above from the props:

```jsx
const Button = (props) => styled("button", props)`
  ${styles(props).base}
  ${styles(props)}
`;
```

and you can use it:

```jsx
<Button>Base Button</Button>
<Button
  danger="true"
  className={css`
    box-shadow: 6px -6px bisque;
  `}
>
  Shadowed Danger
</Button>;
```

## Example of class extension of a styled component

```jsx
const UL = (props) => styled("ul", props)`
  list-style-type: none;
  > li:nth-of-type(1) {
    background-color: bisque;
    color: green;
  }
`;

const chevronCl = css`
  > li:nth-of-type(2) {
    &::marker {
      content: ">>";
      font-size: 1.2em;
    }
  }
`;

<UL className={chevron}>
  <li>without marker, with background</li>
  <li>With chevron</li>
</UL>;
```
