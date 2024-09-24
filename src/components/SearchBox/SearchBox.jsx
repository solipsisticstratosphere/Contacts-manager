import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";

export default function SearchBox() {
  const searchFieldId = useId();
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.container}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        type="text"
        id={searchFieldId}
        className={css.input}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
}
