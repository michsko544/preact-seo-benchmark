import { JSXInternal } from "node_modules/preact/src/jsx";
import "./styles.css";

type Props = JSXInternal.IntrinsicElements["button"];

export default function Button({ className = "", ...props }: Props) {
  return <button className={`button ${className}`} {...props}></button>;
}
