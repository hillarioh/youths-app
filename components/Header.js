import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.textContent}>
        He who dwells in the shelter of the Most High will rest in the shadow of
        the Almighty.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#676766',
  },
  text: {
    color: '#B02203',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  textContent: {
    color: '#676766',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Header;
