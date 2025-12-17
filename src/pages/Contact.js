export default function Contact() {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Contact Us</h2>
        <p>
          <strong>Cary Thrift, Jr.</strong>
        </p>
        <p>📞 770-517-9871</p>
        <p>
          📧 <a href="mailto:cary@royalpiano.com">cary@royalpiano.com</a>
        </p>
      </div>

      <div className="col-md-6">
        <h3>Send a Message</h3>
        <form
          action="mailto:cary@royalpiano.com"
          method="POST"
          encType="text/plain"
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
