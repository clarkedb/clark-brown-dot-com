module.exports = {
    author: "@clarkedb",
    siteTitle: "Clark Brown Portfolio",
    siteShortTitle: "Clark Brown",
    siteDescription: "Problem Solver, Developer, Applied Mathematician, Linux Guy",
    siteUrl: "https://clark-brown.com/",
    siteImage: "/images/code.jpg",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png",
    seoTitleSuffix: "Clark Brown",

    splashScreen: true,

    // Uses rss to json converter: https://rss2json.com/
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40clarkedbrown",
    shownArticles: 3,
    
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/clark-ed-brown/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@clarkedbrown"
        },
        {
            name: "Github",
            url: "https://github.com/clarkedb"
        },
        {
            name: "Instagram",
            url: "https://instagr.am/cebrown8"
        }
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            // {
            //     name: "Articles",
            //     url: "/#articles",
            // },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}