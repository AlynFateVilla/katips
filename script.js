
/* ==========================================
   KATIPUNAN SMP
   FULLSCREEN LANDING PAGE

   Original website: site.js
   Original stylesheet: styles.css
========================================== */

(() => {
    "use strict";

    /* ======================================
       CONFIGURATION
    ====================================== */

    const CONFIG = {
        websiteScript: "site.js",

        banner:
            "image/Katipunan_SMP_Banner_Animated.gif",

        title: "WELCOME TO KATIPUNAN SMP",

        button: "ENTER WEBSITE",

        footer: "SURVIVE ✦ BUILD ✦ EXPLORE"
    };

    /* ======================================
       ORIGINAL COLOR SCHEME
    ====================================== */

    const colors = {
        bg: "#120e08",
        bgDeep: "#070604",

        panel: "#21180b",
        panelLight: "#2d210e",
        panelBright: "#3a2a12",

        gold: "#e6b94f",
        goldLight: "#f7d778",
        goldBright: "#ffe9a3",
        goldDark: "#b88624",

        text: "#faf3df",
        muted: "#c9bfa8",

        line: "#513b18",
        lineLight: "#76591f"
    };

    /* ======================================
       LOAD FONTS
    ====================================== */

    const fontLink = document.createElement("link");

    fontLink.rel = "stylesheet";

    fontLink.href =
        "https://fonts.googleapis.com/css2?" +
        "family=DM+Mono:wght@400;500&" +
        "family=Press+Start+2P&display=swap";

    document.head.appendChild(fontLink);

    /* ======================================
       LANDING PAGE CSS
       GENERATED THROUGH JAVASCRIPT
    ====================================== */

    const landingCSS = document.createElement("style");

    landingCSS.id = "katipunan-landing-styles";

    landingCSS.textContent = `

        /* ==============================
           RESET
        ============================== */

        body.katipunan-landing-active {
            margin: 0;
            overflow: hidden;
            background: ${colors.bgDeep};
        }

        body.katipunan-landing-active
        #app {
            display: none !important;
        }

        body.katipunan-landing-active
        .ambient-gifs {
            display: none !important;
        }

        /* ==============================
           LANDING SCREEN
        ============================== */

        #katipunan-landing {
            position: fixed;
            inset: 0;

            z-index: 999999;

            width: 100%;
            height: 100vh;
            height: 100dvh;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow-x: hidden;
            overflow-y: auto;

            box-sizing: border-box;

            padding: 35px 22px;

            background:
                radial-gradient(
                    ellipse at 50% 40%,
                    rgba(230, 185, 79, 0.16),
                    transparent 58%
                ),
                radial-gradient(
                    ellipse at 50% 90%,
                    rgba(184, 134, 36, 0.07),
                    transparent 55%
                ),
                linear-gradient(
                    145deg,
                    #261c0e 0%,
                    #1b150b 45%,
                    #120e08 75%,
                    #070604 100%
                );

            color: ${colors.text};

            font-family:
                "DM Mono",
                monospace;

            isolation: isolate;
        }

        /* ==============================
           BACKGROUND GRID
        ============================== */

        #katipunan-landing::before {
            content: "";

            position: absolute;
            inset: 0;

            z-index: -1;

            background-image:
                linear-gradient(
                    rgba(230,185,79,0.035) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(230,185,79,0.035) 1px,
                    transparent 1px
                );

            background-size: 44px 44px;

            mask-image:
                linear-gradient(
                    to bottom,
                    transparent,
                    black 35%,
                    black 65%,
                    transparent
                );

            pointer-events: none;
        }

        /* ==============================
           BACKGROUND GLOW
        ============================== */

        .landing-glow {
            position: absolute;

            top: 50%;
            left: 50%;

            width: min(85vw, 950px);
            height: min(70vh, 650px);

            transform:
                translate(-50%, -50%);

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(230,185,79,0.12),
                    transparent 70%
                );

            filter: blur(35px);

            pointer-events: none;

            z-index: -1;
        }

        /* ==============================
           LANDING CONTENT
        ============================== */

        .landing-content {
            position: relative;

            width: 100%;
            max-width: 1100px;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            text-align: center;

            margin: auto;

            animation:
                landing-fade-in 1s ease both;
        }

        /* ==============================
           WELCOME LABEL
        ============================== */

        .landing-welcome {
            margin: 0 0 28px;

            font-family:
                "DM Mono",
                monospace;

            font-size: 11px;
            font-weight: 500;

            line-height: 1.8;
            letter-spacing: 0.20em;

            color: ${colors.goldLight};

            text-transform: uppercase;
        }

        /* ==============================
           ANIMATED GIF BANNER
        ============================== */

        .landing-banner {
            display: block;

            width: 100%;
            max-width: 1050px;

            height: auto;
            max-height: 62dvh;

            object-fit: contain;

            margin: 0 auto;

            filter:
                drop-shadow(
                    0 18px 42px
                    rgba(0,0,0,0.45)
                )
                drop-shadow(
                    0 0 30px
                    rgba(230,185,79,0.12)
                );

            animation:
                banner-reveal 1.2s ease both;
        }

        /* ==============================
           MISSING IMAGE MESSAGE
        ============================== */

        .landing-banner-fallback {
            display: none;

            align-items: center;
            justify-content: center;

            width: min(100%, 850px);
            min-height: 220px;

            padding: 30px;

            box-sizing: border-box;

            border: 1px dashed
                ${colors.lineLight};

            border-radius: 8px;

            background:
                rgba(18,14,8,0.7);

            color: ${colors.goldLight};

            font-family:
                "Press Start 2P",
                monospace;

            font-size: 16px;
            line-height: 2;

            text-align: center;
        }

        /* ==============================
           ENTER BUTTON AREA
        ============================== */

        .landing-button-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;

            margin-top: 38px;
        }

        /* ==============================
           GOLD GRADIENT BUTTON
        ============================== */

        .landing-enter {
            position: relative;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            gap: 15px;

            min-height: 62px;

            padding: 20px 38px;

            box-sizing: border-box;

            border: 1px solid
                ${colors.goldLight};

            border-radius: 5px;

            background:
                linear-gradient(
                    135deg,
                    ${colors.goldBright} 0%,
                    ${colors.goldLight} 30%,
                    ${colors.gold} 65%,
                    ${colors.goldDark} 100%
                );

            color: ${colors.bgDeep};

            font-family:
                "Press Start 2P",
                monospace;

            font-size: 11px;
            line-height: 1.8;

            text-align: center;

            cursor: pointer;

            box-shadow:
                0 8px 0 #77541c,
                0 14px 32px
                    rgba(0,0,0,0.35),
                0 0 28px
                    rgba(230,185,79,0.15);

            transition:
                transform 0.25s ease,
                box-shadow 0.25s ease,
                filter 0.25s ease;
        }

        .landing-enter:hover {
            transform: translateY(-4px);

            filter: brightness(1.1);

            box-shadow:
                0 12px 0 #77541c,
                0 20px 40px
                    rgba(0,0,0,0.45),
                0 0 42px
                    rgba(230,185,79,0.35);
        }

        .landing-enter:active {
            transform: translateY(5px);

            box-shadow:
                0 3px 0 #77541c,
                0 8px 18px
                    rgba(0,0,0,0.3);
        }

        .landing-enter:focus-visible {
            outline: 3px solid
                ${colors.goldBright};

            outline-offset: 6px;
        }

        .landing-enter:disabled {
            cursor: wait;
            opacity: 0.8;
        }

        /* ==============================
           BUTTON ARROW
        ============================== */

        .landing-enter-arrow {
            display: inline-block;

            font-size: 16px;

            transition:
                transform 0.25s ease;
        }

        .landing-enter:hover
        .landing-enter-arrow {
            transform: translateX(5px);
        }

        /* ==============================
           BOTTOM TEXT
        ============================== */

        .landing-bottom {
            position: absolute;

            bottom: 22px;
            left: 50%;

            transform: translateX(-50%);

            width: max-content;
            max-width: 90%;

            color: ${colors.muted};

            font-size: 9px;
            letter-spacing: 0.16em;

            text-align: center;

            opacity: 0.7;
        }

        /* ==============================
           TRANSITION
        ============================== */

        #katipunan-landing.landing-exit {
            opacity: 0;
            visibility: hidden;

            transition:
                opacity 0.65s ease,
                visibility 0.65s ease;
        }

        /* ==============================
           MAIN WEBSITE
        ============================== */

        body.katipunan-website-active {
            overflow-x: hidden;
            overflow-y: auto;
        }

        /* GIF ONLY ON THE LANDING PAGE */

        body.katipunan-website-active
        .hero-banner {
            display: none !important;
        }

        body.katipunan-website-active
        .banner-placeholder {
            display: none !important;
        }

        /* ==============================
           ANIMATIONS
        ============================== */

        @keyframes landing-fade-in {
            from {
                opacity: 0;
                transform: translateY(25px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes banner-reveal {
            from {
                opacity: 0;
                transform: scale(0.94);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        /* ==============================
           TABLET
        ============================== */

        @media (max-width: 768px) {
            #katipunan-landing {
                padding: 30px 18px;
            }

            .landing-welcome {
                font-size: 9px;
                letter-spacing: 0.13em;
            }

            .landing-banner {
                max-height: 55dvh;
            }

            .landing-button-wrapper {
                margin-top: 30px;
            }

            .landing-enter {
                min-height: 54px;
                padding: 18px 26px;
                font-size: 9px;
            }
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 480px) {
            #katipunan-landing {
                padding: 24px 12px 48px;
            }

            .landing-welcome {
                margin-bottom: 20px;
                font-size: 8px;
            }

            .landing-banner {
                max-height: 50dvh;
            }

            .landing-button-wrapper {
                margin-top: 26px;
            }

            .landing-enter {
                min-height: 52px;
                padding: 16px 20px;
                font-size: 8px;
            }

            .landing-bottom {
                bottom: 15px;
                font-size: 7px;
            }
        }

        /* ==============================
           REDUCED MOTION
        ============================== */

        @media (prefers-reduced-motion: reduce) {
            #katipunan-landing *,
            #katipunan-landing {
                animation-duration:
                    0.01ms !important;

                transition-duration:
                    0.01ms !important;
            }
        }
    `;

    document.head.appendChild(landingCSS);

    /* ======================================
       CREATE LANDING PAGE
    ====================================== */

    function createLandingPage() {
        document.body.classList.add(
            "katipunan-landing-active"
        );

        const landing = document.createElement("main");

        landing.id = "katipunan-landing";

        landing.setAttribute(
            "aria-label",
            "Katipunan SMP welcome page"
        );

        const glow = document.createElement("div");

        glow.className = "landing-glow";

        glow.setAttribute("aria-hidden", "true");

        const content = document.createElement("div");

        content.className = "landing-content";

        /* WELCOME LABEL */

        const welcome = document.createElement("p");

        welcome.className = "landing-welcome";

        welcome.textContent = `✦ ${CONFIG.title} ✦`;

        /* ANIMATED GIF */

        const banner = document.createElement("img");

        banner.className = "landing-banner";

        banner.src = CONFIG.banner;

        banner.alt = "Katipunan SMP animated banner";

        banner.fetchPriority = "high";

        /* FALLBACK IF GIF IS MISSING */

        const fallback = document.createElement("div");

        fallback.className = "landing-banner-fallback";

        fallback.textContent = "KATIPUNAN SMP";

        banner.addEventListener("error", () => {
            banner.style.display = "none";
            fallback.style.display = "flex";
        });

        /* BUTTON WRAPPER */

        const buttonWrapper =
            document.createElement("div");

        buttonWrapper.className =
            "landing-button-wrapper";

        /* ENTER BUTTON */

        const enterButton =
            document.createElement("button");

        enterButton.type = "button";

        enterButton.className = "landing-enter";

        const buttonText =
            document.createElement("span");

        buttonText.textContent = CONFIG.button;

        const arrow = document.createElement("span");

        arrow.className = "landing-enter-arrow";

        arrow.textContent = "→";

        arrow.setAttribute("aria-hidden", "true");

        enterButton.append(buttonText, arrow);

        buttonWrapper.appendChild(enterButton);

        /* BOTTOM TEXT */

        const bottom = document.createElement("p");

        bottom.className = "landing-bottom";

        bottom.textContent = CONFIG.footer;

        /* BUILD PAGE */

        content.append(
            welcome,
            banner,
            fallback,
            buttonWrapper
        );

        landing.append(
            glow,
            content,
            bottom
        );

        document.body.prepend(landing);

        /* ENTER WEBSITE */

        enterButton.addEventListener("click", () => {
            enterWebsite(landing, enterButton);
        });
    }

    /* ======================================
       LOAD EXISTING WEBSITE
    ====================================== */

    function loadWebsiteScript() {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src = CONFIG.websiteScript;

            script.onload = resolve;

            script.onerror = () => {
                reject(
                    new Error(
                        "Could not load " +
                        CONFIG.websiteScript
                    )
                );
            };

            document.body.appendChild(script);
        });
    }

    /* ======================================
       REMOVE DUPLICATE HERO BANNER
    ====================================== */

    function removeMainWebsiteBanner() {
        const mainBanner =
            document.querySelector(
                "#app .hero-banner"
            );

        if (!mainBanner) return;

        const placeholder =
            mainBanner.previousElementSibling;

        if (
            placeholder &&
            placeholder.classList.contains(
                "banner-placeholder"
            )
        ) {
            placeholder.remove();
        }

        mainBanner.remove();
    }

    /* ======================================
       ENTER WEBSITE
    ====================================== */

    let websiteLoaded = false;
    let websiteLoading = false;

    async function enterWebsite(
        landing,
        enterButton
    ) {
        if (websiteLoading) return;

        websiteLoading = true;

        enterButton.disabled = true;

        const buttonText =
            enterButton.querySelector("span");

        const originalText = buttonText.textContent;

        buttonText.textContent = "LOADING...";

        try {
            if (!websiteLoaded) {
                await loadWebsiteScript();

                websiteLoaded = true;

                removeMainWebsiteBanner();
            }

            /* ENABLE MAIN WEBSITE */

            document.body.classList.remove(
                "katipunan-landing-active"
            );

            document.body.classList.add(
                "katipunan-website-active"
            );

            /* SHOW WEBSITE FROM THE TOP */

            window.scrollTo(0, 0);

            /* FADE OUT LANDING PAGE */

            landing.classList.add("landing-exit");

            const reducedMotion =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;

            const delay = reducedMotion ? 0 : 650;

            window.setTimeout(() => {
                landing.remove();
            }, delay);

        } catch (error) {
            console.error(
                "Katipunan SMP loading error:",
                error
            );

            buttonText.textContent =
                "TRY AGAIN";

            enterButton.disabled = false;

            websiteLoading = false;

            window.alert(
                "The main website could not load. " +
                "Please make sure site.js is " +
                "in the same folder as this file."
            );
        }
    }

    /* ======================================
       INITIALIZE LANDING PAGE
    ====================================== */

    function initializeLanding() {
        if (
            document.getElementById(
                "katipunan-landing"
            )
        ) {
            return;
        }

        createLandingPage();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeLanding,
            { once: true }
        );
    } else {
        initializeLanding();
    }

})();
