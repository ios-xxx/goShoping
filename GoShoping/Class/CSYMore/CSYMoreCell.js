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
            isImg: false,
            isSwitch: false,
            text: ''
        })
    },
    getInitialState(){

        return ({
            isOpen: false
        })
    },
    render(){

        return (

            <TouchableOpacity style={styles.backgroundStyle}>
                <View style={styles.backgroundStyle}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    {/* 判断是否要加载开关控件 */}
                    {this.isSwitch()}
                </View>
            </TouchableOpacity>
        )
    },
    //  判断是否要加载开关控件
    isSwitch(){
        if (this.props.isSwitch == true) {

            return <Switch
                value={this.state.isOpen}
                onValueChange={
                    ()=>{this.setOpan()}
                }
                style={{marginRight:10}} style={styles.rightSwitchStyle}/>
        }
        else if (this.props.isImg == false) {

            return <Image source={require('../../drawable-xxhdpi/home_arrow.png')} resizeMode='stretch'
                          style={styles.rightImageStyle}/>

        } else if (this.props.text.length > 0) {
            return <Text style={styles.rightTextStyle}>{this.props.text}</Text>
        }
    },
    //  改变状态
    setOpan(){
        if (this.state.isOpen == true) {
            this.setState({isOpen: false})
        } else {
            this.setState({isOpen: true})
        }
        return this.state.isOpen
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
    rightImageStyle: {
        width: 16,
        height: 16,
        position: 'absolute',
        right: 10
    },
    rightSwitchStyle: {
        width: 54,
        height: 44,
        position: 'absolute',
        right: 10,
        top: 15
    },
    rightTextStyle: {
        width: width * 0.3,
        height: 15,
        position: 'absolute',
        right: 10,
        color: '#4b4b4b',
        textAlign: 'right'
    }
})

module.exports = Cell;
