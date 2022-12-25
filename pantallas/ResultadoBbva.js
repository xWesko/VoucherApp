import React from 'react'
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
import { View, Text, StyleSheet, Image } from 'react-native';
import ViewShot from "react-native-view-shot";
import LinearGradient from 'react-native-linear-gradient'

const ResultadoBbva = (props) => {

  const {apellido, concepto, monto, nombre} = props.route.params;

  return (
    <ViewShot>
      <View style={estilos.header}>
        <Text style={estilos.textTransferencia}>Transferencia exitosa</Text>
        <Text style={estilos.textFecha}>
          {moment(new Date()).format('DD MMMM YYYY, HH:mm:ss')} h
        </Text>
        <Text style={estilos.textMonto}>${monto}</Text>
        <Text style={estilos.textDescr}>
          Esta tranferencia no genera comisión.
        </Text>
      </View>

      <View style={estilos.iconsContainer}>
        <View style={estilos.iconos}>
          <Image
            resizeMode="cover"
            style={{width: 65, height: 43}}
            source={require('../assets/asset1.png')}
          />
          <View style={{ backgroundColor: '#ed712b', width: 60, height: 60, borderRadius: 100 }}>
            <Text 
              style={{ 
                textTransform: 'uppercase', 
                color: '#fff', 
                display: 'flex',
                paddingTop: 12,
                fontSize: 23,
                textAlign: 'center'
              }}
            >{nombre.charAt(0)}{apellido.charAt(0)}</Text>
          </View>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", marginTop: 20 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>00001AH0026</Text>
          <Text style={{ fontSize: 14, textAlign: 'right' }}>• 0026</Text>
        </View>

        <View>
          <Text style={{ textTransform: "uppercase", fontSize: 16, color: '#000', fontWeight: 'bold' }}>{nombre} {apellido}</Text>
          <Text style={{ fontStyle: 'italic' }}>Cuenta BBVA Bancomer</Text>
          <Text>• 4054</Text>
        </View>
        
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 60 }}>
        <Text style={{ fontSize: 17 }}>Motivo de pago</Text>
        <Text style={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: 17, color: '#000' }}>{concepto}</Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20 }}>
        <Text style={{ fontSize: 15 }}>Folio: 0704748457</Text>
        <Text style={{ fontSize: 15, }}>BBVA</Text>
      </View>

    </ViewShot>
  );
}

const estilos = StyleSheet.create({
  header: {
    backgroundColor: '#47ae64',
    width: '100%',
    height: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTransferencia: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  textFecha: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: 16
  },
  textMonto: {
    fontSize: 30,
    color: '#fff',
    marginTop: 18,
    fontWeight: '400'
  },
  textDescr: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '300',
    marginTop: 10
  },
  iconsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    marginTop: -40,
  },
  iconos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    height: 80,
    borderRadius: 200,
    backgroundColor: '#ebebeb'
  }
});

export default ResultadoBbva