import React, { State } from "react";
import { Formik, ErrorMessage, Field } from 'formik';
import api from './services/api';
import * as Yup from 'yup';
import './styles/HomePage.css';


const CadastroSchema = Yup.object().shape({
  username: Yup.string().required('Required').min(4, 'Too short!').max(15, 'Too long!'),
  password: Yup.string().required('Required').min(4, 'Too short!').max(10, 'Too long!'),
  registration: 0,
  function: Yup.string().required('Required'),
  role: Yup.string().required('Required')
});



const HomePage = () => {

  const handleSubmitting = (values, { setSubmitting, setStatus }) => {

    setStatus({ isValidating: true });
    //console.info(JSON.stringify(values, null, 4));

    api.post('/api/v1/signup', values)
      .then((response) => {
        console.log(response);

        isLoaded: true
        redirectToReferrer: false
        alert('Cadastrado com sucesso');
        location.reload();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });

    setSubmitting(false);
    setStatus({ isValidating: false });


  };


  return (
    <Formik

      validationSchema={CadastroSchema}
      initialValues={{ function: '', password: '', registration: 0, role: '', username: '' }}
      onSubmit={handleSubmitting}

    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

      }) => (
        <form onSubmit={handleSubmit}>

          <h1>BEM-VINDO(A)!</h1>
          <a>Cadastre-se para ter acesso a todas as funcionalidades! </a>

          <hr />
          <div id='radios'>

            <input type="radio" value="ALUMN" name="gender" defaultChecked /> ALUMN
            <input type="radio" value="TEACHER" name="gender" /> TEACHER

          </div>


          <div id='container'>

            <label>
              Usuário* : <br></br>
              <Field type="text" name="username"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="username" className="error" component="span" />
            <br /><br />
            <label className="field">
              Password* : <br></br>
              <Field type="password" name="password"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label >
            <ErrorMessage name="password" className="error" component="span" />
            <br /><br />

            <label className="field">
              Function* [ TRAINEE, JUNIOR, SENIOR, MASTER, COORDINATOR ] : <br></br>
              <Field type="function" name="function"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="function" className="error" component="span" />
            <br /><br />

            <label className="field">
              Role* [ ALUMN , TEACHER ] : <br></br>
              <Field type="role" name="role"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="role" className="error" component="span" />
            <br /><br />

            <input type="submit" className="enviar" value="Cadastrar" disabled={isSubmitting} />
          </div>

        </form>
      )}
    </Formik>
  )
};

export default HomePage;






