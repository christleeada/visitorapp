import { View, StyleSheet } from 'react-native';
import PrinterConnection from '../components/PrinterConnection';

export default function App() {
  return (
    <View style={styles.container}>
      <PrinterConnection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});