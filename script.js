const app = document.createElement("div");

app.id = "app";

document.body.appendChild(app);

const create = (tag, options = {}, ...children) => {
    const element = document.createElement(tag);

    if (options.className) {
        element.className = options.className;
    }

    if (options.id) {
        element.id = options.id;
    }

    if (options.text !== undefined) {
        element.textContent = options.text;
    }

    if (options.attributes) {
        Object.entries(options.attributes).forEach(([name, value]) => {
            element.setAttribute(name, value);
        });
    }

    children.flat(Infinity).forEach(child => {
        if (child === null || child === undefined) {
            return;
        }

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
        if (child === null || child === undefined) {
            return;
        }

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

document.head.append(
    googlePreconnect,
    fontPreconnect
);

addStylesheet(
    "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Press+Start+2P&display=swap"
);

addStylesheet(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    {
        integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
        crossorigin: "anonymous"
    }
);

addStylesheet("styles.css");

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
        src: "image/katipunan-logo.png",
        alt: "Katipunan SMP logo"
    }
});

const brandText = create("span", {
    text: "KATIPUNAN SMP"
});

add(
    brand,
    brandLogo,
    brandText
);

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

const createNavLink = (
    text,
    href,
    className = ""
) => {
    return create("a", {
        className,
        attributes: {
            href
        },
        text
    });
};

add(
    navLinks,
    createNavLink(
        "The server",
        "#server"
    ),
    createNavLink(
        "Discover",
        "#discover"
    ),
    createNavLink(
        "Community",
        "#community"
    ),
    createNavLink(
        "Ranks",
        "#ranks"
    ),
    createNavLink(
        "Join the adventure ↓",
        "#how-to-buy",
        "nav-cta"
    )
);

add(
    nav,
    brand,
    menuToggle,
    navLinks
);

add(
    header,
    nav
);

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

const eyebrow = create("div", {
    className: "eyebrow"
});

const onlineDot = create("span", {
    className: "online-dot"
});

add(
    eyebrow,
    onlineDot,
    "YOUR SMP ADVENTURE STARTS HERE"
);

const heroTitle = create("h1");

const heroTitleFirst = create("span", {
    text: "SURVIVE. BUILD."
});

const heroTitleSecond = create("span", {
    text: "MAKE IT YOURS."
});

add(
    heroTitle,
    heroTitleFirst,
    create("br"),
    heroTitleSecond
);

const heroCopy = create("p", {
    className: "hero-copy",
    text:
        "A community-driven Minecraft survival experience where you can build, explore, trade, and create your own story."
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

add(
    heroActions,
    exploreButton,
    viewRanksButton
);

const serverIpBox = create("div", {
    className: "server-ip-box"
});

serverIpBox.style.marginTop = "30px";
serverIpBox.style.padding = "18px 22px";
serverIpBox.style.border = "1px solid rgba(230, 185, 79, 0.45)";
serverIpBox.style.background = "rgba(18, 14, 8, 0.72)";
serverIpBox.style.width = "fit-content";
serverIpBox.style.maxWidth = "100%";
serverIpBox.style.boxShadow =
    "0 10px 35px rgba(0, 0, 0, 0.2)";

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

add(
    serverIpBox,
    serverIpLabel,
    serverIp,
    serverIpHint
);

serverIp.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(
            "play.katipunansmp.com"
        );

        serverIpHint.textContent =
            "Copied to clipboard!";

        serverIp.style.color = "#ffe9a3";

        setTimeout(() => {
            serverIpHint.textContent =
                "Click to copy";

            serverIp.style.color =
                "#f7d778";
        }, 1500);
    } catch {
        serverIpHint.textContent =
            "play.katipunansmp.com";
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
    eyebrow,
    heroTitle,
    heroCopy,
    heroActions,
    serverIpBox,
    heroTags
);

add(
    hero,
    heroContainer
);

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
        text:
            "Build your home, explore the world, trade with other players, and find your place in a growing survival community."
    })
);

const perks = create("div", {
    className: "perk-grid"
});

