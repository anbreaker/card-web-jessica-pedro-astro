import portuguese from './pt.json';
import spanish from './es.json';

const LANGUAJES = {
  PORTUGUESE: 'pt',
  SPANISH: 'es',
}

export const getI18N = ({ currentLocale = 'pt' }: { currentLocale?: string }) => {
  if (currentLocale === LANGUAJES.PORTUGUESE) return portuguese;

  if (currentLocale === LANGUAJES.SPANISH) return spanish;

  return portuguese
}