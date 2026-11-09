'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-cream-100 to-cream-200/60 relative overflow-hidden border-b border-honey-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-200/80 text-honey-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-honey-600" />
            <span>The Beekeeper&apos;s Dispatch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-honey-900 tracking-tight">
            Stay Connected to the Hive.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-charcoal-700 max-w-xl mx-auto font-sans">
            Discover new flavors, seasonal small-batch harvests, and market schedule updates directly from Jay Jermo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 rounded-2xl bg-white border border-honey-300 shadow-premium text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-honey-900">
                  Welcome to the Hive!
                </h3>
                <p className="text-xs text-charcoal-600">
                  Thank you for subscribing. You&apos;ll be the first to know when limited seasonal harvests drop.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-semibold text-honey-700 hover:text-honey-900 underline"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-2.5 bg-white p-2 rounded-2xl sm:rounded-full border border-honey-300 shadow-sm focus-within:border-honey-500 focus-within:ring-2 focus-within:ring-honey-300/40 transition-all">
                  <div className="flex items-center pl-3 flex-1">
                    <Mail className="w-5 h-5 text-honey-600 flex-shrink-0 mr-2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address..."
                      className="w-full bg-transparent text-sm text-honey-900 placeholder:text-charcoal-400 focus:outline-none py-2"
                      disabled={status === 'submitting'}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-honey-500 hover:bg-honey-600 text-cream-50 font-medium text-xs uppercase tracking-wider transition-all shadow-xs disabled:opacity-60"
                  >
                    <span>{status === 'submitting' ? 'Subscribing...' : 'Join Hive'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-600 mt-2 font-medium text-left pl-4">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-[11px] text-charcoal-500 mt-4">
          No spam, ever. We only share genuine harvest releases and farmers market schedules.
        </p>
      </div>
    </section>
  );
}
