import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCategory from "./JobCategory";
import Loading from "../../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../../hooks/axiosJobs"; // Import fetchJobs

const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [onSite, setOnsite] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [hybridJobs, setHybridJobs] = useState([]);
  const [partTimeJobs, setPartTimeJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  // Fetch jobs using react-query and axiosJobs
  const { isLoading, error, data: jobCategories } = useQuery({
    queryKey: ["jobCategories"],
    queryFn: fetchJobs, // Use fetchJobs from axiosJobs.js
  });

  // Filter jobs by category when jobCategories is updated
  useEffect(() => {
    if (jobCategories) {
      console.log("Job Categories Data:", jobCategories);
      setOnsite(jobCategories.filter((job) => job.category === "On-Site Job"));
      setRemoteJobs(jobCategories.filter((job) => job.category === "Remote Job"));
      setHybridJobs(jobCategories.filter((job) => job.category === "Hybrid"));
      setPartTimeJobs(jobCategories.filter((job) => job.category === "Part Time"));
      setAllJobs(jobCategories);
    }
  }, [jobCategories]);

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Error handling
  if (error) {
    return <p className="text-red-500">Failed to load job categories: {error.message}</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-10 my-10 lg:my-20">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Job Categories</h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>On-Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part-Time</Tab>
          <Tab>All Jobs</Tab>
        </TabList>

        {/* On-Site Jobs Tab */}
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {onSite.length > 0 ? (
                onSite.map((job) => <JobCategory key={job._id} job={job} />)
              ) : (
                <p>No On-Site Jobs available.</p>
              )}
            </div>
          </div>
        </TabPanel>

        {/* Remote Jobs Tab */}
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {remoteJobs.length > 0 ? (
                remoteJobs.map((job) => <JobCategory key={job._id} job={job} />)
              ) : (
                <p>No Remote Jobs available.</p>
              )}
            </div>
          </div>
        </TabPanel>

        {/* Hybrid Jobs Tab */}
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {hybridJobs.length > 0 ? (
                hybridJobs.map((job) => <JobCategory key={job._id} job={job} />)
              ) : (
                <p>No Hybrid Jobs available.</p>
              )}
            </div>
          </div>
        </TabPanel>

        {/* Part-Time Jobs Tab */}
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {partTimeJobs.length > 0 ? (
                partTimeJobs.map((job) => <JobCategory key={job._id} job={job} />)
              ) : (
                <p>No Part-Time Jobs available.</p>
              )}
            </div>
          </div>
        </TabPanel>

        {/* All Jobs Tab */}
        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {allJobs.length > 0 ? (
                allJobs.map((job) => <JobCategory key={job._id} job={job} />)
              ) : (
                <p>No Jobs available at the moment.</p>
              )}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
