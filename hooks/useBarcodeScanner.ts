import { useState } from 'react';
import { BarcodeScanningResult } from 'expo-camera';


export function useBarcodeScanner() {
const [scanned, setScanned] = useState(false);
const [barcode, setBarcode] = useState<string | null>(null);
const [barcodeType, setBarcodeType] = useState<string | null>(null);

function handleBarCodeScanned(result: BarcodeScanningResult): void {
    if (scanned) return;

    setScanned(true);
    setBarcode(result.data);
    setBarcodeType(result.type);
  }

  function resetScanner(): void {
    setScanned(false);
    setBarcode(null);
    setBarcodeType(null);
  }

  return {
    scanned,
    barcode,
    barcodeType,
    handleBarCodeScanned,
    resetScanner
  };
}