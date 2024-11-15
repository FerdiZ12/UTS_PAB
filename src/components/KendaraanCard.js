import React from 'react';
import { Box, Image, Text, Pressable, VStack, HStack } from 'native-base';

export default function KendaraanCard({ kendaraan, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Box bg="white" m={2} p={4} rounded="lg" shadow={2}>
        <VStack space={2}>
          <Image 
            source={{ uri: kendaraan.gambar }}
            alt={kendaraan.nama}
            height={150}
            rounded="lg"
          />
          <Text fontSize="xl" bold>{kendaraan.nama}</Text>
          <HStack justifyContent="space-between">
            <Text>Jenis: {kendaraan.jenis}</Text>
            <Text color="green.600">Rp {kendaraan.harga}/hari</Text>
          </HStack>
          <Text color={kendaraan.status === 'Tersedia' ? 'green.500' : 'red.500'}>
            {kendaraan.status}
          </Text>
        </VStack>
      </Box>
    </Pressable>
  );
}