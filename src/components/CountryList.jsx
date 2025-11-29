import CityItem from "./CityItem.jsx";
import styles from "./CountryList.module.css";
import Message from "./Message.jsx";
import Spinner from "./Spinner.jsx";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the interactive map." />
    );
  return (
    <ul className={styles.countrylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
