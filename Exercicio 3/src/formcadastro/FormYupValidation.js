import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';


const CadastroSchema = Yup.object().shape({

  nomecompleto: Yup.string().required('Nome Obrigatorio!' ),
  idade:        Yup.number().required('Idade Obrigatoria!').min(17, 'Idade minima 17 anos!'),
  cpf:          Yup.string().required('CPF Obrigatorio!').max(14,'CPF Inválido'),
  matricula:    Yup.number().required('Matrícula Obrigatoria!').min(8, 'Matrícula Inválida'),
  curso:        Yup.string().required('Curso Obrigatorio!'),
  endereco:     Yup.string().required('Endereço Obrigatorio!'),
  numero:       Yup.number(),
  complemento:  Yup.string(),
  bairro:       Yup.string().required('Bairro Obrigatorio!'),
  cidade:       Yup.string().required('Cidade Obrigatoria!'),
  estado:       Yup.string().required('Please indicate your communications preference'),
  cep:          Yup.string().required('CEP Obrigatorio!'),


});

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={CadastroSchema}
      initialValues={{  nomecompleto: '', idade: '', cpf: '', matricula: '',
                        curso: '', endereco: '', numero: '', complemento: '',
                        bairro: '', cidade: '', estado: '', cep: ''}}
      onSubmit={handleSubmitting}
    >
      {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Nome*:
            <Field type="text" name="nomecompleto"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="nomecompleto" className="error" component="span"/>
          <br/><br/>

          <label>
            Idade*:
            <Field type="text" name="idade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="idade" className="error" component="span"/>
          <br/><br/>

          <label>
            CPF*:
            <Field type="text" name="cpf"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cpf" className="error" component="span" />
          <br/><br/>

          <label>
            Matrícula*:
            <Field type="text" name="matricula"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="matricula" className="error" component="span"/>
          <br/><br/>

          <label>
            Curso*:
            <Field type="text" name="curso"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="curso" className="error" component="span"/>
          <br/><br/>
          
          <label>
            Endereço*:
            <Field type="text" name="endereco"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="endereco" className="error" component="span"/>
          <br/><br/>

          <label>
            Numero:
            <Field type="text" name="numero"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="numero" className="error" component="span"/>
          <br/><br/>

          <label>
            Complemento:
            <Field type="text" name="complemento"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="complemento" className="error" component="span"/>
          <br/><br/>

          <label>
            Bairro*:
            <Field type="text" name="bairro"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="bairro" className="error" component="span"/>
          <br/><br/>

          <label>
            Cidade*: 
            <Field type="text" name="cidade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cidade" className="error" component="span"/>
          <br/><br/>

          <label>
            Estado*:
            <select name="estado">
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
              </select>
          </label>
          <ErrorMessage name="estado" className="error" component="span"/>
          <br/><br/>

          <label>
            CEP*:
            <Field type="text" name="cep"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cep" className="error" component="span"/>
          <br/><br/>
         
          <input type="submit" className="enviar" value="Cadastro" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormYupValidation;