import "../css/Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <form className="Search row">
      <input
        type="search"
        className="col-12 col-lg-8 form-control search-input "
        placeholder="Enter a city..."
      />
      <div className="col-12 col-lg-4 search-buttons">
        <button type="submit" className="btn col-6 col-lg-2 search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </button>
        <button
          type="submit"
          className="btn col-6 col-lg-2 current-position-button"
        >
          <FontAwesomeIcon icon={faLocationDot} size="lg" />
        </button>
      </div>
    </form>
  );
}
