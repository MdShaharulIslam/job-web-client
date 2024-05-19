import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const postedDate = form.postedDate.value;
    const deadline = form.deadline.value;
    const email = user?.email;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    const desc = form.description.value;
    const applicantnumber = form.applicantnumber.value;
    const userName = user ? user.displayName : "Unknown";

    const jobInfo = {
      userName,
      title,
      postedDate,
      deadline,
      email,
      category,
      minPrice,
      maxPrice,
      applicantnumber,
      desc,
    };

    axios
      .post("http://localhost:5000/jobs", jobInfo)
      .then((res) => {
        if (res.data?.insertedId) {
          toast.success("Job added successfully");
          navigate("/my-post-job");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      <div className="bg-base-100 border p-5 md:p-10 rounded-md shadow-md">
        <h1 className="text-center text-xl md:text-3xl font-semibold mb-8">
          Add Job Here
        </h1>
        <form onSubmit={handleAddJob}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="title" className="block mb-2 font-medium text-gray-900">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Job Title"
                required
              />
            </div>
            <div>
              <label htmlFor="postedDate" className="block mb-2 font-medium text-gray-900">
                Job Posted Date
              </label>
              <input
                type="datetime-local"
                id="postedDate"
                name="postedDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="deadline" className="block mb-2 font-medium text-gray-900">
                Application Deadline
              </label>
              <input
                type="datetime-local"
                id="deadline"
                name="deadline"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="userName" className="block mb-2 font-medium text-gray-900">
                User
              </label>
              <input
                type="text"
                id="userName"
                defaultValue={user?.displayName}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 font-medium text-gray-900">
                Job Category
              </label>
              <select
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="">Select a category</option>
                <option value="On-Site Job">On-Site Job</option>
                <option value="Remote Job">Remote Job</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div>
              <label htmlFor="minPrice" className="block mb-2 font-medium text-gray-900">
                Minimum Price
              </label>
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                placeholder="Minimum price"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="block mb-2 font-medium text-gray-900">
                Maximum Price
              </label>
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                placeholder="Maximum price"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="applicantnumber" className="block mb-2 font-medium text-gray-900">
                Applicants Number
              </label>
              <input
                type="number"
                name="applicantnumber"
                id="applicantnumber"
                placeholder="Available Job"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2 font-medium text-gray-900">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Description"
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-[#008FD4] hover:bg-[#0870A1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
