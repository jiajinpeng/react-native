/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class Mogo_RN42 extends Component {
  // getInitialState() {
  //   var ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   return {
  //     dataSource: ds.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
  //   };
  // }

  constructor(props){
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([
        {
            "ActionWord":"测试内容tb6r","Icon":"测试内容e31i","Introduce":"测试内容mu5n","Tag":14676,"Title":"测试内容jubg","flatType":25712,"roomId":76325
        },{
            "ActionWord":"测试内容tb6r","Icon":"测试内容e31i","Introduce":"测试内容mu5n","Tag":14676,"Title":"测试内容jubg","flatType":25712,"roomId":76325
        },{
            "ActionWord":"测试内容tb6r","Icon":"测试内容e31i","Introduce":"测试内容mu5n","Tag":14676,"Title":"测试内容jubg","flatType":25712,"roomId":76325
        },{
            "ActionWord":"测试内容tb6r","Icon":"测试内容e31i","Introduce":"测试内容mu5n","Tag":14676,"Title":"测试内容jubg","flatType":25712,"roomId":76325
        },{
            "ActionWord":"测试内容tb6r","Icon":"测试内容e31i","Introduce":"测试内容mu5n","Tag":14676,"Title":"测试内容jubg","flatType":25712,"roomId":76325
        }
      ]),
    };
  }

  renderRow(row) {
    return (
      <TouchableHighlight>
        <View>
          <Text style={styles.item}>{row.ActionWord}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>11</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ffeeee'
  },
  headerTitle: {
    color: '#ffffff',
    fontSize:16,
    textAlign: 'center'
  },
  item: {
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: '#00ff00',
    padding: 10,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Mogo_RN42', () => Mogo_RN42);