const perkData = [
    {
        icon: "✦",
        title: "Survival & Building",
        description:
            "Explore a survival world where your imagination decides what comes next."
    },
    {
        icon: "⌂",
        title: "Set Your Home",
        description:
            "Claim your space, build your base, and make your corner of the world yours."
    },
    {
        icon: "◆",
        title: "Player Economy",
        description:
            "Trade with other players and take part in a player-driven economy."
    },
    {
        icon: "★",
        title: "Vote & Earn Rewards",
        description:
            "Support the server through voting and earn useful rewards along the way."
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

    add(
        perk,
        icon,
        title,
        description
    );

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

add(
    galleryControls,
    previousButton,
    nextButton
);

add(
    galleryNavigation,
    galleryHint,
    galleryControls
);

add(
    galleryHeading,
    galleryTitle,
    galleryNavigation
);

const galleryTrack = create("div", {
    className: "build-gallery-track"
});

const galleryItems = [
    [
        "image/survival-build.png",
        "Golden hour at the pavilion"
    ],
    [
        "image/survival-build-2.png",
        "A grand bridge beneath the floating sword"
    ],
    [
        "image/community-build-3.png",
        "The castle plaza at sunset"
    ],
    [
        "image/community-build-4.png",
        "Rainy cathedral square"
    ],
    [
        "image/community-build-6.png",
        "Cosmetic shopfront"
    ],
    [
        "image/community-build-7.png",
        "Staff lineup showcase"
    ],
    [
        "image/community-build-8.png",
        "Floating sword monument"
    ],
    [
        "image/community-build-10.png",
        "Dream bridge overlook"
    ],
    [
        "image/old-spawn.png",
        "Old spawn"
    ],
    [
        "image/bodyguards.png",
        "Bodyguards"
    ],
    [
        "image/shadow-guardians.png",
        "Shadow Guardians"
    ],
    [
        "image/rainy-house.png",
        "Rainy seaside house"
    ],
    [
        "image/cherry-garden.png",
        "Cherry blossom gathering"
    ],
    [
        "image/cherry-garden-2.png",
        "Cherry garden event"
    ],
    [
        "image/lava-castle.png",
        "Lava fortress"
    ]
];

galleryItems.forEach(
    ([src, caption]) => {
        const item = create("figure", {
            className: "build-gallery-item"
        });

        const image = create("img", {
            attributes: {
                src,
                alt: caption,
                loading: "lazy"
            }
        });

        const figcaption = create("figcaption", {
            text: caption
        });

        add(
            item,
            image,
            figcaption
        );

        galleryTrack.appendChild(item);
    }
);

add(
    buildGallery,
    galleryHeading,
    galleryTrack
);

add(
    serverContainer,
    serverHeading,
    perks
);

add(
    serverSection,
    serverContainer
);

main.appendChild(serverSection);

const discoverSection = create("section", {
    className: "section discover-section",
    id: "discover"
});

const discoverContainer = create("div", {
    className: "container wrap"
});

add(
    discoverContainer,
    buildGallery
);

add(
    discoverSection,
    discoverContainer
);

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
        text:
            "Stay connected with the server, meet new players, ask for support, and keep up with everything happening in Katipunan SMP."
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
    text:
        "Join our Discord for community updates, support, and information about premium ranks."
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
    text:
        "Boost the server with an active one-month Nitro subscription to earn the Booster rank."
});

add(
    communityCallout,
    communityLabel,
    communityName,
    communityDescription,
    discordButton,
    boosterNote
);

add(
    communityPanel,
    communityIntro,
    communityCallout
);

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
        text:
            "Start at Default and work your way up: Default → Bronze → Silver → Gold → Crystal. Earn each rank with playtime, in-game challenges, and money."
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

    rank.requirements.forEach(
        ([labelText, value]) => {
            const item = create("li");

            const labelElement = create("span", {
                text: labelText
            });

            const valueElement = create("strong", {
                text: value
            });

            add(
                item,
                labelElement,
                valueElement
            );

            requirements.appendChild(item);
        }
    );

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

    add(
        card,
        label,
        name,
        requirements,
        cost
    );

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
    className: "row g-4"
});

