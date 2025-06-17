import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-muted-foreground">Last updated: July 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Perssonify ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other information you provide when contacting us or subscribing to our newsletter.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and other analytical data.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To improve, personalize, and expand our website and services.</li>
          <li>To communicate with you, including customer service, updates, and marketing.</li>
          <li>To process your transactions and manage your requests.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
        <ul className="list-disc pl-6">
          <li>We do not sell your personal information.</li>
          <li>We may share information with trusted third parties who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</li>
          <li>We may disclose information if required by law or to protect our rights and safety.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>You have the right to access, update, or delete your personal information.</li>
          <li>You may opt out of receiving marketing emails from us at any time.</li>
          <li>To exercise these rights, please contact us at <a href="mailto:hello@perssonify.com" className="underline text-primary">hello@perssonify.com</a>.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@perssonify.com" className="underline text-primary">hello@perssonify.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 