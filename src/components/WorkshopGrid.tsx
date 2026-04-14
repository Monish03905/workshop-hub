import { workshops } from "@/data/workshops";
import WorkshopCard from "./WorkshopCard";

const WorkshopGrid = () => (
  <section id="workshops" className="mb-24 lg:mb-32">
    <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
      <h2 className="text-3xl font-display italic">Registry Management</h2>
      <span className="text-sm uppercase tracking-widest text-primary">
        {workshops.length} Active Sessions
      </span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
      {workshops.map((ws) => (
        <WorkshopCard key={ws.id} workshop={ws} />
      ))}
    </div>
  </section>
);

export default WorkshopGrid;
