import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

class ClassItem extends Component {

    // 构造
    static defaultProps = {
        classData: []
    }

    render() {
        return (
            <View>
                {/*创建第一个小分类*/}
                {this.initWithClassItem1()}
            </View>
        )
    }

    //  创建第一个小分类
    initWithClassItem1() {

        return (
            <View>

                {/*创建分类一*/}
                <View style={styles.classItem1Style}>

                    {/*创建左边的View */}
                    {this.leftView()}

                    {/*创建右边的View*/}
                    {this.rightView()}

                </View>

                {/*创建分类二*/}
                {this.customClassTwo()}

            </View>
        )

    }

    //  创建左边的View
    leftView() {
        return (
            <View
                style={{ justifyContent:'center',width:width/2-0.5,height:164,backgroundColor:'white',alignItems:'center'}}>

                <Image source={{uri:this.props.classData.class1[0].img}} style={{width:width/4,height:44}}
                       resizeMode='contain'/>
                <Image source={{uri:this.props.classData.class1[0].img1}} style={{width:width/4,height:44}}
                       resizeMode='contain'/>
                <Text style={{width:width/4,fontSize:15,textAlign:'center',color:'#888888'}}>
                    {this.props.classData.class1[0].title}
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text style={{fontSize:13,color:'#70c8e7'}}>
                        {this.props.classData.class1[0].price}
                    </Text>
                    <Text style={{fontSize:13,color:'orange',backgroundColor:'yellow'}}>
                        {this.props.classData.class1[0].detail}
                    </Text>
                </View>

            </View>
        )
    }
    //  定制一个通用View
    customView(data, i) {
        return (
            <TouchableOpacity key={i}>
                <View
                    style={{flexDirection:'row',backgroundColor:'white',alignItems:'flex-end',paddingTop:7.75,paddingBottom:7.75,justifyContent:'space-between'}}>

                    <View style={{flexDirection:'column',height:65.5,justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'orange',marginLeft:10}}>{data.title}</Text>
                        <Text style={{fontSize:15,color:'gray',marginLeft:10}}>{data.detail}</Text>
                    </View>
                    <Image source={{uri:data.img}} style={{height:51,width:100,alignSelf:'center'}}
                           resizeMode='contain'/>
                </View>
            </TouchableOpacity>

        )
    }

    //  创建右边的View
    rightView() {

        rightViewArr = [];
        for (var i = 1; i < this.props.classData.class1.length; i++) {

            rightViewArr.push(
                this.customView(this.props.classData.class1[i], i)
            )
        }


        return (
            <View style={{width:width/2-0.5,height:164,justifyContent:'space-between'}}>
                {rightViewArr}
            </View>
        )
    }

    //  定制分类二View
    customClassTwo() {

        var data = this.props.classData.class2;
        var class2Arr = [];
        var  w_v;
        for (var i = 0; i < data.length; i++) {

            if (i == 0) {
                w_v = width;
            }
            else
            {
                w_v = width/2-0.5;
            }
            class2Arr.push(
                <View key = {i} style={{width:w_v,height:82}}>

                    {this.customView(data[i], i)}

                </View>
            )
        }


        return (
            /*创建分类二*/
            <View style={styles.classItem2Style}>
                {class2Arr}
            </View>
        )
    }

}

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    classItem1Style: {
        width: width,
        height: 165,
        backgroundColor: '#e2e2e2',
        marginBottom: 8,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        justifyContent: 'space-between',
        flexDirection: 'row'

    }, classItem2Style: {
        width: width,
        backgroundColor: '#e2e2e2',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between'
    }

})


module.exports = ClassItem;