// src/api/projects.js
export async function GET() {
  const projects = [
    {
      id: 1,
      name: "Website Portfolio",
      description: "Sviluppo del mio sito personale con Astro e TailwindCSS",
      tech: ["Astro", "Tailwind", "TypeScript"],
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Backend Node.js con integrazione Stripe",
      tech: ["Node.js", "Express", "Stripe"],
    },
    {
      id: 3,
      name: "Dashboard Analytics",
      description: "App React per visualizzare KPI e grafici in tempo reale",
      tech: ["React", "Chart.js", "API REST"],
    },
  ];

  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
}
