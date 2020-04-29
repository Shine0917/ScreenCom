import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { getScale } from '../utils';

export default function useResizeConfig(config) {
  const [scale, setScale] = useState(() => getScale(config)); // eslint-disable-line
  // 页面size变化
  useEffect(() => {
    let resize = () => {
      setScale(getScale(config)); // config won't change
    };
    if (!config.disableDeboune) {
      resize = debounce(resize, 500);
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [config]);

  return scale;
  // return 1;
}
