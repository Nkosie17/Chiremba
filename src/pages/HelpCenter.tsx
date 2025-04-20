
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Plus, Heart, CheckCircle } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // FAQ categories and questions
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Chiremba?",
          answer: "Chiremba is an AI-powered health assistant designed to provide preliminary health information and guidance. It can analyze symptoms, answer health questions, and help identify potential health concerns. However, it should not replace proper medical diagnosis from healthcare professionals."
        },
        {
          question: "How do I use the Symptom Checker?",
          answer: "To use the Symptom Checker, navigate to the Symptom Checker page, describe your symptoms in detail, and submit. The AI will analyze your input and provide information about possible conditions, suggested treatments, urgency level, and when to seek professional medical help."
        },
        {
          question: "Is my health data secure and private?",
          answer: "Yes, we take your privacy seriously. We employ industry-standard security measures to protect your information. Your health data is encrypted and not shared with third parties without your consent. Please see our Privacy Policy for more details."
        }
      ]
    },
    {
      category: "Using the Virtual Assistant",
      questions: [
        {
          question: "How accurate is the Virtual Health Assistant?",
          answer: "Chiremba uses advanced AI technology to provide information based on your symptoms. However, it's important to understand that it cannot replace a medical professional's diagnosis. The information provided is for educational purposes and should be verified by healthcare professionals."
        },
        {
          question: "Can I change the language of the assistant?",
          answer: "Yes, currently Chiremba supports both English and Shona. You can toggle between languages using the switch in the chat interface."
        },
        {
          question: "How do I enable or disable voice features?",
          answer: "You can control voice features through the buttons in the chat interface. The mute button turns all voice responses on or off, and each message has a 'Listen' button to hear that specific response. Voice settings can be accessed through the settings icon."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "The voice feature isn't working. What should I do?",
          answer: "If you're experiencing issues with the voice feature, ensure your device's sound is turned on and that you've allowed browser permissions for audio. If using enhanced voice, check that an ElevenLabs API key has been properly configured. If problems persist, try using a different browser or device."
        },
        {
          question: "Why isn't the assistant understanding my questions?",
          answer: "For best results, try to phrase your questions clearly and provide relevant context. If the assistant continues to misunderstand, try resetting the conversation using the Settings menu. This starts a fresh chat session and may resolve context-related issues."
        },
        {
          question: "Is there a limit to how many questions I can ask?",
          answer: "There is no fixed limit to the number of questions you can ask in a session. However, very long conversations might experience some performance degradation. If this happens, you can reset the conversation through the Settings menu."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqs;
  
  return (
    <div className="min-h-screen flex flex-col pattern-bg">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-terracotta to-ochre text-white mb-4 shadow-lg">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Chiremba Health Assistant and how to use our services effectively.
            </p>
          </div>
          
          {/* Search */}
          <div className="mb-10">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-terracotta focus:border-terracotta"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Quick help buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Plus className="h-5 w-5 text-terracotta" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Getting Started</h3>
                  <p className="text-sm text-gray-600">Learn the basics of using Chiremba</p>
                </div>
              </div>
              <a href="#getting-started" className="text-sm font-medium text-terracotta hover:text-terracotta/80">
                View guides →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-terracotta" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Using Features</h3>
                  <p className="text-sm text-gray-600">How to use the health assistant</p>
                </div>
              </div>
              <a href="#using-features" className="text-sm font-medium text-terracotta hover:text-terracotta/80">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-terracotta" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Health Advice</h3>
                  <p className="text-sm text-gray-600">Understanding AI health guidance</p>
                </div>
              </div>
              <a href="#health-advice" className="text-sm font-medium text-terracotta hover:text-terracotta/80">
                Read guidelines →
              </a>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-6">
                {filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border border-gray-200 rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 py-3 bg-gray-50 text-gray-700">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-terracotta hover:text-terracotta/80"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
          
          {/* Additional help */}
          <div className="bg-gradient-to-r from-terracotta/10 to-ochre/10 rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Need more help?</h2>
            <p className="text-gray-700 mb-6">
              If you couldn't find the answer to your question, please contact our support team.
            </p>
            <a 
              href="mailto:support@chiremba.health" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-terracotta to-ochre hover:from-terracotta/90 hover:to-ochre/90 shadow-sm"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
