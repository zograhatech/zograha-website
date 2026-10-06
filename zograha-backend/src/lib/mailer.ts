export const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Sends an email through Resend. Silently skipped if not configured; never throws. */
export async function sendNotification(subject: string, html: string, replyTo?: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.MAIL_FROM ?? "Zograha Website <onboarding@resend.dev>",
        to: to.split(",").map((s) => s.trim()),
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) console.error("[MAIL] Resend responded", res.status, await res.text());
  } catch (e) {
    console.error("[MAIL] failed", e);
  }
}
