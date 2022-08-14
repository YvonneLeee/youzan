import React, { useState } from 'react'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import "./Home.less"
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import MainMenu from './MainMenu/MainMenu'

export default function Home() {
    //右侧边栏平移
    const [rightSideMove, setRightSideMove] = useState(0)
    //左侧边栏平移
    const [leftSideMove, setLeftSideMove] = useState(0)
    //中间main模块平移
    const [mainboxMove, setMainboxMove] = useState(0)
    //右边右箭头平移
    const [rightarrowMove, setRightarrowMove] = useState(-1)
    //右边左箭头旋转
    const [leftarrowRotate, setLeftarrowRotate] = useState(0)
    //右边右箭头往左或右移动,0就是左，1就是右
    const [rightOrLeft, setRightOrLeft] = useState(0)


    //左边左箭头平移
    const [leftarrowMove, setLeftarrowMove] = useState(-1)
    //左边左箭头旋转
    const [rightarrowRotate, setRightarrowRotate] = useState(0)
    //左边左箭头往左或右移动,0就是左，1就是右
    const [leftOrRight, setLeftOrRight] = useState(0)



    //右侧右平移
    const RightMove = () => {
        if (rightOrLeft === 0) {
            setRightSideMove(16)
            setMainboxMove(mainboxMove + 5)
            setRightarrowMove(-2)
            setRightarrowRotate(180)
            setRightOrLeft(1)
        } else {
            setRightSideMove(0)
            setMainboxMove(0)
            setRightarrowMove(-1)
            setRightarrowRotate(0)
            setRightOrLeft(0)
        }


    }
    //左侧左平移
    const LeftMove = () => {
        if (leftOrRight === 0) {
            setLeftSideMove(-16)
            console.log(mainboxMove);
            setMainboxMove(mainboxMove - 5)
            setLeftarrowMove(-2)
            setLeftarrowRotate(180)
            setLeftOrRight(1)
        }
        else {
            setLeftSideMove(0)
            setMainboxMove(0)
            setLeftarrowMove(-1)
            setLeftarrowRotate(0)
            setLeftOrRight(0)
        }

    }
    return (
        <div className='home_box'>
            {/* 左侧边栏 */}
            <div className='left' style={{ transform: `translateX(${leftSideMove}rem)` }}>

                {/* 收缩箭头 */}
                <LeftCircleOutlined style={{
                    position: "absolute", top: "50%", right: `${leftarrowMove}rem`,
                    transform: `rotateZ(${leftarrowRotate}deg)`, color: "#fff", opacity: ".6",
                    fontSize: "2rem", transition: "all .5s linear", zIndex: "9999"
                }}
                    onClick={LeftMove} />
                {/* 列表 */}
                <LeftSide />
            </div>

            {/* 中间内容区域 */}
            <div className='mian_box' style={{ transform: `translateX(${mainboxMove}rem)` }}>

                <MainMenu />
            </div>

            {/* 右侧边栏 */}

            <div className='right right_' style={{ transform: `translateX(${rightSideMove}rem)` }}>
                <RightCircleOutlined style={{
                    position: "absolute", top: "50%", left: `${rightarrowMove}rem`,
                    transform: `rotateZ(${rightarrowRotate}deg)`, color: "#fff", opacity: ".6",
                    fontSize: "2rem", transition: "all .5s linear", zIndex: "9999"
                }}
                    onClick={RightMove}
                />
                <RightSide />
            </div>
        </div>
    )
}
