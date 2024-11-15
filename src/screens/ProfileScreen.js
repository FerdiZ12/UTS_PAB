import React, { useState } from 'react';
import { Box, Text, Input, Button, VStack, FormControl, Icon, Avatar, HStack, Spacer, Card } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  // State untuk menyimpan data pengguna
  const [user, setUser] = useState({
    name: 'Nama Anda',
    email: 'Test@gmail.com.com',
    photoUrl: 'https://www.w3schools.com/w3images/avatar2.png', // Contoh foto profil
  });

  const [editing, setEditing] = useState(false); // Untuk menandakan mode edit

  // Fungsi untuk mengubah data pengguna
  const handleSave = () => {
    setEditing(false); // Setelah menyimpan, matikan mode edit
  };

  // Fungsi untuk mengubah nilai input nama/email
  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <Box flex={1} bg="white" p={4} safeArea>
      {/* Bagian Foto Profil dan Nama Pengguna */}
      <HStack alignItems="center" space={4} mb={6}>
        <Avatar size="lg" source={{ uri: user.photoUrl }} />
        <VStack>
          <Text fontSize="xl" fontWeight="bold">
            {user.name}
          </Text>
          <Text fontSize="md" color="gray.500">
            {user.email}
          </Text>
        </VStack>
        <Spacer />
        {/* Tombol Edit atau Simpan */}
        <Button
          variant="outline"
          colorScheme="blue"
          size="sm"
          onPress={() => (editing ? handleSave() : setEditing(true))}
        >
          <Icon as={<MaterialIcons name={editing ? 'save' : 'edit'} />} size="sm" mr={2} />
          {editing ? 'Simpan' : 'Edit'}
        </Button>
      </HStack>

      {/* Jika dalam mode edit, tampilkan card untuk edit nama dan email */}
      {editing ? (
        <Card p={4} mb={4} shadow={2} borderRadius="lg" bg="gray.100">
          <VStack space={4}>
            {/* Input Nama Pengguna */}
            <FormControl>
              <FormControl.Label>Nama</FormControl.Label>
              <Input
                value={user.name}
                onChangeText={(value) => handleInputChange('name', value)}
                placeholder="Nama lengkap"
                variant="filled"
              />
            </FormControl>

            {/* Input Email Pengguna */}
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={user.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="Alamat email"
                variant="filled"
                keyboardType="email-address"
              />
            </FormControl>
          </VStack>
        </Card>
      ) : (
        // Jika tidak dalam mode edit, tampilkan informasi pengguna biasa
        <VStack space={4}>
          <Text fontSize="lg" fontWeight="bold">
            {user.name}
          </Text>
          <Text fontSize="md" color="gray.500">
            {user.email}
          </Text>
        </VStack>
      )}
    </Box>
  );
};

export default ProfileScreen;
