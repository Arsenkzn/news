import React, { useRef } from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      <div ref={sliderRef} className={styles.scrollContainer}>
        {children}
      </div>
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;
