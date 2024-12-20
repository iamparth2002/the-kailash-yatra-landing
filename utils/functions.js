import { contactData } from "./data";

export const handleSupportClick = () => {
    window.open(`tel:+${contactData.phone}`, "_self"); // Directly dials the support number
  };
  
  export const handleEmailClick = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactData?.email}`, "_blank");
  };
  
  export const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactData.phone}`, "_blank"); // Opens WhatsApp chat in a new tab
  };

export const formatPhoneNumber=(number)=> {
    // Convert the number to a string in case it's not already
    const str = number.toString();
  
    // Check if the number starts with country code '91'
    if (!str.startsWith('91') || str.length !== 12) {
      return 'Invalid number';
    }
  
    // Extract the country code, first 3 digits, next 3 digits, and the last 4 digits
    const countryCode = `+${str.slice(0, 2)}`;
    const firstPart = str.slice(2, 5);
    const secondPart = str.slice(5, 8);
    const thirdPart = str.slice(8);
  
    // Return the formatted phone number
    return `${countryCode} ${firstPart}-${secondPart}-${thirdPart}`;
  }