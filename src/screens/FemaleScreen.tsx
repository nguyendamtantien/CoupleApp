import * as React from 'react'
import styled from 'styled-components'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Header, Input, Button } from 'react-native-elements'

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
const FamaleScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'Cho bạn nữ 👩', style: { color: '#fff' } }} />
      <View style={styles.page}>
        <Input placeholder="BASIC INPUT" label="Mã số gấu" autoCompleteType={undefined} />
        <Button title="Xác Nhận Mã" />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.heading}>Triệu Hồi </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text>Em đói quá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text>Thèm trà sữa quá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <Text>Nhớ anh quá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
              <Text>Gọi nha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
export default FamaleScreen
