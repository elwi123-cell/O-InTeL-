const API_BASE = import.meta.env?.VITE_API_BASE_URL || "http://localhost:4000";
const connect = document.getElementById("connectBtn");
connect?.addEventListener("click", async () => {
  connect.disabled = true;
  connect.textContent = "Preparing secure connection…";
  try {
    const response = await fetch(`${API_BASE}/api/auth/google/url`);
    if (!response.ok) throw new Error("The O-InTeL backend is not configured or running.");
    const data = await response.json();
    if (!data.url) throw new Error("The server did not return an authorisation URL.");
    window.location.href = data.url;
  } catch (error) {
    alert(`${error.message}\n\nStart and configure the O-InTeL backend, then try again.`);
    connect.disabled = false;
    connect.textContent = "Connect Gmail";
  }
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
}
