const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

const MEDIA_URL = "https://classy-swan-03c0b5.netlify.app/image/";

const create = (tag, options = {}, ...children) => {
    const element = document.createElement(tag);

    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    if (options.text !== undefined) element.textContent = options.text;

    if (options.attributes) {
        Object.entries(options.attributes).forEach(([name, value]) => {
            element.setAttribute(name, value);
        });
    }

    children.flat(Infinity).forEach(child => {
        if (child === null || child === undefined) return;

        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
};

const add = (parent, ...children) => {
    children.flat(Infinity).forEach(child => {
        if (child === null || child === undefined) return;

        if (typeof child === "string") {
            parent.appendChild(document.createTextNode(child));
        } else {
            parent.appendChild(child);
        }
    });

    return parent;
};

const addStylesheet = (href, attributes = {}) => {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = href;

    Object.entries(attributes).forEach(([name, value]) => {
        link.setAttribute(name, value);
    });

    document.head.appendChild(link);
};

const googlePreconnect = create("link", {
    attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
    }
});

const fontPreconnect = create("link", {
    attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: ""
    }
});

document.head.append(googlePreconnect, fontPreconnect);

addStylesheet(
    "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Press+Start+2P&display=swap"
);

addStylesheet(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    {
        integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhj6YhW+ALEwIH",
        crossorigin: "anonymous"
    }
);

addStylesheet("styles.css");

const addImagePlaceholder = (image, label, type = "logo") => {
    const placeholder = create("div", {
        className: `image-placeholder ${type}-placeholder`,
        text: label
    });

    placeholder.style.display = "none";
    placeholder.style.alignItems = "center";
    placeholder.style.justifyContent = "center";
    placeholder.style.textAlign = "center";
    placeholder.style.color = "#f7d778";
    placeholder.style.background = "rgba(18, 14, 8, 0.78)";
    placeholder.style.border = "1px dashed rgba(230, 185, 79, 0.65)";
    placeholder.style.fontFamily = '"DM Mono", monospace';
    placeholder.style.letterSpacing = "0.08em";
    placeholder.style.boxSizing = "border-box";

    image.addEventListener("error", () => {
        image.style.display = "none";

        if (!placeholder.parentNode && image.parentNode) {
            image.parentNode.insertBefore(placeholder, image);
        }

        placeholder.style.display = "flex";
    });

    image.addEventListener("load", () => {
        image.style.display = "";
        placeholder.style.display = "none";
    });

    if (type === "logo") {
        placeholder.style.width = "44px";
        placeholder.style.height = "44px";
        placeholder.style.borderRadius = "8px";
        placeholder.style.fontSize = "26px";
        placeholder.style.fontWeight = "700";
    } else {
        placeholder.style.width = "min(100%, 960px)";
        placeholder.style.aspectRatio = "16 / 9";
        placeholder.style.maxHeight = "min(54vw, 420px)";
        placeholder.style.margin = "0 auto 28px";
        placeholder.style.fontSize = "clamp(12px, 2vw, 20px)";
    }

    return placeholder;
};

const header = create("header", {
    className: "topbar"
});

const nav = create("nav", {
    className: "nav container wrap",
    attributes: {
        "aria-label": "Main navigation"
    }
});

const brand = create("a", {
    className: "brand",
    attributes: {
        href: "#home"
    }
});

const brandLogo = create("img", {
    className: "brand-logo",
    attributes: {
        src: `${MEDIA_URL}Katipunan_SMP_Logo_Animated.gif`,
        alt: "Katipunan SMP logo"
    }
});

addImagePlaceholder(brandLogo, "K", "logo");

const brandText = create("span", {
    text: "KATIPUNAN SMP"
});

add(brand, brandLogo, brandText);

const menuToggle = create("button", {
    className: "menu-toggle",
    attributes: {
        type: "button",
        "aria-label": "Open navigation menu",
        "aria-expanded": "false",
        "aria-controls": "nav-links"
    },
    text: "☰"
});

const navLinks = create("div", {
    className: "nav-links",
    id: "nav-links"
});

const createNavLink = (text, href, className = "") => {
    return create("a", {
        className,
        attributes: { href },
        text
    });
};

