import React, {Component} from  'react';
import {StyleSheet, View, Text, Image, ListView, Dimensions, TouchableOpacity} from 'react-native';

var {width} = Dimensions.get('window');
//  创建一个索引
var index = 0;
var index2 = 0;
var customListView = React.createClass({

    getDefaultProps(){

        return ({
                listData: []
            }
        )
    },
    getInitialState(){
        // 初始状态
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            //设置数据源
            dataSource: ds.cloneWithRows(this.props.listData)

        }
    },
    render(){
        return (
            <ListView
                //  更新数据源
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                //设置listView样式
                contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
                scrollEnabled={false}
            />
        )
    },
    //  重写renderRow方法
    renderRow(rowData){

        // 初始化Cell
        return (
            <View style={{width:width,flexWrap:'wrap',flexDirection:'row'}}>
                {/*//  加载 定制的View*/}
                {this.cellView()}
            </View>
        )

    }, //创建cellView
    cellView(rowData) {
        var cellW = width / 6;
        var cellArr = [];

        var length2 = (this.props.listData.length - index * 10 < 10) ? (this.props.listData.length - index * 10) : (10);

        for (var i = 0; i < length2; i++) {

            var dataObj = this.props.listData[index2];
            cellArr.push(

                    <View key={i} style={{width:cellW,height:cellW*1.2,marginLeft:cellW/6,marginTop:cellW/6}}>
                        <TouchableOpacity>
                        <Image key={i} source={{uri:dataObj.img}} style={{width:cellW,height:cellW}}/>
                        <Text style={{width:cellW,height:cellW*0.2,textAlign:'center'}}>{dataObj.title}</Text>
                        </TouchableOpacity>
                    </View>

            )
            index2++;
        }

        index++;
        return cellArr
    }
})
module.exports = customListView;