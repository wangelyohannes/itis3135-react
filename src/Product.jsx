import useTitle from "./useTitle";
import "./styles/product.css";
export default function Product() {
  useTitle("Product");
  return (
    <main class="pl-main">
      <section class="pl-hero">
        <h2 class="pl-hero-title">Your next arc starts here.</h2>
        <p>
          Curated manga picks, collector extras, and a clean guide so you don't
          waste time on mid recommendations.
        </p>

        <form
          id="form"
          action="https://www.freecodecamp.org/email-submit"
          class="pl-form"
        >
          <label class="pl-sr-only" for="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email for the next drop..."
            required
          />
          <input id="submit" type="submit" value="Get Early Access" />
        </form>

        <p class="pl-note">No spam. Only drop alerts + reading lists.</p>
      </section>

      <section id="features" class="pl-section">
        <h2>Features</h2>

        <div class="pl-feature-grid">
          <div class="pl-card">
            <h3>Curated Monthly Picks</h3>
            <p>
              A rotating blend of classics and new heat (Big Three energy +
              modern style like Kagurabachi).
            </p>
          </div>

          <div class="pl-card">
            <h3>Collector Extras</h3>
            <p>Stickers, bookmarks, mini art prints, figures, and merch.</p>
          </div>

          <div class="pl-card">
            <h3>Reading Path Guide</h3>
            <p>
              A simple "where to start" guide so you don't get lost in 1,000
              chapters.
            </p>
          </div>
        </div>
      </section>

      <section id="watch" class="pl-section">
        <h2>Watch</h2>
        <p>
          Official Teaser Trailer | BLEACH: Thousand-Year Blood War Final Part -
          The Calamity.
        </p>

        <div class="pl-video-wrap">
          <iframe
            id="video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQx"
            title="Product Video"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section id="pricing" class="pl-section">
        <h2>Pricing</h2>

        <div class="pl-pricing">
          <div class="pl-price-card">
            <h3>Rookie Reader</h3>
            <p class="pl-price">$5.99 / month</p>
            <ul>
              <li>1 manga volume</li>
              <li>Reading guide</li>
              <li>Basic extras</li>
            </ul>
            <button type="button">Select</button>
          </div>

          <div class="pl-price-card pl-featured">
            <h3>Captain Pack</h3>
            <p class="pl-price">$10.99 / month</p>
            <ul>
              <li>2 manga volumes</li>
              <li>Collector extras</li>
              <li>Priority drop email</li>
            </ul>
            <button type="button">Select</button>
          </div>

          <div class="pl-price-card">
            <h3>Yonko Vault</h3>
            <p class="pl-price">$16.99 / month</p>
            <ul>
              <li>3 manga volumes</li>
              <li>Premium extras</li>
              <li>Bonus "new arc" pick</li>
            </ul>
            <button type="button">Select</button>
          </div>
        </div>
      </section>

      <section class="pl-footer-note">
        <h2 class="pl-sr-only">Footer Note</h2>
        <p>Built for the culture. Powered by reading stamina.</p>
      </section>
    </main>
  );
}