add(
    navLinks,
    createNavLink("The server", "#server"),
    createNavLink("Discover", "#discover"),
    createNavLink("Community", "#community"),
    createNavLink("Ranks", "#ranks"),
    createNavLink("Join the adventure ↓", "#how-to-buy", "nav-cta")
);

add(nav, brand, menuToggle, navLinks);
add(header, nav);

app.appendChild(header);

const main = create("main");

const hero = create("section", {
    className: "hero",
    id: "home"
});

hero.style.minHeight = "calc(100vh - 70px)";
hero.style.display = "flex";
hero.style.alignItems = "center";

const heroContainer = create("div", {
    className: "container wrap hero-inner"
});

const heroBanner = create("img", {
    className: "hero-banner",
    attributes: {
        src: `${MEDIA_URL}Katipunan_SMP_Banner_Animated.gif`,
        alt: "Katipunan SMP animated banner"
    }
});

heroBanner.style.display = "block";
heroBanner.style.width = "min(100%, 960px)";
heroBanner.style.height = "auto";
heroBanner.style.maxHeight = "min(54vw, 420px)";
heroBanner.style.objectFit = "contain";
heroBanner.style.margin = "0 auto 28px";
heroBanner.style.filter = "drop-shadow(0 12px 28px rgba(0, 0, 0, 0.35))";

addImagePlaceholder(
    heroBanner,
    "KATIPUNAN SMP BANNER GIF",
    "banner"
);

const eyebrow = create("div", {
    className: "eyebrow"
});

const onlineDot = create("span", {
    className: "online-dot"
});

add(eyebrow, onlineDot, "YOUR SMP ADVENTURE STARTS HERE");

const heroTitle = create("h1", {
    attributes: {
        "aria-label": "SURVIVE. BUILD. MAKE IT YOURS."
    }
});

const heroTitleFirst = create("span", {
    attributes: {
        "aria-hidden": "true"
    }
});

const heroTitleSecond = create("span", {
    attributes: {
        "aria-hidden": "true"
    }
});

add(
    heroTitle,
    heroTitleFirst,
    create("br"),
    heroTitleSecond
);

const heroCopy = create("p", {
    className: "hero-copy",
    text: "A community-driven Minecraft survival experience where you can build, explore, trade, and create your own story."
});

const heroActions = create("div", {
    className: "button-row"
});

const exploreButton = create("a", {
    className: "button",
    attributes: {
        href: "#server"
    },
    text: "Explore the server"
});

const viewRanksButton = create("a", {
    className: "button secondary",
    attributes: {
        href: "#ranks"
    },
    text: "View ranks"
});

add(heroActions, exploreButton, viewRanksButton);

const serverIpBox = create("div", {
    className: "server-ip-box"
});

serverIpBox.style.marginTop = "30px";
serverIpBox.style.padding = "18px 22px";
serverIpBox.style.border = "1px solid rgba(230, 185, 79, 0.45)";
serverIpBox.style.background = "rgba(18, 14, 8, 0.72)";
serverIpBox.style.width = "fit-content";
serverIpBox.style.maxWidth = "100%";
serverIpBox.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.2)";

const serverIpLabel = create("div", {
    text: "SERVER IP"
});

serverIpLabel.style.marginBottom = "7px";
serverIpLabel.style.color = "#c9bfa8";
serverIpLabel.style.fontSize = "9px";
serverIpLabel.style.letterSpacing = "0.12em";

const serverIp = create("div", {
    text: "play.katipunansmp.com"
});

serverIp.style.color = "#f7d778";
serverIp.style.fontFamily = '"DM Mono", monospace';
serverIp.style.fontSize = "clamp(16px, 2.5vw, 22px)";
serverIp.style.fontWeight = "500";
serverIp.style.letterSpacing = "0.02em";
serverIp.style.cursor = "pointer";

const serverIpHint = create("div", {
    text: "Click to copy"
});

serverIpHint.style.marginTop = "5px";
serverIpHint.style.color = "#9f947e";
serverIpHint.style.fontSize = "9px";

add(serverIpBox, serverIpLabel, serverIp, serverIpHint);

