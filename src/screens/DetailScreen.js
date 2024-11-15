import React from 'react';
import { Box, Button, Image, Text, VStack } from 'native-base';

export default function DetailScreen({ route, navigation }) {
  const { kendaraan } = route.params;
  
  return (
    <Box flex={1} bg="white" safeArea p={4}>
      <VStack space={4}>
        <Image 
          source={{ uri: kendaraan.gambar }}
          alt={kendaraan.nama}
          height={200}
          rounded="lg"
        />
        <Text fontSize="2xl" bold>{kendaraan.nama}</Text>
        <Text fontSize="lg">Jenis: {kendaraan.jenis}</Text>
        <Text fontSize="lg">Harga: Rp {kendaraan.harga}/hari</Text>
        <Text fontSize="lg">Status: {kendaraan.status}</Text>
        <Button 
          onPress={() => navigation.navigate('Pemesanan', { kendaraan })}
          colorScheme="blue"
        >
          Pesan Sekarang
        </Button>
      </VStack>
    </Box>
  );
}