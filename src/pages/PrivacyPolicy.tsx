
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Shield, Lock, Check } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600">Last updated: {lastUpdated}</p>
          </div>
          
          {/* Policy highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-terracotta" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
              <p className="text-center text-sm text-gray-600">
                We use industry-standard encryption and security measures to protect your personal information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-terracotta" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-900 mb-2">Health Data Privacy</h3>
              <p className="text-center text-sm text-gray-600">
                Your health information is treated with the utmost confidentiality and is not shared with third parties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-terracotta" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-900 mb-2">Your Control</h3>
              <p className="text-center text-sm text-gray-600">
                You have control over your data, with options to access, correct, or delete your information.
              </p>
            </div>
          </div>
          
          {/* Policy sections */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-10 border border-gray-200 prose max-w-none">
            <h2>Introduction</h2>
            <p>
              At Chiremba Health Diagnostics ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and use our AI-powered health services, regardless of where you visit it from.
            </p>
            <p>
              This privacy policy aims to give you information on how we collect and process your personal data through your use of this website and our services, including any data you may provide when you use our health diagnostic tools, sign up for an account, or participate in our research initiatives.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Health Data</strong> includes symptoms, medical conditions, medications, and other health-related information you provide when using our services.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul>
              <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
              <li>To manage your account and provide you with customer support.</li>
              <li>To deliver AI-powered health diagnostics and personalized health information based on the data you provide.</li>
              <li>To improve our health diagnostic algorithms and services.</li>
              <li>To communicate with you about updates, security alerts, and support messages.</li>
              <li>To detect, prevent and address technical issues.</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            <p>
              We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
            
            <h2>Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@chiremba.health</li>
              <li>By visiting the contact page on our website</li>
            </ul>
          </div>
          
          {/* Call to action */}
          <div className="text-center mb-10">
            <p className="text-gray-600 mb-4">
              If you have any questions about our privacy practices or would like to exercise your data rights, please don't hesitate to contact us.
            </p>
            <a 
              href="mailto:privacy@chiremba.health" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-terracotta to-ochre hover:from-terracotta/90 hover:to-ochre/90 shadow-sm"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