serverIp.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("play.katipunansmp.com");

        serverIpHint.textContent = "Copied to clipboard!";
        serverIp.style.color = "#ffe9a3";

        setTimeout(() => {
            serverIpHint.textContent = "Click to copy";
            serverIp.style.color = "#f7d778";
        }, 1500);

    } catch {
        serverIpHint.textContent = "play.katipunansmp.com";
    }
});

const heroTags = create("div", {
    className: "hero-tags"
});

const tags = [
    "SMP SURVIVAL",
    "PLAYER MARKET",
    "VOTE & KEY REWARDS"
];

tags.forEach(tag => {
    heroTags.appendChild(
        create("span", {
            className: "tag",
            text: tag
        })
    );
});

add(
    heroContainer,
    heroBanner,
    eyebrow,
    heroTitle,
    heroCopy,
    heroActions,
    serverIpBox,
    heroTags
);

add(hero, heroContainer);

main.appendChild(hero);
const serverSection = create("section", {
    className: "section",
    id: "server"
});

const serverContainer = create("div", {
    className: "container wrap"
});

const serverHeading = create("div", {
    className: "section-heading"
});

add(
    serverHeading,
    create("p", {
        className: "kicker",
        text: "A world worth logging into"
    }),
    create("h2", {
        text: "MAKE YOUR OWN ADVENTURE."
    }),
    create("p", {
        className: "section-intro",
        text: "Build your home, explore the world, trade with other players, and find your place in a growing survival community."
    })
);

const perks = create("div", {
    className: "perk-grid"
});

const perkData = [
    {
        icon: "✦",
        title: "Survival & Building",
        description: "Explore a survival world where your imagination decides what comes next."
    },
    {
        icon: "⌂",
        title: "Set Your Home",
        description: "Claim your space, build your base, and make your corner of the world yours."
    },
    {
        icon: "◆",
        title: "Player Economy",
        description: "Trade with other players and take part in a player-driven economy."
    },
    {
        icon: "★",
        title: "Vote & Earn Rewards",
        description: "Support the server through voting and earn useful rewards along the way."
    }
];

perkData.forEach(perkDataItem => {
    const perk = create("article", {
        className: "perk"
    });

    const icon = create("div", {
        className: "perk-icon",
        text: perkDataItem.icon
    });

    const title = create("h3", {
        text: perkDataItem.title
    });

    const description = create("p", {
        text: perkDataItem.description
    });

    add(perk, icon, title, description);

    perks.appendChild(perk);
});

const buildGallery = create("div", {
    className: "build-gallery"
});

const galleryHeading = create("div", {
    className: "build-gallery-heading"
});

const galleryTitle = create("div");

add(
    galleryTitle,
    create("p", {
        className: "kicker",
        text: "Made by the community"
    }),
    create("h2", {
        text: "DISCOVER AMAZING BUILDS - MEET NEW PEOPLE."
    })
);

const galleryNavigation = create("div", {
    className: "build-gallery-navigation"
});

const galleryHint = create("p", {
    className: "build-gallery-hint",
    text: "Swipe or use the arrows to explore"
});

const galleryControls = create("div", {
    className: "build-gallery-controls"
});

const previousButton = create("button", {
    className: "build-gallery-button",
    attributes: {
        type: "button",
        "aria-label": "Previous gallery item",
        "data-gallery-direction": "-1"
    },
    text: "←"
});

const nextButton = create("button", {
    className: "build-gallery-button",
    attributes: {
        type: "button",
        "aria-label": "Next gallery item",
        "data-gallery-direction": "1"
    },
    text: "→"
});

add(galleryControls, previousButton, nextButton);

add(galleryNavigation, galleryHint, galleryControls);

add(galleryHeading, galleryTitle, galleryNavigation);

const galleryTrack = create("div", {
    className: "build-gallery-track"
});

