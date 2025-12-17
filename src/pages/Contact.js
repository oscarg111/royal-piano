import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovggzod");

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

        {/* ✅ Success State */}
        {state.succeeded ? (
          <div className="alert alert-success">
            <h5>Thank you!</h5>
            <p>Your message has been sent successfully.</p>
          </div>
        ) : (
          /* ✅ Form */
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={state.submitting}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
