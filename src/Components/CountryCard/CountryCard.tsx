import { CountryDetailsType } from "../../Model/country.model";
import "./CountryCard.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { onClickDestination } from "../../state/slices/countries.slice";

interface CountryCardProps {
  country: CountryDetailsType;
}

function CountryCard({ country }: CountryCardProps) {
  const destination = useAppSelector((state) => state.countries.destination);
  const dispatch = useAppDispatch();
  return (
    <div
      className="CountryCard"
      style={
        country === destination
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "#6e44ff" }
      }
      onClick={() => {
        dispatch(onClickDestination(country));
      }}
    >
      <div className="country-image">
        <img src={country.flags.png} alt="Country flag" width="100px" />
      </div>
      <div className="country-info">
        <h4>{country.name.common}</h4>
        <strong>Capital:{country.capital}</strong>
        <strong>Region:{country.region}</strong>
        <strong>Population: {country.population}</strong>
      </div>
    </div>
  );
}

export default CountryCard;
