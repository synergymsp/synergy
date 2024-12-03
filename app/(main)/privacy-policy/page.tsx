import { Container } from '@/component/common/Container';

const sections = [
  {
    title: 'What information is collected and how is it used?',
    content:
      'We ask you to supply certain information when you use our site, especially when you sign up with us as a customer. This information will be used in the management of our own database and to enable us to contact you about the service you have requested (for example, to confirm the registration of a domain name or to inform you of the need to renew your registration when it expires). In addition, when you use our website we may store your IP address and may use this information to administer our website and help to diagnose any network or server problems. We may use cookies to keep track of your use of our website and e-commerce system. Information passed to us from your web browser may be stored and used in our internal statistical analysis. We may also automatically collect non-personal information about you such as the type of internet browsers you use or the site from which you linked to our website. You cannot be identified from this information and it is only used to assist us in providing an effective service on our website.',
  },
  {
    title: 'Security',
    content:
      'Synergy places great importance on the security of all information associated with its customers and has security measures in place to attempt to protect against the loss, misuse and alteration of customer data under our control. With regard to our website, we may use secure server software (SSL) to encrypt information you input before it is sent to us. While we cannot ensure or guarantee that loss, misuse or alteration of data will not occur, we use our best efforts to prevent this.',
  },
  {
    title: 'Your Responsibility',
    content:
      'You are responsible for the security of your Account Number and passwords. Make sure you keep it in a safe place and do not share it with others. Always remember to log out after your session ends, to ensure that others cannot access your private personal information. You should take this precaution even if you are not using a public computer, such as at a library or internet café, but even when using your private computer in your home.',
  },
  {
    title: 'Service Announcements',
    content:
      'On rare occasions it is necessary to send out a strictly service related announcement, if, for instance, a service is temporarily suspended for maintenance. Generally, users may not opt-out of these communications, though they can deactivate their account.',
  },
  {
    title: 'Changes to Personal Information',
    content:
      'If you need to change the information that we keep, for example because you have moved or to correct an error, please contact us.',
  },
  {
    title: 'How long will we hold data on you?',
    content:
      'Synergy MSP will not hold data for longer than is reasonably necessary for the purposes of the proper conduct of its business or as required by law.',
  },
  {
    title: 'Where is the data we hold stored',
    content:
      'Information which you submit via our website is stored on a computer and sometimes on paper at our offices. This is necessary in order to process the information and to send you any information you have requested.',
  },
];

export default function PrivacyPolicy() {
  return (
    <Container className="py-[50px] md:py-[80px] lg:py-[120px]">
      <div className="mb-10">
        <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
          Privacy Policy
        </h2>
      </div>
      {sections.map((section, index) => (
        <div className="border-smoke mb-6 border-b py-4" key={index}>
          <h2 className="text-title text-xl font-medium md:text-2xl">
            {section.title}
          </h2>
          <p className="text-body mt-2 text-sm sm:text-base md:text-lg">
            {section.content}
          </p>
        </div>
      ))}
    </Container>
  );
}
