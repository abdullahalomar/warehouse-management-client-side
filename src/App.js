import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventories from './Pages/Home/Inventories/Inventories';
import Register from './Pages/Login/Register/Register';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Check from './Pages/Check/Check';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddInventory from './Pages/AddInventory/AddInventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItem from './Pages/MyItem/MyItem';
import Blog from './Pages/Blog/Blog';
import { ToastContainer } from 'react-toastify';
import Contact from './Pages/Contact/Contact';
import Quote from './Pages/Quote/Quote';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/quote' element={<Quote></Quote>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetails></InventoryDetails>}></Route>
        
        <Route path='/check' element={
          <RequireAuth>
            <Check></Check>
          </RequireAuth>
        }></Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
