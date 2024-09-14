import { Text, View, Image, TouchableOpacity, Vibration, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Post({ post }) {

    return (
        <View>

            <View style={styles.headerPost}>
                <Text>{post.user}</Text>
                <MaterialCommunityIcons name='dots-horizontal' size={30} color="#000" />
            </View>

            <Image style={styles.imagePost} source={{ uri: post.image }} />

            <View style={styles.footerPost}>
                <TouchableOpacity onPress={() => Vibration.vibrate(500)}>
                    <MaterialCommunityIcons name='heart-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='share-outline' size={30} color="#CCC" />
                </TouchableOpacity>
            </View>

            <Text style={styles.likeCount}> {post.likes} likes</Text>
            <Text style={styles.comment}>{post.caption}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    imagePost: {
        width: '100%',
        height: 300
    },
    footerPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'
    },
    likeCount: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#CCC'
    },
    comment: {
        textAlign: 'justify',
        marginLeft: 5
    }
})