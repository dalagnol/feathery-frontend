import { useState, useEffect } from 'react';

interface UseStoreProps {
  onInit?: Function;
  handler?: Function;

  handlerOffset?: number;

  dependencies?: Array<any>;
  onExit?: () => void;

  init?: Array<any>;
}

export default ({ onInit, init, handler, handlerOffset, dependencies, onExit }: UseStoreProps) => {
  const [offset, setOffset] = useState(handlerOffset || 0);

  useEffect(() => {
    if (onInit) {
      onInit();
    }

    return () => {
      if (onExit) {
        onExit();
      }
    };
  }, [...(init || [])]);

  useEffect(() => {
    if (handler) {
      if (!handlerOffset) {
        handler();
      } else {
        setOffset(offset - 1);
      }
    }
  }, dependencies || []);
};
