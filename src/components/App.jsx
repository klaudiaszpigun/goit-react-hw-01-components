export const App = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "block",
        fontSize: 40,
        color: "#010101",
      }}
    >
      {children}
    </div>
  );
};
