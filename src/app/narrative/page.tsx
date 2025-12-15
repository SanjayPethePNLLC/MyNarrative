"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { generateNarrative, NarrativeData } from "@/lib/narrative";
import { useRouter } from "next/navigation";

export default function NarrativePage() {
    const { user, loading: authLoading, logout } = useAuth();
    const [narrative, setNarrative] = useState<NarrativeData | null>(null);
    const [weaving, setWeaving] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/");
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user) {
            generateNarrative(user).then((data) => {
                setNarrative(data);
                setWeaving(false);
            });
        }
    }, [user]);

    if (authLoading || !user) return null; // Or a spinner

    return (
        <main className="container" style={{ padding: '4rem 1rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>Narrative Weaver</h2>
                <button onClick={logout} style={{ background: 'transparent', border: '1px solid var(--text-secondary)', color: 'var(--text-secondary)', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                    Logout as {user.displayName}
                </button>
            </header>

            <section style={{ maxWidth: '800px', margin: '0 auto' }}>
                {weaving ? (
                    <div className="card animate-fade-in" style={{ textAlign: 'center', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨</div>
                            <p>Consulting the archives...</p>
                            <br />
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Analyzing public signals for {user.email}...</p>
                        </div>
                    </div>
                ) : (
                    <div className="card animate-fade-in">
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', background: 'linear-gradient(to right, #9d4edd, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {narrative?.title}
                        </h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem', whiteSpace: 'pre-wrap' }}>
                            {narrative?.content}
                        </p>

                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Sources Detected</h3>
                            <ul style={{ listStyle: 'none' }}>
                                {narrative?.sources.map((source, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '10px', color: 'var(--accent-primary)' }}>●</span>
                                        {source.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
