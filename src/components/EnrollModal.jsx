
import { useState, useEffect } from "react";
import EnrollForm from "./EnrollForm";
import { COURSES, N8N_WEBHOOK_URL } from "./data";

const EnrollModal = ({ course, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: course?.id || "",
    courseTitle: course?.title || "",
  });
  const [step, setStep] = useState("idle"); // idle | loading | success | error

  // Sync pre-selected course if the prop changes between renders
  useEffect(() => {
    if (course) {
      setForm((f) => ({ ...f, course: course.id, courseTitle: course.title }));
    }
  }, [course]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleCourseChange = (e) => {
    const selected = COURSES.find((c) => c.id === e.target.value);
    setForm((f) => ({
      ...f,
      course: e.target.value,
      courseTitle: selected?.title || "",
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.course) return;
    setStep("loading");
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      });
      setStep(res.ok ? "success" : "error");
    } catch {
      setStep("error");
    }
  };

  const selectedCourse = COURSES.find((c) => c.id === form.course) || course;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #0f172a 0%, #0c1424 100%)",
          border: "1px solid rgba(96,165,250,0.18)",
        }}
      >
        {/* Coloured top bar that matches the selected course */}
        <div
          className="h-1 w-full"
          style={{
            background: selectedCourse
              ? `linear-gradient(90deg, ${selectedCourse.accentFrom}, ${selectedCourse.accentTo})`
              : "linear-gradient(90deg, #60a5fa, #818cf8)",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors text-xl leading-none"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-8">
          {step === "success" ? (
            /* ── Success state ── */
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Application received!
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                I'll be in touch within 24 hours with next steps.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1)" }}
              >
                Done
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">
                Enrol now
              </p>
              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedCourse?.title || "Apply for a course"}
              </h3>
              <p className="text-slate-500 text-sm mb-7">
                Fill in your details and I'll reach out with everything you need.
              </p>

              <EnrollForm
                form={form}
                step={step}
                selectedCourse={selectedCourse}
                onChange={handleChange}
                onCourseChange={handleCourseChange}
                onSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;