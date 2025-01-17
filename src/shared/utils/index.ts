import { type ClassValue, clsx } from 'clsx';

export const cx = (...rest: ClassValue[]) => {
  return clsx(...rest);
};
