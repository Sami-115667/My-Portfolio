import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Reveal from "../Reveal";

const email = "shamsurrahman07052001@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  const controller = useRef<AbortController>();

  useEffect(
    () => () => {
      clearTimeout(copyTimer.current);
      controller.current?.abort();
    },
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyState("idle"), 4000);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") || "")) return;
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !message) {
      setError("Please add your name and a message before sending.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    controller.current = new AbortController();
    const timeout = setTimeout(() => controller.current?.abort(), 20000);
    try {
      const response = await fetch("https://formsubmit.co/ajax/" + email, {
        method: "POST",
        signal: controller.current.signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: String(data.get("email") || "").trim(),
          subject:
            String(data.get("subject") || "").trim() ||
            "Let’s build something together",
          message,
          _subject:
            String(data.get("subject") || "").trim() || "New portfolio inquiry",
          _captcha: "false",
        }),
      });
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      )
        throw new Error(
          "The message could not be sent. Please try again or email me directly.",
        );
      setStatus("success");
      form.reset();
    } catch {
      setError(
        "The message could not be sent. Please try again, or use the email link to reach me directly.",
      );
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <div className="contact-heading">
            <p className="eyebrow">
              <span>05</span> / THE NEXT CHAPTER
            </p>
            <h2>
              Great things start
              <br />
              with a <span className="accent-text">conversation.</span>
              <span className="contact-spark" aria-hidden="true">
                ✳
              </span>
            </h2>
          </div>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <span className="availability">
              <span className="status-dot" />
              Open to freelance & full-time roles
            </span>
            <h3>Have something in mind?</h3>
            <p>
              A project, an opportunity, or just a good conversation about
              technology. I’d love to hear from you.
            </p>
            <div className="email-line">
              <a href={"mailto:" + email}>
                {email}
                <ArrowUpRight size={18} />
              </a>
              <button
                className="icon-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copyState === "copied" ? (
                  <Check size={17} />
                ) : (
                  <Copy size={17} />
                )}
              </button>
            </div>
            <span className="copy-status" role="status">
              {copyState === "copied"
                ? "Email address copied."
                : copyState === "error"
                  ? "Please select and copy the email address above."
                  : ""}
            </span>
            <div className="contact-details">
              <span>
                <MapPin size={16} />
                Dhaka, Bangladesh
              </span>
              <a href="tel:+8801866362585">
                <Phone size={16} />
                +880 1866 362585
              </a>
            </div>
            <div className="contact-socials">
              <a
                href="https://github.com/Sami-115667"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-shamsur-rahman-sami-0a677b246/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.1}>
            {status === "success" ? (
              <div className="form-success" role="status">
                <span>
                  <Check size={30} />
                </span>
                <h3>Message sent. Thank you!</h3>
                <p>
                  I’m looking forward to our conversation. I’ll get back to you
                  by email.
                </p>
                <button className="text-link" onClick={() => setStatus("idle")}>
                  Send another message <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="contact-form"
                aria-label="Contact Sami"
              >
                <div className="form-topline">
                  <span className="mono">LET’S MAKE IT HAPPEN</span>
                  <Mail size={19} />
                </div>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="What should I call you?"
                      required
                      maxLength={120}
                      disabled={status === "sending"}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      disabled={status === "sending"}
                    />
                  </label>
                </div>
                <label>
                  What’s it about? <span className="optional">(optional)</span>
                  <input
                    name="subject"
                    placeholder="A project, an opportunity, an idea..."
                    maxLength={200}
                    disabled={status === "sending"}
                  />
                </label>
                <label>
                  Your message
                  <textarea
                    name="message"
                    placeholder="Tell me a little about what you have in mind..."
                    rows={4}
                    required
                    maxLength={5000}
                    disabled={status === "sending"}
                  />
                </label>
                <div className="honeypot" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input name="_honey" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                {status === "error" && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="form-bottom">
                  <span>Good conversations welcome.</span>
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="spinner" size={17} />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
