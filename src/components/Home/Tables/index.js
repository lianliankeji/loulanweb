import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { Table } from 'antd';

import './style.scss';

import Headerlogo from 'images/headerlogo.png';
import Logo from 'images/logo.png';
import OpenLogo from 'images/open.png';
import SafeLogo from 'images/safe.png';
import EcologyLogo from 'images/ecology.png';
import Assetslogo from 'images/assetslogo.png';
import Block from 'images/block.png';
import Nodes from 'images/nodes.png';

class Tables extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            
        }
    }

    toggleLogin = () => {
        this.props.logFn();
    }

    getTableColumns = () => {
        const columns = [{
            title: '节点',
            dataIndex: 'node',
            key: 'node'
          }, {
            title: '交易',
            dataIndex: 'trade',
            key: 'trade',
          }, {
            title: '交易信息',
            dataIndex: 'tradeMsg',
            key: 'tradeMsg',
          },{
            title: '所属区块',
            dataIndex: 'from',
            key: 'from',
          }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
          }];

        return columns;
        
    }

    getTableData = () => {
        const data = [{
            key: '1',
            node: 'John Brown',
            trade: 32,
            tradeMsg: 'New York No. 1 Lake Park',
            from:'',
            time: ''
          },{
            key: '2',
            node: 'John Brown',
            trade: 32,
            tradeMsg: 'New York No. 1 Lake Park',
            from:'',
            time: ''
          },{
            key: '3',
            node: 'John Brown',
            trade: 32,
            tradeMsg: 'New York No. 1 Lake Park',
            from:'',
            time: ''
          },{
            key: '4',
            node: 'John Brown',
            trade: 32,
            tradeMsg: 'New York No. 1 Lake Park',
            from:'',
            time: ''
          },{
            key: '5',
            node: 'John Brown',
            trade: 32,
            tradeMsg: 'New York No. 1 Lake Park',
            from:'',
            time: ''
          }];

          return data;
          
    }

    render() {
        return (
            
                <Table
                    pagination={false}
                    columns={this.getTableColumns()} 
                    dataSource={this.getTableData()} />

        )
    }
}

export default Tables;