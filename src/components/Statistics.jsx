export const Statistics = ({ data }) => {
  const { title, stats } = data;
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(state => {
          return (
            <li>
              <span>{state.label}</span>
              <span>{state.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
