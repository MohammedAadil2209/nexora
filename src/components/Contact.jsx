export default function Contact({ handleFormSubmit }) {
  return (
    <section
      className="contact section-padding dark-bg relative-overflow"
      id="contact"
    >
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="container">
        <div className="contact-wrapper glass-panel fade-in-up">
          <div className="contact-info">
            <div className="section-tag">
              <code>&lt;consultation /&gt;</code>
            </div>
            <h2 className="section-title">
              Let’s Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="contact-desc">
              Ready to elevate your digital presence? Send a message to discuss
              your next big project or book a free consultation call.
            </p>
            <div className="contact-methods">
              <a
                href="mailto:nexora.devstudio@gmail.com"
                className="contact-method-card"
              >
                <div className="icon-box email">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <span>nexora.devstudio@gmail.com</span>
                </div>
              </a>
              <div className="contact-method-card phone-card">
                <div className="icon-box whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="phone-details">
                  <h4>+91 94865 02203</h4>
                  <div className="phone-actions">
                    <a
                      href="https://wa.me/919486502203"
                      target="_blank"
                      rel="noopener"
                      className="text-green hover-glow"
                    >
                      WhatsApp
                    </a>
                    <span className="text-muted mx-2">|</span>
                    <a
                      href="tel:+919486502203"
                      className="text-cyan hover-glow"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-method-card phone-card">
                <div className="icon-box whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="phone-details">
                  <h4>+91 99769 39641</h4>
                  <div className="phone-actions">
                    <a
                      href="https://wa.me/919976939641"
                      target="_blank"
                      rel="noopener"
                      className="text-green hover-glow"
                    >
                      WhatsApp
                    </a>
                    <span className="text-muted mx-2">|</span>
                    <a
                      href="tel:+919976939641"
                      className="text-cyan hover-glow"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form
              className="contact-form"
              id="contactForm"
              onSubmit={handleFormSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">
                  Name <code>*</code>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div
                className="form-group"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <label htmlFor="email">
                    Email <code>*</code>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">
                    Phone / WhatsApp <code>*</code>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="+91 00000 00000"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="type">
                  Project Type <code>*</code>
                </label>
                <select
                  id="type"
                  name="type"
                  className="form-control select-dark"
                  required
                >
                  <option value="" disabled selected>
                    Select Project Type
                  </option>
                  <option value="Starter">Starter (₹3,999)</option>
                  <option value="Business">Business (₹9,999)</option>
                  <option value="Premium">Premium (₹19,999)</option>
                  <option value="Other">Custom / Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="project">Message</label>
                <textarea
                  id="project"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Request & Book Call{" "}
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
