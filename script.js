const app = document.getElementById("app");

app.innerHTML = String.raw`
<header class="topbar">
    <nav class="nav container wrap" aria-label="Main navigation">
      <a class="brand" href="#home"><img class="brand-logo" src="image/katipunan-logo.png" alt=""> KATIPUNAN SMP</a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-links">☰</button>
      <div class="nav-links" id="nav-links">
        <a href="#server">The server</a>
        <a href="#community">Community</a>
        <a href="#ranks">Ranks</a>
        <a class="nav-cta" href="#community">Join the adventure ↓</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-inner container wrap">
        <p class="eyebrow"><span class="online-dot" aria-hidden="true"></span> YOUR SMP ADVENTURE STARTS HERE</p>
        <h1>SURVIVE. BUILD.<br><span>MAKE IT YOURS.</span></h1>
        <p class="hero-copy">Settle in, make your mark, trade with players, and chase rewards on Katipunan SMP. There’s always something new to build toward—and room for your next big adventure.</p>
        <div class="button-row">
          <a class="button btn btn-warning" href="#server">EXPLORE THE SERVER <span aria-hidden="true">→</span></a>
          <a class="button secondary btn btn-outline-light" href="#ranks">VIEW RANKS</a>
        </div>
        <div class="hero-tags" aria-label="Featured benefits">
          <span class="tag">⛏ SMP SURVIVAL</span>
          <span class="tag">◆ PLAYER MARKET</span>
          <span class="tag">✦ VOTE &amp; KEY REWARDS</span>
        </div>
      </div>
    </section>

    <section class="perks" id="server">
      <div class="container wrap">
        <p class="kicker">A world worth logging into</p>
        <h2>MAKE YOUR OWN ADVENTURE.</h2>
        <p class="section-intro">Katipunan SMP brings together the details that make every session your own—from setting up home to trading your latest finds.</p>
        <div class="perk-grid server-grid row g-3">
          <div class="col-12 col-sm-6 col-lg-3">
            <article class="perk h-100">
              <span class="perk-icon" aria-hidden="true">⛏</span>
              <h3>SURVIVAL &amp; BUILDING</h3>
              <p>Gather resources, explore the world, and create a place to call home in the SMP.</p>
            </article>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <article class="perk h-100">
              <span class="perk-icon" aria-hidden="true">⌂</span>
              <h3>SET YOUR HOME</h3>
              <p>Claim home locations and make it easier to get back to the places that matter.</p>
            </article>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <article class="perk h-100">
              <span class="perk-icon" aria-hidden="true">◇</span>
              <h3>PLAYER ECONOMY</h3>
              <p>Browse the auction house, list items, and shop for gear and supplies in game.</p>
            </article>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <article class="perk h-100">
              <span class="perk-icon" aria-hidden="true">✦</span>
              <h3>VOTE &amp; EARN REWARDS</h3>
              <p>Collect voting keys and chase Pinata, Legendary, and Mythic key rewards.</p>
            </article>
          </div>
        </div>
        <div class="build-gallery">
          <div class="build-gallery-heading">
            <div>
              <p class="kicker">Made by the community</p>
              <h2>DISCOVER AMAZING BUILDS - MEET NEW PEOPLE.</h2>
            </div>
            <div class="build-gallery-navigation">
              <p class="build-gallery-hint">Swipe or use the arrows to explore</p>
              <div class="build-gallery-controls" aria-label="Gallery controls">
                <button class="build-gallery-button" type="button" data-gallery-direction="-1" aria-label="Show previous build" disabled>←</button>
                <button class="build-gallery-button" type="button" data-gallery-direction="1" aria-label="Show next build">→</button>
              </div>
            </div>
          </div>
          <div class="build-gallery-track" role="region" aria-label="Community build gallery" tabindex="0">
            <figure class="build-gallery-item">
              <img src="image/survival-build.png" alt="A tall stone pavilion and a player in a grassy field at sunset" loading="lazy">
              <figcaption>Golden hour at the pavilion</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/survival-build-2.png" alt="A grand stone bridge lined with glowing lamps beneath a floating sword monument" loading="lazy">
              <figcaption>A grand bridge beneath the floating sword</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-3.png" alt="A lamp-lit stone plaza with a fountain and tall castle towers at sunset" loading="lazy">
              <figcaption>The castle plaza at sunset</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-4.png" alt="A rain-soaked stone cathedral plaza and glowing lanterns under a moody sky" loading="lazy">
              <figcaption>Rainy cathedral square</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-6.png" alt="A bright cosmetic storefront with a colorful sign and a red-and-white themed building" loading="lazy">
              <figcaption>Cosmetic shopfront</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-7.png" alt="A starry display of players standing in front of a lit platform with bright neon names" loading="lazy">
              <figcaption>Staff lineup showcase</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-8.png" alt="A giant floating sword monument in a purple sunset sky over a grand cathedral-like structure" loading="lazy">
              <figcaption>Floating sword monument</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/community-build-10.png" alt="A dramatic bridge and archway build overlooking a bright forest and lake in a dreamy sunrise fog" loading="lazy">
              <figcaption>Dream bridge overlook</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/old-spawn.png" alt="An old grand spawn plaza with white stone architecture and a large central fountain under a night sky" loading="lazy">
              <figcaption>Old spawn</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/bodyguards.png" alt="A player standing beside a glowing portal structure with a large team showcase title floating above" loading="lazy">
              <figcaption>Bodyguards</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/shadow-guardians.png" alt="A group of players standing in front of a grand white temple with glowing armor and floating names" loading="lazy">
              <figcaption>Shadow Guardians</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/rainy-house.png" alt="A wooden house on a coastal cliff during a rainy sky with players standing on the balcony" loading="lazy">
              <figcaption>Rainy seaside house</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/cherry-garden.png" alt="A pink cherry blossom garden with players gathered around a campfire under giant flowering trees" loading="lazy">
              <figcaption>Cherry blossom gathering</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/cherry-garden-2.png" alt="A lush cherry blossom grove filled with glowing name tags, players, and a bustling event scene" loading="lazy">
              <figcaption>Cherry garden event</figcaption>
            </figure>
            <figure class="build-gallery-item">
              <img src="image/lava-castle.png" alt="A cinematic lava fortress with glowing orange pillars, magma pools, and a distant castle under fog" loading="lazy">
              <figcaption>Lava fortress</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="section community" id="community">
      <div class="container wrap">
        <div class="community-panel row g-4">
          <div class="col-12 col-lg-6">
            <p class="kicker">Better together</p>
            <h2>BE PART OF THE COMMUNITY.</h2>
            <p class="section-intro">Meet other players, share your builds, get in touch with the team, and keep up with Katipunan SMP in our official Discord.</p>
          </div>
          <div class="col-12 col-lg-6">
            <div class="community-callout">
              <span class="rank-label">OFFICIAL DISCORD</span>
              <h3 class="rank-name">YOUR KATIPUNAN SMP CONTACT.</h3>
              <p>Join our Discord for community updates, support, and information about premium ranks.</p>
              <a class="button discord-button btn btn-warning" href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">JOIN DISCORD <span aria-hidden="true">↗</span></a>
              <p class="booster-note">Boost the server with an active one-month Nitro subscription to earn the Booster rank.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="ranks">
      <div class="container wrap">
        <div class="section-heading">
          <p class="kicker">Play, earn, rank up</p>
          <h2>GRINDABLE RANKS.</h2>
          <p class="section-intro">Start at Default and work your way up: Default → Bronze → Silver → Gold → Crystal. Earn each rank with playtime, in-game challenges, and money.</p>
        </div>
        <ol class="grind-rank-grid row g-3" aria-label="Grindable rank requirements">
          <li class="col-12 col-sm-6 col-lg-3">
            <article class="grind-rank-card">
              <span class="rank-label">RANK 01</span>
              <h3 class="rank-name">🥉 BRONZE</h3>
              <ul class="grind-requirements">
                <li><span aria-hidden="true">⏱️</span><span>Playtime</span><strong>72 hours</strong></li>
                <li><span aria-hidden="true">🚶</span><span>Travel blocks</span><strong>1,000</strong></li>
                <li><span aria-hidden="true">🧟</span><span>Zombies</span><strong>100</strong></li>
                <li><span aria-hidden="true">💀</span><span>Skeletons</span><strong>50</strong></li>
                <li><span aria-hidden="true">⛏️</span><span>Blocks mined</span><strong>25,000</strong></li>
              </ul>
              <p class="grind-cost"><span>Upgrade cost</span><strong>$5M</strong></p>
            </article>
          </li>
          <li class="col-12 col-sm-6 col-lg-3">
            <article class="grind-rank-card">
              <span class="rank-label">RANK 02</span>
              <h3 class="rank-name">🥈 SILVER</h3>
              <ul class="grind-requirements">
                <li><span aria-hidden="true">⏱️</span><span>Playtime</span><strong>6 days</strong></li>
                <li><span aria-hidden="true">🚶</span><span>Travel blocks</span><strong>5,000</strong></li>
                <li><span aria-hidden="true">💣</span><span>Creepers</span><strong>50</strong></li>
                <li><span aria-hidden="true">🧟</span><span>Zombies</span><strong>200</strong></li>
                <li><span aria-hidden="true">🔥</span><span>Blazes</span><strong>30</strong></li>
                <li><span aria-hidden="true">⛏️</span><span>Blocks mined</span><strong>50,000</strong></li>
              </ul>
              <p class="grind-cost"><span>Upgrade cost</span><strong>$10M</strong></p>
            </article>
          </li>
          <li class="col-12 col-sm-6 col-lg-3">
            <article class="grind-rank-card">
              <span class="rank-label">RANK 03</span>
              <h3 class="rank-name">🥇 GOLD</h3>
              <ul class="grind-requirements">
                <li><span aria-hidden="true">⏱️</span><span>Playtime</span><strong>14 days</strong></li>
                <li><span aria-hidden="true">🚶</span><span>Travel blocks</span><strong>10,000</strong></li>
                <li><span aria-hidden="true">🏜️</span><span>Husks</span><strong>50</strong></li>
                <li><span aria-hidden="true">🟢</span><span>Slimes</span><strong>30</strong></li>
                <li><span aria-hidden="true">💀</span><span>Withers</span><strong>3</strong></li>
                <li><span aria-hidden="true">⛏️</span><span>Blocks mined</span><strong>75,000</strong></li>
              </ul>
              <p class="grind-cost"><span>Upgrade cost</span><strong>$20M</strong></p>
            </article>
          </li>
          <li class="col-12 col-sm-6 col-lg-3">
            <article class="grind-rank-card">
              <span class="rank-label">RANK 04</span>
              <h3 class="rank-name">💎 CRYSTAL</h3>
              <ul class="grind-requirements">
                <li><span aria-hidden="true">⏱️</span><span>Playtime</span><strong>28 days</strong></li>
                <li><span aria-hidden="true">👁️</span><span>Wardens</span><strong>10</strong></li>
                <li><span aria-hidden="true">🐉</span><span>Ender Dragons</span><strong>5</strong></li>
                <li><span aria-hidden="true">💀</span><span>Withers</span><strong>10</strong></li>
                <li><span aria-hidden="true">⛏️</span><span>Blocks mined</span><strong>100,000</strong></li>
              </ul>
              <p class="grind-cost"><span>Upgrade cost</span><strong>$40M</strong></p>
            </article>
          </li>
        </ol>

        <div class="section-heading rank-subsection-heading">
          <p class="kicker">Choose your upgrade</p>
          <h2>OPTIONAL PREMIUM RANKS.</h2>
          <p class="section-intro">Enjoying the server? Get Donator+ or Donatormax through our official Discord server at <a class="inline-link" href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">discord.gg/katipunansmp</a>.</p>
        </div>
        <div class="rank-grid row g-4">
          <div class="col-12 col-lg-6">
            <article class="rank-card h-100">
            <span class="rank-label">PREMIUM RANK</span>
            <h3 class="rank-name">DONATOR+</h3>
            <p class="rank-price">₱250 <span>/ 1 MONTH</span></p>
            <p class="rank-description">A month of extra storage, useful commands, and in-game freebies.</p>
            <p class="perk-heading">PERKS &amp; FREEBIES</p>
            <ul class="rank-perks">
              <li>8 homes</li>
              <li>15 player vaults (storage)</li>
              <li>5% /shop discount</li>
              <li>10 auction house items</li>
              <li><code>/kit Donator+</code></li>
              <li>20 voting keys</li>
              <li>30 Pinata keys</li>
              <li>7 Legendary keys</li>
              <li>5 Mythic keys</li>
            </ul>
            <p class="perk-heading">COMMANDS</p>
            <ul class="command-list">
              <li><code>/repair</code></li>
              <li><code>/nick</code></li>
              <li><code>/chatcolor</code></li>
              <li><code>/feed</code></li>
              <li><code>/ptime</code></li>
              <li><code>/workbench</code></li>
              <li><code>/ender</code></li>
              <li><code>/anvil</code></li>
              <li><code>/stonecutter</code></li>
              <li><code>/loom</code></li>
              <li><code>/grindstone</code></li>
              <li><code>/cartography</code></li>
            </ul>
            <a class="button btn btn-warning" href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">GET DONATOR+ ON DISCORD <span aria-hidden="true">↗</span></a>
            <p class="fine-print">One-month rank. Contact us on Discord for purchase details.</p>
            </article>
          </div>
          <div class="col-12 col-lg-6">
            <article class="rank-card featured h-100">
            <span class="rank-label">TOP-TIER PREMIUM</span>
            <h3 class="rank-name">DONATORMAX</h3>
            <p class="rank-price">₱500 <span>/ 1 MONTH</span></p>
            <p class="rank-description">Go all in with more storage, extra freebies, and base flying.</p>
            <p class="perk-heading">PERKS &amp; FREEBIES</p>
            <ul class="rank-perks">
              <li>15 homes</li>
              <li>25 player vaults (storage)</li>
              <li>15 auction house items</li>
              <li><code>/kit Donatormax</code> (weekly)</li>
              <li>20 voting keys</li>
              <li>35 Pinata keys</li>
              <li>20 Legendary keys</li>
              <li>16 Mythic keys</li>
            </ul>
            <p class="perk-heading">COMMANDS</p>
            <ul class="command-list">
              <li><code>/claimfly</code> (fly on your base)</li>
              <li><code>/nick</code></li>
              <li><code>/repair</code></li>
              <li><code>/chatcolor</code></li>
              <li><code>/feed</code></li>
              <li><code>/ptime</code></li>
              <li><code>/workbench</code></li>
              <li><code>/ender</code></li>
              <li><code>/anvil</code></li>
              <li><code>/stonecutter</code></li>
              <li><code>/loom</code></li>
              <li><code>/grindstone</code></li>
              <li><code>/cartography</code></li>
            </ul>
            <a class="button btn btn-warning" href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">GET DONATORMAX ON DISCORD <span aria-hidden="true">↗</span></a>
            <p class="fine-print">One-month rank. Contact us on Discord for purchase details.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="how-to-buy">
      <div class="container wrap">
        <div class="section-heading">
          <p class="kicker">Come join us</p>
          <h2>YOUR NEXT SESSION STARTS HERE.</h2>
          <p class="section-intro">Join our official Discord for server details, community support, and help getting a premium rank.</p>
        </div>
        <div class="how-grid row g-4">
          <article class="step col-12 col-md-4"><p class="step-number">01 / CONTACT</p><h3>JOIN OUR DISCORD</h3><p><a class="inline-link" href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">discord.gg/katipunansmp</a> is the place to reach our community and team.</p></article>
          <article class="step col-12 col-md-4"><p class="step-number">02 / SETTLE IN</p><h3>MAKE YOUR MARK</h3><p>Join the SMP, explore the world, meet players, and start building your home.</p></article>
          <article class="step col-12 col-md-4"><p class="step-number">03 / LEVEL UP</p><h3>GET A PREMIUM RANK</h3><p>Contact us on Discord to get Donator+ or Donatormax and find out more about each rank.</p></article>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-inner container wrap">
      <a class="brand" href="#home"><img class="brand-logo" src="image/katipunan-logo.png" alt=""> KATIPUNAN SMP</a>
      <p>Not an official Minecraft product or service.</p>
      <div class="footer-links"><a href="#server">The server</a><a href="#community">Community</a><a href="#ranks">Ranks</a><a href="https://discord.gg/katipunansmp" target="_blank" rel="noopener noreferrer">Discord ↗</a></div>
    </div>
  </footer>
`;

function initializeNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

function initializeGallery() {
  const galleryTrack = document.querySelector(".build-gallery-track");
  const galleryButtons = document.querySelectorAll(".build-gallery-button");

  const updateGalleryControls = () => {
    const maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;

    galleryButtons.forEach((button) => {
      const direction = Number(button.dataset.galleryDirection);
      button.disabled = direction < 0
        ? galleryTrack.scrollLeft <= 1
        : galleryTrack.scrollLeft >= maxScroll - 1;
    });
  };

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      galleryTrack.scrollBy({
        left: Number(button.dataset.galleryDirection) * galleryTrack.clientWidth,
        behavior: "smooth"
      });
    });
  });

  galleryTrack.addEventListener("scroll", updateGalleryControls);
  window.addEventListener("resize", updateGalleryControls);
  updateGalleryControls();
}

function initializeFloatingDecor() {
  const ambientLayer = document.createElement("div");
  ambientLayer.className = "ambient-gifs";

  const glyphs = ["✦", "✧", "❖", "◆", "✺", "⚒", "⛏", "✹", "✴", "❋"];

  for (let index = 0; index < 12; index += 1) {
    const sprite = document.createElement("div");
    sprite.className = "ambient-gif";
    sprite.textContent = glyphs[index % glyphs.length];

    const left = (Math.random() * 88 + 4).toFixed(0);
    const top = (Math.random() * 80 + 8).toFixed(0);
    const driftX = (Math.random() * 24 - 12).toFixed(1);
    const driftY = (Math.random() * 18 - 9).toFixed(1);
    const driftXAlt = (-Number(driftX)).toFixed(1);
    const driftYAlt = (-Number(driftY)).toFixed(1);
    const duration = (10 + Math.random() * 9).toFixed(1);
    const opacity = (0.35 + Math.random() * 0.35).toFixed(2);
    const hue = Math.random() > 0.5 ? "gold" : "grass";

    sprite.style.left = `${left}%`;
    sprite.style.top = `${top}%`;
    sprite.style.setProperty("--drift-x", `${driftX}px`);
    sprite.style.setProperty("--drift-x-alt", `${driftXAlt}px`);
    sprite.style.setProperty("--drift-y", `${driftY}px`);
    sprite.style.setProperty("--drift-y-alt", `${driftYAlt}px`);
    sprite.style.setProperty("--duration", `${duration}s`);
    sprite.style.setProperty("--sprite-opacity", opacity);
    sprite.style.setProperty("--sprite-hue", hue);

    ambientLayer.appendChild(sprite);
  }

  document.body.prepend(ambientLayer);
}

initializeNavigation();
initializeGallery();
initializeFloatingDecor();