import React, {Component} from 'react';
import {
    StyleSheet, View, Image, Text
    , Dimensions, ScrollView
} from 'react-native';

//  引入定制的表视图
var CustomListView = require('./CSYHomeHeaderList');

var {width} = Dimensions.get('window');

var Scroll = React.createClass({
    getDefaultProps(){
        return (
            {
                listData: []
            }
        )
    },

    // 状态机制（放可变内容）
    getInitialState(){
        return {
            currentPage: 0
        }
    },
    render(){

        return (
            <View style={{marginBottom: 12}}>

                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            onScroll={this.onScrollAnimationEnd}
                            pagingEnabled={true}
                            contentContainerStyle={{width:width*2,backgroundColor:'white'}}


                >
                    {/*加载定制的表视图*/}
                    <CustomListView
                        listData={this.props.listData}
                    />
                </ScrollView>
                <View
                    style={{flexDirection:'row',height:20,backgroundColor:'rgba(0,0,0,0.3)',justifyContent:'center',alignItems:'center',position:'absolute',bottom:0,width:width}}>
                    {/*初始化小加圆点*/}
                    {this.initDot()}
                </View>
            </View>
        )
    },//初始化小圆点
    initDot(){
        console.log(this.state.currentPage)
        var dots = [];
        for (var i = 0; i < 2; i++) {
            var currentColor = (i == this.state.currentPage) ? ('green') : ('orange');

            dots.push(
                <Text key={i} style={{fontSize:20,color:currentColor,textAlign:'center'}}>&bull;</Text>
            )
        }

        return dots
    },
    //  重写滚动结束方法onScrollAnimationEnd
    onScrollAnimationEnd(e){
        // Math.floor 取整数

        //  1.求出水平方向偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //  2.求出当前页
        //Math.floor 取整数
        var page = Math.floor(offSetX / width);
        // 3.更新状态机，重新绘制UI
        this.setState({
            currentPage: page
        });
    }

})

module.exports = Scroll;