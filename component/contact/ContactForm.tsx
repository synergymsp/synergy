'use client';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

const contactFormValidationSchema = Yup.object().shape({
  message: Yup.string().required('Message is required'),
  question: Yup.string().required('Please select a question'),
});

interface FormValues {
  message: string;
  question: string;
}

// const JIRA_API_URL = 'https://towelspecialties.atlassian.net/rest/api/3/issue';
// const JIRA_EMAIL = 'sameerdanish125@gmail.com';
// const JIRA_API_TOKEN =
//   'ATATT3xFfGF0xnFcTERkKnW4iKuqqDGhosqeDwA9ZFLn8pPRDg4rgSZDBNqv0Q7faQQM1-jSPxXG0GTaJfCGzwgro93e-vf2F8GMoWAMjTJsqSZRHOn3unBjeYRht3S8IZkDNjyQfvwFO7MswuU0mL9z9XTcc86BhN779O4FQsGReeXaCloWJRM=476D399B';

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    message: '',
    question: '',
  };

  // const handleSubmit = async (values: FormValues) => {
  //   const issueData = {
  //     fields: {
  //       project: {
  //         key: 'SCRUM', // Replace with your Jira project key
  //       },
  //       summary: `New Support Request: ${values.question}`,
  //       description: {
  //         type: 'doc',
  //         version: 1,
  //         content: [
  //           {
  //             type: 'paragraph',
  //             content: [
  //               {
  //                 type: 'text',
  //                 text: values.message,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       issuetype: {
  //         name: 'Task', // Replace with your Jira issue type
  //       },
  //     },
  //   };

  //   try {
  //     // Send the POST request
  //     const response = await fetch(JIRA_API_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Basic ${btoa(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`)}`, // Basic Auth
  //       },
  //       body: JSON.stringify(issueData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();

  //       console.log('Jira Ticket Created:', result);
  //       alert('Your request has been submitted successfully!');
  //     } else {
  //       // Log and display error response
  //       const errorData = await response.json();

  //       console.error('Failed to create Jira ticket:', errorData);
  //       alert(`Failed to submit your request: ${errorData.errorMessages || errorData.message}`);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting Jira ticket:', error);
  //     alert('An error occurred while submitting your request.');
  //   }
  // };

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await fetch('/api/create-jira-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const result = await response.json();

        // eslint-disable-next-line no-console
        console.log('Jira Ticket Created:', result);
        alert('Your request has been submitted successfully!');
      } else {
        const errorData = await response.json();

        // eslint-disable-next-line no-console
        console.error('Failed to create Jira ticket:', errorData);
        alert('Failed to submit your request. Please try again later.');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting Jira ticket:', error);
      alert('An error occurred while submitting your request.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
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
          <OutlinedInput
            name="message"
            as="textarea"
            placeholder="Your message"
            rows={4}
            error={errors.message}
            touched={touched.message}
          />

          <Button
            className="bg-theme px-[20px] py-[14px] text-white md:px-7 md:py-4"
            type="submit"
          >
            Contact us
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
