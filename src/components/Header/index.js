import React, { Component } from 'react';

import { Anchor, Row, Col } from 'antd';
const { Link } = Anchor;

import './style.scss';

import Headerlogo from 'images/headerlogo.png';
import Logo from 'images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerNav: [{
                name: "首页"
            }, {
                name: "申请入驻"
            }, {
                name: "联系我们"
            }],
            allianceList: [
                {
                    img: "",
                    charac: "开放",
                    descList: ["智能合约定制化","联盟链共识节点可灵活扩展接入","成熟的BAAS平台快速区块链赋能"]
                },
                {
                    img: "",
                    charac: "安全",
                    descList: ["ECDSA数字证书","决策委员会多重签名","手机二次验证"]
                },
                {
                    img: "",
                    charac: "生态",
                    descList: ["零售行业互链互通","零售供应链金融数字贸易","数字资产钱包"]
                }
            ]
        }
    }

    toggleLogin = () => {
        this.props.logFn();
    }

    render() {
        return (
            <div className="home">
                <header className="header">
                    <Row>
                        <Col span={2}></Col>
                        <Col className="top" span={20}>
                            <img src={Headerlogo} alt="logo" />
                            <ul className="header-nav">
                                <li className="header-nav-item" href="#components-anchor-demo-basic" title="Basic demo">数字资产</li>
                                <li className="header-nav-item" href="#components-anchor-demo-fixed" title="Fixed demo">联系我们</li>
                            </ul>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div onClick={this.toggleLogin}>
                        {this.props.login ? "登录" : "退出"}
                    </div>
                    <p className="platform">统一零售数字贸易平台与价值交换网络</p>

                </header>
                <section className="alliance-chain">
                    <header className="title">国内首条新零售业务联盟链</header>
                    <ul>
                        {
                            this.state.allianceList.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <div>{item.charac}</div>
                                        <ul>
                                            {
                                                item.descList.map((elem, i) => {
                                                    return(
                                                        <li key={i}>{elem}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>

        )
    }
}

export default Header;