const galleryItems = [
    [
        `${MEDIA_URL}RIft_Event.mov`,
        "The Rift Event — Moments from our latest server gathering.",
        "video"
    ],
    [
        `${MEDIA_URL}santa.mp4`,
        "A Winter Wonderland — Where snowflakes fall and every corner of spawn feels a little more magical.",
        "video"
    ],
    [
        `${MEDIA_URL}survival-build.png`,
        "Golden hour at the pavilion",
        "image"
    ],
    [
        `${MEDIA_URL}survival-build-2.png`,
        "A grand bridge beneath the floating sword",
        "image"
    ],
    [
        `${MEDIA_URL}community-build-3.png`,
        "A World of Wonders — Every corner holds a new story.",
        "image"
    ],
    [
        `${MEDIA_URL}community-build-4.png`,
        "Whispers in the Rain — Where even rainy days feel magical.",
        "image"
    ],
    [
        `${MEDIA_URL}community-build-6.png`,
        "The Cosmetic Corner — A little style for every adventure.",
        "image"
    ],
    [
        `${MEDIA_URL}community-build-10.png`,
        "Above the Clouds — A peaceful escape from the world below.",
        "image"
    ],
    [
        `${MEDIA_URL}community-build-11.png`,
        "The Pink Haven — A cozy little place filled with warmth and friendship.",
        "image"
    ],
    [
        `${MEDIA_URL}bodyguards.png`,
        "The Guardians — Keeping watch, making memories.",
        "image"
    ],
    [
        `${MEDIA_URL}shadow-guardians.png`,
        "Guardians of the Realm — Different powers, united as one.",
        "image"
    ],
    [
        `${MEDIA_URL}rainy-house.png`,
        "Side by Side — Every adventure is better with company.",
        "image"
    ],
    [
        `${MEDIA_URL}lava-castle.png`,
        "The Infernal Kingdom — A fortress forged in fire and mystery.",
        "image"
    ],
    [
        `${MEDIA_URL}old-portal.png`,
        "Under the Northern Lights — Where the night sky tells its own story.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-06_17.57.52.png`,
        "The Grand Monument — Where creativity meets timeless architecture.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-17_20.36.08.png`,
        "Beyond the Adventure — Great adventures are better together.",
        "image"
    ],
    [
        `${MEDIA_URL}aki-jason.png`,
        "Under the Same Sky — A little magic in every shared moment.",
        "image"
    ],
    [
        `${MEDIA_URL}jvson-aki.png`,
        "Golden Hour — Collecting sunsets and little moments together.",
        "image"
    ],
    [
        `${MEDIA_URL}crunc.png`,
        "Winter's Favorite — A little magic wrapped in snowflakes.",
        "image"
    ],
    [
        `${MEDIA_URL}crunc-bday.png`,
        "A Slice of Happiness — Sweet celebrations and sweeter memories.",
        "image"
    ],
    [
        `${MEDIA_URL}pic.png`,
        "A Place to Call Home — Simple beginnings, beautiful memories.",
        "image"
    ],
    [
        `${MEDIA_URL}wemmbow.png`,
        "After Dark — Where warm lights meet mysterious nights.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-07_16.21.47.png`,
        "Lantern-lit Moments — A quiet moment together, warmed by the glow of home.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-07_16.49.39.png`,
        "The Harbor Haven — A seaside village where every home has a view.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-07_17.14.49.png`,
        "A Little Love, A Big Adventure — Every moment feels a little more magical when we're together.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-08_13.10.51.png`,
        "The Cathedral in the Rain — A grand refuge beneath a storm-dark sky.",
        "image"
    ],
    [
        `${MEDIA_URL}78560661-e5bc-4295-ac8e-c3ec605632c3.png`,
        "Faces of the Server — Every player brings a story of their own.",
        "image"
    ],
    [
        `${MEDIA_URL}Untitled137_20261115002901.png`,
        "Meet the Team — The dedicated individuals behind Katipunan SMP, working together to create a welcoming, fair, and memorable experience for every player.",
        "image"
    ],
    [
        `${MEDIA_URL}image-20.png`,
        "A Season of Celebration — Gathering beneath the glow of the winter tree.",
        "image"
    ],
    [
        `${MEDIA_URL}2026-11-06T20_23_20.png`,
        "A Moment in Time — Capturing the essence of our community.",
        "image"
    ]
];

