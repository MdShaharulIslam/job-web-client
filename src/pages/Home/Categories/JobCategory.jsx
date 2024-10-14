import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCategory = ({ job }) => {
  const { _id, title, deadline, minPrice, maxPrice, desc: description, userName, postedDate, applicantnumber } = job;

  // Format dates
  const formattedDate = new Date(deadline).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const jobPostedDate = new Date(postedDate).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="w-full h-fit flex flex-col border shadow-lg bg-base-100 rounded-md p-8">
      <div className="space-y-1 flex-1">
        <h1 className="text-xl font-medium">
          <span className="text-black font-medium">Name of Job Advertiser:</span> {userName}
        </h1>
        <h1 className="text-xl font-medium">
          <span className="text-black font-medium">Job Title:</span> {title}
        </h1>
        <p>
          <span className="text-black font-medium">Application Deadline:</span> {formattedDate}
        </p>
        <p>
          <span className="text-black font-medium">Posted Date:</span> {jobPostedDate}
        </p>
        <p>
          <span className="text-black font-medium">Price Range:</span> {minPrice} $ - {maxPrice} $
        </p>
        <p>
          <span className="text-black font-medium">Applicant Number:</span> {applicantnumber}
        </p>
        <p>
          <span className="text-black font-medium">Description:</span>{" "}
          {description?.length > 100 ? `${description.slice(0, 100)} ...` : description}
        </p>
      </div>
      <div className="my-6">
        <Link to={`jobs/${_id}`}>
          <button className="bg-[#008FD4] hover:bg-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

// Improved PropTypes to ensure job object contains expected fields
JobCategory.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    desc: PropTypes.string,
    userName: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    applicantnumber: PropTypes.number.isRequired,
  }).isRequired,
};

export default JobCategory;
