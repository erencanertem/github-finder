function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-500 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
