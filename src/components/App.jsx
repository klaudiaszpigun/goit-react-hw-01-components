import clsx from 'clsx';
import '../css/app.css';
export const App = ({ children }) => (
  <div className={clsx('container')}>{children}</div>
);