galleryItems.forEach(([src, caption, type]) => {
    const item = create("figure", {
        className: "build-gallery-item"
    });

    let media;

    if (type === "video") {
        media = create("video", {
            className: "build-gallery-video",
            attributes: {
                src,
                controls: "",
                preload: "metadata",
                playsinline: ""
            }
        });
    } else {
        media = create("img", {
            attributes: {
                src,
                alt: caption,
                loading: "lazy"
            }
        });
    }

    const figcaption = create("figcaption", {
        text: caption
    });

    add(item, media, figcaption);

    galleryTrack.appendChild(item);
});

add(buildGallery, galleryHeading, galleryTrack);

add(serverContainer, serverHeading, perks);

add(serverSection, serverContainer);

main.appendChild(serverSection);

const discoverSection = create("section", {
    className: "section discover-section",
    id: "discover"
});

const discoverContainer = create("div", {
    className: "container wrap"
});

add(discoverContainer, buildGallery);

add(discoverSection, discoverContainer);

main.appendChild(discoverSection);

const communityPanel = create("div", {
    className: "community-panel how-community",
    id: "community"
});

const communityIntro = create("div", {
    className: "section-intro"
});

add(
    communityIntro,
    create("p", {
        className: "kicker",
        text: "Better together"
    }),
    create("h2", {
        text: "BE PART OF THE COMMUNITY."
    }),
    create("p", {
        text: "Stay connected with the server, meet new players, ask for support, and keep up with everything happening in Katipunan SMP."
    })
);

const communityCallout = create("div", {
    className: "community-callout"
});

const communityLabel = create("div", {
    className: "rank-label",
    text: "OFFICIAL DISCORD"
});

const communityName = create("h3", {
    className: "rank-name",
    text: "YOUR KATIPUNAN SMP CONTACT."
});

const communityDescription = create("p", {
    text: "Join our Discord for community updates, support, and information about premium ranks."
});

const discordButton = create("a", {
    className: "button discord-button",
    attributes: {
        href: "https://discord.gg/katipunansmp",
        target: "_blank",
        rel: "noopener noreferrer"
    },
    text: "Join the Discord ↗"
});

const boosterNote = create("p", {
    className: "booster-note",
    text: "Boost the server with an active one-month Nitro subscription to earn the Booster rank."
});

add(
    communityCallout,
    communityLabel,
    communityName,
    communityDescription,
    discordButton,
    boosterNote
);

add(communityPanel, communityIntro, communityCallout);

const ranksSection = create("section", {
    className: "section",
    id: "ranks"
});

const ranksContainer = create("div", {
    className: "container wrap"
});

const ranksHeading = create("div", {
    className: "section-heading"
});

add(
    ranksHeading,
    create("p", {
        className: "kicker",
        text: "Play, earn, rank up"
    }),
    create("h2", {
        text: "GRINDABLE RANKS."
    }),
    create("p", {
        className: "section-intro",
        text: "Start at Default and work your way up: Default → Bronze → Silver → Gold → Crystal. Earn each rank with playtime, in-game challenges, and money."
    })
);

const grindRankGrid = create("div", {
    className: "grind-rank-grid"
});

const grindRanks = [
    {
        name: "Bronze",
        time: "72 HOURS",
        requirements: [
            ["Travel blocks", "1,000"],
            ["Zombies", "100"],
            ["Skeletons", "50"],
            ["Blocks mined", "25,000"]
        ],
        cost: "$5M"
    },
    {
        name: "Silver",
        time: "6 DAYS",
        requirements: [
            ["Travel blocks", "5,000"],
            ["Creepers", "50"],
            ["Zombies", "200"],
            ["Blazes", "30"],
            ["Blocks mined", "50,000"]
        ],
        cost: "$10M"
    },
    {
        name: "Gold",
        time: "14 DAYS",
        requirements: [
            ["Travel blocks", "10,000"],
            ["Husks", "50"],
            ["Slimes", "30"],
            ["Withers", "3"],
            ["Blocks mined", "75,000"]
        ],
        cost: "$20M"
    },
    {
        name: "Crystal",
        time: "28 DAYS",
        requirements: [
            ["Wardens", "10"],
            ["Ender Dragons", "5"],
            ["Withers", "10"],
            ["Blocks mined", "100,000"]
        ],
        cost: "$40M"
    }
];

