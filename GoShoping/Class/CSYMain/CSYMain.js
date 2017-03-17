/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 引入 tabNavigator通用库
import  TabNavigator from 'react-native-tab-navigator';

import React, { Component } from 'react';
//  引入Home
import Home from '../CSYHome/CSYHome';
//  引入Shop
import Shoping from '../CSYShop/CSYShoping';
//  引入More
import More from '../CSYMore/CSYMore';
//  引入 Mine
import  Mine from  '../CSYMine/CSYMine';

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
                    renderIcon={() => <Image source={require('../../drawable-xxhdpi/icon_tabbar_homepage.png')} style={styles.iconStyle} resizeMode='stretch'/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    selected = {this.state.selectionIndex == 0}
                    onPress={()=>this.setState({selectionIndex:0})}
                    selectedTitleStyle={{color:'orange'}}
                >
                    <Navigator
                        initialRoute={{name:'Home',component:Home}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />

                </TabNavigator.Item>

                <TabNavigator.Item
                    title = 'Shop'
                    badgeText='5'
                    selectedTitleStyle={{color:'orange'}}
                    renderIcon={() => <Image source={require('../../drawable-xxhdpi/icon_tabbar_homepage.png')} style={styles.iconStyle} resizeMode='stretch'/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    selected = {this.state.selectionIndex == 1}
                    onPress={()=>this.setState({selectionIndex:1})}
                >

                   <Shoping/>


                </TabNavigator.Item>

                <TabNavigator.Item
                    title = 'Mine'
                    selectedTitleStyle={{color:'orange'}}
                    renderIcon={()=> <Image source={require('../../drawable-xxhdpi/icon_tabbar_mine.png')}
                     style={styles.iconStyle}/> }
                    renderSelectedIcon = {()=> <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                    selected = {this.state.selectionIndex == 2}
                    onPress={()=> this.setState({selectionIndex:2})}

                >
                    {/*我*/}
                    <Mine/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title = 'More'
                    renderIcon={()=> <Image source={require('../../drawable-xxhdpi/icon_tabbar_misc.png')} style={styles.iconStyle}/> }
                    renderSelectedIcon = {()=> <Image source={{uri:'icon_tabbar_mine_selected'}}
                     style={styles.iconStyle} />}
                    selected = {this.state.selectionIndex == 3}
                    onPress={()=> this.setState({selectionIndex:3})}
                    selectedTitleStyle={{color:'orange'}}
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