const projectId = 'zoryon-web-portfolio';
const apiKey = 'AIzaSyAVCZ-O-8NJk6Senbi3Y6O5HTOd99JgKug';
const endpoint = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?key=${apiKey}`;

type PortfolioLead = {
  name: string;
  business: string;
  need: string;
  message: string;
  projectTitle: string;
};

export async function savePortfolioLead(lead: PortfolioLead) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        name: { stringValue: lead.name.trim() },
        business: { stringValue: lead.business.trim() },
        need: { stringValue: lead.need },
        message: { stringValue: lead.message.trim() },
        projectTitle: { stringValue: lead.projectTitle },
        source: { stringValue: window.location.hostname.includes('github.io') ? 'github-pages' : 'portfolio' },
        status: { stringValue: 'new' },
        consent: { booleanValue: true },
        createdAt: { timestampValue: new Date().toISOString() },
      },
    }),
    keepalive: true,
  });

  if (!response.ok) throw new Error(`Firestore respondeu com HTTP ${response.status}.`);
}
