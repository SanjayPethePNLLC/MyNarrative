import { User } from "firebase/auth";

export interface NarrativeSource {
    name: string;
    url: string;
}

export interface NarrativeData {
    title: string;
    content: string;
    sources: NarrativeSource[];
}

export async function generateNarrative(user: User): Promise<NarrativeData> {
    // Simulate "API" delay and "OSINT" search
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const name = user.displayName || "The Traveler";
    const email = user.email || "unknown origin";
    const names = name.split(" ");
    const firstName = names[0];

    const stories: string[] = [
        `In the vast digital expanse, a figure known as ${name} emerged. Tracing their origins to the domain of ${email.split('@')[1]}, digital footprints suggest a journey of curiosity. Known in some circles simply as "${firstName}", their reputation precedes them.`,
        `The archives speak of ${name}, a weaver of code and connector of ideas. The signals intercepted from ${email} verify their identity. It is said that they traverse the web with a unique signature, leaving positive impressions on the nodes they visit.`,
        `A legend among the data streams, ${name} has been identified. With credentials linked to the Great Google Provider, they have accessed the Narrative Weaver. Their path is one of discovery, and the data suggests a future full of potential.`
    ];

    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    return {
        title: `The Legend of ${firstName}`,
        content: randomStory,
        sources: [
            { name: "Google Identity Services", url: "https://myaccount.google.com/" },
            { name: "Public Digital Ledger (Simulated)", url: "#" },
            { name: "The Ether", url: "#" }
        ]
    };
}
