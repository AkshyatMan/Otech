import { useEffect, useState, useRef } from "react";

interface CounterAnimationProps {
  targetValue: string;
  duration?: number;
  className?: string;
}

const CounterAnimation = ({ targetValue, duration = 2000, className = "" }: CounterAnimationProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Extract numeric value and suffix from targetValue
  const numericMatch = targetValue.match(/^(\d+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = targetValue.replace(/^(\d+\.?\d*)/, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = numericValue;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = startValue + (endValue - startValue) * easeOutExpo;
      setCurrentValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, numericValue, duration]);

  const formatValue = (value: number) => {
    if (numericValue % 1 !== 0) {
      // Has decimal places
      return value.toFixed(1);
    }
    return Math.floor(value).toString();
  };

  return (
    <div ref={elementRef} className={className}>
      {formatValue(currentValue)}{suffix}
    </div>
  );
};

export default CounterAnimation;