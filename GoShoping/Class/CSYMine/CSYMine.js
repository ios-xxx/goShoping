import React, { Component} from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions
}   from 'react-native';

var Cell = require('./CSYMineCell');

var Mine =React.createClass ({

    render(){

        return(
            <View style={{flex:1, backgroundColor:'#f0eef5'}}>
            <ScrollView ref ='scroll'
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={true}
                        contentInset={{top:-300}}
                        contentOffset={{y:300}}
            >
                {/*添加头部*/}
                {this.headerNav()}
            <Cell
            title="我的订单"
            text ='查看全部订单'
            leftImage = 'collect'
            />
                {/*小分类*/}
                <View style={{width:width,height: 90,backgroundColor:'white',marginBottom:8}}>

                </View>

                <View style={{marginBottom: 8}}>
                <Cell
                    title="我的钱包"
                    text ='余额：100元'
                    leftImage = 'draft'
                />
                    <Cell
                        title="优惠券"
                        text ='0'
                        leftImage = 'like'
                    />
                </View>

                <View style={{marginBottom: 8}}>
                    <Cell
                        title="我的积分"
                        leftImage = 'card'
                    />
                </View>

                <View style={{marginBottom: 8}}>
                    <Cell
                        title="今日推荐"
                        leftImage = 'new_friend'
                        rightImage = 'me_new'
                    />
                </View>

                <View style={{marginBottom: 8}}>
                    <Cell
                        title="我要开店"
                        text ='轻松开店，招财进宝'
                        leftImage = 'pay'
                    />
                </View>
            </ScrollView>
            </View>
        )
    },
    headerNav(){
        return (

            <View style={headerStyles.backgroundView}>

            </View>
        )
    }
})

var {width} = Dimensions.get('window');
const  headerStyles = StyleSheet.create({
    backgroundView:{
        width:width,
        height:510,
        backgroundColor:'#fa4221'
    }
})

module.exports = Mine;
