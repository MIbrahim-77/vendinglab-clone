import { NextRequest, NextResponse } from 'next/server';

// ─── Types ────────────────────────────────────────────────────────────────────

interface InquiryPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  eventDuration?: string;
  location?: string;
  notes?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(body: Partial<InquiryPayload>): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!body.fullName?.trim()) {
    errors.push({ field: 'fullName', message: 'Full name is required.' });
  }

  if (!body.email?.trim()) {
    errors.push({ field: 'email', message: 'Email address is required.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  return errors;
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  let body: Partial<InquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  // Validate required fields
  const errors = validate(body);
  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, message: errors[0].message, errors },
      { status: 422 }
    );
  }

  // Log inquiry (replace with DB write or email in production)
  console.log('[Inquiry received]', {
    timestamp: new Date().toISOString(),
    fullName: body.fullName,
    companyName: body.companyName ?? '',
    email: body.email,
    phone: body.phone ?? '',
    eventType: body.eventType ?? '',
    eventDate: body.eventDate ?? '',
    eventDuration: body.eventDuration ?? '',
    location: body.location ?? '',
    notes: body.notes ?? '',
  });

  // ── TODO: Send email notification ──────────────────────────────────────────
  //
  // Option A — Resend (recommended):
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'inquiries@vendinglab.tech',
  //     to: 'sales@vendinglab.tech',
  //     subject: `New Rental Inquiry from ${body.fullName}`,
  //     html: `<p>${JSON.stringify(body, null, 2)}</p>`,
  //   });
  //
  // Option B — Nodemailer:
  //   import nodemailer from 'nodemailer';
  //   const transporter = nodemailer.createTransport({ ... });
  //   await transporter.sendMail({ from, to, subject, html });
  //
  // ── TODO: Save to database ─────────────────────────────────────────────────
  //
  //   await db.inquiry.create({ data: body });
  //
  // ──────────────────────────────────────────────────────────────────────────

  return NextResponse.json(
    { success: true, message: 'Inquiry received. We will contact you within 24 hours.' },
    { status: 200 }
  );
}
