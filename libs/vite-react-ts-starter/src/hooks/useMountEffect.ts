import { EffectCallback, useEffect, useState } from 'react';

export const useMountEffect = (effect: EffectCallback) => {
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!hasRun) {
      setHasRun(true);
      return effect();
    }
  }, [hasRun, effect]);
};
