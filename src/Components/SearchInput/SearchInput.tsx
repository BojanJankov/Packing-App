import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  handleSearch: (value: string) => void;
}

function SearchInput({ handleSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleSearch(value);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value, handleSearch]);
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Search countries for your destination..."
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchInput;
