import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import * as userinfoActions from 'actions/userinfo.js'

import {
    Anchor,
    Row,
    Col,
    Progress
} from 'antd';
import './style.scss'

import Header from 'components/Header/index.js'
import Loading from "components/Loading/index.js"
import Tables from 'components/Home/Tables/index.js'
import Footer from 'components/Home/Footer/index.js'

import OpenLogo from 'images/open.png';
import SafeLogo from 'images/safe.png';
import EcologyLogo from 'images/ecology.png';
import Assetslogo from 'images/assetslogo.png';
import Block from 'images/block.png';
import Nodes from 'images/nodes.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            allianceList: [{
                img: OpenLogo,
                charac: "开放",
                descList: ["智能合约定制化", "联盟链共识节点可灵活扩展接入", "成熟的BAAS平台快速区块链赋能"]
            }, {
                img: SafeLogo,
                charac: "安全",
                descList: ["ECDSA数字证书", "决策委员会多重签名", "手机二次验证"]
            }, {
                img: EcologyLogo,
                charac: "生态",
                descList: ["零售行业互链互通", "零售供应链金融数字贸易", "数字资产钱包"]
            }]
        };
    }

    login = () => {
        let loginState = this.props.userinfo.login;

        console.log(loginState)

        if (loginState) {
            this.props.userinfoActions.logout({
                login: false
            })
        } else {
            this.props.userinfoActions.login({
                login: true
            })
        }
    }

    componentWillMount() {
        // var oRoot = document.getElementById('root');
        // var socket = io.connect("http://123.207.144.58:8588");
        // socket.on("chainDataUpdt",function(data) {
        // 	console.log(data);
        // 	// oRoot.innerText = data.hello;
        // 	// socket.emit("client", {my: "data"})
        // });
    }

    render() {

        return (
            <div>
				<Header login={this.props.userinfo.login} logFn={this.login} />
				<section className="alliance-chain">
                    <header className="title">国内首条新零售业务联盟链</header>
                    <Row type="flex" justify="center">
                        <Col span={16}>
                            <ul className="info">
                                {
                                    this.state.allianceList.map((item, index) => {
                                        return (

                                            <li key={index} className="info-item">
                                                <img src={item.img} alt={item.charac} />
                                                <div className="info-item-charac">{item.charac}</div>
                                                <div className="info-item-line"></div>
                                                <ul className="desc">
                                                    {
                                                        item.descList.map((elem, i) => {
                                                            return (
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
                        </Col>
                    </Row>
                </section>
                <section className="assets">
                    <Row type="flex" justify="center">
                        <Col className="assetslogo" span={5}>
                            <img className="pulse" src={Assetslogo} />
                        </Col>
                        <Col className="assets-info" span={11}>
                            <div>
                                <div className="assets-info-top">
                                    <h1 className="title">数字资产</h1>
                                    <div className="during">201809 ~ 201812</div>
                                </div>
                                <Progress className="progress" percent={50} status="active" />
                                <div className="assets-data">
                                    <div className="assets-data-item">
                                        <img className="img" src={Block} />
                                        <div>
                                            <h3 className="title">最新区块</h3>
                                            <div className="data">#65451321332</div>
                                        </div>
                                    </div>
                                    <div className="assets-data-item">
                                        <img className="img" src={Nodes} />
                                        <div>
                                            <h3 className="title">节点数</h3>
                                            <div className="data">451321332</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="tables">
                    <Row className="tables-content" type="flex" align="middle" justify="center">
                        <Col span={16}>
                            <Tables />
                        </Col>
                    </Row>
                </section>
				<Footer />
				{/* <Loading /> */}
			</div>

        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)