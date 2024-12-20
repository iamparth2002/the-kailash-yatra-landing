import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse incoming JSON data
    const { name, email, mobile, travelDate, adults, requirement } = await request.json();

    // Basic validation for required fields
    if (!name || !mobile || !requirement) {
      return NextResponse.json(
        { success: false, error: 'Name, mobile, and requirement are required.' },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Gmail user (environment variable)
        pass: process.env.EMAIL_PASS, // Gmail password or app password (environment variable)
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: 'shrineyatra@gmail.com,thekailashyatra@gmail.com', // Replace with your desired recipient
      subject: 'New Travel Query Received',
      html: `
        <h2>New Travel Query Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Travel Date:</strong> ${travelDate || 'N/A'}</p>
        <p><strong>Number of Adults:</strong> ${adults || 'N/A'}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log the data (optional, for debugging or additional processing)
    console.log('Travel query received:', { name, email, mobile, travelDate, adults, requirement });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Query sent successfully!',
    });
  } catch (error) {
    console.error('Error in travel query API:', error);

    // Return a detailed error message in development (optional)
    const errorMessage =
      process.env.NODE_ENV === 'development'
        ? error.message
        : 'Something went wrong. Please try again later.';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
