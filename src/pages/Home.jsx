import { useState, useEffect, useMemo } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [requests, setRequests] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [showOnlyOpen,setShowOnlyOpen] = useState(false);
 
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
  const filterRequests=useMemo(() => {
    return requests.filter((req) => {
      const categoryMatch = (filterCategory==="All" || req.category === filterCategory);
      const statusMatch= showOnlyOpen ? req.status === "Open" : true;
      return categoryMatch && statusMatch;
    })
  },[requests,filterCategory,showOnlyOpen]);
  if(loading){
    return <div className="p-8 text-xl font-bold text-blue-600">Loading live data from server...</div>;
  }
  if(error){
    return <div className="p-8 text-xl font-bold text-red-600">Error: {error}</div>;
  }
  return (
 
   <div className="container mx-auto p-8 max-w-7xl">

    {/* Header & Filter Section */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-200 pb-5 gap-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Active Needs Board</h1>

    {/* Filter Controls Container */}
    <div className="flex items-center space-x-4">

    {/* NEW: The Checkbox UI */}
      <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
        <input type="checkbox"
        checked={showOnlyOpen}
        onChange={(e)=> setShowOnlyOpen(e.target.checked)} 
        className="border-none rounded-lg p-1.5 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer font-medium hover:bg-gray-100 transition-colors"
        />
        <label htmlFor="status-toggle" className="text-gray-600 font-semibold text-sm cursor-pointer pr-2 select-none">
              Hide Claimed
            </label>
      </div>

      {/* The Dropdown UI */}
      <div className="flex items-center space-x-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200">
            <label className="text-gray-600 font-semibold text-sm pl-2 hidden sm:block">Category:</label>
              <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}
                className="border-none rounded-lg p-1.5 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer font-medium hover:bg-gray-100 transition-colors">
                    <option value="All">All Categories</option>
                    <option value="Medical">Medical</option>
                    <option value="Manpower">Manpower</option>
                    <option value="Supplies">Supplies</option>
              </select>
    </div>
      </div>
      </div>

      {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterRequests.map((req) => (
          <div key={req.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

            {/* Badges (Urgency & Category) */}

            <div className="flex justify-between items-start mb-5">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
                ${req.urgency === 'High' ? 'bg-red-100 text-red-700' :
                  req.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'}`}>
                {req.urgency} Urgency
              </span>
              <span className="text-blue-700 text-xs font-bold bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                {req.category}
              </span>
            </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{req.title}</h2>
            
            <p className="text-gray-500 mb-4 text-sm font-medium flex items-center">
              📍 {req.location}
            </p>
            
            <p className="text-gray-600 text-sm mb-8 line-clamp-2 flex-grow">{req.description}</p>
            
            {/* The Action Button (Changes color if status is 'Claimed') */}
            <button className={`w-full font-bold py-3 rounded-xl transition-all shadow-sm
              ${req.status === 'Claimed' 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'}`}
              disabled={req.status === 'Claimed'}
            >
              {req.status === 'Claimed' ? 'Already Claimed' : 'I Can Help'}
            </button>

          </div>))
            };

        </div>
   </div>
  );
};

export default Home;