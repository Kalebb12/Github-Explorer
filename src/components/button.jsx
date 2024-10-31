import SearchIcon from "../svg/search";
import Spinner from "../svg/spinner";

const Button = ({ loading }) => {
  return loading ? (
    <button className="h-12 min-h-12 flex items-center px-4 border-white border rounded-md  gap-2 bg-blue-900 font-medium cursor-not-allowed" disabled>
      loading
      <Spinner />
    </button>
  ) : (
    <button className="btn bg-blue-700 font-medium hover:bg-blue-800">
      search
      <SearchIcon />
    </button>
  );
};

export default Button;
