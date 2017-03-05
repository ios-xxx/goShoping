import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';


var Home = React.createClass({

    render() {
        return (
            <View>
                {/*加载导航*/}
                {this.initWitdhNav()}
            </View>
        )
    },

    //  初始化导航
    initWitdhNav(){

        return (
            <View style={searchStyles.searchViewStyle}>
                <TouchableOpacity>
                    <Text style={{marginLeft:5,marginTop:10,color:'white',top:3}}>广州</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder={'输入商品 、品类、商圈'}
                    clearButtonMode='always'
                    style={searchStyles.searchTextInputStyle}
                    placeholderTextColor='#8f8f8f'
                    textAlign='center'
                />
                <View style={{height:30,marginRight:5,flexDirection:'row',marginTop:24,marginLeft:5}}>
                    <TouchableOpacity>
                        <Image
                            source={require('../drawable-xxhdpi/icon_homepage_message.png')}
                            style={searchStyles.searchScanStyle} resizeMode='stretch'/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../drawable-xxhdpi/icon_homepage_scan.png')}
                            style={[searchStyles.searchScanStyle,{marginLeft:5}]} resizeMode='stretch'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

});

var {width, height} = Dimensions.get('window');

const searchStyles = StyleSheet.create({
    searchViewStyle: {
        width: width,
        height: 64,
        backgroundColor: '#fd5c06',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchTextInputStyle: {
        height: 30,
        width: width * 0.75,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 5,
        top: 24,
        fontSize: 14
    }, searchScanStyle: {
        width: 25,
        height: 25
    }

})


module.exports = Home;
