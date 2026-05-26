import {useState} from 'react';
const Dashboard = () =>{
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [category,setcategory] = useState('Supplies');
    const [urgency, setUrgency] = useState('High');
    const [description, setDescription] = useState('');
    return(
<div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Post a New Relief Request</h1>
      
      {/* form fields */}

      <form className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Request Title</label>
          <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., 100 Liters of Drinking Water"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Location</label>
            <input type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Gandhipuram"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            </div>

            <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Supplies">Supplies</option>
              <option value="Medical">Medical</option>
              <option value="Manpower">Manpower</option>
            </select>
            </div>

         <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Urgency</label>
            <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            </div>

        <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Description</label>
            <textarea
                placeholder="Explain briefly about your need"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none"
            />
          </div>

          <button type="submit" className="mt-4 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
          Post Request
        </button>

      </form>

    </div>
    )
};
 export default Dashboard;