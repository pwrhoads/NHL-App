import { useEffect, useState, type ChangeEvent } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
  debounceDelay?: number; //default: 300ms
}

const SearchBar = ({
  placeholder,
  onSearch,
  debounceDelay = 300,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the query input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, debounceDelay]);

  // Trigger search callback when debounced query changes
  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleClear = () => {
    setQuery("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <FiSearch />
      </div>
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <FiX />
        </button>
      )}

      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
    </div>
  );
};

export default SearchBar;
