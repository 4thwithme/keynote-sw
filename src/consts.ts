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
	site: "https://4thwithme.github.io/",
};

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
	Introduction: [
		{ text: "1. Intro", link: "keynotesw/introduction" },
		{ text: "2. Hot products", link: "keynotesw/cool-story" },
		{ text: "3. Hot products gif", link: "keynotesw/cool-story-2" },
		{ text: "4. What is Shared Worker?", link: "keynotesw/shared-worker-1" },
		{ text: "5. Shared Worker Meme", link: "keynotesw/shared-worker-2" },
	],
	Advantages: [{ text: "6. List", link: "keynotesw/adv-1" }],
	Disadvantages: [
		{ text: "7. List", link: "keynotesw/disadv-1" },
		{ text: "8. Logs. ", link: "keynotesw/disadv-2" },
		{ text: "9. Support", link: "keynotesw/disadv-3" },
	],
	Demo: [
		{ text: "10. Small Demo 1", link: "keynotesw/demo-1" },
		{ text: "11. Small Demo 2", link: "keynotesw/demo-2" },
	],
	"Swag + SW": [
		{ text: "12. Sophisticated diagram", link: "keynotesw/it-0" },
		{ text: "13. Iteration 1", link: "keynotesw/it-1" },
		{ text: "14. Iteration 2", link: "keynotesw/it-2" },
		{ text: "15. Iteration 3", link: "keynotesw/it-3" },
		{ text: "16. Iteration 4", link: "keynotesw/it-4" },
		{ text: "17. Iteration 5", link: "keynotesw/it-5" },
	],
	End: [
		{ text: "18. Conclusions", link: "keynotesw/conclusions-1" },
		{ text: "19. Announcement", link: "keynotesw/end-1" },
		{ text: "20. Questions", link: "keynotesw/end-2" },
	],
};
