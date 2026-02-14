
 export default function Footer() {
  return (
    <footer className="bg-black text-white section-padding py-12">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="footer-title">BuildCo</h4>
          <p className="text-sm text-gray-400">Building excellence.</p>
        </div>
        <div>
          <h5 className="footer-title">Company</h5>
          <p className="footer-link">About</p>
        </div>
        <div>
          <h5 className="footer-title">Help</h5>
          <p className="footer-link">Support</p>
        </div>
        <div>
          <h5 className="footer-title">Contact</h5>
          <p className="footer-link">Email Us</p>
        </div>
      </div>
    </footer>
  );
}
