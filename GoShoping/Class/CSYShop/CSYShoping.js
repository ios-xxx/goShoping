import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    WebView
} from 'react-native';


var {width, height} = Dimensions.get('window');

var Shoping = React.createClass({

    var url = ''
    render(){
        return(
            <View>
                {this.headerNav()}

                <WebView source={{uri:}}>

                </WebView>
            </View>
        )
    },
    // 加载导航栏
    headerNav(){

        return (
            <View style={customNavigationStyles.navViewStyle}>
                <View
                    style={{width:width,flexDirection:'row',height:40,marginTop:24,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={customNavigationStyles.leftImageStyle}>
                        <Image source={{uri:'icon_shop_local'}} resizeMode='stretch'
                               style={{width:20,height: 20}}/>
                    </TouchableOpacity>
                    <Text style={customNavigationStyles.titleStyle}>更多</Text>

                    <TouchableOpacity style={customNavigationStyles.rightSettingImageStyle}>
                        <Image source={{uri:'icon_shop_search'}} resizeMode='stretch'
                               style={{width:20,height: 20}}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:width,height:0.5,backgroundColor:'#8b8b8b'}}></View>
            </View>
        )
    }
});


const  styles = StyleSheet.create({


})

const customNavigationStyles = StyleSheet.create({
    navViewStyle: {
        width: width,
        height: 64,
        backgroundColor: 'white',
    },
    titleStyle: {
        color: '#2b2b2b',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    rightSettingImageStyle: {
        width: 20,
        height: 20,
        right: 10,
        position: 'absolute'
    },
    leftImageStyle:{
        width: 20,
        height: 20,
        left: 10,
        position: 'absolute'
    }
})


module.exports = Shoping;