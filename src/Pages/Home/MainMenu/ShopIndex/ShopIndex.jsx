import React from 'react'
import {
    WechatFilled, AlertFilled, AliwangwangFilled, InstagramFilled,
    MailFilled, BellFilled, MessageFilled
} from '@ant-design/icons';
import './ShopIndex.less'

export default function ShopIndex() {
    return (
        <div className='shopIndex_box'>
            <div className='shopMiddle_box'>
                <div className="shopName">
                    <h3>Zhangdeshuai的小店</h3>
                    <div className='blue_icon'>试用期</div>
                    <div className='blue_icon'>有赞担保</div>
                </div>
                <div className="task_area">
                    <div className="task_header">
                        <h6>新手任务</h6>
                        <h6>更多任务</h6>
                    </div>
                    <div className="createShop">
                        <div className="createShop_top">
                            <h6>创建店铺</h6>
                            <p>注册有赞账号，并成功创建店铺，即算完成任务</p>
                        </div>
                        <div className="createShop_bottom">
                            <p>奖励：+5有赞币</p>
                            <div className='btns'>
                                <div>查看教程</div>
                                <div>领取奖励</div>
                            </div>
                        </div>
                    </div>
                    <div className="ShopData">
                        <div>
                            <h3>1</h3>
                            <p>待发货订单</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>维权订单</p>
                        </div>
                        <div>
                            <h3>0</h3>
                            <p>昨日订单</p>
                        </div>
                        <div>
                            <h3>¥0.00</h3>
                            <p>昨日交易额</p>
                        </div>
                        <div>
                            <h3>¥0.00</h3>
                            <p>可提现余额</p>
                        </div>


                    </div>
                </div>
                <div className="usually_area">
                    <div className="usually_header">
                        <h6>常用功能</h6>
                    </div>
                    <ul className='function_module'>
                        <li><WechatFilled style={{ color: 'green', fontSize: '1.5rem' }} /> 微信</li>
                        <li>发布商品</li>
                        <li>页面管理</li>
                        <li>客服系统</li>
                        <li>优惠券</li>
                        <li>微信小程序</li>
                        <li>分销员</li>
                        <li>收入/提现</li>
                        <li>扫码收款</li>
                        <li>帮助中心</li>
                    </ul>
                    <div className='usually_bottom'><AlertFilled style={{ color: "#3288FF", fontSize: "1.2rem" }} /> 功能上新:微商城上线打印方案模块，对接小票打印机(WiFi打印机和蓝牙打印机),多网点下也支持打印方案模块，减少漏单可能!</div>
                </div>
                <div className="saleApp_area">
                    <div className="saleApp_header">
                        <h6>营销应用</h6>
                        <h6>营销中心</h6>
                    </div>
                    <ul className='saleApp_module' >
                        <li>
                            <h3>多人拼团</h3>
                            <p>裂变式营销玩法</p>
                        </li>
                        <li>
                            <h3>发券宝</h3>
                            <p>拉新裂变促活精准营销</p>
                        </li>
                        <li>
                            <h3>分销市场</h3>
                            <p>一键上架 快速补充货源</p>
                        </li>
                        <li>
                            <h3>有赞小程序</h3>
                            <p>一键生成抢占先机</p>
                        </li>

                    </ul>
                </div>
                <div className="opinionLearn_area">
                    <div className="opinionLearn_header">
                        <div className="opinionLearn_title">
                            <h6>经营建议</h6>
                            <h6>更多</h6>
                        </div>
                        <div className="opinionLearn_title">
                            <h6>学习交流</h6>
                            <h6>更多渠道</h6>
                        </div>
                    </div>
                    <div className="opinionLearn_module">
                        <ul className="opinion_module">
                            <li>
                                <h3>多人拼团</h3>
                                <p>紧跟知识付费浪潮 尝鲜内容变现</p>
                            </li>
                            <li>
                                <h3>分销精选招商</h3>
                                <p>90%自媒体电商都在这里选货</p>
                            </li>
                            <li>
                                <h3>精细化运营36计</h3>
                                <p>玩转营销工具 提升运营技巧</p>
                            </li>
                            <li>
                                <h3>有赞运营智库</h3>
                                <p>30+营销玩法，近百个明星案例</p>
                            </li>
                        </ul>
                        <ul className="learn_module">
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                            <li>
                                <div className='message_icon'><AliwangwangFilled /></div>
                                <div className='icon_content'>
                                    <h5>在线论坛</h5>
                                    <p>百万商家互通互助</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="more_area">
                    <div className="more_header">
                        <h6>更多服务</h6>
                    </div>
                    <ul className='more_bottom'>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                        <li>
                            <h3><InstagramFilled /></h3>
                            <p>我要推广</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="shopRight_box">
                {/* //在线客服 /评价/微商城/桌面*/}
                <ul className='right_top' >
                    <li className="online_communication">
                        <div>在线客服</div>
                        <p>电话客服:0571-5646-4545</p>
                    </li>
                    <li>
                        <div className='small_icon'><MailFilled /></div>
                        <div>
                            <h3>评价与反馈</h3>
                            <p>每个声音都值得倾听</p>
                        </div>
                    </li>
                    <li>
                        <div className='small_icon'><MailFilled /></div>
                        <div>
                            <h3>微商城手机客户端</h3>
                            <p>用手机随时随地管理店铺</p>
                        </div>
                    </li>
                    <li>
                        <div className='small_icon'><MailFilled /></div>
                        <div>
                            <h3>桌面在线客服</h3>
                            <p>微商城手机客户端</p>
                        </div>
                    </li>
                </ul>

                {/* 有赞神厨 */}
                <div className='god_cooker'>
                    <header>有赞神厨</header>
                    <ul>
                        <li>[必读]有赞上市酒会嘉宾演讲实录</li>
                        <li>[收藏]辣妈学院的这三招你绝对想不到</li>
                        <li>[案例]悟空家如何10天突破订单4000</li>
                        <li>[费率]有赞商城早已不加收手续费</li>
                        <li>[费率]有赞商城早已不加收手续费录</li>
                    </ul>

                </div>

                {/* 近期活动 */}
                <div className='god_cooker'>
                    <header>近期活动</header>
                    <ul>
                        <li>全国 有赞运营技能提高班联动 | 招生中</li>
                        <li>全国 有赞百万小程序沙龙联动 | 报名中</li>
                        <li>05/31 东莞 线下运营深度沟通交流会</li>
                        <li>05/25 深圳 百万小程序公开课</li>
                    </ul>

                </div>

                {/* 功能上新 */}
                <div className='god_cooker'>
                    <header>功能上新</header>
                    <ul>
                        <li>05/24 微商城支持对接WiFi、蓝牙打印机</li>
                        <li>05/22 商品搜索支持更多排序维度</li>
                        <li>05/18 小程序瓜分券上线</li>
                        <li>05/16 标签管理新增批量删除等功能</li>
                        <li>05/15 优惠券/码支持指定商品不参与活动</li>
                    </ul>

                </div>
                {/* 客户消息、通知 */}
                <div className='message_notice'>
                    <div className="msg"><MessageFilled /> 客户消息</div>
                    <div className="ntc"><BellFilled /> 通知</div>
                </div>
            </div>
        </div>
    )
}
