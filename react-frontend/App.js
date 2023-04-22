import React from 'react';
import { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import axios from 'axios';
import chocolate from './assets/images/chocolate.png';
import coffee_beans from './assets/images/coffee_beans.png';
import hot_sauce from './assets/images/hot_sauce.png';
import nespresso from './assets/images/nespresso.png';
import teapot from './assets/images/teapot.png';
import vinegar from './assets/images/vinegar.png';

const getRandomImage = () => {
  // Generate a random number between 1 and 1000 to use as the image ID
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // Return the image URL
  return `https://picsum.photos/200/200?random=${randomNumber}`;
};

export default function App() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
  const [users, setUsers] = useState([]);
  const SortOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1/api/flavrite');
        const sortedUsers = response.data.sort((a, b) => b.favorite_match_score - a.favorite_match_score);
        const topFiveUsers = sortedUsers.slice(0, 10);
        setUsers(topFiveUsers);
        console.log(topFiveUsers);
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
          <Image source={coffee_beans} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={nespresso} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Nespresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={chocolate} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Chocolate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={teapot} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Tea</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={hot_sauce} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Hot Sauce</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Image source={vinegar} style={styles.sortOptionImage} />
          <Text style={styles.sortLabel}>Vinegars</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
  <View style={styles.usersContainer}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
      {users.map((user) => (
        <TouchableOpacity style={styles.card} key={user.id}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>{user.name}</Text>

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
    </ScrollView>
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
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EF',
  },
  usersContainer: {
    height: 590, // set a fixed height
    paddingHorizontal: 20, // add horizontal padding
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden' // hide anything that goes beyond the set height
  },
  scrollContainer: {
    flexGrow: 1 // allow the scroll view to grow as needed
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EC6448',
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
    justifyContent: 'center',
    
    marginVertical: 10,
    marginBottom: 20,
  },
  sortOption: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortOptionImage: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
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
    height: 25,
    marginRight: 5,
    borderRadius: 20, // set to half the width/height for a circular shape
    borderWidth: 1,
    borderColor: '#000',
  },
  
  percentage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#FFF7EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    color: '#EC6448',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
   
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EC6448',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  addIcon: {
    width: 50,
    height: 50,
    
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5'
  },
  iconButton: {
    flex: 1,
    alignItems: 'center'
  },

  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    borderRadius: 15,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  
  
});
