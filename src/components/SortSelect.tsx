import './SortSelect.css';

interface SortByProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortSelect = ({ sortBy, setSortBy }: SortByProps) => {
  return (
    <select
      className="sort-select"
      value={sortBy}
      onChange={(event) => {
        setSortBy(event.target.value);
      }}
    >
      <option value="rating">Rating</option>
      <option value="year">Year</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelect;
