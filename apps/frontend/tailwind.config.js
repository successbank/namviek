const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components,app,layouts}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      '../../packages/ui-components/src/**/*!(*.stories|*.spec).{ts,tsx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        // PowerNews 브랜드 색상
        powernews: {
          primary: '#1E40AF',    // 진한 파란색 (주 색상)
          secondary: '#3B82F6',  // 밝은 파란색
          accent: '#F59E0B',     // 주황색 (강조색)
          dark: '#1F2937',       // 다크 그레이
          light: '#F3F4F6',      // 라이트 그레이
          success: '#10B981',    // 초록색 (성공)
          warning: '#EAB308',    // 노란색 (경고)
          danger: '#EF4444',     // 빨간색 (위험)
          info: '#3B82F6'        // 정보
        }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Pretendard', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
		require('@tailwindcss/forms')
	],
};
