import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin className={css.load} width="200" color="#c112c1" />
    </div>
  );
};
