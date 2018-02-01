import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Row,
    Col
} from 'antd'

import './style.scss';

import Aiyi from 'images/aiyi.png';
import Wensli from 'images/wensli.png';
import Xinhua from 'images/xinhua.png';
import Qrcode from 'images/qrcode.png';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {};
    }

    render() {
        return (
            <footer className="home-footer">
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <div className="top">
                            <div className="item">
                                <h3 className="title">合作企业</h3>
                                <div className="Cooperative">
                                    <img src={Aiyi} />
                                    <img className="wensli" src={Wensli} />
                                    <img src={Xinhua} />
                                </div>
                            </div>
                            <div className="item">
                                <h3 className="title">联系我们</h3>
                                <div className="contact">
                                    <div className="tel">
                                        <label>电话：</label><span>15801234157</span>
                                    </div>
                                    <div className="wechat">
                                        <label>微信：</label><span>madouer1984</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item attention">
                                <h3 className="title">关注我们</h3>
                                <div className="code">
                                    <img src={Qrcode} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <p className="bei"><span className="company">北京链链信息技术有限公司</span><span>京ICP备16055742号-3</span></p>
            </footer>
        )
    }
}