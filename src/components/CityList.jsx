import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return <ul className={styles.CityList}>{cities.map(city=>)}</ul>;
}

export default CityList;
