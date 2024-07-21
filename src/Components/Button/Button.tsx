import "./Button.css";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button className="Button">{title}</button>;
}

export default Button;
