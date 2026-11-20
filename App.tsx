import {Button,StyleSheet,Text,View} from 'react-native';
import {useCameraPermissions} from 'expo-camera';


import BarcodeScanner from './components/Barcodescanner';
import BarcodeResult from './components/barcodeResult';
import { useBarcodeScanner } from './hooks/useBarcodeScanner';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  const { scanned, barcode, barcodeType, handleBarCodeScanned, resetScanner } = useBarcodeScanner();
  
   if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>
          We need your permission to show the camera
        </Text>

        <Button
          onPress={requestPermission}
          title="Grant permission"
        />
      </View>
    );
  }


return (
    <View style={styles.container}>
      <BarcodeScanner
        scanned={scanned}
        onBarcodeScanned={handleBarCodeScanned}
      />

      <BarcodeResult
        barcode={barcode}
        barcodeType={barcodeType}
        onReset={resetScanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});