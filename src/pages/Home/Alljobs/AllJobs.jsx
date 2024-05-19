import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Loading from "../../../components/Loading/Loading";
import JobCategory from "../Categories/JobCategory";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const { isLoading, data: jobCategories } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: async () => {
      const response = await fetch("https://job-junction-server-seven.vercel.app/jobs", {
        credentials: "include",
      });
      return response.json();
    },
  });

  useEffect(() => {
    if (jobCategories) {
      setAllJobs(jobCategories);
      setFilteredJobs(jobCategories);
    }
  }, [jobCategories]);

  useEffect(() => {
    setFilteredJobs(
      allJobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, allJobs]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-10 lg:my-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">All Categories Jobs</h2>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="min-h-screen">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
          {filteredJobs.map((job) => (
            <JobCategory key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
