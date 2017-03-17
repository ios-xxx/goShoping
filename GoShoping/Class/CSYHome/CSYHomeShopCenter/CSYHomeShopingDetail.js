import React, {Component} from 'react';
import {
    View, StyleSheet, ScrollView, Image,
    Text, Dimensions, TouchableOpacity, WebView
} from 'react-native';

var {width, height} = Dimensions.get('window');

class Detail extends  Component {

    static  defaultProps={

        valueArr:[]

    }

    render(){
        return(
            this.viewLoad()
        )
    }

    // 加载导航栏
    viewLoad(){

        var title = this.props.valueArr[0];
        var url = this.props.valueArr[1];

        return (
            <View style={{flex:1}}>
                     <View style={customNavigationStyles.navViewStyle}>

            <View
                style={{width:width,flexDirection:'row',height:40,marginTop:24,alignItems:'center'}}>
                <TouchableOpacity onPress={() => {this.props.navigator.pop()}}>
                    <Image source={{uri:'navigationbar_arrow_up'}} style={{width:10,height:20,marginLeft:8}} resizeMode="stretch"/>
                </TouchableOpacity>
                <Text style={customNavigationStyles.titleStyle}>{title}</Text>

                <TouchableOpacity style={customNavigationStyles.rightSettingImageStyle}>
                    <Image source={{uri:'icon_mine_setting.png'}} resizeMode='stretch'
                           style={{width:20,height: 20}}/>
                </TouchableOpacity>
            </View>
        </View>
            <View style={{width:width,height:height-64-49}}>
                <WebView
                    source={{uri:'http://i.meituan.com/brunch/shoppingmall/detail?smid=4374715&version_name=6.6&utm_medium=iphone&__vhost=api.mobile.meituan.com&__skcy=NR8eXbF1J1yURHvLvYJrgy3Wnhk%3D&__skno=7486F945-8EC1-41B1-9EDC-C9562F04B760&client=iphone&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594&utm_campaign=AgroupBgroupD100H0&utm_source=AppStore&userid=160495643&movieBundleVersion=100&__skua=5657981d60b5e2d83e9c64b453063ada&__skck=3c0cf64e4b039997339ed8fec4cddf05&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&ci=20&latlng=23.134643%2C113.373951&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&__skts=1459731016.429482'}}

                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={false}
                    pagingEnabled={true}
                />
            </View>
        </View>
        )
    }

    //处理Url
    setUrl(url){

        var  setUrl = url.replace('imeituan://www.meituan.com/web/?url=','');
        setUrl = setUrl + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594&utm_term=6.6&utm_source=AppStore&latlng=23.134643%2C113.373951&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&userid=160495643&utm_medium=iphone&movieBundleVersion=100&version_name=6.6&__skck=3c0cf64e4b039997339ed8fec4cddf05&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.429482&utm_campaign=AgroupBgroupD100H0&__skno=7486F945-8EC1-41B1-9EDC-C9562F04B760&__skcy=NR8eXbF1J1yURHvLvYJrgy3Wnhk%3D&ci=20&__vhost=api.mobile.meituan.com&client=iphone';

        alert(setUrl)
        return setUrl
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