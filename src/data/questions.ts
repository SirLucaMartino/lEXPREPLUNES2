import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    category: 'civil',
    type: 'multiple',
    question: '¿Cuál es el plazo de prescripción para la acción de nulidad absoluta en el Código Civil?',
    options: [
      '5 años',
      '10 años',
      'Es imprescriptible',
      '2 años'
    ],
    correctAnswer: 'Es imprescriptible',
    explanation: 'La acción de nulidad absoluta es imprescriptible según el Código Civil, debido a que protege el interés público y el orden público.'
  },
  {
    id: '2',
    category: 'civil',
    type: 'multiple',
    question: '¿Qué requisito es esencial para la validez del contrato de compraventa?',
    options: [
      'Que sea por escrito',
      'Que tenga precio cierto en dinero',
      'Que sea ante notario',
      'Que tenga testigos'
    ],
    correctAnswer: 'Que tenga precio cierto en dinero',
    explanation: 'El precio cierto en dinero es un elemento esencial del contrato de compraventa, sin el cual el contrato no existe como tal.'
  },
  {
    id: '3',
    category: 'procesal',
    type: 'multiple',
    question: '¿Cuál es el plazo para interponer un recurso de apelación en el proceso ordinario?',
    options: [
      '3 días',
      '5 días',
      '10 días',
      '15 días'
    ],
    correctAnswer: '5 días',
    explanation: 'El plazo para interponer el recurso de apelación en el proceso ordinario es de 5 días hábiles desde la notificación de la resolución.'
  },
  {
    id: '4',
    category: 'procesal',
    type: 'multiple',
    question: '¿Qué efecto produce la rebeldía en el proceso civil?',
    options: [
      'Presunción de veracidad de los hechos',
      'Nulidad del proceso',
      'Suspensión del proceso',
      'Ningún efecto'
    ],
    correctAnswer: 'Presunción de veracidad de los hechos',
    explanation: 'La rebeldía produce la presunción de veracidad de los hechos expuestos en la demanda, salvo prueba en contrario.'
  }
];