import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  function handleParticipantAdd() {
    console.log('Adicionando participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 26 de maio de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={'Nome do participante'}
          placeholderTextColor={'#6b6b6b'}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
