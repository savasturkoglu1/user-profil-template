import React from 'react';
import Head from '../src/components/header';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Home from '../src/pages/home';
import Inbox from '../src/pages/messages';
import Settings from '../src/pages/settings';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './App.css';


class App extends React.Component {
 render(){
  return (
      <Router>
           <div className="main-container">
            <Head />
           <Content>
               <Row className="nav-bar">
                <Col className="nav-col dFlex"  span={12} offset={6}>
                  
                       <Col span={4}>
                       <div className="avatar-wrap">
                         <img className="avatar" src="https://i.pravatar.cc/300" alt=""/>
                       </div>
                       </Col>
                      
                      <Col span={20}>
                      <Menu mode="horizontal">
                      <Menu.Item key="app">
                            <Link to="/inbox">  
                              <AppstoreOutlined />
                               Home
                               </Link>
                            </Menu.Item>
                          
                            <Menu.Item key="mail">
                              <Link to="/inbox">                              
                              <MailOutlined />
                              Messages
                              </Link>
                            </Menu.Item>
                         
                            <Menu.Item key="alipay">
                            <Link to="/settings">  
                                <SettingOutlined />
                               Settings
                             </Link>
                            </Menu.Item>
                          </Menu>
                      </Col>
                      
                </Col>
                </Row>
                <Row className="main-row">
                <Col  className="main-ccol" span={12} offset={6}>
                  <Switch>
                       <Route exact  path="/" component={Home} />
                       <Route path="/settings" component={Settings} />
                       <Route path="/inbox" component={Inbox} />  
                    </Switch> 
                </Col>
             </Row>               
                
           </Content>  
            
        </div>
      </Router>
  );
 }
}
export default App;

