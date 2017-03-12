import React, {Component} from 'react';
import {
    View, Text, Image, TouchableOpacity,
    Dimensions, StyleSheet, Switch
} from 'react-native';


var Cell;
Cell = React.createClass({

    //  不变
    getDefaultProps(){
        return ({
            title: '',
            isRightImage: false,
            rightImage:'',
            leftImage:'',
            text: ''
        })
    },
    render(){

        return (

            <TouchableOpacity style={styles.backgroundStyle}>
                <View style={styles.backgroundStyle}>
                    <Image source={{uri:this.props.leftImage}} style={styles.leftImageStyle} resizeMode='stretch'/>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    {/* 判断是否要加载定制的View */}
                    {this.isLoadCustomView}
                    <Image source={require('../../drawable-xxhdpi/home_arrow.png')} resizeMode='stretch'
                           style={styles.imageStyle}/>
                </View>
            </TouchableOpacity>
        )
    },
    //  判断是否要加载开关控件
    isLoadCustomView(){
alert('mmm = '+this.prpos.leftImage);
        if (this.props.isImg == false) {

            return <Image source={require(this.props.rightImage)} resizeMode='stretch'
                          style={styles.rightImageStyle}/>

        } else if (this.props.text.length > 0) {
            return <Text style={styles.rightTextStyle}>{this.props.text}</Text>
        }
    }
});

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundStyle: {

        width: width,
        height: 54,
        backgroundColor: 'white',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleStyle: {
        width: width * 0.5,
        height: 15,
        marginLeft: 10,
        fontSize: 15,
        color: '#4b4b4b'
    },
    leftImageStyle: {
        width:30,
        height:30,
        marginLeft:8,
        borderRadius:15
    },
    imageStyle: {
        width:30,
        height:30,
        position: 'absolute',
        right: 10
    },
    rightImageStyle: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 30
    },
    rightTextStyle: {
        width: width * 0.3,
        height: 15,
        position: 'absolute',
        right: 10,
        color: '#4b4b4b',
        textAlign: 'right',
        position: 'absolute',
        right: 30
    }
})

module.exports = Cell;
