import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, statusFilters } from "../../redux/actions.js";

export const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div>
      {Object.values(statusFilters).map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          disabled={currentFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};