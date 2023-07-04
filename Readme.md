# CSS-in-JS package for Preact

This package is based on BauCSS and adds a `styled` component for Preact.

[![npm bundle size](https://img.badgesize.io/ndrean/bau-preact-css/main/src/bau-preactcss.js?compression=gzip)](https://bundlephobia.com/package/bau-preactcss@0.1.1)

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
    color: midnightblue;
`;

<p className={class} >A blue paragraph</p>
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

```jsx
const styles = (props) => {
    base: `color: blue;`,
    danger: `color: danger`;
}

const Btn = (props)=> styled('button', props)`
    ${styles(props).base +
    props.danger ? styles(props).danger : ""
    }
`

<Btn>Base button</Btn>
<Btn danger="true" onClick={()=> alert('danger')}>Danger button</Btn>
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
