import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { UseCalculadora } from '../Hooks/UseCalculadora';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    armarNumero,
    btnDel,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = UseCalculadora();

  return (
    <View style={styles.calculadoreContainer}>
      <Text style={styles.resultadoMini}>{numeroAnterior}</Text>
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9b9b9b" action={limpiar} />
        <BotonCalc texto="+/-" color="#9b9b9b" action={positivoNegativo} />
        <BotonCalc texto="del" color="#9b9b9b" action={btnDel} />
        <BotonCalc texto="/" color="#ff9427" action={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc texto="X" color="#ff9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc texto="-" color="#ff9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc texto="+" color="#ff9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={armarNumero} />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" color="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
