import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ActivityItem from './components/ActivityItem';

const Home = ({navigation}) => {
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Bible Study',
      content: 'Bible Study project by the youths for the youths',
    },
    {
      id: '2',
      title: 'Announcement',
      content: 'Announcement on youths activities taking place',
    },
    {
      id: '3',
      title: 'Duty roster',
      content: 'Date and roles of youths ',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title="FPFK Kibra Youths" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ActivityItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
