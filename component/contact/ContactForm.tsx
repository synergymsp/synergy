'use client';

import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import emailjs from 'emailjs-com';
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
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success('Email sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
        resetForm();
      } else {
        toast.error('Failed to send email. Please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (
  //   values: FormValues,
  //   { setSubmitting, resetForm }: FormikHelpers<FormValues>
  // ) => {
  //   try {
  //     setSubmitting(true);

  //     console.log('Sending task creation email...');
  //     await emailjs.send(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //       {
  //         email: values.email,
  //         question: values.question,
  //         message: values.message,
  //       },
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  //     );
  //     console.log('Task creation email sent successfully.');

  //     console.log('Preparing confirmation email payload...');
  //     const confirmationPayload = {
  //       user_email: values.email,
  //       question: values.question,
  //       message: values.message,
  //     };

  //     console.log('Confirmation Payload:', confirmationPayload);

  //     console.log('Sending confirmation email...');
  //     await emailjs.send(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //       process.env.NEXT_PUBLIC_CONFIRMATION_TEMPLATE_ID!,
  //       confirmationPayload,
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  //     );
  //     console.log('Confirmation email sent successfully.');

  //     toast.success('Emails sent successfully!', {
  //       position: 'top-center',
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //     });

  //     resetForm();
  //   } catch (error) {
  //     console.error('Error during email submission:', error);
  //     toast.error('Failed to send emails. Please try again.', {
  //       position: 'top-center',
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //     });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

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
