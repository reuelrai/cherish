export default function Pages() {
    return (
        <main className="min-h-screen bg-[#f7f4ef] flex justify-center px-4 py-16">

            {/* Reading Container */}
            <article className="w-full max-w-3xl bg-white rounded-xl shadow-md px-6 md:px-10 py-12">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
                    Cherish
                </h1>

                {/* Subtitle */}
                <p className="text-center text-gray-500 mb-12 italic">
                    A quiet space to read and feel
                </p>

                {/* Content */}
                <section className="space-y-6 text-lg leading-relaxed text-gray-800 font-serif">
                    <p>
                        Some stories are not meant to be rushed.
                        They are meant to be felt — slowly, gently, deeply.
                    </p>

                    <p>
                        This space exists so you can pause the noise of the world
                        and listen to words that were written with intention.
                    </p>
                </section>

            </article>
        </main>
    );
}
