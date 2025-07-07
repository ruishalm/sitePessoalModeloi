import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  /**
   * A porcentagem do elemento que precisa estar visível para disparar a animação.
   * @default 0.1 (10%)
   */
  threshold?: number;
  /**
   * Se a animação deve ser disparada apenas uma vez.
   * @default true
   */
  triggerOnce?: boolean;
}

function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [React.Ref<T>, boolean] {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    // É uma boa prática guardar o elemento em uma variável para usar no cleanup.
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current as T | null;
    if (currentElement) observer.observe(currentElement);

    // A função de limpeza do useEffect deve retornar void ou outra função.
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold, triggerOnce]);

  return [elementRef, isVisible];
}

export default useScrollAnimation;