grindRanks.forEach(rank => {
    const card = create("article", {
        className: "grind-rank-card"
    });

    const label = create("div", {
        className: "rank-label",
        text: rank.time
    });

    const name = create("h3", {
        className: "rank-name",
        text: rank.name
    });

    const requirements = create("ul", {
        className: "grind-requirements"
    });

    rank.requirements.forEach(([labelText, value]) => {
        const item = create("li");

        const labelElement = create("span", {
            text: labelText
        });

        const valueElement = create("strong", {
            text: value
        });

        add(item, labelElement, valueElement);

        requirements.appendChild(item);
    });

    const cost = create("div", {
        className: "grind-cost"
    });

    add(
        cost,
        create("span", {
            text: "COST"
        }),
        create("strong", {
            text: rank.cost
        })
    );

    add(card, label, name, requirements, cost);

    grindRankGrid.appendChild(card);
});

const premiumHeading = create("div", {
    className: "section-heading rank-subsection-heading"
});

const premiumIntro = create("p", {
    className: "section-intro"
});

add(
    premiumHeading,
    create("p", {
        className: "kicker",
        text: "Choose your upgrade"
    }),
    create("h2", {
        text: "OPTIONAL PREMIUM RANKS."
    })
);

const premiumDiscord = create("a", {
    className: "inline-link",
    attributes: {
        href: "https://discord.gg/katipunansmp",
        target: "_blank",
        rel: "noopener noreferrer"
    },
    text: "Discord"
});

add(
    premiumIntro,
    "Contact us through our ",
    premiumDiscord,
    " for Donator+ and Donatormax details."
);

const premiumRankGrid = create("div", {
    className: "premium-rank-grid"
});

const premiumRanks = [
    {
        name: "Donator+",
        price: "₱250",
        duration: "1 MONTH",
        description: "A solid upgrade for players who want more convenience, storage, and useful commands.",
        perks: [
            "8 homes",
            "15 player vaults (storage)",
            "5% /shop discount",
            "10 auction house items",
            "/kit Donator+",
            "20 voting keys",
            "30 Pinata keys",
            "7 Legendary keys",
            "5 Mythic keys"
        ],
        commands: [
            "/repair",
            "/nick",
            "/chatcolor",
            "/feed",
            "/ptime",
            "/workbench",
            "/ender",
            "/anvil",
            "/stonecutter",
            "/loom",
            "/grindstone",
            "/cartography"
        ]
    },
    {
        name: "Donatormax",
        price: "₱500",
        duration: "1 MONTH",
        description: "The full premium upgrade for players looking for the most convenience and additional server perks.",
        perks: [
            "15 homes",
            "25 player vaults",
            "10% /shop discount",
            "15 auction house items",
            "/kit Donatormax (weekly)",
            "20 voting keys",
            "35 Pinata keys",
            "20 Legendary keys",
            "16 Mythic keys"
        ],
        commands: [
            "/claimfly",
            "/nick",
            "/repair",
            "/chatcolor",
            "/feed",
            "/ptime",
            "/workbench",
            "/ender",
            "/anvil",
            "/stonecutter",
            "/loom",
            "/grindstone",
            "/cartography"
        ]
    }
];

