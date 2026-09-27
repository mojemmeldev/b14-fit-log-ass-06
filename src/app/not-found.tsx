import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#0D0F12] px-4 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black text-[#B6FF00] sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
          PAGE NOT FOUND
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7F8792] sm:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/workouts"
            className="rounded-full bg-[#B6FF00] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#A8EC00]"
          >
            Browse Workouts
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#343A46] px-7 py-3 text-sm font-medium text-white transition hover:border-[#B6FF00] hover:text-[#B6FF00]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;