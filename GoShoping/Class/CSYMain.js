/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 引入 tabNavigator通用库
import  TabNavigator from 'react-native-tab-navigator';

import React, { Component } from 'react';
//  引入Home
import Home from './CSYHome';
//  引入Shop
import Shoping from './CSYShoping';
//  引入More
import More from './CSYMore';
//  引入 Mine
import  Mine from  './CSYMine';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image,
    Navigator
} from 'react-native';

var Main = React.createClass({

    getInitialState(){
        return{
            selectionIndex:0
        }
    },

    render(){

        return (
            <TabNavigator>

                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={require('../drawable-xxhdpi/icon_tabbar_homepage.png')} style={styles.iconStyle} resizeMode='stretch'/>} // 图标
                    renderSelectedIcon={() =><Image source={require('../drawable-xxhdpi/icon_tabbar_homepage_selected.png')} style={styles.iconStyle}/>}   // 选中的图标
                    selected = {this.state.selectionIndex == 0}
                    onPress={()=>this.setState({selectionIndex:0})}

                >
                    <Navigator
                        initialRoute={{name:'Home',component:Home}}//指定默认子组件页面
                        configureScene={() =>{
                            return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;//跳转动画
                        }}
                        renderScene={(rute,navigator) => {

                            let  Component = rute.component;
                            return <Component {...rute.passProps} navigator={navigator}/>;
                        }}


                    />

                </TabNavigator.Item>

                <TabNavigator.Item
                    title = 'Shop'
                    renderIcon={()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_merchant_normal.png')}
                     renderSelectedIcon = {()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_merchant_selected.png')}

                     />}
                     style={styles.iconStyle}/> }

                    selected = {this.state.selectionIndex == 1}
                    onPress={()=> this.setState({selectionIndex:1})}

                >
                    {/*购物*/}
                    <Shoping/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title = 'Mine'
                    renderIcon={()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_mine.png')}
                     renderSelectedIcon = {()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_mine_selected.png')}

                     />}
                     style={styles.iconStyle}/> }
                    selected = {this.state.selectionIndex == 2}
                    onPress={()=> this.setState({selectionIndex:2})}
                >
                    {/*我*/}
                    <Mine/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title = 'More'
                    renderIcon={()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_misc.png')}
                     renderSelectedIcon = {()=> <Image source={require('../drawable-xxhdpi/icon_tabbar_misc_selected.png')}

                     />}
                     style={styles.iconStyle}/> }
                    selected = {this.state.selectionIndex == 3}
                    onPress={()=> this.setState({selectionIndex:3})}
                >
                    {/*更多*/}
                    <More/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
});

const  styles = StyleSheet.create({
    iconStyle:{
        width:30,
        height:30
    }
})

module.exports = Main;