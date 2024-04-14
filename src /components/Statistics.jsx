import clsx from 'clsx';
import '../css/statistics.css';
export const Statistics = ({ dates }) => {
  return (
    <section className={clsx('container-statistics')} height="50px">
      <h2 height="50px">Upload stats</h2>
      <ul className={clsx('list-statistics')}>
        {dates.map(data => {
          return (
            <li className={clsx('list-item-statistics')}>
              <span>{data.label} </span>
              <span>{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
