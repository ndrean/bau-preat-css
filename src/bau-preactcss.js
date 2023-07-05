import { h } from "preact";

const classNames = (...cn) => [...cn].join(" ");

const toHash = (str) => {
  let i = 0,
    out = 11;
  while (i < str.length) out = (101 * out + str.charCodeAt(i++)) >>> 0;
  return "bau" + out;
};

const addStyle = (target, className, cssText) => {
  const style = document.createElement("style");
  style.id = className;
  style.append(cssText);
  target.append(style);
};

const merge = (type, compiled, target) => {
  const name = toHash(compiled);
  !document.getElementById(name) && type
    ? addStyle(target, name, `${type}${name} { ${compiled}}`)
    : addStyle(target, name, compiled);
  return name;
};

const compileStyles = (rest, strings, args) =>
  strings.reduce((acc, value, i) => {
    if (typeof args[i] !== "object") {
      return acc + value + (args[i] ?? "");
    } else {
      const otherProps = Object.keys(rest).filter(
        (k) => typeof rest[k] !== "function" && rest[k]
      );
      const condCss = Object.entries(args[i]).reduce((accn, [k, v]) => {
        return otherProps.includes(k) ? accn + v : accn;
      }, "");
      return acc + value + condCss;
    }
  }, "");

export default function BauReactCss({
  document = window.document,
  target = document.head,
} = {}) {
  const styled =
    (tag, props) =>
    (strings, ...args) => {
      const { className, children, ...rest } = props;
      const compiledStyles = compileStyles(rest, strings, args);
      const name = merge(".", compiledStyles, target);

      return h(
        tag,
        {
          className: classNames(name, className),
          ...rest,
        },
        children
      );
    };

  const mergeIt =
    (type) =>
    (strings, ...args) =>
      merge(type, compileStyles("", strings, args), target);

  return {
    styled,
    css: mergeIt("."),
    keyframes: mergeIt("@keyframes "),
    createGlobalStyles: mergeIt(),
  };
}
