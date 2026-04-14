import { useState } from "react";
import { X } from "lucide-react";
import type { Workshop } from "@/data/workshops";
import { toast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  workshop: Workshop;
  onClose: () => void;
}

const RegistrationForm = ({ workshop, onClose }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    experience: "",
    motivation: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Enrollment Confirmed",
        description: `You have been registered for "${workshop.title}". A confirmation will be sent to ${formData.email}.`,
      });
      onClose();
    }, 1500);
  };

  const isFull = workshop.enrolled >= workshop.capacity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border bg-card p-8 lg:p-12">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-primary block mb-3">
            {isFull ? "Waitlist Application" : "Enrollment Application"}
          </span>
          <h2 className="text-2xl lg:text-3xl font-display font-semibold mb-2">
            {workshop.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {workshop.dateRange} · ${workshop.price.toLocaleString()}.00
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Katherine"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Steinberg"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="katherine@institute.ch"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              maxLength={200}
              className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Zurich Institute of Applied Linguistics"
            />
          </div>

          {/* Experience level */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
              Experience Level *
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="" disabled>
                Select your level
              </option>
              <option value="emerging">Emerging Professional</option>
              <option value="mid">Mid-Career Practitioner</option>
              <option value="senior">Senior Executive</option>
              <option value="academic">Academic / Researcher</option>
            </select>
          </div>

          {/* Motivation */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
              Statement of Intent
            </label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              maxLength={1000}
              rows={4}
              className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Briefly describe your objectives for this programme..."
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground py-4 font-semibold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting
                ? "Processing..."
                : isFull
                ? "Submit Waitlist Application"
                : "Confirm Enrollment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
