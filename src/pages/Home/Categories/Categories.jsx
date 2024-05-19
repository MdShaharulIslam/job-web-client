import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCategory from "./JobCategory";
import Loading from "../../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const Categories = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [onSite, setOnsite] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [hybridJobs, setHybridJobs] = useState([]);
  const [partTimeJobs, setPartTimeJobs] = useState([]);
 
  const [allJobs, setAllJobs] = useState([]);

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
      setOnsite(jobCategories.filter((job) => job.category === "On-Site Job"));
      setRemoteJobs(jobCategories.filter((job) => job.category === "Remote Job"));
      setHybridJobs(jobCategories.filter((job) => job.category === "Hybrid"));
      setPartTimeJobs(jobCategories.filter((job) => job.category === "Part Time"));
      setAllJobs(jobCategories);
    }
  }, [jobCategories]);

  if (isLoading) {
    return <Loading />;
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

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {onSite.map((job) => (
                <JobCategory key={job._id} job={job} />
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {remoteJobs.map((job) => (
                <JobCategory key={job._id} job={job} />
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {hybridJobs.map((job) => (
                <JobCategory key={job._id} job={job} />
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {partTimeJobs.map((job) => (
                <JobCategory key={job._id} job={job} />
              ))}
            </div>
          </div>
        </TabPanel>
       

        <TabPanel>
          <div className="min-h-screen">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
              {allJobs.map((job) => (
                <JobCategory key={job._id} job={job} />
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
