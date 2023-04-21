import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const getRandomImage = () => {
  // Generate a random number between 1 and 1000 to use as the image ID
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Return the image URL
  return `https://picsum.photos/200/200?random=${randomNumber}`;
};

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      try {
        fetch('http://127.0.0.1/api/flavrite')
          .then(response => response.json())
          .then(data => {
            const sortedUsers = data.sort((a, b) => b.favorite_match_score - a.favorite_match_score);
            const topFiveUsers = sortedUsers.slice(0, 5);
            setUsers(topFiveUsers);
            console.log(topFiveUsers);
          });
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUsers();
  }, []);
  
  
  return (
    // Container
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Search Icon */}
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png' }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.title}>PEOPLE</Text>
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://picsum.photos/40/40?random=2' }}
          style={styles.profileImage}
        />
      </View>
      {/* Sort Bar */}
      <View style={styles.sortBar}>
        {/* Sort Option */}
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={{ uri: getRandomImage() }} style={styles.icon} />
          <Text style={styles.sortLabel}>Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.cardList}>
          {users.map((user) => (
            <TouchableOpacity style={styles.card} key={user.id}>
              <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
              <View style={styles.details}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <View style={styles.stats}>
                  <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
                  <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
                  <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
                </View>
              </View>
              <View style={styles.percentage}>
                <Text style={styles.percentageText}>{user.favorite_match_score}%</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.addButtonContainer}>
  {/* Footer */}
  <View style={styles.iconsContainer}>

    <TouchableOpacity style={styles.iconButton}>
      <Image source={{ uri: getRandomImage() }} style={styles.icon} />
      <Text style={styles.iconLabel}>Happiness</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={{ uri: getRandomImage() }} style={styles.icon} />
      <Text style={styles.iconLabel}>People</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton}>
    <Image source={{ uri: getRandomImage() }} style={styles.addIcon} />
    <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/009/344/473/original/plus-sign-transparent-free-png.png" }} style={styles.plusIcon} />
    
  </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={{ uri: getRandomImage() }} style={styles.icon} />
      <Text style={styles.iconLabel}>Places</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton}>
      <Image source={{ uri: getRandomImage() }} style={styles.icon} />
      <Text style={styles.iconLabel}>Wishlist</Text>
    </TouchableOpacity>
  </View>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E9CE',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA54C',
    marginBottom: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  sortBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sortOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  sortLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFA54C',
    paddingBottom: 30,
    paddingLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  details: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  percentage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#FB7C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    color: '#FBA61E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FB7C1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  plusIcon: {
    width: 12,
    height: 12,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
    borderRadius: 15,
  },
  
});
