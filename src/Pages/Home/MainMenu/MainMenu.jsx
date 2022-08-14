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
                    }}><GatewayOutlined />  概况
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('dianpu')
                    }}><GatewayOutlined /> 店铺
                        <div className='hidebox_Shop hidebox hide'>
                            <h4>店铺管理</h4>
                            <h6>网店装修</h6>
                            <h6>小程序装修</h6>
                            <h6>微页面</h6>
                            <h6>全店风格</h6>
                            <h6>全店风格</h6>
                            <h6>公共广告</h6>
                            <h6>自定义模块</h6>
                            <h6>我的文件</h6>
                        </div>
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('goods')
                    }} ><GatewayOutlined />商品
                        <div className='hidebox_Goods hidebox hide'>
                            <h4>商品管理</h4>
                            <h6>商品管理</h6>
                            <h6>商品分组</h6>
                            <h6>商品页模板</h6>
                            <h6>商品导入</h6>
                            <h6>我要分销</h6>

                        </div>
                    </h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('order')
                    }} ><GatewayOutlined /> 订单
                        <div className='hidebox_Dingdan hidebox hide'>
                            <h4>订单管理</h4>
                            <h6>订单概况</h6>
                            <h6>所有订单</h6>
                            <h6>加星订单</h6>
                            <h6>退款维权</h6>
                            <h6>评价管理</h6>
                            <h6>分销采购单</h6>
                            <h6>批量发货</h6>
                            <h6>批量退款</h6>
                            <h6>订单设置</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('customer')
                    }} ><GatewayOutlined /> 客户
                        <div className='hidebox_Kehu hidebox hide'>
                            <h4>客户经营</h4>
                            <h6>客户管理</h6>
                            <h6>客户运营</h6>
                            <h6>会员管理</h6>
                            <h6>会员卡</h6>
                            <h6>会员储值</h6>
                            <h6>标签管理</h6>
                            <h6>积分管理</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('setting')
                    }} ><GatewayOutlined /> 设置
                        <div className='hidebox_Data hidebox hide'>
                            <h4>数据中心</h4>
                            <h6>数据概况</h6>
                            <h6>店铺分析</h6>
                            <h6>商品分析</h6>
                            <h6>交易分析</h6>
                            <h6>客户分析</h6>
                            <h6>数据工具</h6>
                            <h6>分销分析</h6>

                        </div></h4>
                    <h4 className='ljz' onClick={() => {
                        navigate('shuju')
                    }}><GatewayOutlined /> 数据
                        <div className='hidebox_Set hidebox hide'>
                            <h4>设置中心</h4>
                            <h6>店铺信息</h6>
                            <h6>服务协议</h6>
                            <h6>员工管理</h6>
                            <h6>操作记录</h6>
                            <h6>支付/交易</h6>
                            <h6>消费保障</h6>
                            <h6>订单设置</h6>
                            <h6>通用设置</h6>
                            <h6>掌柜任务</h6>
                            <h6>打印方案</h6>

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
