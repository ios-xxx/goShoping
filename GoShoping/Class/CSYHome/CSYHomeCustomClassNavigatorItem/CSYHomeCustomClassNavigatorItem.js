import React, {Component} from  'react';
import {View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

class NavigatorItem extends Component {

    static  defaultProps(){

        return ({
            leftImage: '',
            leftTitle: '',
            rightTitle: '',
            detailUrl: '',
            propToValue:null   //回调
        })
    }

    render() {

        var width = Dimensions.get('window').width;
        return (
            <View style={{height:44,backgroundColor:'white',flexDirection:'row',alignItems:'center',width:width}}>

                <Image source={{uri:this.props.leftImage}} style={{marginLeft:8,width:30,height:30}}
                       resizeMode="stretch"/>
                <Text style={{marginLeft:8,fontSize:15}}>{this.props.leftTitle}</Text>
                <Image source={{uri:'icon_cell_rightarrow'}} style={{position:'absolute',right:8,width:10,height:15}}
                       resizeMode="stretch"></Image>

                {/*判断是否要加载右边的标题*/}
                {this.isRightTitle()}
            </View>
        )
    }

    // 判断是否要加载右边的标题
    isRightTitle() {

        if (this.props.rightTitle != null) return (

            <TouchableOpacity style={{marginRight:8,position:"absolute",right:32}} onPress={()=>this.moreClick(this.props.detailUrl)}>

                <Text
                    style={{fontSize:15,color:'#e9e9e9'}}>
                    {this.props.rightTitle}
                </Text>
            </TouchableOpacity>
        )
    }

    moreClick(url){

        if (this.props.propToValue == null) return
        this.props.propToValue(url);
    }
}

module.exports = NavigatorItem;
