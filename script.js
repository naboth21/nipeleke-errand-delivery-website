// Apply contact details everywhere
(function hydrate() {
  const wa = https://wa.me/${NIPELEKEE.whatsappNumber};

  document.getElementById('heroWhatsApp').href = wa;
  document.getElementById('waFloat').href = wa;
  document.getElementById('topPhone').textContent = NIPELEKEE.phoneDisplay;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('mapFrame').src =
    https://www.google.com/maps?q=${encodeURIComponent(NIPELEKEE.serviceArea)}&output=embed;
})();

function buildWhatsAppLink(number, lines) {
  const text = encodeURIComponent(lines.join('\n'));
  return https://wa.me/${number}?text=${text};
}

function getWelcomeMessage() {
  return [
    'Welcome to NIPELEKEE — Nairobi Errand & Delivery Services.',
    'Thank you for contacting us.',
    '',
    '✔ Fast & reliable',
    '✔ Honest pricing',
    '✔ Nairobi-wide service',
    '',
    'NIPELEKEE — you relax. We run.'
  ].join('\n');
}

function logToGoogleSheets(data) {
  if (!SHEET_ENDPOINT_URL) return;
  fetch(SHEET_ENDPOINT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
      source: 'Nipelekee Website'
    })
  }).catch(() => {});
}
document.addEventListener("DOMContentLoaded", () => {
  const serviceHeaders = document.querySelectorAll(".service-header");

  serviceHeaders.forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("active");
    });
  });

  const links = document.querySelectorAll(".service-content a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.stopPropagation();
    });
  });
});
/* === Request form logic === */
/* === Admin dashboard logic === */
/* === In-page tests === */
