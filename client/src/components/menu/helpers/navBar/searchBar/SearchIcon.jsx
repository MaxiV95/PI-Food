import PropTypes from "prop-types";

const SearchIcon = ({ size = 19, color = "#ffffff" }) => (
  <svg
    aria-hidden="true"
    role="img"
    id="SearchIcon"
    data-name="SearchIcon"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  </svg>
);

SearchIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default SearchIcon;
