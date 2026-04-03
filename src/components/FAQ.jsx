export default function FAQ() {
  return (
    <section className="faq section-padding dark-bg" id="faq">
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <div className="section-tag mx-auto"><code>&lt;faq /&gt;</code></div>
          <h2 className="section-title">Common <span className="text-gradient">Questions</span></h2>
        </div>
        <div className="faq-container fade-in-up">
          <div className="faq-item">
            <button className="faq-question">How long does it take? <i className="fa-solid fa-chevron-down"></i></button>
            <div className="faq-answer">
              <p>Delivery time depends on the package you choose. Starter takes 2-3 days, Business takes 4-6 days, and Premium takes around 7-10 days.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">Do you provide hosting? <i className="fa-solid fa-chevron-down"></i></button>
            <div className="faq-answer">
              <p>Yes, we can assist with hosting setup on platforms like Vercel, Netlify, or traditional Linux hosts depending on your needs. Basic deployment is often included.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">Can I update the website later? <i className="fa-solid fa-chevron-down"></i></button>
            <div className="faq-answer">
              <p>Absolutely. If needed, we can build the site with a CMS so you can easily edit text and images without touching any code.</p>
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">Do you provide support after launch? <i className="fa-solid fa-chevron-down"></i></button>
            <div className="faq-answer">
              <p>Yes! Our Premium plan includes priority support, but we are always available to help all our clients with any bugs or updates needed after the website is live.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
