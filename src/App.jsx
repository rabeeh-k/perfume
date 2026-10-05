import { useRef, useState } from 'react';
import productImage from '../bfume-product.png';
import bottleImage from '../bfume-bottle.png';

const initialReviews = [
  { name: 'Elise M.', city: 'Chennai', rating: 5, text: 'It wears like a second skin: subtle at first, then somehow completely unforgettable.' },
  { name: 'Matthew W.', city: 'Bengaluru', rating: 5, text: 'This perfume smells amazing and lasts all day. I have received so many compliments whenever I wear it.' },
  { name: 'Rhea S.', city: 'Mumbai', rating: 5, text: 'Clean, considered and beautifully made. It has become the finishing touch to every morning.' },
];

function ReviewCard({ review, featured = false }) {
  return <article className={`review-card${featured ? ' featured' : ''}`}><div className="stars">{'★'.repeat(review.rating)}</div><p>“{review.text}”</p><div className="reviewer"><div className="reviewer-initials">{review.name.charAt(0)}</div><span>{review.name}<small>{review.city}</small></span></div></article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviews, setReviews] = useState(initialReviews);
  const dialogRef = useRef(null);
  const submitReview = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setReviews((current) => [...current, { name: form.get('name').trim(), city: form.get('city').trim(), rating: Number(form.get('rating')), text: form.get('review').trim() }]);
    event.currentTarget.reset();
    dialogRef.current.close();
  };

  return <main>
    <section className="hero" id="home"><nav className="nav wrap" aria-label="Primary navigation"><a className="brand-logo" href="#home" aria-label="B.fume home"><strong>B.fume</strong></a><button className="menu-toggle" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button><div className={`nav-links${menuOpen ? ' open' : ''}`}><a href="#home">Home</a><a href="#about">About</a><a href="#collection">Feature</a><a href="#testimonials">Testimonial</a><a href="#contact">Contact</a></div></nav><div className="hero-content wrap"><p className="eyebrow">Car perfume / Imperial</p><h1>B.fume<br />Car Perfume.</h1><p className="hero-copy">Long-lasting hanging car perfume, made to turn every drive into a signature experience.</p><a className="button" href="#collection">Shop now <span aria-hidden="true">→</span></a></div><div className="hero-product"><img className="hero-product-image" src={productImage} alt="B.fume Intense Oud car perfume hanging pod with packaging and cord" /></div><div className="scroll-note">Scroll to explore <span /></div></section>

    <section className="about wrap" id="about"><div className="about-copy"><p className="eyebrow dark">Our philosophy</p><h2>Luxury for<br />every journey.</h2><p>B.fume is more than a car fragrance. It is a small ritual for the road. Every hanging pod is designed with a long-lasting, alcohol-free formula and a clean, elegant presence.</p><a className="text-link" href="#collection">Discover our process <span aria-hidden="true">→</span></a></div><figure className="about-image brand-product-panel"><div className="product-box" aria-label="B.fume Imperial car perfume packaging"><strong>B.fume</strong><p className="scent-note"><span>INTENSE OUD</span>A rich blend of warm woods, soft amber and deep oud, crafted to make every drive feel refined and unforgettable.</p><b>IMPERIAL</b><small>CAR PERFUME<br />HANGING POD</small></div><div className="about-photo" aria-hidden="true"><img src={bottleImage} alt="" /></div><figcaption>Imperial / Alcohol-free hanging pod</figcaption></figure></section>

    <section className="collection" id="collection"><div className="wrap collection-heading"><div><p className="eyebrow dark">The signature edit</p><h2>Find your road scent.</h2></div></div><div className="products wrap"><article className="product-card product-one"><img className="feature-bottle" src={bottleImage} alt="" aria-hidden="true" /><span>01</span><h3>Imperial</h3><p>10 ml / hanging pod</p></article><article className="product-card product-two"><img className="feature-bottle" src={bottleImage} alt="B.fume hanging perfume bottle" /><span>02</span><h3>Long-lasting</h3><p>Up to 30 days of fragrance</p></article><article className="product-card product-three"><img className="feature-bottle" src={bottleImage} alt="" aria-hidden="true" /><span>03</span><h3>Alcohol-free</h3><p>Designed for every drive</p></article></div></section>

    <section className="testimonials" id="testimonials"><div className="wrap testimonial-intro"><p className="eyebrow">Driven, remembered, repeated</p><h2>Notes from the people<br />who drive with B.fume.</h2><button className="review-button" type="button" onClick={() => dialogRef.current.showModal()}>Write a review <span aria-hidden="true">→</span></button></div><div className="review-track" aria-label="Customer testimonials">{reviews.map((review, index) => <ReviewCard key={`${review.name}-${index}`} review={review} featured={index === 1} />)}</div></section>

    <footer id="contact" className="footer wrap"><div><a className="brand-logo footer-logo" href="#home" aria-label="B.fume home"><strong>B.fume</strong></a><p>Car fragrance for a lasting presence.</p></div><div className="footer-contact-links"><a className="footer-mail" href="tel:987654321">987654321 <span aria-hidden="true">↗</span></a><a className="footer-mail" href="mailto:rabeeh0987@gmail.com">rabeeh0987@gmail.com <span aria-hidden="true">↗</span></a></div></footer>

    <dialog className="review-dialog" ref={dialogRef} aria-labelledby="review-dialog-title" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close(); }}><form className="review-form" onSubmit={submitReview}><div className="review-form-heading"><div><p className="eyebrow dark">Share your drive</p><h2 id="review-dialog-title">Write a review</h2></div><button className="dialog-close" type="button" aria-label="Close review form" onClick={() => dialogRef.current.close()}>×</button></div><label>Your name<input name="name" type="text" required maxLength="40" placeholder="Your name" /></label><label>City<input name="city" type="text" required maxLength="40" placeholder="Your city" /></label><label>Rating<select name="rating" defaultValue="5"><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option><option value="2">2 stars</option><option value="1">1 star</option></select></label><label>Your review<textarea name="review" required maxLength="280" placeholder="Tell us about your B.fume experience" /></label><button className="review-submit" type="submit">Publish review <span aria-hidden="true">→</span></button></form></dialog>
  </main>;
}
