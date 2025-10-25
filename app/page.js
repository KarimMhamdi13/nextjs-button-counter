"use client";

import Counter from "../components/Counter";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Next.js Button Counter</h1>

      <section style={{ margin: "2rem 0" }}>
        <h2>Default Counter</h2>
        <Counter />
      </section>

      <section style={{ margin: "2rem 0" }}>
        <h2>Custom Counter (start at 5, step 2)</h2>
        <Counter initialCount={5} initialStep={2} />
      </section>
    </main>
  );
}
