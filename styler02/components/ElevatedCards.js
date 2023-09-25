import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style = {{flex: 1}}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal = {true} style={styles.container}>
        <View style = {[styles.card, styles.Elevated]}>
          <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.Elevated]}>
          <Text>cards</Text>
        </View><View style = {[styles.card, styles.Elevated]}>
          <Text>To</Text>
        </View><View style = {[styles.card, styles.Elevated]}>
          <Text>View</Text>
        </View><View style = {[styles.card, styles.Elevated]}>
          <Text>More</Text>
        </View><View style = {[styles.card, styles.Elevated]}>
          <Text>👍</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
},
container: {
  flex: 1,
  flexDirection: 'row',
  

},
card: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
        height: 100,
        margin: 8,
        backgroundColor: 'beige'
},
Elevated: {
  elevation: 4,
  shadowOffset: {
    width: 100,
    height: 100
  },
  shadowColor: 'blue'
}
})