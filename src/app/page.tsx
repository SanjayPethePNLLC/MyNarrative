"use client";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user, login, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/narrative");
        }
    }, [user, router]);

    return (
        <main className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <div className="card animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #ffd700, #9d4edd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    My Narrative
                </h1>
                <p className="delay-1 animate-fade-in" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Your digital footprint tells a story. Let us weave it for you.
                </p>

                {loading ? (
                    <div className="delay-2 animate-fade-in">Initializing Weaving Protocol...</div>
                ) : (
                    <button onClick={login} className="btn delay-2 animate-fade-in">
                        Begin Journey with Google
                    </button>
                )}
            </div>
        </main>
    );
}
