// src/screens/AtendimentoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput as PaperInput, Provider as PaperProvider } from 'react-native-paper';

const AtendimentoScreen = () => {
  const [dataAtendimento, setDataAtendimento] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [nomePaciente, setNomePaciente] = useState('');
  const [procedimento, setProcedimento] = useState('consulta');
  const [valorAtendimento, setValorAtendimento] = useState('');

  const handleSave = () => {
    if (!nomePaciente.trim() || !valorAtendimento.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar a lógica para salvar os dados, como enviar para uma API ou armazenar localmente
    Alert.alert('Sucesso', 'Atendimento salvo com sucesso!');
    
    // Limpar os campos após salvar (opcional)
    setNomePaciente('');
    setProcedimento('consulta');
    setValorAtendimento('');
    setDataAtendimento(new Date());
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDataAtendimento(selectedDate);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.label}>Data do Atendimento</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{dataAtendimento.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dataAtendimento}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChangeDate}
          />
        )}

        <Text style={styles.label}>Nome do Paciente</Text>
        <TextInput
          style={styles.input}
          value={nomePaciente}
          onChangeText={setNomePaciente}
          placeholder="Digite o nome do paciente"
        />

        <Text style={styles.label}>Procedimento</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={procedimento}
            onValueChange={(itemValue) => setProcedimento(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Consulta" value="consulta" />
            <Picker.Item label="Aparelho Braquete" value="aparelho-braquete" />
            <Picker.Item label="Aparelho Invisalign" value="aparelho-invisalign" />
            <Picker.Item label="Aparelho Ortopédico" value="aparelho-ortopedico" />
            <Picker.Item label="Remoção de Aparelho" value="remocao-aparelho" />
          </Picker>
        </View>

        <Text style={styles.label}>Valor do Atendimento (R$)</Text>
        <PaperInput
          mode="outlined"
          keyboardType="numeric"
          value={valorAtendimento}
          onChangeText={setValorAtendimento}
          placeholder="Ex: 200,00"
          style={styles.paperInput}
        />

        <Button title="Salvar Atendimento" onPress={handleSave} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  paperInput: {
    marginVertical: 8,
  },
  dateButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
});

export default AtendimentoScreen;
