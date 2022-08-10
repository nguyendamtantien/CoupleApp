import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Header } from 'react-native-elements'
import * as Notifications from 'expo-notifications'

async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync()
  if (status !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status !== 'granted') {
      alert('failed to get notification token')
      return
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log({ token })
  return token
}

const MaleScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'Cho bạn nam 🧑', style: { color: '#fff' } }} />
      <View style={styles.page}>
        <Text style={styles.heading}>Bạn chưa có mã, bấm vào để lấy mã</Text>
        <Button title="Bấm vào để lấy mã" onPress={getNotificationToken}></Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  button1: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#2980b9',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button3: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button4: {
    backgroundColor: '#f1c40f',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
export default MaleScreen
