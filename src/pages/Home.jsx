import { useState, useEffect, use } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requests, setRequests] = useState([]);

 
  useEffect( ()=>{
     const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:8000/requests");
      if(!response.ok) {
        throw new Error("Failed to fetch requests");
      }
      const data = await response.json();
      setRequests(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
    fetchRequests()}, []);
  if(loading){
    return <div className="p-8 text-xl font-bold text-blue-600">Loading live data from server...</div>;
  }
  if(error){
    return <div className="p-8 text-xl font-bold text-red-600">Error: {error}</div>;
  }
  return (
 
   <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Live Relief Requests</h1>
        <div className="space-y-4">
          {requests.map((req) => (
          <div key={req.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">{req.title}</h2>
              <p className="text-gray-600 mt-1">
              <span className="font-semibold text-gray-800">Location:</span> {req.location}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Urgency:</span> {req.urgency}
            </p>
            <p className="text-gray-600 mt-2 text-sm italic">{req.description}</p>
          </div>))
            };

        </div>
   </div>
  );
};

export default Home;