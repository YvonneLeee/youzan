import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App"
import Home from '../Pages/Home/Home'
import Gaikuang from '../Pages/Home/MainMenu/ShopIndex/ShopIndex'
import Dianpu from '../Pages/Home/MainMenu/Dianpu/Dianpu'
import Goods from '../Pages/Home/MainMenu/Goods/Goods'
import Order from '../Pages/Home/MainMenu/Order/Order'
import Customer from '../Pages/Home/MainMenu/Customer/Customer'
import Setting from '../Pages/Home/MainMenu/Setting/Setting'
import Shuju from '../Pages/Home/MainMenu/Shuju/Shuju'

const BaseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />}>
                        <Route path="gaikuang" element={<Gaikuang />}></Route>
                        <Route path="dianpu" element={<Dianpu />}></Route>
                        <Route path="goods" element={<Goods />}></Route>
                        <Route path="order" element={<Order />}></Route>
                        <Route path="customer" element={<Customer />}></Route>
                        <Route path="setting" element={<Setting />}></Route>
                        <Route path="shuju" element={<Shuju />}></Route>
                    </Route>

                </Route>
            </Routes>
        </Router>
    )
}
export default BaseRouter