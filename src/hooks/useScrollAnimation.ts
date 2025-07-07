import { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
  /** A porcentagem do elemento que precisa estar visível para disparar a animação (0 a 1) */
  threshold?: number;
  /** Margem ao redor do viewport para disparar a animação mais cedo ou mais tarde */
  rootMargin?: string;
  /** Se a animação deve disparar apenas uma vez */
  triggerOnce?: boolean;
}

/**
 * Um hook customizado que usa a IntersectionObserver API para detectar quando um elemento entra na tela.
 * @param options Opções para o IntersectionObserver.
 * @returns Uma tupla contendo a ref a ser anexada ao elemento e um booleano indicando se está visível.
 */
const useScrollAnimation = <T extends HTMLElement>(
  options: ObserverOptions = {}
): [React.RefObject<T | null>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;