import React from 'react';
import MyInformationsForm from '../MyInformationsForm/MyInformationsForm';
import MyEducationForm from '../MyEducationForm/MyEducationForm';
import MyExperiencesForm from '../MyExperiencesForm/MyExperiencesForm';
import MyAditionalForm from '../MyAditionalForm/MyAditionalForm';

function MyEditarCurriculo(){
  return (
    <>
      <MyInformationsForm />
      <MyEducationForm />
      <MyExperiencesForm />
      <MyAditionalForm />
    </>
  );
}

export default MyEditarCurriculo;
