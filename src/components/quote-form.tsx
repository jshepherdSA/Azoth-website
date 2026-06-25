"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-md border border-hairline bg-white px-4 py-3 text-sm text-ink-soft outline-none transition-colors placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

const ACCEPTED =
  ".stp,.step,.sldprt,.3dm,.3ds,.3dxml,.3mf,.catpart,.catshape,.cgr,.dae,.doc,.dwf,.dwfx,.dwg,.dxf,.exp,.fbx,.glf,.gtb,.ifc,.iges,.igs,.ipt,.jpeg,.jpg,.jt,.model,.neu,.obj,.par,.pdf,.png,.prc,.prt,.psm,.sab,.sat,.stl,.stpz,.vrml,.wrl,.x_b,.x_t,.zip";

function StepHeader({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand text-sm font-bold text-brand">
        {n}
      </span>
      <h3 className="text-sm font-bold uppercase tracking-wide text-ink">{label}</h3>
    </div>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-hairline bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-ink">Quote request received!</h3>
        <p className="mx-auto mt-2 max-w-md text-muted-soft">
          Thanks for the details. Azoth typically provides quotes within 24 hours—we&apos;ll be in
          touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-hairline bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-8">
          <fieldset className="space-y-4">
            <StepHeader n={1} label="Contact Information" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="firstName" required placeholder="First Name" autoComplete="given-name" className={inputClass} />
              <input name="lastName" required placeholder="Last Name" autoComplete="family-name" className={inputClass} />
            </div>
            <input name="email" type="email" required placeholder="Email Address" autoComplete="email" className={inputClass} />
            <input name="company" placeholder="Company" autoComplete="organization" className={inputClass} />
            <div className="grid grid-cols-[1fr_100px] gap-4">
              <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputClass} />
              <input name="ext" placeholder="Ext." className={inputClass} />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <StepHeader n={2} label="Requested Delivery Date" />
            <p className="text-sm text-muted-soft">
              By default, quotes reflect standard lead time based on shop capacity. To request
              delivery by a certain date, indicate it below.
            </p>
            <input name="deliveryDate" type="date" aria-label="Requested delivery date" className={inputClass} />
          </fieldset>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <fieldset className="space-y-4">
            <StepHeader n={3} label="Project Details" />
            <div>
              <label className="text-sm font-semibold text-ink-soft">Export Controlled Regulations</label>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Is any data relating to this project subject to Export Control regulations, including
                but not limited to ITAR (22 C.F.R. 120-130)?
              </p>
              <select name="exportControl" defaultValue="" className={`mt-2 ${inputClass}`} aria-label="Export controlled regulations">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Unsure</option>
              </select>
            </div>

            <div className="rounded-xl border border-dashed border-black/20 bg-surface p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0 4 4m-4-4L8 8M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
                </svg>
              </div>
              <p className="mt-3 font-bold text-ink">Upload part files</p>
              <p className="mx-auto mt-1 max-w-sm text-xs leading-relaxed text-muted">
                For fastest quoting, upload 3D part files. We accept .stp, .step, .sldprt and many
                more (.stl, .iges, .x_t, .zip, …).
              </p>
              <input
                name="files"
                type="file"
                multiple
                accept={ACCEPTED}
                aria-label="Upload part files"
                className="mt-4 block w-full text-sm text-muted-soft file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <StepHeader n={4} label="What Else Should We Know?" />
            <textarea
              name="notes"
              rows={4}
              placeholder="Notes, special requests, additional details"
              aria-label="Project notes"
              className={inputClass}
            />
          </fieldset>

          <fieldset className="space-y-3">
            <StepHeader n={5} label="How Did You Hear About Us?" />
            <input
              name="referral"
              placeholder="e.g. email, a colleague, Google search, etc."
              aria-label="How did you hear about us"
              className={inputClass}
            />
          </fieldset>
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 inline-flex items-center gap-2.5 rounded-md bg-brand px-8 py-3.5 font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        Submit Quote Request
      </button>
    </form>
  );
}
