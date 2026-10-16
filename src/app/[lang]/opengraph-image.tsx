import { ImageResponse } from 'next/og';
import { isLocale } from '@/i18n/config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'VTC Tours 37';

const copy = {
  fr: { eyebrow: 'Chauffeur privé · Tours & Touraine', title: "L'art de voyager, en toute sérénité", tags: 'Châteaux de la Loire · Caves à vin · BYD SEAL 100 % électrique' },
  en: { eyebrow: 'Private driver · Tours & Loire Valley', title: 'The art of travelling, with complete peace of mind', tags: 'Loire châteaux · Wine tours · 100% electric BYD SEAL' },
};

/** Police d'affichage (TTF) récupérée chez Google Fonts ; repli sur la police par défaut si indisponible. */
async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&text=${encodeURIComponent(text)}`)
    ).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return src ? await (await fetch(src)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage({ params }: { params: { lang: string } }) {
  const t = copy[isLocale(params.lang) ? params.lang : 'fr'];
  const font = await loadFont(`${t.eyebrow}${t.title}${t.tags}VTC Tours 37`);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          backgroundColor: '#0B0B0C',
          backgroundImage: 'radial-gradient(ellipse at 85% 0%, rgba(198,167,105,0.28), transparent 55%)',
          color: '#F3EFE7',
          fontFamily: font ? 'Cormorant' : 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, color: '#C6A769', fontSize: 24, letterSpacing: 6, textTransform: 'uppercase' }}>
          <div style={{ width: 56, height: 2, background: '#C6A769' }} />
          {t.eyebrow}
        </div>
        <div style={{ display: 'flex', fontSize: 84, lineHeight: 1.05, maxWidth: 1000}}>{t.title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(198,167,105,0.4)', paddingTop: 28 }}>
          <div style={{ fontSize: 40 }}>VTC Tours 37</div>
          <div style={{ fontSize: 26, color: '#A39E94' }}>{t.tags}</div>
        </div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: 'Cormorant', data: font, weight: 600, style: 'normal' }] : [] },
  );
}
