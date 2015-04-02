'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoList = require('./ToDoList');
var ToDoEdit = require('./ToDoEdit');
var { Text, View, ListView, TouchableHighlight, AlertIOS } = React;

var ToDoContainer = React.createClass({

  getInitialState: function() {
    return {
      items: [
        {txt: 'Learn react native', complete:false},
        {txt: 'Make a to-do app', complete:true}
      ]
    };
  },

  AlertMenu: function(rowData, rowID) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: () => this.deleteItem(rowID)},
        {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
        {text: 'Cancel'},
      ]
    )
  },

  deleteItem: function(index){
    var items = this.state.items;
    items.splice(index,1);
    this.setState({items: items})
  },

  updateItem: function(item, index){
    var items = this.state.items;
    if (index) {
      items[index] = item;
    }
    else {
      items.push(item)
    }
    this.setState({items: items});
    this.props.navigator.pop();
  },

  openItem: function(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.txt || 'New Item',
      component: ToDoEdit,
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  },

  render: function() {
    return (
      <View style={{flex:1}}>
        <ToDoList
          items={this.state.items}
          onPressItem={this.openItem}
          onLongPressItem={this.AlertMenu} />
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.openItem}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }

});

module.exports = ToDoContainer;
