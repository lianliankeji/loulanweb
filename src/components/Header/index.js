import React, {
    Component
} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {
    Anchor,
    Row,
    Col,
    Progress
} from 'antd';
const {
    Link
} = Anchor;

import './style.scss';


import Headerlogo from 'images/headerlogo.png';
import Logo from 'images/logo.png';


class Header extends Component {
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

    render() {
        return (
            <header className="header">
                <Row type="flex" justify="center">
                    <Col className="top" span={16}>
                        <img src={Headerlogo} alt="logo" />
                        <ul className="header-nav">
                            <li className="header-nav-item" href="#components-anchor-demo-basic" title="Basic demo">数字资产</li>
                            <li className="header-nav-item" href="#components-anchor-demo-fixed" title="Fixed demo">联系我们</li>
                        </ul>
                    </Col>
                </Row>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                {/* <div onClick={this.toggleLogin}>
                        {this.props.login ? "登录" : "退出"}
                    </div> */}
                <p className="platform">统一零售数字贸易平台与价值交换网络</p>

            </header>

        )
    }
}

export default Header;