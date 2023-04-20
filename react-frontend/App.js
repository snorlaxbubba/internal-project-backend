import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/200/200?random=${randomNumber}`;
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={{ uri: 'https://picsum.photos/20/20?random=1' }}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>PEOPLE</Text>
        <Image
          source={{ uri: 'https://picsum.photos/40/40?random=2' }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.sortBar}>
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
      <View style={styles.cardList}>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>John Doe</Text>
            <View style={styles.stats}>
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
            </View>
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>75%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>Jane Smith</Text>
            <View style={styles.stats}>
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
            </View>
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>90%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>Jack Chan</Text>
            <View style={styles.stats}>
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
            </View>
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>30%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>Mason Porter</Text>
            <View style={styles.stats}>
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
            </View>
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>50%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: getRandomImage() }} style={styles.profilePic} />
          <View style={styles.details}>
            <Text style={styles.name}>Carl Greenburg</Text>
            <View style={styles.stats}>
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
              <Image source={{ uri: getRandomImage() }} style={styles.statIcon} />
            </View>
          </View>
          <View style={styles.percentage}>
            <Text style={styles.percentageText}>70%</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.addButtonContainer}>
  
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
    borderWidth: 1,
    borderColor: '#000',
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
