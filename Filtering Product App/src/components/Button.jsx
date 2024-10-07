function Button(props) {
  return (
    <>
      <button type="button" className="btn btn-outline-warning" onClick={props.clickButton}>
        Find
      </button>
    </>
  );
}

export default Button;
