import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="container py-12 max-w-3xl">
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">Welcome to Perssonify! These Terms of Service govern your use of our website and services. By using our site, you agree to these terms.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Use of Our Service</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must use our services in compliance with all applicable laws.</li>
      <li>You may not use our services for any unlawful or prohibited purpose.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-8 mb-2">Intellectual Property</h2>
    <p className="mb-4">All content on this site is the property of Perssonify or its licensors. You may not copy, reproduce, or distribute any content without permission.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
    <p className="mb-4">We are not liable for any damages resulting from your use of our website or services.</p>
    <h2 className="text-xl font-semibold mt-8 mb-2">Changes to These Terms</h2>
    <p className="mb-4">We may update these Terms of Service from time to time. Please review them periodically.</p>
    <p className="text-muted-foreground text-sm mt-8">If you have any questions about these terms, please contact us.</p>
  </div>
);

export default TermsOfService; 