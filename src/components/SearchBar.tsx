import './SearchBar.css';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (value: string) => Promise<void>;
}

const SearchBar = ({ search, setSearch, handleSearch }: SearchBarProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch(search);
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
