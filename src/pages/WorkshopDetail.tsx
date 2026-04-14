import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import { workshops } from "@/data/workshops";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const typeStyles: Record<string, string> = {
  lecture: "bg-primary/20 text-primary",
  workshop: "bg-accent/20 text-accent",
  break: "bg-muted text-muted-foreground",
  discussion: "bg-secondary text-secondary-foreground",
};

const WorkshopDetail = () => {
  const { id } = useParams<{ id: string }>();
  const workshop = workshops.find((w) => w.id === id);
  const [showForm, setShowForm] = useState(false);

  if (!workshop) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <h1 className="text-4xl font-display mb-4">Workshop Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The workshop you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Return to Registry
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const seatsRemaining = workshop.capacity - workshop.enrolled;
  const isFull = seatsRemaining <= 0;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} /> Back to Registry
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block border border-primary/40 px-3 py-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                  {workshop.category}
                </span>
              </span>
              {workshop.isLive && (
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Live Now
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-6xl font-display font-semibold leading-tight mb-8">
              {workshop.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch] mb-10">
              {workshop.longDescription}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-8 border-t border-border pt-8">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Schedule
                  </span>
                  <span className="text-sm font-medium">{workshop.dateRange}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={16} className="text-primary" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Enrollment
                  </span>
                  <span className="text-sm font-medium">
                    {workshop.enrolled} / {workshop.capacity} Enrolled
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={16} className="text-primary" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Format
                  </span>
                  <span className="text-sm font-medium">{workshop.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar card */}
          <div className="lg:col-span-4">
            <div className="border border-border bg-card p-8 lg:p-10">
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Tuition
                </span>
                <div className="text-4xl font-display font-semibold tabular-nums mt-1">
                  ${workshop.price.toLocaleString()}.00
                </div>
              </div>

              <div className="mb-8 pb-6 border-b border-border">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Availability
                </span>
                <div className="text-sm font-medium mt-1">
                  {isFull ? (
                    <span className="text-destructive">Session Full — Waitlist Only</span>
                  ) : (
                    <>
                      <span className="text-primary font-display text-2xl">
                        {seatsRemaining < 10 ? `0${seatsRemaining}` : seatsRemaining}
                      </span>{" "}
                      seats remaining
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-primary text-primary-foreground py-4 font-semibold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors mb-4"
              >
                {isFull ? "Join Waitlist" : "Secure Enrollment"}
              </button>

              {/* Instructor */}
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                  Led by
                </span>
                <h3 className="font-display text-xl mb-2">{workshop.instructor}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {workshop.instructorBio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <section className="mb-20">
          <div className="border-b border-border pb-6 mb-10">
            <h2 className="text-3xl font-display italic">Daily Programme</h2>
          </div>
          <div className="space-y-0">
            {workshop.schedule.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-4 py-5 border-b border-border/30 group hover:bg-card/50 transition-colors px-4 -mx-4"
              >
                <div className="col-span-3 lg:col-span-2">
                  <span className="text-sm tabular-nums text-muted-foreground font-medium">
                    {item.time}
                  </span>
                </div>
                <div className="col-span-7 lg:col-span-8">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <span
                    className={`inline-block px-3 py-1 text-[10px] uppercase tracking-wider font-semibold ${
                      typeStyles[item.type] || ""
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Outcomes & Prerequisites */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-display italic mb-8 border-b border-border pb-6">
              Learning Outcomes
            </h2>
            <ul className="space-y-5">
              {workshop.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle
                    size={16}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-display italic mb-8 border-b border-border pb-6">
              Prerequisites
            </h2>
            <ul className="space-y-5">
              {workshop.prerequisites.map((prereq, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="size-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {prereq}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Registration Form */}
        {showForm && (
          <RegistrationForm
            workshop={workshop}
            onClose={() => setShowForm(false)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WorkshopDetail;
