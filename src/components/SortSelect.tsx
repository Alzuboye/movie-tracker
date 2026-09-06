import './SortSelect.css';
import type { SortBy } from '../types/SortBy';

interface SortByProps {
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
}

const SortSelect = ({ sortBy, setSortBy }: SortByProps) => {
  return (
    <select
      className="sort-select"
      value={sortBy}
      onChange={(event) => {
        setSortBy(event.target.value as SortBy);
      }}
    >
      <option value="rating">Rating</option>
      <option value="year">Year</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelect;
