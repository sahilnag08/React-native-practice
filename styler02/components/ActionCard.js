import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink);
    }
    return (
        <View>
            <Text style={styles.headingText} >Blog Card</Text>
            <View style={styles.card}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new is JS 21 - ES 12
                    </Text>
                </View>

                <Image source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                }} style={styles.cardImage} resizeMode='contain' />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={2} >With the new addition from ES2021, you can re-write the same number
                        as follows “92_145_723”. That is, you use underscores to
                        improve the readability. You can see it’s already better,
                        and easier to understand the number. Now, you can clearly
                        see it’s 92 million and something.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.pullrequest.com/blog/javascript-es2021-you-need-to-see-these-es12-features/')} >
                        <Text style={styles.socialLinks} >Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: 'orange'
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer: {
        padding: 8
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    cardImage: {
        height: 190,
    },
    footerContainer:{
        padding: 8,
        alignItems: 'center',
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20

    }
})