import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const Inicio = ({navigation}) => {
  const [nombre, onChangeNombre] = useState('');
  const [apellido, onChangeApellido] = useState('');
  const [concepto, onChangeConcepto] = useState('');
  const [monto, onChangeMonto] = useState(null);

  return (
    <SafeAreaView style={estilos.container}>

      <View style={estilos.formGroup}>
        <Text style={estilos.label}>Nombre</Text>
        <TextInput
          style={estilos.input}
          onChangeText={onChangeNombre}
          value={nombre}
        />
      </View>

      <View style={estilos.formGroup}>
        <Text style={estilos.label}>Apellidos</Text>
        <TextInput
          style={estilos.input}
          onChangeText={onChangeApellido}
          value={apellido}
        />
      </View>

      <View style={estilos.formGroup}>
        <Text style={estilos.label}>Concepto</Text>
        <TextInput 
          style={estilos.input}
          onChangeText={onChangeConcepto} 
          value={concepto} 
        />
      </View>

      <View style={estilos.formGroup}>
        <Text style={estilos.label}>Monto</Text>
        <TextInput
          style={estilos.input}
          onChangeText={onChangeMonto}
          value={monto}
          placeholder="00.00"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={estilos.boton}
        onPress={() => navigation.navigate('ResultadoBbva', { nombre, apellido, concepto, monto })}
      >
        <Text style={estilos.textBoton}>Generar</Text>
      </TouchableOpacity>

      <Text style={{ color: '#EF4747', fontSize: 10 }}>*No usar de manera cretina</Text>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formGroup: {
    width: '100%',
    paddingHorizontal: 20,
    borderBottomColor: '#E7E7E7',
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#E7E7E7',
    borderRadius: 4,
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingVertical: 5,
    paddingVertical: 1,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    width: '100%'
  },
  boton: {
    width: '90%',
    backgroundColor: '#218EE3',
    borderRadius: 4,
    marginBottom: 4
  },
  textBoton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 10
  }
});

export default Inicio;
