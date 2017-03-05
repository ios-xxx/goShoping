import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
//  导入通用Cell
var Cell = require('./CSYCell');

var {width, height} = Dimensions.get('window');
var More = React.createClass({

    render(){
        return (
            <View style={{backgroundColor:'#f0eff5', flex:1}}>
                {this.headerNav()}
                {this.headerScroll()}
            </View>
        )
    },
    // 加载导航栏
    headerNav(){

        return (
            <View style={customNavigationStyles.navViewStyle}>
                <View
                    style={{width:width,flexDirection:'row',height:40,marginTop:24,justifyContent:'center',alignItems:'center'}}>

                    <Text style={customNavigationStyles.titleStyle}>更多</Text>

                    <TouchableOpacity style={customNavigationStyles.rightSettingImageStyle}>
                        <Image source={require('../drawable-xxhdpi/icon_mine_setting.png')} resizeMode='stretch'
                               style={{width:20,height: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    //  加载滚动视图
    headerScroll(){

        return (

            <ScrollView >

                <View style={{marginTop:8,marginBottom:8}}>
                    <Cell
                        title="扫一扫"
                        style={{marginTop:5}}/>
                </View>

                <View>
                    <Cell
                        isSwitch={true}
                        title="省流量模式"
                    />
                    <Cell
                        title="消息提醒"
                    />
                    <Cell
                        title="小码哥电商"
                    /><Cell
                    text='1.94M'
                    title="清空缓存"
                    isImg={true}
                />
                </View>

                <View style={{marginTop:8}}>
                    {/*加载创建的Cell 集合*/}
                    {this.initWithCells()}
                </View>
            </ScrollView>
        )
    },
    //   创建定制cell集合
    initWithCells(){
        var data = ['意见反馈', '问卷调查', '支付帮助', '网络诊断', '关于', '我要应聘', 'xm反馈']
        var cells = [];

        for (var i = 0; i < data.length; i++) {

            cells.push(
                <Cell title={data[i]}/>
            )
        }

        return cells
    }


})

const customNavigationStyles = StyleSheet.create({
    navViewStyle: {
        width: width,
        height: 64,
        backgroundColor: '#fd5c06',
    },
    titleStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    rightSettingImageStyle: {
        width: 20,
        height: 20,
        right: 10,
        position: 'absolute'
    }
})

const ScrollStyles = StyleSheet.create({})
module.exports = More;