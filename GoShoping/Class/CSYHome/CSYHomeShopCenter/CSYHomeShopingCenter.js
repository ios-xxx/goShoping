import React, {Component} from 'react';
import {
    View, StyleSheet, ScrollView, Image,
    Text, Dimensions, TouchableOpacity
} from 'react-native';

//  引入 分类导航条
import NavigatorCustomItem from '../CSYHomeCustomClassNavigatorItem/CSYHomeCustomClassNavigatorItem';

var {width, height} = Dimensions.get('window');

class ShopCenter extends Component {

    static  defaultProps = {
        shopData: [],
        propToValue:null  // 回调
    }

    render() {

        var NavData = this.props.shopData.navItem;
        return (

            <View>

                {/*导入分类导航条*/}
                <NavigatorCustomItem
                    leftTitle={NavData.leftTitle}
                    leftImage={NavData.leftImg}
                    rightTitle={NavData.rightTitle}
                    detailUrl ={NavData.detailUrl}
                    propToValue = {(url)=>{
                        if (this.props.propToValue == null) return;
                        this.props.propToValue(url);
                    }}
                />

                <ScrollView style={{marginTop:0.5,backgroundColor:'white'}} horizontal={true}>

                    {/*加载定制的滚动视图*/}
                    {this.customScrollItem()}

                </ScrollView>
            </View>
        )
    }

    //  加载定制的ScrollItem
    customScrollItem() {

        var scrollItmArr = [];

        for (var i = 0; i < this.props.shopData.shop.length; i++) {

            scrollItmArr.push(

                <TouchableOpacity key={i}>
                <CustomImageView
                                 scrollDataItem={this.props.shopData.shop[i]}
                                 propToValue = {(title) =>{
                                    if (this.props.propToValue == null) return;
                                    this.props.propToValue(title)
                                 }}
                />
                </TouchableOpacity>
            )
        }

        return scrollItmArr

    }
}

//  定制一个图片View
class CustomImageView extends Component {

    static  defaultProps = {
        scrollDataItem: {},
        propToValue:null //回调
    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{
                    if (this.props.propToValue == null) return;
                    this.props.propToValue(this.props.scrollDataItem.title)
                }}>
                <View style={customViewStyles.backgroundViewStyle}>
                    <Image source={{uri:this.props.scrollDataItem.img}} style={customViewStyles.ImageStyle}/>
                    <Text style={{position:'absolute',bottom:55,left:4,backgroundColor:'orange',color:'white'}}>{this.props.scrollDataItem.detail}</Text>
                    <Text style={{position:'absolute',bottom:5}}>{this.props.scrollDataItem.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const customViewStyles = StyleSheet.create({
    backgroundViewStyle: {
        width: width / 3,
        height: width / 3*1.2,
        marginTop: 0.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageStyle: {
        width: width / 3 - 8,
        height: width / 3*0.8,
        borderRadius: 4
    }
})

module.exports = ShopCenter;

