const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

/**
 * Sends a "lost item found" email notification to the item's owner.
 * 
 * @param {Object} itemDetails - The item and owner details
 * @param {string} itemDetails.ownerName - Name of the item owner
 * @param {string} itemDetails.ownerEmail - Email address of the owner
 * @param {string} itemDetails.itemName - Name of the item
 * @param {string} itemDetails.itemSerial - Serial number of the item
 * @param {string} itemDetails.location - Where it was found
 * @param {Date} itemDetails.date - Date the item was found
 * @param {string} [itemDetails.descrption] - Optional description
 * @param {string} [itemDetails.itemImage] - Optional image URL
 */
const sendItemFoundNotification = async (itemDetails) => {
    const {
        ownerName,
        ownerEmail,
        itemName,
        itemSerial,
        location,
        date,
        descrption,
        itemImage
    } = itemDetails;

    const formattedDate = new Date(date).toLocaleDateString();

const htmlContent = `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #2c3e50; text-align: center;">🎉 Good News, ${ownerName}!</h2>
    <p style="font-size: 16px; color: #333333; text-align: center;">We’ve located your lost item. You can now arrange for pickup.</p>

    <div style="background-color: #f1f1f1; padding: 20px; border-radius: 8px; margin-top: 25px;">
      <h3 style="color: #2c3e50; border-bottom: 1px solid #dcdcdc; padding-bottom: 10px;">📝 Item Details</h3>
      <p><strong>📦 Item Name:</strong> ${itemName}</p>
      <p><strong>🔢 Serial Number:</strong> ${itemSerial}</p>
      <p><strong>📍 Location Found:</strong> ${location}</p>
      <p><strong>📅 Date Found:</strong> ${formattedDate}</p>
      ${descrption ? `<p><strong>🗒️ Description:</strong> ${descrption}</p>` : ''}
      ${itemImage ? `<img src="${itemImage}" alt="Item Image" style="width:100%; border-radius: 8px; margin-top: 15px;" />` : ''}
    </div>

    <div style="text-align: center; margin-top: 30px;">
      <p style="font-size: 16px;">To confirm and schedule your pickup, please visit your dashboard:</p>
      <a href="${process.env.FRONTEND_URL}/userdash" style="display: inline-block; background-color: #3498db; color: #ffffff; padding: 12px 25px; border-radius: 5px; font-size: 16px; text-decoration: none; margin-top: 10px;">
        Go to Dashboard
      </a>
    </div>

    <p style="font-size: 14px; color: #777777; text-align: center; margin-top: 40px;">Best regards,<br><strong>Lost and Found Team</strong></p>
  </div>
`;


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ownerEmail,
        subject: 'Your Lost Item Has Been Found! 🎉',
        html: htmlContent
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Notification sent to ${ownerEmail}`);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendItemFoundNotification
};
