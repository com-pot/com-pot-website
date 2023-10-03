import { indexExpanded } from '$lib/url';

/** @type {import('./$types').PageLoad} */
export async function load(e) {
    const [
        apps,
    ] = await Promise.all([
        loadApps()
    ])

    return {
        apps,
        expanded: indexExpanded(apps, e.url),
    }
}

async function loadApps() {
    return [
        {
            name: "th",
            version: "0.1.0",
            title: "Treasure hunt",
        },
        {
            name: "it",
            version: "0.1.0",
            title: "Infotainment",
            ui: {
                height: 0.6,
            },
        },
        {
            name: "lo",
            version: "0.1.0",
            title: "Lodging",
            ui: {
                height: 0.2,
            },
        },
        {
            name: "tr",
            version: "0.1.0",
            title: "Trippy",
        },
    ]
}
