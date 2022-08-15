import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setLinks([...links, data]);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permision</Text>;
  }

  if (hasPermission === false) {
    return <Text>No acces to camera</Text>;
  }

  const jsonLinks = JSON.stringify(links);

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            className={
              "border p-4 border-blue-700 rounded bg-blue-700 mx-10 mb-1 mt-1"
            }
          >
            <Text className="color-white text-center font-extrabold">
              Scan Again
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        onPress={() => console.log(jsonLinks)}
        className={
          "border p-4 border-blue-700 rounded bg-blue-700 mx-10 mb-1 mt-1"
        }
      >
        <Text className="color-white text-center font-extrabold">
          View all links
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
