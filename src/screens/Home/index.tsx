import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState([
    'Gabriel Pires',
    'Rodrigo Gonçalves',
    'Diego Fernandes',
  ])

  function handleParticipantAdd(name: string) {
    if (!name) {
      return Alert.alert('Ops!', 'Você precisa informar o nome do participante')
    }

    if (participants.includes(name)) {
      setName('')
      return Alert.alert('Ops!', 'Esse participante já está na lista')
    }

    setParticipants((prev) => prev.concat(name))
    setName('')
  }

  function handleParticipantRemove(index: number) {
    setParticipants((prev) => prev.filter((_, i) => i !== index))
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
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => handleParticipantAdd(name)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(index)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  )
}
