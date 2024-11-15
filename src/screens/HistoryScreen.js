import React from 'react';
import { Box, Text, VStack, ScrollView, Image } from 'native-base';

const riwayatPemesanan = [
  {
    id: '1',
    kendaraan: 'Toyota Avanza',
    tanggalPemesanan: '2024-10-01',
    status: 'Selesai',
    harga: 500000,
  },
  {
    id: '2',
    kendaraan: 'Honda PCX',
    tanggalPemesanan: '2024-09-15',
    status: 'Dibatalkan',
    harga: 150000,
  },
  {
    id: '3',
    kendaraan: 'Toyota Fortuner',
    tanggalPemesanan: '2024-08-20',
    status: 'Selesai',
    harga: 750000,
  },
];

const HistoryScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg="white" p={4} safeArea>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Riwayat Pemesanan
      </Text>
      <ScrollView>
        <VStack space={4}>
          {riwayatPemesanan.length === 0 ? (
            <Text>Tidak ada riwayat pemesanan</Text>
          ) : (
            riwayatPemesanan.map((item) => (
              <Box key={item.id} p={4} bg="gray.100" rounded="lg" shadow={2} mb={4}>
                {/* Gambar Kendaraan */}
                {item.gambar && (
                  <Image
                    source={{ uri: item.gambar }}
                    alt={item.kendaraan}
                    accessibilityLabel={`Gambar ${item.kendaraan}`}
                    style={{ width: '100%', height: 200, borderRadius: 10 }}
                    mb={2}
                  />
                )}
                <Text fontSize="lg" fontWeight="bold">
                  {item.kendaraan}
                </Text>
                <Text>Status: {item.status}</Text>
                <Text>Tanggal Pemesanan: {item.tanggalPemesanan}</Text>
                <Text>
                  Harga: Rp {item.harga.toLocaleString('id-ID')}
                </Text>
              </Box>
            ))
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HistoryScreen;
