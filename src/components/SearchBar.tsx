import './SearchBar.css';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
};

export default SearchBar;
