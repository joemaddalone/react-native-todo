'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var { Text, View, TouchableHighlight } = React;

var ToDoListItem = React.createClass({

  render: function() {
    var item = this.props.item;
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
          <View style={styles.container}>
            <Text
              style={[styles.txt, item.complete && styles.completed]}>
              {item.txt}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }

});

module.exports = ToDoListItem;
