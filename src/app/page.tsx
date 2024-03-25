import Hero from "@/components/layout/Hero";


export default function Home() {
  return (
    <main className="justify-center items-center h-[100vh]">
      <Hero />
      <div className="h-full flex w-full mx-auto justify-center items-center flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-wide">
          RULES
        </h1>
        <ul className="list-disc flex-col items-center justify-center text-start list-item">
          <li>
            no real names or addresses
          </li>
          <li>
            no spam/advertising content
          </li>
          <li>
            obviously don&#39;t break any laws
          </li>
          <li>
            maintain everyone&#39;s anonymity 
          </li>
        </ul>
      </div>
    </main>
  );
}
