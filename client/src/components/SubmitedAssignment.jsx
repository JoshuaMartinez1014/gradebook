function NotSubmitedAssignment(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      }}
    >
      <h2>{props.data[0]}</h2>
      <p>assignment has been submited</p>
    </div>
  );
}

export default NotSubmitedAssignment;
