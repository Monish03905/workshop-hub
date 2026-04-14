import { Link } from "react-router-dom";
import type { Workshop } from "@/data/workshops";

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard = ({ workshop }: WorkshopCardProps) => (
  <div className="bg-background p-8 lg:p-10 hover:bg-secondary transition-colors group">
    <div className="flex justify-between mb-10">
      <span className="text-xs tabular-nums text-primary">{workshop.dateRange}</span>
      {workshop.isLive && (
        <span className="size-2 rounded-full bg-primary animate-pulse" />
      )}
    </div>
    <h3 className="text-xl font-display mb-4 group-hover:text-primary transition-colors">
      {workshop.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-8">
      Led by {workshop.instructor} · {workshop.enrolled} Enrolled
    </p>
    <div className="flex justify-between items-center pt-6 border-t border-border/30">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
        {workshop.category}
      </span>
      <Link to={`/workshop/${workshop.id}`} className="text-xs uppercase tracking-widest text-primary font-semibold hover:underline">
        View Details
      </Link>
    </div>
  </div>
);

export default WorkshopCard;
