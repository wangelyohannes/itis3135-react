import useTitle from "./useTitle";
import "./styles/documentation.css";
import { Link } from "react-router";
export default function Documentation() {
  useTitle("Documentation");
  return (
    <main id="main-doc">
      <nav id="navbar">
        <header>Evolution of Modern Anime</header>
        <Link to={{ hash: "#The_1980s_Foundation" }} class="nav-link">
          The 1980s Foundation
        </Link>
        <Link to={{ hash: "#The_1990s_Dark_Complexity" }} class="nav-link">
          The 1990s Dark Complexity
        </Link>
        <Link to={{ hash: "#The_2000s_Big_Three_Era" }} class="nav-link">
          The 2000s Big Three Era
        </Link>
        <Link to={{ hash: "#The_2010s_Experimental_Wave" }} class="nav-link">
          The 2010s Experimental Wave
        </Link>
        <Link to={{ hash: "#The_2020s_New_Generation" }} class="nav-link">
          The 2020s New Generation
        </Link>
      </nav>

      <div id="doc-content">
        <section class="main-section" id="The_1980s_Foundation">
          <h2>The 1980s Foundation</h2>
          <p>
            The 1980s built the structural framework for modern anime
            storytelling. This era emphasized martial arts sagas, transformation
            sequences, and clearly defined hero archetypes.
          </p>
          <p>
            Storytelling revolved around discipline, perseverance, and
            escalating rivalries that shaped character identity.
          </p>
          <p>
            Hand-drawn animation dominated, giving scenes dramatic still frames
            and expressive combat choreography.
          </p>
          <ul>
            <li>Dragon Ball</li>
            <li>Saint Seiya</li>
            <li>Mobile Suit Gundam expansions</li>
          </ul>
          <p>Core formula of the era:</p>
          <code>Growth = Training × Determination</code>
        </section>

        <section class="main-section" id="The_1990s_Dark_Complexity">
          <h2>The 1990s Dark Complexity</h2>
          <p>The 1990s introduced psychological depth and moral ambiguity.</p>
          <p>
            Protagonists began facing internal conflicts just as intense as
            their physical battles.
          </p>
          <p>
            Emotional trauma and existential questions became central themes.
          </p>
          <ul>
            <li>Neon Genesis Evangelion</li>
            <li>Yu Yu Hakusho</li>
            <li>Rurouni Kenshin</li>
          </ul>
          <p>Era structure:</p>
          <code>Conflict = Internal Struggle + External Chaos</code>
        </section>

        <section class="main-section" id="The_2000s_Big_Three_Era">
          <h2>The 2000s Big Three Era</h2>
          <p>The early 2000s were defined by long-running global franchises.</p>
          <p>
            World-building expanded dramatically, and weekly releases built
            loyal global fanbases.
          </p>
          <p>
            This period solidified anime as an international cultural force.
          </p>
          <ul>
            <li>One Piece</li>
            <li>Naruto</li>
            <li>Bleach</li>
          </ul>
          <p>Typical battle arc model:</p>
          <code>Rivalry → Training → Revelation → Final Clash</code>
        </section>

        <section class="main-section" id="The_2010s_Experimental_Wave">
          <h2>The 2010s Experimental Wave</h2>
          <p>
            The 2010s delivered bold animation studios and darker storytelling.
          </p>
          <p>
            Digital production increased fluidity, dynamic camera work, and
            cinematic framing.
          </p>
          <p>Anti-heroes and morally complex villains became the norm.</p>
          <ul>
            <li>Attack on Titan</li>
            <li>Tokyo Ghoul</li>
            <li>Code Geass resurgence popularity</li>
          </ul>
          <p>Modern narrative shift:</p>
          <code>Hero ≠ Perfect | Villain ≠ Pure Evil</code>
        </section>

        <section class="main-section" id="The_2020s_New_Generation">
          <h2>The 2020s New Generation</h2>
          <p>
            The 2020s embrace shorter seasons, refined art styles, and immediate
            global streaming releases.
          </p>
          <p>
            Manga like Kagurabachi highlight stylistic combat and darker tonal
            atmospheres.
          </p>
          <p>
            Fandom engagement now happens instantly through social platforms and
            streaming discussions.
          </p>
          <ul>
            <li>Jujutsu Kaisen</li>
            <li>Chainsaw Man</li>
            <li>Kagurabachi</li>
          </ul>
          <p>Release pattern:</p>
          <code>Season Drop → Global Stream → Instant Analysis</code>
        </section>
      </div>
    </main>
  );
}
