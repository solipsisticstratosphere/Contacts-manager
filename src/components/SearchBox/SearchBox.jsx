import { useId } from "react";
import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  const searchFieldId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        id={searchFieldId}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
