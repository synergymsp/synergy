'use client';

import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

import OutlinedInput from '../common/OutlinedInput';

import { Button } from '@/component/common/Button';
import Select from '@/component/common/Select';

const options = [
  { id: 1, name: '3CX Proposal Request' },
  { id: 2, name: 'Renewals' },
  { id: 3, name: 'Licensing' },
  { id: 4, name: 'Ordering' },
  { id: 5, name: '3CX Account Login' },
  { id: 6, name: 'Sales' },
  { id: 7, name: '3CX Partner Program' },
];

// Validation schema for the form
const contactFormValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
  question: Yup.string().required('Please select a question'),
});

interface FormValues {
  email: string;
  message: string;
  question: string;
}

const ContactForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const initialValues: FormValues = {
    email: '',
    message: '',
    question: '',
  };

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setIsSubmitting(true);
  
    const payload = {
      fields: [
        { id: 'summary', value: values.question },
        { id: 'description', value: values.message },
        { id: 'attachment', value: [] },
        { id: 'email', value: values.email },
      ],
    };
  
    try {
      const response = await fetch('https://jsd-widget.atlassian.com/api/embeddable/13677967-7313-4cd0-befd-204bf2af1f12/request?requestTypeId=1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        toast.success('Request submitted successfully! You will receive a confirmation email soon.', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: true,
        });
        resetForm();
      } else {
        toast.error('Failed to submit request. Please try again.', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      toast.error(`An error occurred. Please try again. ${error}`, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={handleSubmit}
    >
      
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-5">
          <div>
            <Field
              name="question"
              component={Select}
              options={options}
              label="Your Question"
              placeholder="Select a question"
            />
            {errors.question && touched.question && (
              <p className="mt-1 inline-block text-xs text-red-500">
                {errors.question}
              </p>
            )}
          </div>
          <div>
            <OutlinedInput
              name="email"
              type="email"
              placeholder="Your email"
              error={errors.email}
              touched={touched.email}
              label="Your Email"
            />
          </div>
          <OutlinedInput
            name="message"
            as="textarea"
            placeholder="Your message"
            rows={4}
            error={errors.message}
            touched={touched.message}
          />

          <Button
            className="bg-theme flex items-center justify-center px-[20px] py-[14px] text-white md:px-7 md:py-4"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <FontAwesomeIcon icon={faSpinner} spin className="h-4 w-4" />
            ) : (
              <>
                Contact us
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;