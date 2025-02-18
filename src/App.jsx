import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavBar from './components/MyNavBar/MyNavBar';

import './components/MyCSS.css';
import MyInformationsForm from './components/MyInformationsForm/MyInformationsForm';

function App() {

  return (
    <>
      <MyNavBar></MyNavBar>
      <MyInformationsForm></MyInformationsForm>
    </>
  );
}

export default App;
