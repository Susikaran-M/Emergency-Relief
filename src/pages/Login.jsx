import { useState,useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 const [password, setPassword] = useState('');   
 
 //extract login from context and bring navigate

 const{login} = useContext(AuthContext);
 const navigate = useNavigate();
 const handleSubmit = (e) => {
    e.preventDefault();
    if(password === 'admin123') {
        login();
        navigate('/');
    } else {
        alert('Incorrect password. Please try again.');
    }
 };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
      <form  onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">NGO Login</h2>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
       />
       <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
        Login
       </button>
       </form>
       </div>
    );
};

export default Login;