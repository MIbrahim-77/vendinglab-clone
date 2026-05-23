'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormFields {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventDuration: string;
  location: string;
  notes: string;
}

interface FieldErrors {
  fullName?: string;
  email?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Initial state ────────────────────────────────────────────────────────────

const EMPTY_FORM: FormFields = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  eventDuration: '',
  location: '',
  notes: '',
};

// ─── Shared input classes ─────────────────────────────────────────────────────

const inputCls = (error?: string) =>
  [
    'w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-colors duration-200',
    error ? 'border-red-500/60' : 'border-white/10 hover:border-white/20',
  ].join(' ');

// ─── Component ────────────────────────────────────────────────────────────────

export default function InquiryForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');

  // ── Field change handler ───────────────────────────────────────────────────
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ── Client-side validation ─────────────────────────────────────────────────
  const validate = (): boolean => {
    const next: FieldErrors = {};

    if (!fields.fullName.trim()) {
      next.fullName = 'Full name is required.';
    }
    if (!fields.email.trim()) {
      next.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = 'Please enter a valid email address.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus('success');
        setServerMessage(json.message);
        setFields(EMPTY_FORM);
      } else {
        setStatus('error');
        setServerMessage(json.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please check your connection and try again.');
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="bg-[#111] border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-green-400"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Inquiry Sent!</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{serverMessage}</p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
      <div className="mb-7">
        <h2 className="text-xl font-bold text-white">Send an Inquiry</h2>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details below and we will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">

        {/* Row 1: Full Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="text-xs font-medium text-gray-400">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={fields.fullName}
              onChange={handleChange}
              className={inputCls(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-xs text-red-400">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName" className="text-xs font-medium text-gray-400">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              autoComplete="organization"
              placeholder="Acme Corp"
              value={fields.companyName}
              onChange={handleChange}
              className={inputCls()}
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-medium text-gray-400">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={fields.email}
              onChange={handleChange}
              className={inputCls(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-medium text-gray-400">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+971 50 000 0000"
              value={fields.phone}
              onChange={handleChange}
              className={inputCls()}
            />
          </div>
        </div>

        {/* Row 3: Event Type + Event Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eventType" className="text-xs font-medium text-gray-400">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={fields.eventType}
              onChange={handleChange}
              className={inputCls()}
            >
              <option value="" disabled>Select event type</option>
              <option value="corporate">Corporate Event</option>
              <option value="exhibition">Exhibition</option>
              <option value="wedding">Wedding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="eventDate" className="text-xs font-medium text-gray-400">
              Event Date
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              value={fields.eventDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={[inputCls(), 'text-gray-300 [color-scheme:dark]'].join(' ')}
            />
          </div>
        </div>

        {/* Row 4: Duration + Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eventDuration" className="text-xs font-medium text-gray-400">
              Event Duration
            </label>
            <select
              id="eventDuration"
              name="eventDuration"
              value={fields.eventDuration}
              onChange={handleChange}
              className={inputCls()}
            >
              <option value="" disabled>Select duration</option>
              <option value="1day">1 Day</option>
              <option value="2-3days">2-3 Days</option>
              <option value="1week">1 Week</option>
              <option value="1month+">1 Month+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="location" className="text-xs font-medium text-gray-400">
              Location / Venue
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Dubai World Trade Centre"
              value={fields.location}
              onChange={handleChange}
              className={inputCls()}
            />
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="notes" className="text-xs font-medium text-gray-400">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Tell us more about your event, expected footfall, special requirements..."
            value={fields.notes}
            onChange={handleChange}
            className={[inputCls(), 'resize-none'].join(' ')}
          />
        </div>

        {/* Server error */}
        {status === 'error' && serverMessage && (
          <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-red-300">{serverMessage}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
        >
          {status === 'loading' ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-600">
          By submitting this form you agree to be contacted by VLT Robotics regarding your inquiry.
        </p>
      </form>
    </div>
  );
}
