const features = [
  "Conflict-Free Global Syncing",
  "Automated Intellectual Rights Management",
  "Direct-to-Archive Recording Encapsulation",
  "Adaptive Learning Path Generation",
];

const activityLog = [
  { action: "New Registration", detail: "Katherine S. — Zurich" },
  { action: "Material Download", detail: "Module 04: The Dialectic" },
  { action: "Live Stream Started", detail: "Structural Aesthetics" },
  { action: "Assessment Finalized", detail: "Executive Strategy Group B" },
];

const FeaturesSection = () => (
  <section id="features" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-32">
    <div className="flex flex-col justify-center border-l-2 border-primary/20 pl-8 lg:pl-12">
      <h2 className="text-4xl font-display mb-6">
        Interactive Scheduling Matrix
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
        Our scheduling tool ensures attendees never experience cognitive fatigue,
        balancing theory, practice, and reflection based on attention data from
        thousands of previous sessions.
      </p>
      <ul className="space-y-4">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-4">
            <span className="size-1 bg-primary rounded-full" />
            <span className="text-sm uppercase tracking-wider text-foreground/80">
              {f}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-secondary p-1 border border-border">
      <div className="bg-background border border-border/50 p-8 lg:p-12">
        <div className="flex justify-between mb-8">
          <span className="text-primary font-display text-lg italic uppercase tracking-widest">
            Activity Logs
          </span>
          <span className="text-[10px] text-muted-foreground tabular-nums">
            LIVE FEED
          </span>
        </div>
        <div className="space-y-0">
          {activityLog.map((entry) => (
            <div
              key={entry.action}
              className="flex justify-between text-sm py-4 border-b border-border/30"
            >
              <span className="text-muted-foreground">{entry.action}</span>
              <span className="font-medium">{entry.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
