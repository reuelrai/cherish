// src/components/layout/Header.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="flex justify-center items-center h-screen flex-col text-center bg-[#f7f4ef]">
            <h2 className="text-4xl font-semibold">Welcome</h2>
            <p className="mt-4 text-muted-foreground">
                This is a text for a book website called "Cherish"
            </p>

            <button
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => router.push("/pages")}
            >
                Start Reading
            </button>
        </header>
    );
}
