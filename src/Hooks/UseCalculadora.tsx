import { useRef, useState } from 'react';

enum operadores {
  sumar,
  restar,
  dividir,
  multiplicar,
}

export const UseCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numFijo, setNumFijo] = useState(false);

  const operacion = useRef<operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    //no aceptar dos puntos
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //evaluar si entra un cero y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        //evaluar si es diferente de cero y no tiene punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        //evitar 000.1
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }

      //
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    if (numero === 'Error') {
      return;
    }
    let numeroNew = numero.substring(0, numero.length - 1);

    if (numeroNew.length < 2 && numeroNew.includes('-')) {
      numeroNew = numeroNew.substr(1);
    }
    if (numeroNew.length < 1) {
      numeroNew = '0';
    }
    setNumero(numeroNew);
  };

  const reemplazarNumero = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    reemplazarNumero();
    operacion.current = operadores.dividir;
  };
  const btnMultiplicar = () => {
    reemplazarNumero();
    setNumFijo(false);
    operacion.current = operadores.multiplicar;
  };
  const btnRestar = () => {
    reemplazarNumero();
    setNumFijo(false);
    operacion.current = operadores.restar;
  };
  const btnSumar = () => {
    reemplazarNumero();
    setNumFijo(false);
    operacion.current = operadores.sumar;
  };

  const calcular = () => {
    let num1 = Number(numero);
    let num2 = Number(numeroAnterior);

    switch (operacion.current) {
      case operadores.dividir:
        if (num2 !== 0) {
          setNumero(`${num2 / num1}`);
        } else {
          setNumero('Error');
        }
        break;
      case operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        if (!numFijo) {
          setNumeroAnterior(`${num1}`);
          setNumFijo(true);
        }
        break;
      case operadores.restar:
        setNumero(`${num2 - num1}`);

        break;
      case operadores.sumar:
        setNumero(`${num1 + num2}`);
        if (!numFijo) {
          setNumeroAnterior(`${num1}`);
          setNumFijo(true);
        }
        break;
      default:
        break;
    }
  };
  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDel,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };
};
