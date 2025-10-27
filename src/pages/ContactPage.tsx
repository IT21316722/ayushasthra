import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Mail className="text-emerald-700" size={20} />
            <span className="text-emerald-700 font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our research project? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-emerald-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Email Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <a href="mailto:it21584718@my.sliit.lk" className="block hover:text-emerald-600 transition-colors">
                it21584718@my.sliit.lk
              </a>
              <a href="mailto:it21813184@my.sliit.lk" className="block hover:text-emerald-600 transition-colors">
                it21813184@my.sliit.lk
              </a>
              <a href="mailto:it21802812@my.sliit.lk" className="block hover:text-emerald-600 transition-colors">
                it21802812@my.sliit.lk
              </a>
              <a href="mailto:it21190520@my.sliit.lk" className="block hover:text-emerald-600 transition-colors">
                it21190520@my.sliit.lk
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-blue-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Visit Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Faculty of Computing<br />
              Sri Lanka Institute of Information Technology<br />
              New Kandy Road, Malabe<br />
              Sri Lanka
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-teal-700" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Research Supervisor</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Ms. Sanjeevi Chandrasiri</strong><br />
              Faculty of Computing, SLIIT<br />
              For academic inquiries about<br />
              the research project
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

          {isSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-green-800 font-medium">Message sent successfully!</p>
                <p className="text-green-700 text-sm mt-1">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300' : 'border-gray-300'
                    } focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'
                    } focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-300' : 'border-gray-300'
                  } focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors`}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="research">Research Collaboration</option>
                <option value="technical">Technical Questions</option>
                <option value="documentation">Documentation Request</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300' : 'border-gray-300'
                  } focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none`}
                placeholder="Please provide details about your inquiry..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Response Time</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We typically respond to inquiries within 24-48 hours during weekdays. For urgent matters related to the
            research project, please contact the team members directly via email. Academic inquiries should be
            directed to our research supervisor, Dr. Jayantha Amararachchi, through the faculty office.
          </p>
        </div>
      </div>
    </div>
  );
}
