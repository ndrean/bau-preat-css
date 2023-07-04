import BauPreactCss from "bau-preactcss";

const { styled, keyframes } = BauPreactCss();

const rescale = keyframes`
    0% {transform: scale(0.5)}
    100% {transform: scale(1)}
`;

const styles = (props) => ({
  root: `
      color: dodgerblue; 
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
      opacity: 0.3;
    `,
});

const Btn = (props) =>
  styled("button", props)`
    ${styles(props).root +
    (props.danger ? styles(props).danger : "") +
    (props.disabled ? styles(props).disabled : "")}
  `;

export { Btn };
