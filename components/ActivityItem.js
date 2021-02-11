import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ActivityItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.activityItem}
      onPress={() => navigation.navigate(item.title)}>
      <View style={styles.activityItemView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityItem: {
    padding: 15,
    backgroundColor: '#AFAFAD',
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  activityItemView: {
    color: '#676766',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {fontSize: 18, fontWeight: '700'},
  content: {fontSize: 18},
});

export default ActivityItem;
