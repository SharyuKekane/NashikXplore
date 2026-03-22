"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Image, BookOpen, ShieldCheck, CheckCircle } from "lucide-react";

/* ─────────────────────────────
   STEP COMPONENTS
───────────────────────────── */

function StepIdentity({ data, setData }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Let’s introduce your business</h2>

      <input
        placeholder="Business Name"
        className="input"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Owner Name"
        className="input"
        value={data.owner}
        onChange={(e) => setData({ ...data, owner: e.target.value })}
      />

      <input
        placeholder="Category (Misal, Paithani, Guide...)"
        className="input"
        value={data.category}
        onChange={(e) => setData({ ...data, category: e.target.value })}
      />

      <input
        placeholder="Location"
        className="input"
        value={data.location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
      />

      <input
        placeholder="WhatsApp Number"
        className="input"
        value={data.whatsapp}
        onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
      />
    </div>
  );
}

function StepDetails({ data, setData }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Tell tourists what makes you special</h2>

      <textarea
        placeholder="Business Description"
        className="input h-28"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />

      <input
        placeholder="Years in Business"
        className="input"
        value={data.years}
        onChange={(e) => setData({ ...data, years: e.target.value })}
      />

      <input
        placeholder="Average Price Range"
        className="input"
        value={data.price}
        onChange={(e) => setData({ ...data, price: e.target.value })}
      />

      <div className="rounded-xl border bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground">
          📈 Estimated Monthly Inquiries: <b>120–180</b>
        </p>
        <p className="text-sm text-muted-foreground">
          💰 Potential Revenue Boost: <b>₹15,000–₹35,000</b>
        </p>
      </div>
    </div>
  );
}

function StepPhotos() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Show your space</h2>

      <div className="rounded-xl border border-dashed p-10 text-center">
        Drag & Drop Photos Here (UI Placeholder)
      </div>
    </div>
  );
}

function StepStory({ data, setData }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Every legacy has a story</h2>

      <textarea
        placeholder="How did your journey begin?"
        className="input h-28"
        value={data.story}
        onChange={(e) => setData({ ...data, story: e.target.value })}
      />

      <div className="rounded-xl bg-accent/40 p-6">
        <h3 className="mb-2 font-semibold">Live Preview</h3>
        <p className="italic text-muted-foreground">
          {data.story || "Your story will appear here beautifully styled..."}
        </p>
      </div>
    </div>
  );
}

function StepVerification() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Build trust instantly</h2>

      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <span>Apply for Verified Badge</span>
      </div>

      <div className="rounded-xl border bg-primary/5 p-4 text-sm">
        ✔ 2x visibility <br />
        ✔ Featured in curated routes <br />
        ✔ Priority during Kumbh
      </div>
    </div>
  );
}

function StepReview({ data }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Review & Launch</h2>

      <div className="rounded-xl border p-6">
        <p><b>{data.name}</b></p>
        <p>{data.category}</p>
        <p>{data.location}</p>
        <p className="mt-3 text-muted-foreground">{data.description}</p>
        <p className="mt-3 italic text-muted-foreground">{data.story}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────
   MAIN PAGE
───────────────────────────── */

export default function VendorOnboarding() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    category: "",
    location: "",
    whatsapp: "",
    description: "",
    years: "",
    price: "",
    story: "",
  });

  const steps = [
    <StepIdentity data={formData} setData={setFormData} />,
    <StepDetails data={formData} setData={setFormData} />,
    <StepPhotos />,
    <StepStory data={formData} setData={setFormData} />,
    <StepVerification />,
    <StepReview data={formData} />,
  ];

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-3xl">

        {/* Progress */}
        <div className="mb-8 flex justify-between">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 mx-1 rounded-full ${
                index <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border bg-card p-10 shadow-lg"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="rounded-xl border px-6 py-3 disabled:opacity-40"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="rounded-xl bg-primary px-6 py-3 text-primary-foreground"
            >
              Continue →
            </button>
          ) : (
            <button
  onClick={async () => {
    try {
      const res = await fetch("http://localhost:5000/api/vendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("🎉 Vendor listing created successfully!");
        console.log(data);
      } else {
        alert("❌ Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("⚠ Server error");
    }
  }}
  className="rounded-xl bg-primary px-6 py-3 text-primary-foreground"
>
  🚀 Launch Listing
</button>
          )}
        </div>
      </div>
    </section>
  );
}