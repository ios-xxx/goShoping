import React,{Component} from 'react';
import {Image,
    AppRegistry,
    View,
    Navigator
} from 'react-native';
import  Navigator from 'react-native-tab-navigator';

import Main from '../CSYMain/CSYMain';

var Launch = React.createClass ({

    // 当加载完成
    componentDidMount()
    {
      setTimeout(()=>{
          <Navigator
              initialRoute={{name:'Main',component:Main}}//指定默认子组件页面
              configureScene={() =>{
                            return Navigator.SceneConfigs.HorizontalSwipeJumpFromLeft;//跳转动画
                        }}
              renderScene={(rute,navigator) => {

                            let  Component = rute.component;
                            return <Component {...rute.passProps} navigator={navigator}/>;
                        }}
          />
      },2000)
    },
    render(){

        return(

            <Image source={require('/GoShoping/drawable-xxhdpi/launchimage.png')} style={{flex:1}}/>
        )

    }
})

module.exports = Launch;
