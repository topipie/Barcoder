import { CameraView } from 'expo-camera';
import { StyleSheet } from 'react-native';

type BarcodeScannerProps = {
  scanned: boolean;
  onBarcodeScanned: (result: any) => void;
};

export default function BarcodeScanner({scanned,onBarcodeScanned,}: BarcodeScannerProps) {
  return (
    <CameraView
      style={styles.camera}
      facing="back"
      onBarcodeScanned={
        scanned ? undefined : onBarcodeScanned
      }
      barcodeScannerSettings={{
        barcodeTypes: [
          'qr',
          'ean13',
          'ean8',
          'upc_e',
          'upc_a',
          'code39',
          'code128',
        ],
      }}
    />
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});