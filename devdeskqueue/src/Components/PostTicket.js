import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'





const PostTicket = ({ errors, touched, values, status }) => {
    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        if (status) {
            setTicket([...ticket, status]);
        }
    }, [status]);

    return (
        <div className="post-ticket-form">
          <Form>
            <Field
              component="input"
              type="text"
              name="title"
              placeholder="Issue"
            />
            {touched.title && errors.title && (
              <p className="error">{errors.title}</p>
            )}
            <Field
              component="input"
              type="text"
              name="description"
              placeholder="description"
            />
            {touched.title && errors.title && (
              <p className="error">{errors.title}</p>
            )}

            <Field component="select" className="type" name="Select type of issue">
              <option>select type of issue</option>
              <option value="None">None</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
            </Field>


            
            <button>Submit!</button>
          </Form>
          
        </div>
      );
    };
    

// owner, assigned, date Extra Vars

const FormikForm = withFormik ({
    mapPropsToValues({ title, description, type, tried }) {
        return{
            title: title || '',
            description: description || '',
            type: type || '',
            tried: tried || '',           
        }
    },
    validationSchema: Yup.object().shape({
        title: Yup.string().required(),
        description: Yup.string().required(),
        type: Yup.string().required(),
        tried: Yup.string().required(),        
    }),

    handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}){
        axios
            .post('https://devdesk-backend.herokuapp.com/api/tickets/', values)
            .then(res => {
                setStatus(res.data);
            })        
        
        }      
})(PostTicket)

export default FormikForm