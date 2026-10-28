export const leadNeeds = ['Site institucional', 'Loja virtual', 'Cardápio ou catálogo', 'Quero orientação'] as const;

export function validateLead(value: unknown) {
  if (!value || typeof value !== 'object') return null;
  const lead = value as Record<string, unknown>;
  if (lead.consent !== true || typeof lead.name !== 'string' || typeof lead.business !== 'string' ||
      typeof lead.need !== 'string' || typeof lead.message !== 'string' || typeof lead.projectTitle !== 'string' ||
      (lead.source !== 'portfolio' && lead.source !== 'github-pages')) return null;

  const name = lead.name.trim();
  const business = lead.business.trim();
  const message = lead.message.trim();
  const projectTitle = lead.projectTitle.trim();
  if (name.length < 2 || name.length > 80 || business.length < 2 || business.length > 120 ||
      message.length > 1200 || projectTitle.length < 1 || projectTitle.length > 120 ||
      !leadNeeds.some((need) => need === lead.need)) return null;

  return { name, business, need: lead.need, message, projectTitle, source: lead.source };
}
