import React, {Component} from 'react';
import {
    View, StyleSheet, ScrollView, Image,
    Text, Dimensions, TouchableOpacity
} from 'react-native';

var {width, height} = Dimensions.get('window');

class Detail extends  Component {

    static  defaultProps={

        title:''
    }

    render(){
        return(
            this.headerNav()
        )
    }

    // 加载导航栏
    headerNav(){

        return (
            <View style={customNavigationStyles.navViewStyle}>

                <View
                    style={{width:width,flexDirection:'row',height:40,marginTop:24,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {this.props.navigator.pop()}}>
                        <Image source={{uri:'navigationbar_arrow_up'}} style={{width:10,height:20,marginLeft:8}} resizeMode="stretch"/>
                    </TouchableOpacity>
                    <Text style={customNavigationStyles.titleStyle}>{this.props.title}</Text>

                    <TouchableOpacity style={customNavigationStyles.rightSettingImageStyle}>
                        <Image source={{uri:'icon_mine_setting.png'}} resizeMode='stretch'
                               style={{width:20,height: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

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
        alignSelf: 'center',
        position:'absolute',
        textAlign:'center',
        right:30,
        left:30
    },
    rightSettingImageStyle: {
        width: 20,
        height: 20,
        right: 10,
        position: 'absolute'
    }
})
module.exports = Detail;