premiumRanks.forEach((rank, index) => {
    const column = create("div", {
        className: "premium-rank-column"
    });

    const card = create("article", {
        className: index === 1
            ? "rank-card featured"
            : "rank-card"
    });

    const label = create("div", {
        className: "rank-label",
        text: "PREMIUM RANK"
    });

    const name = create("h3", {
        className: "rank-name",
        text: rank.name
    });

    const price = create("div", {
        className: "rank-price"
    });

    const duration = create("span", {
        text: ` / ${rank.duration}`
    });

    add(price, rank.price, duration);

    const description = create("p", {
        className: "rank-description",
        text: rank.description
    });

    const perksHeading = create("h4", {
        className: "perk-heading",
        text: "PERKS & FREEBIES"
    });

    const perksList = create("ul", {
        className: "rank-perks"
    });

    rank.perks.forEach(perk => {
        const item = create("li");

        const code = create("code", {
            text: perk
        });

        item.appendChild(code);

        perksList.appendChild(item);
    });

    const commandHeading = create("h4", {
        className: "perk-heading",
        text: "COMMANDS"
    });

    const commandList = create("ul", {
        className: "command-list"
    });

    rank.commands.forEach(command => {
        const item = create("li");

        const code = create("code", {
            text: command
        });

        item.appendChild(code);

        commandList.appendChild(item);
    });

    const getRankButton = create("a", {
        className: "button",
        attributes: {
            href: "https://discord.gg/katipunansmp",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        text: "Get this rank ↗"
    });

    const finePrint = create("p", {
        className: "fine-print",
        text: "Premium ranks are optional and are not required to enjoy the server."
    });

    add(
        card,
        label,
        name,
        price,
        description,
        perksHeading,
        perksList,
        commandHeading,
        commandList,
        getRankButton,
        finePrint
    );

    column.appendChild(card);

    premiumRankGrid.appendChild(column);
});

add(
    ranksContainer,
    ranksHeading,
    grindRankGrid,
    premiumHeading,
    premiumIntro,
    premiumRankGrid
);

add(ranksSection, ranksContainer);

main.appendChild(ranksSection);

const howSection = create("section", {
    className: "section",
    id: "how-to-buy"
});

const howContainer = create("div", {
    className: "container wrap"
});

const howHeading = create("div", {
    className: "section-heading"
});

add(
    howHeading,
    create("p", {
        className: "kicker",
        text: "Come join us"
    }),
    create("h2", {
        text: "YOUR NEXT SESSION STARTS HERE."
    }),
    create("p", {
        className: "section-intro",
        text: "Getting started is simple. Join the community, enter the SMP, and start building your own story."
    })
);

const howGrid = create("div", {
    className: "how-grid"
});

const steps = [
    {
        number: "01",
        label: "CONTACT",
        title: "JOIN OUR DISCORD",
        description: "Reach the community and team through our official Discord."
    },
    {
        number: "02",
        label: "SETTLE IN",
        title: "MAKE YOUR MARK",
        description: "Join the SMP, explore the world, meet players, and build your home."
    },
    {
        number: "03",
        label: "LEVEL UP",
        title: "GET A PREMIUM RANK",
        description: "Contact us through Discord for Donator+ or Donatormax details."
    }
];

steps.forEach(stepData => {
    const step = create("article", {
        className: "step"
    });

    add(
        step,
        create("div", {
            className: "step-number",
            text: stepData.number
        }),
        create("p", {
            className: "kicker",
            text: stepData.label
        }),
        create("h3", {
            text: stepData.title
        }),
        create("p", {
            text: stepData.description
        })
    );

    howGrid.appendChild(step);
});

add(howContainer, howHeading, howGrid, communityPanel);

add(howSection, howContainer);

main.appendChild(howSection);

app.appendChild(main);

const footer = create("footer");

const footerContainer = create("div", {
    className: "container wrap footer-inner"
});

const footerBrand = create("a", {
    className: "brand",
    attributes: {
        href: "#home"
    }
});

const footerLogo = create("img", {
    className: "brand-logo",
    attributes: {
        src: `${MEDIA_URL}Katipunan_SMP_Logo_Animated.gif`,
        alt: "Katipunan SMP logo"
    }
});

addImagePlaceholder(footerLogo, "K", "logo");

const footerBrandText = create("span", {
    text: "KATIPUNAN SMP"
});

add(footerBrand, footerLogo, footerBrandText);

const footerNotice = create("p", {
    text: "Not an official Minecraft product or service."
});

const footerLinks = create("div", {
    className: "footer-links"
});

add(
    footerLinks,
    createNavLink("The server", "#server"),
    createNavLink("Discover", "#discover"),
    createNavLink("Community", "#community"),
    createNavLink("Ranks", "#ranks"),
    create("a", {
        attributes: {
            href: "https://discord.gg/katipunansmp",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        text: "Discord ↗"
    })
);

add(footerContainer, footerBrand, footerNotice, footerLinks);

footer.appendChild(footerContainer);

app.appendChild(footer);

function initializeNavigation() {
    const button = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");

    if (!button || !links) return;

    button.addEventListener("click", () => {
        const isOpen = links.classList.toggle("open");

        button.setAttribute("aria-expanded", String(isOpen));

        button.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("open");

            button.setAttribute("aria-expanded", "false");

            button.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}

const typingStyle = document.createElement("style");

typingStyle.textContent = `
    .typing-cursor::after {
        content: "▌";
        display: inline-block;
        color: #f7d778;
        animation: hero-caret-blink 0.7s steps(1) infinite;
    }

    @keyframes hero-caret-blink {
        50% {
            opacity: 0;
        }
    }
`;

document.head.appendChild(typingStyle);

function initializeHeroTyping() {
    const titleLines = [
        {
            element: heroTitleFirst,
            text: "SURVIVE. BUILD."
        },
        {
            element: heroTitleSecond,
            text: "MAKE IT YOURS."
        }
    ];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        titleLines.forEach(({ element, text }) => {
            element.textContent = text;
        });

        return;
    }

    titleLines.forEach(({ element }) => {
        element.textContent = "";
        element.classList.remove("typing-cursor");
    });

    let lineIndex = 0;
    let characterIndex = 0;

    const typeNextCharacter = () => {
        const line = titleLines[lineIndex];

        line.element.classList.add("typing-cursor");

        line.element.textContent += line.text[characterIndex];

        characterIndex++;

        if (characterIndex < line.text.length) {
            window.setTimeout(typeNextCharacter, 85);

            return;
        }

        line.element.classList.remove("typing-cursor");

        lineIndex++;
        characterIndex = 0;

        if (lineIndex < titleLines.length) {
            window.setTimeout(typeNextCharacter, 260);
        }
    };

    typeNextCharacter();
}

function initializeGallery() {
    const track = document.querySelector(".build-gallery-track");

    const buttons = document.querySelectorAll(
        "[data-gallery-direction]"
    );

    if (!track || !buttons.length) return;

    const updateButtons = () => {
        const maxScroll = track.scrollWidth - track.clientWidth;

        buttons.forEach(button => {
            const direction = Number(button.dataset.galleryDirection);

            if (direction < 0) {
                button.disabled = track.scrollLeft <= 0;
            } else {
                button.disabled = track.scrollLeft >= maxScroll - 1;
            }
        });
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = Number(button.dataset.galleryDirection);

            track.scrollBy({
                left: track.clientWidth * direction,
                behavior: "smooth"
            });
        });
    });

    track.addEventListener("scroll", updateButtons);

    window.addEventListener("resize", updateButtons);

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(updateButtons);
    });
}

