import React, { useEffect } from 'react'
import { CopyOutlined, SearchOutlined, UnorderedListOutlined, FolderOutlined, FileOutlined, CaretRightOutlined } from '@ant-design/icons';
import "./LeftSide.less"


export default function LeftSide() {

    const showLeftMenu = (e) => {
        let item1s = document.querySelectorAll('.item1_div')

        if (e.currentTarget.querySelector('.item1_div').className !== 'item1_div active_1') {//没展开的状态
            for (let i = 0; i < item1s.length; i++) {
                item1s[i].className = 'item1_div'//清除所有背景色
                item1s[i].children[0].className = 'anticon anticon-caret-right'//清除所有三角旋转
            }
            e.currentTarget.getElementsByClassName('item1_div')[0].className = 'item1_div active_1' //点击项添加背景色



            let ols = document.querySelectorAll('ol')
            for (let i = 0; i < ols.length; i++) {

                ols[i].style.height = 0

            }//所有ol高度清0

            if (e.currentTarget.id === 'gaikuang') {
                return;
            }//判断点击的是不是 概况 项
            e.currentTarget.querySelector('ol').style.height = e.currentTarget.querySelector('ol').children.length * 2.2 + 'rem' //给点击的ol添加高度
            e.currentTarget.getElementsByClassName('anticon')[0].className = 'anticon anticon-caret-right sanjiao ' //点击项三角旋转

        } else {//展开的状态
            // console.log(e.target.className);
            if (e.target.className !== 'item1_div active_1') {
                return
            }
            for (let i = 0; i < item1s.length; i++) {
                item1s[i].className = 'item1_div'//清除背景色
                item1s[i].children[0].className = 'anticon anticon-caret-right'
            }//三角形复原
            let ols = document.querySelectorAll('ol')
            for (let i = 0; i < ols.length; i++) {

                ols[i].style.height = 0

            }//所有ol高度清0

        }

    }

    //绑定点击事件
    useEffect(() => {
        let item1s = document.querySelectorAll('.list_item1')
        for (let i = 0; i < item1s.length; i++) {
            item1s[i].addEventListener('click', showLeftMenu)
        }
    }
        , [])


    return (
        <div className='leftSide_box'>
            <ul className="search">
                <li><CopyOutlined /> 21页</li>
                <li><UnorderedListOutlined /> <SearchOutlined /></li>
            </ul>

            {/* 下拉菜单 */}
            <ul className="list" >
                <li className='list_item1' id='gaikuang'> <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 概况</div></li>
                <li className='list_item1' >
                    <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 店铺</div>
                    <ol className='hide2'>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 店铺概况</li>
                    </ol>
                </li>

                <li className='list_item1' >
                    <div className='item1_div'>
                        <CaretRightOutlined /><FolderOutlined /> 商品
                    </div>
                    <ol className='hide2'>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 商品管理</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 发布商品</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 商品分组</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 编辑商品</li>
                    </ol>
                </li>


                <li className='list_item1' >
                    <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 订单</div>
                    <ol className='hide2'>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 订单概况</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 所有订单</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 加星订单</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 退款维权</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 订单详情</li>
                    </ol>
                </li>


                <li className='list_item1' >
                    <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 客户</div>
                    <ol className='hide2'>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 客户管理</li>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 客户运营</li>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 会员管理</li>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 会员卡</li>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 新建会员卡</li>
                        <li className='list_item2' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 添加客户（点击按钮进入）</li>

                    </ol></li>

                <li className='list_item1' > <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 设置</div>
                    <ol className='hide2'>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 店铺信息</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 员工管理</li>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 联系我们</li>
                    </ol></li>


                <li className='list_item1' > <div className='item1_div'><CaretRightOutlined /><FolderOutlined /> 数据</div>
                    <ol className='hide2'>
                        <li className='list_item2 ' >{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}<FileOutlined /> 数据概况</li>
                    </ol>
                </li>


            </ul>


        </div>
    )
}
