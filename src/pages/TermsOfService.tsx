import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-6 text-muted-foreground">Last updated: July 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Perssonify website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Use of Services</h2>
        <ul className="list-disc pl-6">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree to use our services only for lawful purposes and in accordance with these Terms.</li>
          <li>You are responsible for maintaining the confidentiality of your account information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of Perssonify or its licensors and are protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. User Content</h2>
        <ul className="list-disc pl-6">
          <li>You retain ownership of any content you submit, post, or display on or through our services.</li>
          <li>By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.</li>
          <li>You are solely responsible for your content and the consequences of posting or publishing it.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Prohibited Activities</h2>
        <ul className="list-disc pl-6">
          <li>Violating any applicable laws or regulations.</li>
          <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others.</li>
          <li>Uploading or transmitting viruses or any other type of malicious code.</li>
          <li>Harassing, abusing, or harming another person or group.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Disclaimers</h2>
        <p>
          Our services are provided on an "as is" and "as available" basis. We do not warrant that the services will be uninterrupted, error-free, or secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Perssonify and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Perssonify, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the services constitutes acceptance of those changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:hello@perssonify.com" className="underline text-primary">hello@perssonify.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService; 