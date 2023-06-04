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
import Admin from './Components/Admin-dashboard/Admin';
import ManageProducts from './Components/Admin-dashboard/ManageProducts';
import AddProducts from './Components/Admin-dashboard/AddProducts';
import ManageOrders from './Components/Admin-dashboard/ManageOrders';
import MakeAdmin from './Components/Admin-dashboard/MakeAdmin';
import Payment from './Components/Payment/Payment';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path="dashboard/myorders" element={<MyOrders />}></Route>
          <Route path="dashboard/addreviews" element={<AddReviews />}></Route>
          <Route path="dashboard/myprofile" element={<MyProfile />}></Route>
        </Route>
        <Route path="admin" element={<RequireAuth><Admin/></RequireAuth>}>
          <Route index element={<ManageProducts/>}></Route>
          <Route path="addProducts" element={<AddProducts/>}></Route>
          <Route path="manageOrders" element={<ManageOrders/>}></Route>
          <Route path="makeadmin" element={<MakeAdmin />}></Route>
          <Route path="myprofile" element={<MyProfile />}></Route>
        </Route>
        <Route path="purchase/:id" element={<RequireAuth><PurchaseDetails /></RequireAuth>}></Route>
        <Route path="payment/:id" element={<RequireAuth><Payment /></RequireAuth>}></Route>
        <Route path="myportfolio" element={<MyPortfolio/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
