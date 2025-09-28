import koMessages from '../messages/ko.json';

type Messages = typeof koMessages;

// 중첩된 객체를 지원하는 번역 함수
export function useTranslation() {
  const messages = koMessages as Messages;

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // 키를 찾지 못하면 키 자체를 반환
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
}

// 전역 번역 함수 (서버 컴포넌트에서 사용)
export function getTranslation(key: string): string {
  const keys = key.split('.');
  let value: any = koMessages;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}