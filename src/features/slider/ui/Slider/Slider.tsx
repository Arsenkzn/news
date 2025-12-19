import React, { useRef, cloneElement, isValidElement } from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean;
}

const Slider = ({ children, step = 150, isDark }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  const childWithRef = isValidElement(children)
    ? cloneElement(children, {
        ref: (node: HTMLDivElement | null) => {
          sliderRef.current = node;
          const existingRef = (children as any).ref;
          if (typeof existingRef === 'function') {
            existingRef(node);
          } else if (existingRef && typeof existingRef === 'object' && 'current' in existingRef) {
            (existingRef as { current: HTMLDivElement | null }).current = node;
          }
        },
      } as any)
    : children;

  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {childWithRef}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;
