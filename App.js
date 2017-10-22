import styles from './application/styles/styles';
import ToDoListContainer from './application/components/ToDoListContainer';
import React from 'react';
import {
  NavigatorIOS
} from 'react-native';

class ToDoApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: ToDoListContainer, title: 'TO DOs'}}/>
        );
    }
}

export default ToDoApp;
