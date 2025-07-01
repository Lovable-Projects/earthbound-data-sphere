
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-muted-foreground">Last updated: December 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          At Perssonify ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
        </p>
        <p>
          By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this policy, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        
        <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
        <p className="mb-4">We may collect the following types of personal information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (name, email address, phone number, mailing address)</li>
          <li>Business information (company name, job title, industry)</li>
          <li>Account credentials (username, password)</li>
          <li>Payment information (billing address, credit card details)</li>
          <li>Communication preferences and marketing consent</li>
          <li>Any information you provide in forms, surveys, or communications with us</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, time spent, click patterns)</li>
          <li>Cookies and similar tracking technologies</li>
          <li>Referral sources and search terms</li>
          <li>Location data (if permitted by your device)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">2.3 Third-Party Information</h3>
        <p>
          We may receive information about you from third-party sources, including social media platforms, business partners, and public databases, which we may combine with other information we have about you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use your information for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing and improving our services</li>
          <li>Processing transactions and managing your account</li>
          <li>Communicating with you about our services, updates, and promotional offers</li>
          <li>Personalizing your experience and content</li>
          <li>Analyzing usage patterns to improve our website and services</li>
          <li>Complying with legal obligations and protecting our rights</li>
          <li>Detecting and preventing fraud, security breaches, and other harmful activities</li>
          <li>Conducting research and analytics to enhance our business operations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
        <p className="mb-4">We process your personal information based on the following legal grounds:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Consent:</strong> When you have given clear consent for specific processing activities</li>
          <li><strong>Contract Performance:</strong> When processing is necessary for performing our services</li>
          <li><strong>Legitimate Interests:</strong> When we have legitimate business interests that don't override your rights</li>
          <li><strong>Legal Compliance:</strong> When required by law or regulation</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
        <p className="mb-4">We may share your information in the following circumstances:</p>
        
        <h3 className="text-xl font-medium mb-2">5.1 Service Providers</h3>
        <p className="mb-4">
          We may share information with trusted third-party service providers who assist us in operating our business, including payment processors, email service providers, analytics platforms, and customer support tools.
        </p>

        <h3 className="text-xl font-medium mb-2">5.2 Business Transfers</h3>
        <p className="mb-4">
          In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the acquiring entity.
        </p>

        <h3 className="text-xl font-medium mb-2">5.3 Legal Requirements</h3>
        <p className="mb-4">
          We may disclose your information when required by law, court order, or government request, or to protect our rights, property, or safety.
        </p>

        <h3 className="text-xl font-medium mb-2">5.4 Consent</h3>
        <p>
          We may share your information with your explicit consent for specific purposes not covered above.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can manage cookie preferences through your browser settings, though this may affect website functionality.
        </p>
        
        <h3 className="text-xl font-medium mb-2">Types of Cookies We Use:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication procedures</li>
          <li>Employee training on data protection practices</li>
          <li>Incident response and breach notification procedures</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors affecting retention periods include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The nature and sensitivity of the information</li>
          <li>Legal and regulatory requirements</li>
          <li>Business and operational needs</li>
          <li>Your relationship with us and account status</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Your Rights and Choices</h2>
        <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Access:</strong> Request access to your personal information</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
          <li><strong>Erasure:</strong> Request deletion of your personal information</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service</li>
          <li><strong>Restriction:</strong> Request limitation of processing activities</li>
          <li><strong>Objection:</strong> Object to certain types of processing</li>
          <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:privacy@perssonify.com" className="underline text-primary">privacy@perssonify.com</a>. We will respond to your request within the timeframe required by applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
        <p className="mb-4">
          Your information may be processed and stored in countries other than your own, including the United States. When we transfer personal information internationally, we ensure appropriate safeguards are in place, such as:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>European Commission adequacy decisions</li>
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Binding Corporate Rules (BCRs)</li>
          <li>Other approved transfer mechanisms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Third-Party Links and Services</h2>
        <p>
          Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Posting the updated policy on our website</li>
          <li>Sending email notifications to registered users</li>
          <li>Displaying prominent notices on our website</li>
        </ul>
        <p>
          Your continued use of our services after the effective date of any changes constitutes acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-muted/20 p-4 rounded-lg">
          <p><strong>Email:</strong> <a href="mailto:privacy@perssonify.com" className="underline text-primary">privacy@perssonify.com</a></p>
          <p><strong>Address:</strong> Perssonify Privacy Team, [Your Business Address]</p>
          <p><strong>Phone:</strong> [Your Contact Number]</p>
        </div>
        <p className="mt-4">
          For EU residents, you also have the right to lodge a complaint with your local data protection authority if you believe your privacy rights have been violated.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">15. Effective Date</h2>
        <p>
          This Privacy Policy is effective as of December 24, 2024, and supersedes all previous versions.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
