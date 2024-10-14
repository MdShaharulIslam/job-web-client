import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyBidRow from "./MyBidRow";
import Swal from "sweetalert2";

const MyBid = () => {
  const { user } = useAuth();
  const [myBids, setMyBids] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://job-web-server.vercel.app/bids?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setMyBids(res.data);
        })
        .catch((error) => {
          console.error("Error fetching bids:", error);
        });
    }
  }, [user]);

  const handleCompleteJob = (email, title, event) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-web-server.vercel.app/jobs?email=${email}&title=${title}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount > 0) {
              event.target.disabled = true;
              Swal.fire({
                title: "Confirmed",
                text: "Your Job request has been confirmed.",
                icon: "success",
              });
              // Optionally, you can refresh the bids list after confirmation
              setMyBids((prevBids) =>
                prevBids.map((bid) =>
                  bid.title === title && bid.email === email
                    ? { ...bid, status: "Confirmed" }
                    : bid
                )
              );
            }
          })
          .catch((error) => {
            console.error("Error confirming job:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while confirming the job.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl min-h-[60vh] mx-auto px-5 md:px-10 my-8 md:mb-14 lg:mb-20">
      <div>
        {myBids.length === 0 ? (
          <div>
            <h1 className="text-xl md:text-3xl text-center font-semibold">
              You have not apply any jobs yet.
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <h1 className="text-xl md:text-3xl text-center mb-5 font-semibold">
              My Application
            </h1>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="w-full text-base text-left text-gray-500">
                <thead className="text-gray-700 uppercase bg-gray-100 border">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Job Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Buyer Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Deadline
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myBids.map((myBid) => (
                    <MyBidRow
                      key={myBid._id}
                      myBid={myBid}
                      handleCompleteJob={handleCompleteJob}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBid;
