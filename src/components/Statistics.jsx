export const Statistics = ({ docx, pdf, mp3, psd }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        <li>
          <span>{docx.label} </span>
          <span>{docx.percentage}%</span>
        </li>
        <li>
          <span>{pdf.label} </span>
          <span>{pdf.percentage}%</span>
        </li>
        <li>
          <span>{mp3.label} </span>
          <span>{mp3.percentage}%</span>
        </li>

        <li>
          <span>{psd.label} </span>
          <span>{psd.percentage}%</span>
        </li>
      </ul>
    </section>
  );
};
