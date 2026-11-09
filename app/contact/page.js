'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, MapPin, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 700);
  };

  const faqs = [
    {
      q: 'Does raw honey expire or spoil?',
      a: 'Authentic raw honey never spoils! Thanks to natural low moisture and bee-secreted enzymes (glucose oxidase), properly sealed raw honey remains preserved indefinitely. If it crystallizes over time, gently place the jar in warm water (under 100°F) to restore its liquid pour.',
    },
    {
      q: 'Where can I meet Jay Jermo in person?',
      a: 'Jay sets up his market table throughout the season (May through December) at regional Michigan farmers markets, including Ann Arbor Kerrytown, Detroit Eastern Market, and Flint City Market.',
    },
    {
      q: 'Are your flavored honeys made with artificial syrups?',
      a: 'Never. Jay Jermo uses pure Michigan raw clover honey as the sole base, carefully steeped with whole spices, pure natural fruit extracts, and cold-pressed botanical essences.',
    },
    {
      q: 'Do you offer bulk orders for weddings or specialty gifts?',
      a: 'Yes! Our custom 8 oz bear jars and hexagonal glass jars make cherished wedding favors and corporate culinary gifts. Contact Jay directly via phone or the message form for custom quantities.',
    },
  ];

  return (
    <div className="bg-cream-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <nav className="text-xs text-charcoal-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-honey-900 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-honey-900 font-semibold">Contact</span>
          </nav>
          <span className="inline-block px-3.5 py-1 rounded-full bg-honey-100 border border-honey-300 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-3">
            Direct Beekeeper Access
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-honey-900 tracking-tight">
            Connect With Jay Jermo
          </h1>
          <p className="mt-3 text-base text-charcoal-600">
            Have a question about a harvest, wedding favors, or where to find our table this weekend?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Authentic Business Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-honey-200/90 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-honey-900">
                Direct Contact Information
              </h2>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Hey Honey operates as an independent Michigan family brand. When you call or write,
                you are speaking directly with the beekeeper.
              </p>

              <div className="space-y-4 pt-2 text-sm text-charcoal-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-100 border border-honey-200 flex items-center justify-center text-honey-800 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-honey-900 text-xs font-bold uppercase tracking-wider">
                      Telephone
                    </strong>
                    <a
                      href="tel:+12699296198"
                      className="text-honey-800 hover:text-honey-600 font-medium transition-colors"
                    >
                      +1 (269) 929-6198
                    </a>
                    <span className="block text-[11px] text-charcoal-500 mt-0.5">
                      Mon – Sat: 8:00 AM – 6:00 PM EST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-100 border border-honey-200 flex items-center justify-center text-honey-800 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-honey-900 text-xs font-bold uppercase tracking-wider">
                      Email Address
                    </strong>
                    <a
                      href="mailto:jjermo@sbcglobal.net"
                      className="text-honey-800 hover:text-honey-600 font-medium transition-colors"
                    >
                      jjermo@sbcglobal.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-100 border border-honey-200 flex items-center justify-center text-honey-800 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-honey-900 text-xs font-bold uppercase tracking-wider">
                      Location &amp; Apiary Base
                    </strong>
                    <span className="text-charcoal-700">
                      Kalamazoo, Michigan, USA
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey-100 border border-honey-200 flex items-center justify-center text-honey-800 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-honey-900 text-xs font-bold uppercase tracking-wider">
                      Official Storefront
                    </strong>
                    <a
                      href="https://heyhoney.biz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-honey-800 hover:text-honey-600 font-medium transition-colors"
                    >
                      https://heyhoney.biz
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-honey-100">
                <span className="text-xs font-semibold text-charcoal-600 uppercase tracking-wider block mb-2.5">
                  Follow Hey Honey on Social
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/HeyHoneyMI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-cream-100 border border-honey-200 text-xs font-medium text-honey-900 hover:bg-honey-200 transition-colors"
                  >
                    Facebook: @HeyHoneyMI
                  </a>
                  <a
                    href="https://www.instagram.com/jayheyhoney/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-cream-100 border border-honey-200 text-xs font-medium text-honey-900 hover:bg-honey-200 transition-colors"
                  >
                    Instagram: @jayheyhoney
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-honey-200/90 shadow-premium">
              <h2 className="font-serif text-2xl font-bold text-honey-900 mb-2">
                Send a Message to the Hive
              </h2>
              <p className="text-xs text-charcoal-600 mb-6">
                Fill out the form below and Jay will get back to you directly.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-cream-50 border border-honey-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-honey-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-charcoal-600 max-w-sm mx-auto">
                    Thank you for reaching out! Jay reviews all inquiries personally and will respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-3 px-6 py-2.5 rounded-full bg-honey-500 text-cream-50 text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jayne Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/50 text-sm text-honey-900 focus:outline-none focus:border-honey-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/50 text-sm text-honey-900 focus:outline-none focus:border-honey-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(269) 555-0199"
                        className="w-full px-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/50 text-sm text-honey-900 focus:outline-none focus:border-honey-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/50 text-sm text-honey-900 focus:outline-none focus:border-honey-500"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Wedding Favors & Gifts">Wedding Favors &amp; Custom Gifts</option>
                        <option value="Wholesale & Restaurant Inquiries">Wholesale &amp; Restaurant Inquiries</option>
                        <option value="Farmers Market Schedule">Farmers Market Schedule Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you are looking for..."
                      className="w-full px-4 py-2.5 rounded-xl border border-honey-200 bg-cream-50/50 text-sm text-honey-900 focus:outline-none focus:border-honey-500 font-sans resize-none"
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-600 font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-12 border-t border-honey-200/80 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-honey-700 bg-honey-100 px-3.5 py-1 rounded-full border border-honey-300">
              Common Questions
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-honey-900 mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-honey-200/80 shadow-xs space-y-2"
              >
                <h3 className="font-serif text-base font-bold text-honey-900">
                  {f.q}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

