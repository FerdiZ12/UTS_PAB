import React from 'react';
import { Box, Text, ScrollView, VStack, Button, HStack, Image} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { kendaraan } from '../data/kendaraan'; // Mengimpor data kendaraan

const BerandaScreen = ({ navigation }) => {
  return (
    <ScrollView bg="white">
      <VStack space={6} p={4}>

        {/* Header / Branding */}
        <Box alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" color="primary.500">
            Rizkyy Rental
          </Text>
          <Text fontSize="md" color="gray.500" textAlign="center" mt={2}>
            Rental kendaraan untuk pergi kemana-mana
          </Text>
        </Box>

        {/* Daftar Kendaraan */}
        <Box mt={6}>
          <Text fontSize="xl" fontWeight="bold" mb={3}>
            Kendaraan Tersedia
          </Text>
          <HStack space={4} flexWrap="wrap">
            {kendaraan.map((item) => (
              <Box key={item.id} width="45%" mb={4}>
                <Box bg="white" borderRadius="lg" shadow={2} overflow="hidden" borderWidth={1} borderColor="gray.200">
                  <Image
                    source={{ uri: item.gambar }}
                    alt={item.nama}
                    style={{ width: '100%', height: 150 }}
                    resizeMode="cover"
                  />
                  <Box p={4}>
                    <Text fontSize="lg" fontWeight="bold" isTruncated>
                      {item.nama}
                    </Text>
                    <Text fontSize="sm" color="gray.500" mt={1}>
                      Status: {item.status}
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mt={2}>
                      Rp {item.harga.toLocaleString('id-ID')}
                    </Text>
                    <Button
                      colorScheme="blue"
                      mt={4}
                      onPress={() => navigation.navigate('Detail', { kendaraan: item })}
                    >
                      Lihat Detail
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </HStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default BerandaScreen;
