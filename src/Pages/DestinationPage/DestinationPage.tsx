import { useCallback, useEffect, useState } from "react";
import CountryCard from "../../Components/CountryCard/CountryCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./DestinationPage.css";
import { CountryDetailsType } from "../../Model/country.model";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";

function DestinationPage() {
  const countries = useAppSelector((state) => state.countries.value);
  console.log(countries);
  const destination = useAppSelector((state) => state.countries.destination);

  const [filteredCountries, setFilteredCountries] =
    useState<CountryDetailsType[]>(countries);

  const navigate = useNavigate();

  const handleSearch = useCallback(
    (value: string) => {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [countries]
  );

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries, handleSearch]);

  return (
    <section className="DestinationPage">
      <div className="search-div">
        <SearchInput handleSearch={handleSearch} />
      </div>
      {destination !== null ? (
        <div className="button-div-navigation">
          <h3>
            After you chose your destination (green), let's finsh with your trip
            details
          </h3>
          <button
            className="navigate-button"
            onClick={() => {
              navigate("/trip-details");
            }}
          >
            Trip details
          </button>
        </div>
      ) : null}
      <div className="countries-div">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, i) => (
            <CountryCard country={country} key={i} />
          ))
        ) : (
          <div>No countries found</div>
        )}
      </div>
    </section>
  );
}

export default DestinationPage;
