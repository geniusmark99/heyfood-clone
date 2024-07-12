import { useState } from "react";
import styles from '../../../styles/ButtonWidget.module.css';

export default function ButtonWidget({ children, className, onClick, padding }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(event);
    }

  };

  return (
    <button
      className={`${className} ${padding ? ' px-4 py-2' : ''} relative overflow-hidden focus:outline-none`}
      onClick={createRipple}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x,
            top: ripple.y,
          }}
          className={`${styles.ripple} absolute rounded-full bg-white/40 opacity-50`}
        />
      ))}
    </button>
  )
}
