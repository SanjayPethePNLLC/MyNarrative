import "./globals.css";
import { AuthProvider } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Narrative Weaver",
    description: "Weaving your digital story from the threads of the web.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
