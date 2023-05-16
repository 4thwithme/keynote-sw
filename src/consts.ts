export const SITE = {
  title: "Shared Worker",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assetshttps://img.buzzfeed.com/buzzfeed-static/static/2019-11/22/19/campaign_images/cb299e08724d/this-woman-yelling-at-a-cat-meme-is-still-my-favo-2-7263-1574449806-0_dblwide.jpg/banner.png?raw=true",
    alt:
      "Shared worker presentation" +
      "from ANDRII POPENKO. Github: https://github.com/4thwithme",
  },
  site: "https://4thwithme.dev/",
};

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
  Introduction: [
    { text: "1. Intro", link: "introduction" },
    { text: "2. Hot products", link: "cool-story" },
    { text: "3. Hot products gif", link: "cool-story-2" },
    { text: "4. What is Shared Worker?", link: "shared-worker" },
  ],
  Advantages: [{ text: "5. List", link: "adv-1" }],
  Disadvantages: [
    { text: "6. List", link: "disadv-1" },
    { text: "7. Logs. ", link: "disadv-2" },
    { text: "8. Support", link: "disadv-3" },
  ],
  Demo: [
    { text: "9. Small Demo 1", link: "demo-1" },
    { text: "10. Small Demo 2", link: "demo-2" },
  ],
  "Swag + SW": [
    { text: "11. Sophisticated diagram", link: "it-0" },
    { text: "12. Iteration 1", link: "it-1" },
    { text: "13. Iteration 2", link: "it-2" },
    { text: "14. Iteration 3", link: "it-3" },
  ],
  Code: [
    { text: "15. SW", link: "code-1" },
    { text: "16. Runner", link: "code-2" },
  ],
  End: [
    { text: "17. Announcement", link: "end-1" },
    { text: "18. Questions", link: "end-2" },
  ],
};
