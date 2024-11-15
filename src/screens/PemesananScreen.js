import React, { useState } from 'react';
import { Box, Button, FormControl, Input, VStack } from 'native-base';

export default function PemesananScreen({ route }) {
  const { kendaraan } = route.params;
  const [nama, setNama] = useState('');
  const [hari, setHari] = useState('');

  const handlePesan = () => {
    alert(`Pesanan berhasil untuk ${nama}`);
  };

  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <VStack space={4}>
        <FormControl>
          <FormControl.Label>Nama Lengkap</FormControl.Label>
          <Input value={nama} onChangeText={setNama} />
        </FormControl>
        
        <FormControl>
          <FormControl.Label>Jumlah Hari</FormControl.Label>
          <Input 
            value={hari}
            onChangeText={setHari}
            keyboardType="numeric"
          />
        </FormControl>

        <Button onPress={handlePesan}>Konfirmasi Pesanan</Button>
      </VStack>
    </Box>
  );
}