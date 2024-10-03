import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default SearchBox;
