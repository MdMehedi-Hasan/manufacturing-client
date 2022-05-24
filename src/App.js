import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Home/HomeUtilities/Navbar'
import RequireAuth from './Components/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
// import Purchase from './Components/Purchase/Purchase';
import PurchaseDetails from './Components/Purchase/PurchaseDetails';
import MyOrders from './Components/Dashboard/MyOrders';
import AddReviews from './Components/Dashboard/AddReviews';
import MyProfile from './Components/Dashboard/MyProfile';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="blogs" element={<RequireAuth><Blogs/></RequireAuth>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders/>}></Route>
          <Route path="dashboard/myorders" element={<MyOrders/>}></Route>
          <Route path="dashboard/addreviews" element={<AddReviews/>}></Route>
          <Route path="dashboard/myprofile" element={<MyProfile/>}></Route>
        </Route>
        {/* <Route path="purchase" element={<RequireAuth><Purchase/></RequireAuth>}></Route> */}
        <Route path="purchase/:id" element={<RequireAuth><PurchaseDetails/></RequireAuth>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
