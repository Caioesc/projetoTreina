import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyEditarCurriculo from './components/MyEditarCurriculo/MyEditarCurriculo';
import MyExibirCurriculo from './components/MyExibirCurriculo/MyExibirCurriculo';

function App() {
  return (
    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MyEditarCurriculo />} />
        <Route path="/editar-curriculo" element={<MyEditarCurriculo />} />
        <Route path="/exibir-curriculo" element={<MyExibirCurriculo />} />
      </Routes>
    </Router>
  );
}

export default App;
