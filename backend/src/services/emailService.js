const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendItemFoundNotification = async (userEmail, itemDetails) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Your Lost Item Has Been Found! 🎉',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2c3e50;">Good News! Your Item Has Been Found</h2>
                    <p>Hello,</p>
                    <p>We're happy to inform you that your lost item has been found and is now available for pickup.</p>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #2c3e50;">Item Details:</h3>
                        <p><strong>Item Name:</strong> ${itemDetails.name}</p>
                        <p><strong>Category:</strong> ${itemDetails.category}</p>
                        <p><strong>Location Found:</strong> ${itemDetails.location}</p>
                        <p><strong>Date Found:</strong> ${new Date(itemDetails.foundDate).toLocaleDateString()}</p>
                    </div>
                    <p>Please visit your dashboard to acknowledge this notification and arrange for pickup.</p>
                    <a href="${process.env.FRONTEND_URL}/dashboard" 
                       style="background-color: #3498db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                        View in Dashboard
                    </a>
                    <p style="margin-top: 20px;">Best regards,<br>Lost and Found Team</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendItemFoundNotification
}; 