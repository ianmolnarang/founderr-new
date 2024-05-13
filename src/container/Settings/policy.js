import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Policy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Policy</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget nunc luctus, quis mollis nisi lobortis. Ut id leo vitae lorem maximus sagittis non a justo. Sed malesuada ullamcorper nulla ut posuere. Proin euismod dui non odio laoreet, vel fermentum nisi posuere. Donec ultrices facilisis magna, sed ultricies justo tristique sed. Nam ullamcorper risus nec tellus tempus, eu aliquam nunc venenatis. Ut eleifend luctus magna, eget feugiat ipsum dapibus non. Integer ac justo sodales, volutpat sapien a, molestie justo.
      </Text>
      {/* Add more text for the terms and Policy */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Policy;
