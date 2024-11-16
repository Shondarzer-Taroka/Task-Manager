
import PropTypes from "prop-types";
function SortButtons({ setSortType }) {
    return (
        <div className="flex gap-4 mb-6">
            <button
                onClick={() => setSortType('priority')}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
                Sort by Priority
            </button>
            <button
                onClick={() => setSortType('completed')}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
                Sort by Completion
            </button>
        </div>
    );
}

SortButtons.propTypes = {
    setSortType: PropTypes.func.isRequired,
};


export default SortButtons;





