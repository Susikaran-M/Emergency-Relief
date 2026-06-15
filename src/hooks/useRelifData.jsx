import { useState,useEffect } from "react";
const useRelifData = () => {
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
  };//activating the fetch function
    fetchRequests()}, []);
    return { loading, error, requests, setRequests };
}
export default useRelifData;