function Checkbox(props) {
  const { label, checked, setChange } = props;
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChange(e.target.checked)}
        className="m-2"
      />
      {label}
    </label>
  );
}
export default Checkbox;
