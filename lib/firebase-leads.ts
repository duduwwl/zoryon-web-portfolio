import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getToken,
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  type AppCheck,
} from 'firebase/app-check';

const projectId = 'zoryon-web-portfolio';
const apiKey = 'AIzaSyAVCZ-O-8NJk6Senbi3Y6O5HTOd99JgKug';
const endpoint = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?key=${apiKey}`;
const appName = 'zoryon-web-portfolio';
const recaptchaEnterpriseSiteKey = '6LcCzsQtAAAAAAuVAvNWBV27K33TaXInLn-nfopa';

const firebaseConfig = {
  apiKey,
  authDomain: 'zoryon-web-portfolio.firebaseapp.com',
  projectId,
  storageBucket: 'zoryon-web-portfolio.firebasestorage.app',
  messagingSenderId: '477059621908',
  appId: '1:477059621908:web:327603e0cf4485c2083301',
};

let appCheck: AppCheck | undefined;

function getPortfolioAppCheck() {
  if (typeof window === 'undefined') {
    throw new Error('O App Check só pode ser inicializado no navegador.');
  }

  if (!appCheck) {
    const firebaseApp = getApps().some((app) => app.name === appName)
      ? getApp(appName)
      : initializeApp(firebaseConfig, appName);

    appCheck = initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaEnterpriseProvider(recaptchaEnterpriseSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  }

  return appCheck;
}

async function getAppCheckToken() {
  return (await getToken(getPortfolioAppCheck(), false)).token;
}

type PortfolioLead = {
  name: string;
  business: string;
  need: string;
  message: string;
  projectTitle: string;
};

export async function savePortfolioLead(lead: PortfolioLead) {
  const appCheckToken = await getAppCheckToken();
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Firebase-AppCheck': appCheckToken,
    },
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

export async function verifyPortfolioAppCheck() {
  const appCheckToken = await getAppCheckToken();
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/projects/wl-streetwear?key=${apiKey}`,
    { headers: { 'X-Firebase-AppCheck': appCheckToken } },
  );

  if (!response.ok) throw new Error(`Firestore respondeu com HTTP ${response.status}.`);
}
