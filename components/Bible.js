import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Bible = () => {
  // b6f61a6517ddbc87f46396b1627329af;
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://api.scripture.api.bible/v1/bibles',
      headers: {
        'api-key': '3b0e29780a1221238d14af1d7b263d49',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text> Bible</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Bible;
