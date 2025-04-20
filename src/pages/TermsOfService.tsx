
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, Info } from 'lucide-react';

const TermsOfService = () => {
  // Get the current date for the "Last updated" field
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="min-h-screen flex flex-col pattern-bg">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-terracotta to-ochre text-white mb-4 shadow-lg">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-600">Last updated: {lastUpdated}</p>
          </div>
          
          {/* Important notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Important Health Disclaimer</h3>
                <div className="mt-2 text-sm text-amber-700">
                  <p>
                    Chiremba is an AI health assistant designed to provide information and preliminary guidance. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terms sections */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-10 border border-gray-200 prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Chiremba Health Diagnostics services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this agreement, then you may not access the service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              Chiremba Health Diagnostics provides an AI-powered health diagnostic system designed to improve healthcare accessibility in Zimbabwe and underserved areas. Our services include but are not limited to symptom checking, virtual consultations, and image-based diagnoses.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              Some features of our service require you to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>
            
            <h2>4. Health Information Disclaimer</h2>
            <p>
              The content provided through our services is for informational purposes only. The information should not be used for self-diagnosis or as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p>
              <strong>In case of emergency:</strong> If you think you may have a medical emergency, call your doctor or local emergency services immediately.
            </p>
            
            <h2>5. Privacy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            
            <h2>6. Content and Intellectual Property Rights</h2>
            <p>
              Our service and its original content, features, and functionality are and will remain the exclusive property of Chiremba Health Diagnostics and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
            
            <h2>7. User Conduct</h2>
            <p>
              You agree not to use our service:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Chiremba Health Diagnostics, a Chiremba employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
            </ul>
            
            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall Chiremba Health Diagnostics, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the service;</li>
              <li>Any conduct or content of any third party on the service;</li>
              <li>Any content obtained from the service; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ul>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: legal@chiremba.health</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
          
          {/* Important information */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Usage Recommendation</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    For the best experience and most accurate information, we recommend:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Being as specific as possible when describing symptoms</li>
                    <li>Providing relevant medical history when prompted</li>
                    <li>Following up with healthcare professionals for definitive diagnosis</li>
                    <li>Using the service as a supplementary tool, not a replacement for professional care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
