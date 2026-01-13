# Form Setup Instructions

## How to Receive Contact Form Submissions

The contact form uses **Web3Forms** - a free, privacy-focused form backend service that sends form submissions directly to your email.

### Setup Steps:

1. **Get your Web3Forms Access Key (FREE)**
   - Go to https://web3forms.com/
   - Click "Create Access Key"
   - Enter your email address (the email where you want to receive form submissions)
   - Check your email for verification
   - Copy your Access Key

2. **Add the Access Key to your site**
   - Open `src/data/content.json`
   - Find the line: `"web3formsAccessKey": "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
   
   Example:
   ```json
   "web3formsAccessKey": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
   ```

3. **Deploy your site**
   - Once deployed, test the form by submitting a message
   - You should receive the submission at the email address you registered with Web3Forms

### What happens when someone submits the form?

1. User fills out the contact form
2. Form data is sent to Web3Forms API
3. Web3Forms sends an email to your registered email address with all form details:
   - Full name
   - Company
   - Role
   - Email
   - Segment (Telco/Platform/Enterprise)
   - Expected call volume
   - Additional notes
4. Success message shows to the user
5. Form resets automatically

### Troubleshooting:

- **Not receiving emails?** Check your spam folder
- **Form fails to submit?** Verify your access key is correct in `content.json`
- **Want to change the email?** Get a new access key from web3forms.com

### Alternative Options:

If you prefer a different solution, you can also use:
- **Formspree**: https://formspree.io/ (similar setup)
- **Basin**: https://usebasin.com/ (requires account)
- **Your own backend**: Replace the fetch URL in `ContactSection.tsx` with your API endpoint

### Current Configuration:

- Email sent to: The email you register with Web3Forms
- Subject line: "New Voira Pilot Request"
- From name: "Voira Website"

