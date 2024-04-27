const Header = () => {
    const whatsappLink = "https://wa.me/123456789"; // Replace with your WhatsApp link
    const mapsLink = "https://maps.google.com/?q=YourBusinessLocation"; // Replace with your Maps link
  
    return (
      <div className="bg-white p-4 flex justify-between items-left">
        <div className="flex-1"></div> {/* This div is used to push the logo and contact to the right */}
        <div className="flex items-center space-x-4">
          {/* Increase the size of the logo as needed */}
          <img 
            src="/images/logo.png" // Replace with the path to your logo image
            alt="Logo" 
            className="h-20" // Adjust the height to change the size of the logo
          />
          <div className="text-green-600 font-semibold text-lg">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
              endereço
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
              contatos
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  