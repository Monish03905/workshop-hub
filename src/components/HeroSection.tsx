import heroImage from "@/assets/hero-workshop.jpg";
import { workshops } from "@/data/workshops";

const featured = workshops[0];
const seatsRemaining = featured.capacity - featured.enrolled;

const HeroSection = () => (
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
    <div className="lg:col-span-7">
      <div className="inline-block border border-primary/40 px-3 py-1 mb-8">
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
          Autumn Session 2024
        </span>
      </div>
      <h1 className="text-5xl lg:text-7xl font-display font-semibold leading-tight text-balance mb-8">
        {featured.title}
      </h1>
      <p className="max-w-[50ch] text-lg text-muted-foreground leading-relaxed mb-10">
        {featured.description}
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <button className="bg-primary text-primary-foreground px-10 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors">
          Secure Enrollment
        </button>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Tuition
          </span>
          <span className="font-display text-2xl tabular-nums">
            ${featured.price.toLocaleString()}.00
          </span>
        </div>
      </div>
    </div>
    <div className="lg:col-span-5 relative">
      <div className="aspect-[4/5] border border-border overflow-hidden shadow-2xl bg-secondary">
        <img
          src={heroImage}
          alt="Workshop environment"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
          width={1200}
          height={1500}
        />
      </div>
      <div className="absolute -bottom-6 -left-6 bg-primary p-8 w-48 aspect-square flex flex-col justify-end">
        <span className="text-primary-foreground text-4xl font-bold font-display">
          {seatsRemaining < 10 ? `0${seatsRemaining}` : seatsRemaining}
        </span>
        <span className="text-primary-foreground text-xs uppercase tracking-widest font-semibold">
          Seats Remaining
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
