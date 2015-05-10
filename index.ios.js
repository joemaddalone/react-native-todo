'use strict';
var styles = require('./application/styles/styles');
var ToDoListContainer = require('./application/components/ToDoListContainer');
var React = require('react-native');
var { AppRegistry, NavigatorIOS } = React;

class ToDoApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: ToDoListContainer, title: 'TO DOs'}}/>
        );
    }
}

AppRegistry.registerComponent('ToDoApp', () => ToDoApp);
