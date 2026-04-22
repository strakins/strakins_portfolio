
import { COURSES } from "./data";

const inputStyle = {
  background: "#1e293b",
  border: "1px solid #334155",
};

const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs text-slate-400 font-medium mb-1">{label}</label>
    {children}
  </div>
);

const EnrollForm = ({ form, step, selectedCourse, onChange, onCourseChange, onSubmit }) => (
  <>
    <div className="space-y-3">
      {/* Full name */}
      <Field label="Full name">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Blessing Akinola"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:ring-1 focus:ring-blue-500 transition"
          style={inputStyle}
          required
        />
      </Field>

      {/* Email */}
      <Field label="Email address">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@example.com"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:ring-1 focus:ring-blue-500 transition"
          style={inputStyle}
          required
        />
      </Field>

      {/* Phone */}
      <Field label="Phone / WhatsApp">
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="+234 800 000 0000"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:ring-1 focus:ring-blue-500 transition"
          style={inputStyle}
          required
        />
      </Field>

      {/* Course */}
      <Field label="Course">
        <select
          name="course"
          value={form.course}
          onChange={onCourseChange}
          className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500 transition"
          style={inputStyle}
          required
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </Field>
    </div>

    {/* Error message */}
    {step === "error" && (
      <p className="mt-3 text-red-400 text-sm">
        Something went wrong, please try again or reach out directly.
      </p>
    )}

    {/* Submit */}
    <button
      onClick={onSubmit}
      disabled={step === "loading"}
      className="mt-6 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-opacity disabled:opacity-60"
      style={{
        background: selectedCourse
          ? `linear-gradient(90deg, ${selectedCourse.accentFrom}, ${selectedCourse.accentTo})`
          : "linear-gradient(90deg, #3b82f6, #6366f1)",
      }}
    >
      {step === "loading" ? "Sending…" : "Submit application"}
    </button>

    <p className="mt-3 text-center text-slate-600 text-xs">
      No spam. I'll only use this to follow up on your enrolment.
    </p>
  </>
);

export default EnrollForm;