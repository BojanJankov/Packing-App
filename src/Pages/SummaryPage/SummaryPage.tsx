import "./SummaryPage.css";
import { useAppSelector } from "../../utils/hooks";

function SummaryPage() {
  const items = useAppSelector((state) => state.items.value);
  const destination = useAppSelector((state) => state.countries.destination);
  const tripDetails = useAppSelector((state) => state.tripDetails.value);

  return (
    <section className="SummaryPage">
      <div className="summery-heading">
        <h1>Summery Page</h1>
      </div>
      <div className="summery-info-div">
        <div className="summery-items-div">
          <h2>Packed items:</h2>
          <div className="items-div-container">
            {items
              .filter((item) => item.isPacked)
              .map((item, i) => (
                <div className="summery-item-div" key={i}>
                  <strong>Item: {item.description}</strong>
                  <strong>Quntity: {item.quantity}</strong>
                </div>
              ))}
          </div>
        </div>
        <div className="summery-destination-div">
          <h2>Your destination:</h2>
          {destination !== null ? (
            <div className="destination-card">
              <div className="country-image">
                <img
                  src={destination?.flags.png}
                  alt="Destination? flag"
                  width="100px"
                />
              </div>
              <div className="country-info">
                <h4>{destination?.name.common}</h4>
                <strong>Capital:{destination?.capital}</strong>
                <strong>Region:{destination?.region}</strong>
                <strong>Population: {destination?.population}</strong>
              </div>
            </div>
          ) : null}
        </div>
        <div className="summery-trip-details-div">
          <h2>Trip details:</h2>
          {tripDetails !== null ? (
            <div className="trip-details-info-div">
              <strong>First name: {tripDetails?.firstName}</strong>
              <strong>Last name: {tripDetails?.lastName}</strong>
              <strong>Date of birth: {tripDetails?.dateOfBirth}</strong>
              <strong>Email: {tripDetails?.email}</strong>
              <strong>Phone number: {tripDetails?.phoneNumber}</strong>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default SummaryPage;
