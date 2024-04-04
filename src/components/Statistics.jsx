export const Statistics = ({ dates }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        {dates.map(data => {
          return (
            <li>
              <span>{data.label}</span>
              <span>{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
