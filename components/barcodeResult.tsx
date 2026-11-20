
import { View, Text, Button, StyleSheet } from 'react-native';

type BarcodeResultProps = {
  barcode: string | null;
  barcodeType: string | null;
  onReset: () => void;
};

export default function BarcodeResult({barcode,barcodeType,onReset,}: BarcodeResultProps) {
  return (
    <View style={styles.container}>
      {barcode ? (
          <>
            <Text style={styles.resultTitle}>
              Barcode Scanned!
            </Text>
            <Text style={styles.resultText}>
              Number on barcode: {barcode}
            </Text>
            <Text style={styles.resultText}>
              Batcode type what you scanned is: {barcodeType}
            </Text>
            <Button
              onPress={onReset}
              title="Scan Again"
            />
          </>
        ) : (
          <Text style={styles.instructionText}>
            Point the camera at a barcode to scan it.
          </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    gap: 12,
  },
  resultTitle: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultText: {
    color: 'white',
    fontSize: 16,
  },
   instructionText: {
    fontSize: 16,
    color: 'white',
  },
});
