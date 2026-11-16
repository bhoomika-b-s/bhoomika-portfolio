
"use client";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    // Replace this with your actual email address
    const myEmail = "your.email@example.com";

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailto = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />

      <textarea
        name="message"
        placeholder="Write your message..."
        rows="6"
        required
      />

      <button type="submit" className="primary-button">
        Send Message ↗
      </button>

      <p className="form-note">
        Your email application will open with the message prepared.
      </p>
    </form>
  );
}
