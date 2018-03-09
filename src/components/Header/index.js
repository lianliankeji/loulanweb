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
const { Link } = Anchor;
import {
    HashRouter as Router,
    Route,
    Link as LinkUrl,
    Redirect,
    Switch
} from 'react-router-dom'

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
                        {
                            window.screen.width < 768 ?
                            
                            "移动端"
                            :
                            <Router>
                                <ul className="header-nav">
                                    <li className="header-nav-item"><LinkUrl className="link" to="/platform">
                                        开放平台
                                    </LinkUrl></li>
                                    <li className="header-nav-item" title="Whitepaper"><a className="link" href="/static/URT-Whitepaper.pdf">白皮书</a></li>
                                    <li className="header-nav-item" title="Digital Assets"><Anchor affix={false}><Link className="link" href="#assets" title="联盟链" /></Anchor></li>
                                    <li className="header-nav-item" title="Contact"><Anchor affix={false}><Link className="link" href="#contact" title="联系我们" /></Anchor></li>
                                </ul>
                            </Router>
                        }

                        
                    </Col>
                </Row>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                {/* <div onClick={this.toggleLogin}>
                        {this.props.login ? "登录" : "退出"}
                    </div> */}
                <p className="platform">统一零售贸易平台与价值交换网络</p>

            </header>

        )
    }
}

export default Header;