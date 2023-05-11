import Icons from "./sprite.svg";

export const Icon = ({ name, color = "black", size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);
