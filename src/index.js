import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { CallBackHook } from './components/06-memos/CallBackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { HookApp } from './HookApp';

// ReactDOM.render(
//   <SimpleForm />,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MainApp />);


