// screens/SearchScreen.js
import React, { useState } from 'react';
import { Box, Text, ScrollView, VStack, Input, Icon} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { kendaraan } from '../data/kendaraan';
import KendaraanCard from '../components/KendaraanCard';

const CariScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJenis, setSelectedJenis] = useState('');
  const [filteredKendaraan, setFilteredKendaraan] = useState(kendaraan);

  const handleSearch = (text) => {
    setSearchQuery(text);
    let filtered = kendaraan.filter((kendaraan) =>
      kendaraan.nama.toLowerCase().includes(text.toLowerCase())
    );
    if (selectedJenis) {
      filtered = filtered.filter((kendaraan) => kendaraan.jenis === selectedJenis);
    }
    setFilteredKendaraan(filtered);
  };

  const handleJenisChange = (value) => {
    setSelectedJenis(value);
    let filtered = kendaraan.filter((kendaraan) =>
      kendaraan.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (value) {
      filtered = filtered.filter((kendaraan) => kendaraan.jenis === value);
    }
    setFilteredKendaraan(filtered);
  };

  return (
    <ScrollView bg="white">
      <VStack space={4} p={4}>
        {/* Header Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Rizkyy Rental
          </Text>
          <Text fontSize="sm" color="gray.500">
            Cari Kendaraan Untuk di Rental
          </Text>
        </Box>

        {/* Search Bar */}
        <Input
          placeholder="Search vehicles..."
          variant="filled"
          width="100%"
          borderRadius="10"
          py="3"
          px="2"
          value={searchQuery}
          onChangeText={handleSearch}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />

        {/* Vehicle List */}
        <VStack space={3}>
          {filteredKendaraan.map((item) => (
            <KendaraanCard
              key={item.id}
              kendaraan={item}
              onPress={() => navigation.navigate('Detail', { kendaraan: item })}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default CariScreen;
