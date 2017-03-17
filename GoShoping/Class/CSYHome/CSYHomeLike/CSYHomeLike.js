import React, {Component} from 'react';
import {StyleSheet, ListView, View, Image, Text, Dimensions} from   'react-native';
//  引入 分类导航条
import NavItem from '../CSYHomeCustomClassNavigatorItem/CSYHomeCustomClassNavigatorItem';
var {width, height} = Dimensions.get('window');
var dataSource = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
class Like extends Component {
// 构造

    state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1: r2) => r1 != r2}),
        JsonData: []
    }

    static defaultProps = {

        url: 'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'

    }

    render() {
        return (
            <View style={{marginTop:8}}>
                <NavItem
                    leftImage='cnxh'
                    leftTitle='猜你喜欢'
                />

                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} style={{marginTop:0.5}}/>
            </View>

        )
    }

    //  重写renderRow 方法
    renderRow(rowData) {

        var imgUrl = rowData.imageUrl.replace('w.h', (width / 3*3) + '.' + (width / 3 * 0.8*3));
        return (
            <View>
                <View style={{backgroundColor:'white',flexDirection:'row'}}>

                    <Image source={{uri:imgUrl}} style={styles.imageStyle}/>

                    <View style={styles.rightViewStyle}>

                        <View style={styles.rightTitleViewStyle}>
                            <Text style={{width:width*0.5,height:18,fontSize:16,fontWeight:'bold',color:'#2b2b2b',numberOfLines:1,adjustsFontSizeToFit:true}}>
                            {rowData.title}
                        </Text>
                            <Text style={{fontSize:12,color:'#e8e8e8'}}>
                                {rowData.topRightInfo}
                            </Text>
                        </View>
                        <Text style={styles.rightDetailViewStyle}>{rowData.subTitle}</Text>
                        <View style={styles.rightPriceViewStyle}>
                            <Text style={{fontSize:18,color:'red'}}>￥{rowData.mainMessage2}</Text>
                            <Text style={{fontSize:12,color:'#8b8b8b'}}>￥{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:0.5 ,marginLeft:width*0.5, width:width*0.9,backgroundColor:'#8b8b8b'}}></View>
            </View>
        )
    }


    // 加载 完成
    componentDidMount() {

        {
            this.loadData()
        }
    }

    // 加载 数据
    loadData() {

        fetch(this.props.url)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.data)
                })
            })
            .catch((error) => {
                console.error(error);
            });


    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: width / 3,
        height: width / 3 * 0.8,
        borderRadius: 4,
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8
    },
    rightViewStyle: {
        marginLeft: 8,
        marginTop: 8,
        height: width / 3 * 0.8,
        width: width - width / 3 - 31,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    rightTitleViewStyle: {
        width: width - width / 3 - 31,
        height:18,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightDetailViewStyle: {
        fontSize: 13,
        color: '#8b8b8b'
    },
    rightPriceViewStyle: {
        width: width - width / 3 - 31,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:18
    }

})
module.exports = Like;
