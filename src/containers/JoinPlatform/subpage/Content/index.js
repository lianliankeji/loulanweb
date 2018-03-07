import React, {
    Component
} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {
    Anchor,
    Row,
    Col,
    Breadcrumb,
    Button
} from 'antd';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import './style.scss';


import Headerlogo from 'images/headerlogo.png';
import Logo from 'images/logo.png';
import Jiarupingtai from 'images/jiarupingtai.png';
import Heyue from "images/heyue.png";
import Hezuo from "images/hezuo.png"
import Chains from 'images/chains.png'


class Content extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            headerNav: [{
                name: "首页"
            }, {
                name: "申请入驻"
            }, {
                name: "联系我们"
            }],

        }
    }

    toggleLogin = () => {
        this.props.logFn();
    }

    getChainsList = () => {
        const data = this.props.chainsList;

        if(data && data.length) {
            return data
        }

    }

    render() {
        return (
            <Row type="flex" justify="center" className="join-platform-content">
                <Col className="top" span={16}>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item href="/#/platform">开放平台</Breadcrumb.Item>
                        <Breadcrumb.Item href="/#/platform/join">加入平台</Breadcrumb.Item>
                    </Breadcrumb>

                    <h2 className="title">加入平台</h2>

                    <Row type="flex" justify="space-between" className="platform-intent">
                        {
                            this.getChainsList().map((item, index) => {
                                return(
                                    <Col key={index} className="item" span={24}>
                                        <div className="left">
                                            <img className="img" src={Chains} />
                                            <div>
                                                <div className="name">{item.name}</div>
                                                <div className="desc">{item.description}</div>
                                                <div className="view">查看详情</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div><Button>测试链</Button></div>
                                            <div><Button style={{marginTop: "20px"}}>正式链</Button></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>


        )
    }
}

export default Content;