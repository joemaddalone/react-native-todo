'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoListItem = require('./ToDoListItem');
var { ListView } = React;

var ToDoList = React.createClass({

  componentWillMount: function() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  },

  render: function() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID) =>
          <ToDoListItem item={rowData}
          onPress={() => this.props.onPressItem(rowData, rowID)}
          onLongPress={() => this.props.onLongPressItem(rowData, rowID)} />
        }
        style={styles.listView} />
    );
  }

});

module.exports = ToDoList;
