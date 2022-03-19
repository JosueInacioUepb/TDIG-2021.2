import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import './styles/LoginPage.css';
import { authContext } from './AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import api from './services/api';


const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required').min(4, 'Too short!').max(15, 'Too long!'),
  password: Yup.string().required('Required').min(4, 'Too short!').max(10, 'Too long!')
});

const LoginPage = () => {

  const { login } = React.useContext(authContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from || "infoProjetos";
 

  const handleSubmitting = (values, { setSubmitting, setStatus }) => {

    setStatus({ isValidating: true }); 
    console.info(JSON.stringify(values, null, 4));
    setStatus({ isValidating: true });
   

    api.post('/api/v1/login', values)
      .then((response) => {
        console.log(response);

        isLoaded: true
        redirectToReferrer: false
        alert('sucesso');
        login().then(navigate(from, { replace: true }))

      })
      .catch((err) => {
        alert("Login Inválido " + err);
        
      });

    setSubmitting(false);
    setStatus({ isValidating: false });

  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ password: '', username: '' }}
      onSubmit={handleSubmitting}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <h1>Validação de Acesso</h1>
          <a>Faça login para acessar essa página </a>
          <hr />
          <br />
          <div id="login">
            <label>
              Usuário* :<br></br>
              <Field type="text" name="username"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="username" className="error" component="span" />
            <br /><br />

            <label>
              Password* :<br></br>
              <Field type="password" name="password"
                onBlur={handleBlur}
                onChange={handleChange} />
            </label>
            <ErrorMessage name="password" className="error" component="span" />
            <br /><br />

            <input type="submit" value="Login" disabled={isSubmitting} />
          </div>
        </form>
      )}
    </Formik>
  )
};

export default LoginPage;