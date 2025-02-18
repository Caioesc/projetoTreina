import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNavBar from './components/MyNavBar/MyNavBar';

import './components/MyCSS.css';
import MyInformationsForm from './components/MyInformationsForm/MyInformationsForm';
import MyEducationForm from './components/MyEducationForm/MyEducationForm';
import MyExperiencesForm from './components/MyExperiencesForm/MyExperiencesForm';
import MyAditionalForm from './components/MyAditionalForm/MyAditionalForm';

function App() {

  return (
    <>
      <MyNavBar></MyNavBar>
      <MyInformationsForm></MyInformationsForm>
      <MyEducationForm></MyEducationForm>
      <MyExperiencesForm></MyExperiencesForm>
      <MyAditionalForm></MyAditionalForm>
    </>
  );
}

export default App;