function initializeFloatingDecor() {
    const layer = create("div", {
        className: "ambient-gifs"
    });

    const glyphs = [
        "✦",
        "✧",
        "❖",
        "◆",
        "✺",
        "⚒",
        "⛏",
        "✹",
        "✴",
        "❋"
    ];

    for (let index = 0; index < 12; index++) {
        const item = create("div", {
            className: "ambient-gif",
            text: glyphs[index % glyphs.length]
        });

        const driftX = `${Math.floor(Math.random() * 180 - 90)}px`;
        const driftY = `${Math.floor(Math.random() * 180 - 90)}px`;

        const driftXAlt = `${Math.floor(Math.random() * 180 - 90)}px`;
        const driftYAlt = `${Math.floor(Math.random() * 180 - 90)}px`;

        item.style.left = `${Math.random() * 100}%`;
        item.style.top = `${Math.random() * 100}%`;

        item.style.setProperty("--drift-x", driftX);
        item.style.setProperty("--drift-y", driftY);

        item.style.setProperty("--drift-x-alt", driftXAlt);
        item.style.setProperty("--drift-y-alt", driftYAlt);

        item.style.setProperty(
            "--duration",
            `${18 + Math.random() * 18}s`
        );

        item.style.setProperty(
            "--sprite-opacity",
            `${0.08 + Math.random() * 0.1}`
        );

        layer.appendChild(item);
    }

    document.body.prepend(layer);
}

initializeNavigation();
initializeHeroTyping();
initializeGallery();
initializeFloatingDecor();