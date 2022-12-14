import React, { useState } from 'react'
import { LikeOutlined, GatewayOutlined } from '@ant-design/icons';
import Gaikuang from './ShopIndex/ShopIndex'
import Dianpu from './Dianpu/Dianpu';
import Goods from './Goods/Goods';
import Order from './Order/Order';
import Customer from './Customer/Customer';
import Setting from './Setting/Setting';
import Shuju from './Shuju/Shuju';
import "./MainMenu.less"
import { useNavigate } from 'react-router';
import { Route, Routes } from "react-router-dom";




export default function MainMenu() {
    const navigate = useNavigate()
    // const pathname = useLocation().pathname


    const [seven, setSeven] = useState(0)
    return (

        <div className='MainMenu_box'>
            <div className="MainMenu_leffbox" style={{ marginRight: seven }}>
                <div className='logo'>
                    <div className='circle'><LikeOutlined /></div>
                </div>
                <div onClick={(e) => {
                    // console.log(e.target.getElementsByClassName('hidebox')[0]);
                    // console.log(e.target);
                    if (e.target.className !== 'ljz') {
                        return
                    }

                    let h4Arr = e.currentTarget.children
                    for (let i = 0; i < h4Arr.length; i++) {
                        h4Arr[i].className = 'ljz'
                    }

                    let hideboxArr = document.getElementsByClassName('hidebox')
                    for (let i = 0; i < hideboxArr.length; i++) {
                        hideboxArr[i].className = 'hidebox hide'
                    }
                    if (e.target.id !== 'gaikuang') {
                        setSeven(7 + 'rem')
                        e.target.getElementsByClassName('hidebox')[0].className = 'hidebox show'
                    } else {
                        setSeven(0)
                    }

                    e.target.className = 'active ljz'

                }}>
                    <h4 className='ljz active' id='gaikuang' onClick={() => {
                        navigate('gaikuang')
                    }}><GatewayOutlined />  ??????
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('dianpu')
                    }}><GatewayOutlined /> ??????
                        <div className='hidebox_Shop hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>???????????????</h6>
                            <h6>?????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>???????????????</h6>
                            <h6>????????????</h6>
                        </div>
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('goods')
                    }} ><GatewayOutlined />??????
                        <div className='hidebox_Goods hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>???????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>

                        </div>
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('order')
                    }} ><GatewayOutlined /> ??????
                        <div className='hidebox_Dingdan hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>???????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('customer')
                    }} ><GatewayOutlined /> ??????
                        <div className='hidebox_Kehu hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>?????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('setting')
                    }} ><GatewayOutlined /> ??????
                        <div className='hidebox_Data hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('shuju')
                    }}><GatewayOutlined /> ??????
                        <div className='hidebox_Set hidebox hide'>
                            <h4>????????????</h4>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>??????/??????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>
                            <h6>????????????</h6>

                        </div></h4>
                </div>
            </div>

            {/* <Gaikuang /> */}

            <Routes>

                <Route path="gaikuang" element={<Gaikuang />}></Route>
                <Route path="dianpu" element={<Dianpu />}></Route>
                <Route path="goods" element={<Goods />}></Route>
                <Route path="order" element={<Order />}></Route>
                <Route path="customer" element={<Customer />}></Route>
                <Route path="setting" element={<Setting />}></Route>
                <Route path="shuju" element={<Shuju />}></Route>

            </Routes>



        </div>

    )
}
