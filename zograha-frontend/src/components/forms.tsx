"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ApiRequestError, api } from "@/lib/zograha-api";

function errorMessage(error: unknown) {
  if (!(error instanceof ApiRequestError)) {
    return "We couldn’t send your request. Please try again.";
  }

  const details = error.fieldErrors
    ? Object.entries(error.fieldErrors)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join("; ")
    : "";

  return details ? `${error.message}. ${details}` : error.message;
}

export function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [serviceOptions, setServiceOptions] = useState<string[]>([]);
  const [service, setService] = useState(initialService);
  const [serviceOptionsState, setServiceOptionsState] = useState<{ attempt: number; error: boolean } | null>(null);
  const [serviceAttempt, setServiceAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    const requestedService = initialService;
    api.services.list().then(({ items }) => {
      if (!active) return;
      const titles = items.map((item) => item.title);
      setServiceOptions(requestedService && !titles.includes(requestedService) ? [requestedService, ...titles] : titles);
      setServiceOptionsState({ attempt: serviceAttempt, error: false });
    }).catch(() => {
      if (active) {
        if (requestedService) setServiceOptions([requestedService]);
        setServiceOptionsState({ attempt: serviceAttempt, error: true });
      }
    });
    return () => { active = false; };
  }, [initialService, serviceAttempt]);

  const serviceState = serviceOptionsState?.attempt !== serviceAttempt
    ? "loading"
    : serviceOptionsState.error ? "error" : "ready";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");
    setMessage("");
    const form = new FormData(formElement);
    try {
      await api.sendContact({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? "") || undefined,
        service: String(form.get("service") ?? "") || undefined,
        subject: String(form.get("subject") ?? "") || undefined,
        message: String(form.get("message") ?? ""),
        website: String(form.get("website") ?? ""),
      });
      formElement.reset();
      setStatus("sent");
      setMessage("Thanks for reaching out. We’ll be in touch soon.");
    } catch (error) {
      setStatus("error");
      setMessage(errorMessage(error));
    }
  }

  return (
    <form className="site-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={150} /></label>
      </div>
      <div className="form-row">
        <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Service <span>(optional)</span>
          <select name="service" value={service} onChange={(event) => setService(event.target.value)}>
            <option value="">Choose a service</option>
            {serviceOptions.map((title) => <option key={title} value={title}>{title}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      {serviceState === "loading" ? <p className="form-helper" role="status">Loading service options…</p> : null}
      {serviceState === "error" ? <p className="form-helper" role="alert">Service options are unavailable. You can still send a general enquiry. <button className="settings-retry" type="button" onClick={() => setServiceAttempt((value) => value + 1)}>Retry</button></p> : null}
      <label>Subject <span>(optional)</span><input name="subject" maxLength={150} /></label>
      <label>Tell us about your project<textarea name="message" required minLength={10} maxLength={3000} rows={5} /></label>
      <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}<span aria-hidden="true">→</span>
      </button>
      {message ? <p className={`form-feedback ${status}`} role={status === "error" ? "alert" : "status"}>{message}</p> : null}
    </form>
  );
}

export function ApplicationForm({ jobId, jobTitle }: { jobId?: string; jobTitle?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [resumeError, setResumeError] = useState("");

  function validateResume(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setResumeError("Resume must be 5 MB or smaller.");
      event.currentTarget.value = "";
      return;
    }
    setResumeError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");
    setMessage("");
    const form = new FormData(formElement);
    form.set("jobId", jobId ?? "");
    form.set("jobTitle", jobTitle ?? "");
    try {
      if (resumeError) {
        setStatus("error");
        setMessage(resumeError);
        return;
      }
      await api.apply(form);
      formElement.reset();
      setStatus("sent");
      setMessage("Your application has been received. Thank you.");
    } catch (error) {
      setStatus("error");
      setMessage(errorMessage(error));
    }
  }

  return (
    <form className="site-form application-form" onSubmit={submit}>
      <h2>Apply for a role</h2>
      {jobTitle ? <p className="selected-role">Applying for {jobTitle}</p> : null}
      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={150} /></label>
      </div>
      <div className="form-row">
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={20} /></label>
        <label>Experience<input name="experience" maxLength={100} /></label>
      </div>
      <label>Current company <span>(optional)</span><input name="currentCompany" maxLength={150} /></label>
      <div className="form-row">
        <label>LinkedIn URL <span>(optional)</span><input name="linkedinUrl" type="url" /></label>
        <label>Portfolio URL <span>(optional)</span><input name="portfolioUrl" type="url" /></label>
      </div>
      <label>Resume <span>(PDF, DOC or DOCX, up to 5 MB)</span><input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" aria-describedby={resumeError ? "resume-error" : undefined} onChange={validateResume} /></label>
      {resumeError ? <p className="form-feedback error" id="resume-error" role="alert">{resumeError}</p> : null}
      <label>Cover letter <span>(optional)</span><textarea name="coverLetter" maxLength={3000} rows={5} /></label>
      <label className="form-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit application"}<span aria-hidden="true">→</span>
      </button>
      {message ? <p className={`form-feedback ${status}`} role={status === "error" ? "alert" : "status"}>{message}</p> : null}
    </form>
  );
}