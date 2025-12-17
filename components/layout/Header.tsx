// src/components/layout/Header.tsx
export default function Header() {
    return (
        <header className="flex justify-center items-center h-screen flex-col text-center">
            <h2 className="text-4xl font-semibold">Welcome</h2>
            <p className="mt-4 text-muted-foreground">
                Building ideas into reality.
            </p>
        </header>
    );
}
