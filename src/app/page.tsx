import Image from "next/image";
import Banner from "./components/homepage/Banner";
import Library from "./components/homepage/Library";
import { Suspense } from "react";
import Loading from "./components/shared/Loading";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Banner />
        <Library />
      </Suspense>
    </div>

  );
}
