import { useCallback, useState } from 'react';

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    return setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    return setIsOpen(false);
  }, []);
  const toggle = useCallback(() => {
    return setIsOpen((state) => {
      return !state;
    });
  }, []);

  return { isOpen, open, close, toggle };
};
