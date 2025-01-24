export interface Feature {
  title: string;
  text: string;
}

export interface Content {
  sectionTitle?: string;
  text?: string;
  features?: Feature[];
}

export interface Service {
  id: number;
  title: string;
  description?: string;
  content: Content[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Oracle Development and Support',
    description: 'Unlock the Full Potential of Oracle with Our Expertise',
    content: [
      {
        text: "At Synergy Msp, we specialize in providing overarching Oracle Development and Support services designed to help businesses, where we will use the full features of Oracle database, the power of Oracle's industry-leading solutions. Our experienced team works across leading database platforms—including Oracle, SQL Server, MySQL, and PostgreSQL—and leverages expertise in ERP systems to deliver solutions to your unique needs.",
      },
      {
        sectionTitle: 'Oracle Development Services',
        text: 'Our Oracle development services are direct to provide scalable, efficient, and secure solutions. From customizing Oracle applications to creating bespoke extensions.',
      },
      {
        features: [
          {
            title: 'Custom Application Development',
            text: 'We help businesses develop customized Oracle applications that increase functionality and fulfill all requirements and operational needs.',
          },
          {
            title: 'Oracle Cloud Integration',
            text: 'Seamlessly integrate Oracle Cloud with your existing systems and benefit from the full potential of cloud access. We specialize in Oracle SaaS, PaaS, and IaaS solutions.',
          },
          {
            title: 'Database Design & Optimization',
            text: 'We provide end-to-end Oracle database services, including database design, architecture, performance tuning, and optimization to ensure high availability and expandability.',
          },
          {
            title: 'Application Extensions and API Development',
            text: 'Increase the capabilities of your Oracle applications with custom APIs and integrations that enhance operations and improve data flow between systems.',
          },
          {
            title: 'ERP Development & Customization',
            text: 'We support end-to-end ERP development and customization, making certain that your system aligns with your operational goals. Our team provides solutions for ERP implementation, module customization, and integration with other business tools.',
          },
          {
            title: 'Data Warehousing & ETL',
            text: 'Our data warehousing services provide a bedrock for modern analytics, helping you make data-driven decisions. We design, manage, and build data warehouses, and our ETL services ensure seamless data extraction, transformation, and loading from multiple sources.',
          },
          {
            title: 'System Integration & API Development',
            text: 'We enhance functionality through flawless integration of your ERP and databases with other business applications. Our API development services improve data flow and support real-time information sharing across systems.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'I.T. Infrastructure Design and Engineering',
    content: [
      {
        text: 'We specialize in crafting robust and scalable I.T. infrastructures that meet the evolving demands of modern businesses. Our team of experts in system engineering, networking, cybersecurity, and applications work together to design, implement, and optimize I.T. systems tailored to your unique needs.',
      },
      {
        sectionTitle: 'Our I.T. Infrastructure services include:',
      },
      {
        features: [
          {
            title: 'Custom I.T. System Design',
            text: "Whether you're building a new infrastructure from the ground up or upgrading an existing system, we will provide tailored solutions to match your specific requirements.",
          },
          {
            title: 'Networking Solutions',
            text: 'We provide reliable and secure networking solutions that will enhance connectivity, data flow, and overall system performance.',
          },
          {
            title: 'CyberSecurity Integration',
            text: 'For us, security is always a priority concern in every system we design. We integrate advanced cybersecurity measures to safeguard your infrastructure against modern threats.',
          },
          {
            title: 'Reliability',
            text: 'We design systems that ensure continuous, uninterrupted service by building redundancies into your infrastructure. This minimizes downtime and maintains business continuity even in the event of component failure.',
          },
          {
            title: 'End-to-End Support',
            text: 'From planning and design to implementation and ongoing management, we offer complete support throughout the lifecycle of your Company’s I.T. infrastructure.',
          },
          {
            title: 'Cloud and Hybrid Solutions',
            text: 'Whether it is a fully cloud-based environment, On-Premise, or a hybrid, we design infrastructures that provide flexibility and cost-efficiency without compromising the security and performance.',
          },
          {
            title: 'Data Storage & Backup Solutions',
            text: 'We offer reliable storage and backup systems, making certain the availability of data at all times and continuity of your business in any situation.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'On-Premises and Cloud Base Solutions',
    description:
      'At Synergy MSP, we deliver tailored I.T. solutions for both On-Premises and cloud-based infrastructures, ensuring your systems are reliable, secure, and aligned with your business objectives.',
    content: [
      {
        sectionTitle: 'On-Premises Systems',
        text: 'We specialize in creating, managing, and optimizing critical On-Premise systems that your organization relies on for day-to-day operations. Our services include: Hosts and Virtual machines Domain Controllers, Exchange servers, SQL Databases, and other essential systems that are best maintained on-site or within your data center for enhanced control and security. Our team ensures that your On-premises infrastructure is built for high performance, stability, and security.',
      },
      {
        text: 'Each of our solutions is designed to offer a strategic advantage, aligning your I.T. environment with your long-term objectives.',
      },
      {
        features: [
          {
            title: 'Customized On-Premise Solutions',
            text: 'Tailored on-site infrastructures to optimize control, security, and performance for your business-critical systems.',
          },
          {
            title: 'Advanced Cloud Integration',
            text: 'Expertise in AWS, Azure, and a range of SaaS, DaaS, PaaS, and IaaS solutions to support seamless, scalable, and cost-effective cloud transitions.',
          },
          {
            title: 'Hybrid Solutions',
            text: 'Flexible and integrated solutions combine the security of On-Premise systems with the convenience and scalability of the cloud.',
          },
          {
            title: 'Enhanced Security & Compliance',
            text: 'Ensuring comprehensive security protocols, compliance measures, data integrity, and regulatory adherence across On-Premise, cloud, and Hybrid infrastructures.',
          },
          {
            title: 'Performance & Reliability',
            text: 'High-performing systems that are designed to deliver continuous uptime, reliable accessibility, and efficient workflows.',
          },
          {
            title: 'Seamless System Management',
            text: 'Proactive management and maintenance to keep your systems optimized, secure, and in line with evolving business goals.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Help Desk Service',
    content: [
      {
        text: 'Our Help Desk Service team is composed of highly skilled and organized IT professionals supporting businesses with a wide range of customer requirements. We are proud to serve clients both in the USA and around the globe, providing timely, efficient solutions tailored according to the unique requirements of each organization. Our experts excel in addressing and resolving technical challenges, minimizing downtime, and enhancing productivity so clients can focus on what matters most: growing their business.',
      },
      {
        features: [
          {
            title: '24/7 Support Availability',
            text: 'Our team is ready around the clock to provide quick assistance, ensuring uninterrupted operations.',
          },
          {
            title: 'Comprehensive Issue Resolution',
            text: 'Skilled in diagnosing and resolving a wide array of I.T. issues, from hardware malfunctions to software troubleshooting.',
          },
          {
            title: 'Proactive Monitoring and Maintenance',
            text: 'We prevent issues before they impact productivity by monitoring systems and performing routine maintenance.',
          },
          {
            title: 'Customizable Support Plans',
            text: 'Flexible service options tailored to fit the specific requirements and scale of your business.',
          },
          {
            title: 'Dedicated Account Management',
            text: 'A single point of contact for streamlined communication, personalized support, and prompt escalation when needed.',
          },
          {
            title: 'User-Friendly Ticketing System',
            text: 'Track support requests, check status updates, and communicate with technicians easily.',
          },
          {
            title: 'Multi-Channel Assistance',
            text: 'We support your team through various channels (i.e., Phone, E-Mail, and Chat), offering a seamless experience no matter where they are.',
          },
          {
            title: 'Skilled Technicians',
            text: 'Our Help Desk experts are trained to resolve a wide range of technical issues, from software troubleshooting to network support, all with a focus on providing friendly and efficient service.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Cyber Security',
    description: 'Cybersecurity Solutions to Protect Your Business',
    content: [
      {
        text: 'In today’s digital landscape, Synergy MSP offers cutting-edge cybersecurity solutions designed to safeguard your business against evolving threats. We provide end-to-end protection, ensuring your systems, data, and operations stay secure around the clock.',
      },
      {
        sectionTitle: 'Our Cybersecurity Services',
        text: 'Threat Detection & Response: Using advanced monitoring tools, we detect potential threats in real-time and respond swiftly to mitigate risks before they escalate.',
      },
      {
        features: [
          {
            title: 'Network & Security',
            text: 'We secure your network and all connected devices, preventing unauthorized access and safeguarding critical data.',
          },
          {
            title: 'Data Encryption & Backup',
            text: 'Our data encryption and backup solutions ensure that your sensitive information remains protected, even in the event of a security breach.',
          },
          {
            title: 'Risk Assessment',
            text: 'We assess your security posture and help you comply with industry standards by reducing risks and strengthening overall resilience. Moreover, we strengthen your defenses and reduce liabilities.',
          },
          {
            title: 'Security Awareness',
            text: 'Equip your team with essential cybersecurity knowledge, helping them identify and respond to potential threats.',
          },
          {
            title: 'Vulnerability Management',
            text: 'Through regular evaluation and simulated attacks, we discover and address vulnerabilities before they can be exploited, ensuring your security is always one step ahead.',
          },
          {
            title: 'Cutting-Edge Expertise',
            text: 'We bring you the latest in cybersecurity innovations to protect your assets effectively, leveraging the best tools and industry-leading expertise.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Voice over IP (VoIP) Solutions',
    content: [
      {
        text: 'At Synergy MSP, we provide advanced, cloud-based Voice over IP (VoIP) solutions designed to deliver stability, crystal-clear audio quality, and cost-effectiveness. Our solutions are tailored to ensure seamless communication, both internally and externally, while accommodating your company’s specific needs and growth plans.',
      },
      {
        sectionTitle: 'Tailored Solutions',
        text: 'Whether your organization is looking to upgrade its current system or transition to a cloud-based VoIP environment, Synergy MSP offers the expertise and solutions to meet your communication needs with exceptional quality and value.',
      },
      {
        features: [
          {
            title: 'High Stability and Reliability',
            text: 'Our cloud-based VoIP solutions offer dependable uptime, ensuring that calls are consistent and free from interruptions.',
          },
          {
            title: 'Superior Call Quality',
            text: 'Engineered to deliver exceptional audio clarity, our VoIP solutions reduce background noise and latency, enabling smooth communication.',
          },
          {
            title: 'Scalability and Flexibility',
            text: 'We design flexible VoIP systems that grow with your business, allowing for easy scaling and user management without excessive costs.',
          },
          {
            title: 'Cost-Efficiency',
            text: 'VoIP can significantly reduce phone bills and other communication costs by utilizing internet connections rather than traditional phone lines.',
          },
          {
            title: 'Comprehensive Support',
            text: 'Our support team is readily available to assist with setting up your system, troubleshooting, and system management, so that you can have hassle-free communications by staying online all the time, optimized.',
          },
          {
            title: 'Significant Cost Reduction',
            text: 'Unlike traditional phone systems, VoIP eliminates the need for physical lines and lowers costs, especially for international calls.',
          },
          {
            title: 'Enhanced Flexibility',
            text: 'With VoIP, your team can make and receive calls from any internet-connected device—desk phones, computers, or smartphones.',
          },
        ],
      },
    ],
  },
];
