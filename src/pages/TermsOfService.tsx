
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using Perssonify's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website, services, and any related content or materials provided by Perssonify.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perssonify provides digital marketing, strategic consulting, and business optimization services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Performance marketing and paid media management</li>
                <li>Social media marketing and brand engagement</li>
                <li>Email marketing and marketing automation</li>
                <li>Creative solutions and content development</li>
                <li>Conversion rate optimization</li>
                <li>Search engine optimization and website growth</li>
                <li>Strategic consulting and business process automation</li>
                <li>Analytics and tracking implementation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Services are provided on a project basis, retainer basis, or through specific engagement agreements as outlined in individual service contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Service Agreements and Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specific terms for each engagement will be outlined in individual service agreements or statements of work. Payment terms, deliverables, timelines, and scope will be clearly defined for each project.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise specified:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional fees</li>
                <li>Services may be suspended for non-payment</li>
                <li>Refunds are handled on a case-by-case basis as outlined in individual agreements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Providing accurate and complete information necessary for service delivery</li>
                <li>Timely response to requests for feedback, approvals, and materials</li>
                <li>Ensuring they have appropriate rights and permissions for all materials provided</li>
                <li>Compliance with applicable laws and regulations in their industry</li>
                <li>Maintaining confidentiality of sensitive business information shared during engagements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless otherwise specified in individual agreements:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Clients retain ownership of their pre-existing intellectual property</li>
                <li>Work products created specifically for clients become client property upon full payment</li>
                <li>Perssonify retains rights to general methodologies, processes, and know-how</li>
                <li>Third-party tools and platforms remain property of their respective owners</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perssonify maintains strict confidentiality regarding client information and business operations. We will not disclose confidential information to third parties without explicit written consent, except as required by law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Clients similarly agree to maintain confidentiality regarding Perssonify's proprietary methods, processes, and business information shared during engagements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Perssonify's liability for any claims arising from our services is limited to the total amount paid by the client for the specific services giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for excellence in all deliverables, marketing and business results cannot be guaranteed due to factors beyond our control including market conditions, competition, and client implementation of recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate services with appropriate notice as specified in individual service agreements. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>All outstanding payments become immediately due</li>
                <li>Each party will return or destroy confidential information</li>
                <li>Completed work products will be delivered to the client</li>
                <li>Access to tools and platforms will be transferred or terminated as appropriate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these terms or our services will first be addressed through good faith negotiation. If resolution cannot be achieved, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of the United States and the state in which Perssonify is incorporated, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-foreground font-medium">Perssonify</p>
                <p className="text-muted-foreground">Email: stefan@perssonify.com</p>
                <p className="text-muted-foreground">Phone: +1 (609) 510-2061</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
