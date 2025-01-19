import { useCallback, useEffect, useState } from 'react';

export const useQueryParam = <T>(paramKey: string, defaultValue: T): [T, (value?: T) => void] => {
  const [paramValue, setParamValue] = useState<T>(defaultValue);

  const getQueryParams = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get(paramKey);
    if (!param) return defaultValue;

    try {
      return JSON.parse(param) as T;
    } catch {
      return param as unknown as T;
    }
  }, [paramKey, defaultValue]);

  useEffect(() => {
    setParamValue(getQueryParams());
  }, [getQueryParams]);

  const setQueryParam = useCallback(
    (value?: T) => {
      setParamValue(value || defaultValue);

      const params = new URLSearchParams(window.location.search);

      if (value === undefined || value === null) {
        params.delete(paramKey);
      } else if (typeof value === 'string') {
        params.set(paramKey, value);
      } else {
        params.set(paramKey, JSON.stringify(value));
      }

      const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
      window.history.pushState(null, '', newUrl);
    },
    [paramKey, defaultValue]
  );

  return [paramValue, setQueryParam];
};