const premiumRanks = [
    {
        name: "Donator+",
        price: "₱250",
        duration: "1 MONTH",
        description:
            "A solid upgrade for players who want more convenience, storage, and useful commands.",
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
        description:
            "The full premium upgrade for players looking for the most convenience and additional server perks.",
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

premiumRanks.forEach(
    (rank, index) => {
        const column = create("div", {
            className: "col-md-6"
        });

        const card = create("article", {
            className:
                index === 1
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

        add(
            price,
            rank.price,
            duration
        );

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
            text:
                "Premium ranks are optional and are not required to enjoy the server."
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
    }
);

add(
    ranksContainer,
    ranksHeading,
    grindRankGrid,
    premiumHeading,
    premiumIntro,
    premiumRankGrid
);

add(
    ranksSection,
    ranksContainer
);

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
        text:
            "Getting started is simple. Join the community, enter the SMP, and start building your own story."
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
        description:
            "Reach the community and team through our official Discord."
    },
    {
        number: "02",
        label: "SETTLE IN",
        title: "MAKE YOUR MARK",
        description:
            "Join the SMP, explore the world, meet players, and build your home."
    },
    {
        number: "03",
        label: "LEVEL UP",
        title: "GET A PREMIUM RANK",
        description:
            "Contact us through Discord for Donator+ or Donatormax details."
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

add(
    howContainer,
    howHeading,
    howGrid,
    communityPanel
);

add(
    howSection,
    howContainer
);

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
        src: "image/katipunan-logo.png",
        alt: "Katipunan SMP logo"
    }
});

const footerBrandText = create("span", {
    text: "KATIPUNAN SMP"
});

add(
    footerBrand,
    footerLogo,
    footerBrandText
);

const footerNotice = create("p", {
    text: "Not an official Minecraft product or service."
});

const footerLinks = create("div", {
    className: "footer-links"
});

add(
    footerLinks,
    createNavLink(
        "The server",
        "#server"
    ),
    createNavLink(
        "Discover",
        "#discover"
    ),
    createNavLink(
        "Community",
        "#community"
    ),
    createNavLink(
        "Ranks",
        "#ranks"
    ),
    create("a", {
        attributes: {
            href: "https://discord.gg/katipunansmp",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        text: "Discord ↗"
    })
);

add(
    footerContainer,
    footerBrand,
    footerNotice,
    footerLinks
);

footer.appendChild(footerContainer);
app.appendChild(footer);

function initializeNavigation() {
    const button = document.querySelector(
        ".menu-toggle"
    );

    const links = document.querySelector(
        ".nav-links"
    );

    if (!button || !links) {
        return;
    }

    button.addEventListener(
        "click",
        () => {
            const isOpen =
                links.classList.toggle("open");

            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            button.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        }
    );

    links.querySelectorAll("a").forEach(
        link => {
            link.addEventListener(
                "click",
                () => {
                    links.classList.remove(
                        "open"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    button.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );
                }
            );
        }
    );
}

function initializeGallery() {
    const track = document.querySelector(
        ".build-gallery-track"
    );

    const buttons = document.querySelectorAll(
        "[data-gallery-direction]"
    );

    if (!track || !buttons.length) {
        return;
    }

    const updateButtons = () => {
        const maxScroll =
            track.scrollWidth -
            track.clientWidth;

        buttons.forEach(button => {
            const direction = Number(
                button.dataset.galleryDirection
            );

            if (direction < 0) {
                button.disabled =
                    track.scrollLeft <= 0;
            } else {
                button.disabled =
                    track.scrollLeft >=
                    maxScroll - 1;
            }
        });
    };

    buttons.forEach(button => {
        button.addEventListener(
            "click",
            () => {
                const direction = Number(
                    button.dataset.galleryDirection
                );

                track.scrollBy({
                    left:
                        track.clientWidth *
                        0.85 *
                        direction,
                    behavior: "smooth"
                });
            }
        );
    });

    track.addEventListener(
        "scroll",
        updateButtons
    );

    window.addEventListener(
        "resize",
        updateButtons
    );

    updateButtons();
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

    for (
        let index = 0;
        index < 12;
        index++
    ) {
        const item = create("div", {
            className: "ambient-gif",
            text:
                glyphs[
                    index % glyphs.length
                ]
        });

        const driftX =
            `${Math.floor(
                Math.random() * 180 - 90
            )}px`;

        const driftY =
            `${Math.floor(
                Math.random() * 180 - 90
            )}px`;

        const driftXAlt =
            `${Math.floor(
                Math.random() * 180 - 90
            )}px`;

        const driftYAlt =
            `${Math.floor(
                Math.random() * 180 - 90
            )}px`;

        item.style.left =
            `${Math.random() * 100}%`;

        item.style.top =
            `${Math.random() * 100}%`;

        item.style.setProperty(
            "--drift-x",
            driftX
        );

        item.style.setProperty(
            "--drift-y",
            driftY
        );

        item.style.setProperty(
            "--drift-x-alt",
            driftXAlt
        );

        item.style.setProperty(
            "--drift-y-alt",
            driftYAlt
        );

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
initializeGallery();
initializeFloatingDecor();