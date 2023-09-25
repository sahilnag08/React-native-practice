import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image source={require('../assets/fort.jpg')}  style={styles.cardImage} />
        <View style={styles.cardBody} >
          <Text style={styles.cardTitle}>Chittorgarh Fort</Text>
          <Text style={styles.cardLabel}>Chittorgarh, Rajasthan</Text>
          <Text style={styles.cardDescription}>Chittod Fort, is one of
            the largest forts in India. It is a UNESCO World Heritage Site.
            The fort was the capital of Mewar and
            is located in the present-day city of Chittorgarh.</Text>
          <Text style={styles.cardFooter}>117 Km from Udaipur</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: 'orange'
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1, 
    paddingHorizontal: 12
  },
  cardTitle: {

  },
  cardLabel: {

  },
  cardDescription: {

  },
  cardFooter: {

  }
})