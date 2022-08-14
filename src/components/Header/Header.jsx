import React from 'react'
import { SlackOutlined, CaretRightOutlined, FormOutlined, PartitionOutlined, ReloadOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import "./Header.less"

export default function Header() {
    return (
        <div className='header_box'>
            <ul>
                <li>
                    <a href="/#"> <SlackOutlined /> </a>
                    <div className='vertical_line'></div>
                    <p>《有赞商城后台张得帅》</p>
                </li>
                <li>
                    <div className='preview_mark'><CaretRightOutlined style={{ marginRight: ".3rem" }} /> 预览 </div>
                    <div className='preview_mark'><FormOutlined style={{ marginRight: ".3rem" }} /> 标注</div>

                </li>
                <li>
                    <p>100%</p>
                    <div className='vertical_line'></div>
                    <div className='four_icon'><SettingOutlined /></div>
                    <div className='four_icon'><ReloadOutlined /></div>
                    <div className='four_icon'> <PartitionOutlined /></div>
                    <div className='four_icon'> <StarOutlined /></div>
                </li>
            </ul>
        </div>
    )
}
