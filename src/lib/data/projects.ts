export type ProjectType = 'game' | 'resource' | 'other';
export type ProjectPlatform = 'roblox' | 'website' | 'github';
export type Project = {
	id: string;
	displayName: string;
	bannerSrc: string;
	type: ProjectType;
	platform: ProjectPlatform;
	href: string;
	creationStamp: number;
};

import poserBanner from '$lib/img/projects/Poser.png';
import onyxUiBanner from '$lib/img/projects/OnyxUI.png';
import neoHotbarBanner from '$lib/img/projects/NeoHotbar.png';
import avafeMeBanner from '$lib/img/projects/AvafeMe.png';
import avafeMev1Banner from '$lib/img/projects/AvafeMev1.png';
import climbOfChaosBanner from '$lib/img/projects/ClimbOfChaos.png';
import kittyDashBanner from '$lib/img/projects/KittyDash.png';
import devcember2023Banner from '$lib/img/projects/Devcember2023.png';
import devcember2022Banner from '$lib/img/projects/Devcember2022.png';
import scribelBanner from '$lib/img/projects/Scribel.png';
import RoroomsBanner from '$lib/img/projects/Rorooms.png';
import LonekaBanner from '$lib/img/projects/Loneka.png';
import AvalogBanner from '$lib/img/projects/Avalog.png';
import MoonletsBanner from '$lib/img/projects/Moonlets.png';

export const projects: Project[] = [
	{
		id: 'Rorooms',
		displayName: 'Rorooms',
		type: 'resource',
		platform: 'website',
		href: 'https://Rorooms.com',
		creationStamp: 1730832374,
		bannerSrc: RoroomsBanner
	},
	{
		id: 'Loneka',
		displayName: 'Loneka',
		type: 'other',
		platform: 'website',
		href: 'https://loneka.com',
		creationStamp: 1660708800,
		bannerSrc: LonekaBanner
	},
	{
		id: 'Poser',
		displayName: 'Poser!',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/12716101148/',
		creationStamp: 1678223058,
		bannerSrc: poserBanner
	},
	{
		id: 'OnyxUI',
		displayName: 'OnyxUI',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/OnyxUI',
		creationStamp: 1683691200,
		bannerSrc: onyxUiBanner
	},
	{
		id: 'Avalog',
		displayName: 'Avalog',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/Avalog',
		creationStamp: 1732640648,
		bannerSrc: AvalogBanner
	},
	{
		id: 'Scribel',
		displayName: 'Scribel',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/18609236852',
		creationStamp: 1724869260,
		bannerSrc: scribelBanner
	},
	{
		id: 'NeoHotbar',
		displayName: 'NeoHotbar',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/ImAvafe/NeoHotbar',
		creationStamp: 1663646400,
		bannerSrc: neoHotbarBanner
	},
	{
		id: 'ClimbOfChaos',
		displayName: 'Climb Of Chaos',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/16882394262',
		creationStamp: 1711425600,
		bannerSrc: climbOfChaosBanner
	},
	{
		id: 'KittyDash',
		displayName: 'Kitty Dash',
		type: 'game',
		platform: 'roblox',
		href: 'https://www.roblox.com/games/14958801951',
		creationStamp: 1696305600,
		bannerSrc: kittyDashBanner
	},
	{
		id: 'Moonlets',
		displayName: 'Moonlets',
		type: 'resource',
		platform: 'github',
		href: 'https://github.com/imavafe/moonlets',
		creationStamp: 1710993600,
		bannerSrc: MoonletsBanner
	},

	{
		id: 'AvafeMev2',
		displayName: 'avafe.me v2',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io',
		creationStamp: 1720152000,
		bannerSrc: avafeMeBanner
	},
	{
		id: 'Devcember2023',
		displayName: 'Devcember 2023',
		type: 'other',
		platform: 'website',
		href: 'https://devcember.org/',
		creationStamp: 1701406800,
		bannerSrc: devcember2023Banner
	},
	{
		id: 'Devcember2022',
		displayName: 'Devcember 2022',
		type: 'other',
		platform: 'website',
		href: 'https://devforum.roblox.com/t/25-days-of-devcember-day-25/2069708',
		creationStamp: 1669870800,
		bannerSrc: devcember2022Banner
	},
	{
		id: 'AvafeMev1',
		displayName: 'avafe.me v1',
		type: 'other',
		platform: 'github',
		href: 'https://github.com/ImAvafe/imavafe.github.io-v1',
		creationStamp: 1666065600,
		bannerSrc: avafeMev1Banner
	}
];
