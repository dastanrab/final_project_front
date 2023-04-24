import NoAuth from "./Auth/NoAuth";
import RequireAuth from "./Auth/RequireAuth";
import CartItems from "./Cart/CartItems";
import {Link, Routes, Route, useLocation, Navigate, BrowserRouter} from "react-router-dom";
import MenuList from "./Menu/MenuList";
import Home from "./Pages/Home";
import Tags from "./Pages/Tags";
import Product from "./Pages/Product";
import TagProducts from "./Pages/TagProducts";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Products from "./AdminProjects/Products";
import Offs from "./Pages/Offs";
import Blog from "./Pages/Blog";


function App() {

  return (
      <>
        <div className='demo-wrap'>
            <div   style={{fontFamily:"yek",position:'relative'}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/tags" element={<Tags/>}/>
                        <Route path="/product/:id" element={<Product/>}/>
                        <Route path="/blog/:id" element={<Blog/>}/>
                        <Route path="/tag_products/:id" element={<TagProducts/>}/>
                        <Route path="/cart_items" element={<CartItems/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/dashboard" element={<RequireAuth>
                            <Dashboard/>
                        </RequireAuth>}/>
                        <Route path="/login" element={<NoAuth><Login/></NoAuth>}/>
                    </Routes>
                </BrowserRouter>

            </div>
        </div>

      </>
  );
}

export default App;
