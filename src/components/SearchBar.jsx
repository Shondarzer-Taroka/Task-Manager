import PropTypes from "prop-types";
function SearchBar({ setSearchQuery }) {
    return (
        <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none"
        />
    );
}

SearchBar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired
}

export default SearchBar;
