# AI 스터디 홈페이지 🚀

React + TypeScript + Tailwind CSS로 제작된 AI 스터디 모집 페이지입니다.

## ✨ 주요 기능

- 🎨 **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- 🌟 **아름다운 애니메이션**: Framer Motion을 활용한 스크롤 애니메이션
- 📱 **모바일 최적화**: 모바일 퍼스트 접근법
- 🎯 **원페이지 스크롤**: 긴 스크롤 형태의 모던한 디자인
- 📝 **인터랙티브 폼**: 실시간 유효성 검사가 포함된 신청 폼
- 📊 **데이터 시각화**: 비교표와 일정표를 통한 명확한 정보 전달

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Vercel (GitHub 연동)

## 🚀 빠른 시작

### 1. 저장소 클론

```bash
git clone <repository-url>
cd ai-study-homepage
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 4. 빌드

```bash
npm run build
```

### 5. 프리뷰

```bash
npm run preview
```

## 📁 프로젝트 구조

```
ai-study-homepage/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.tsx                 # 히어로 섹션
│   │   ├── Schedule.tsx             # 일정 및 시간
│   │   ├── StudyGoals.tsx           # 스터디 목표
│   │   ├── ComparisonTable.tsx      # 기존 vs 개편 비교표
│   │   ├── Timeline.tsx             # 8회차 타임라인
│   │   ├── TargetAudience.tsx       # 추천 대상
│   │   ├── Benefits.tsx             # 얻을 수 있는 것
│   │   ├── InstructorProfile.tsx    # 스터디장 소개
│   │   ├── ApplicationForm.tsx      # 신청 폼
│   │   └── Footer.tsx               # 푸터
│   ├── App.tsx                      # 메인 앱
│   ├── main.tsx                     # 진입점
│   └── index.css                    # 전역 스타일
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 디자인 특징

### 색상 팔레트

- **Primary**: 블루 계열 (`#0ea5e9` ~ `#0c4a6e`)
- **Secondary**: 그레이 계열 (`#f8fafc` ~ `#0f172a`)
- **Accent**: 레드 계열 (`#fef2f2` ~ `#7f1d1d`)

### 애니메이션

- **타이핑 효과**: 히어로 섹션 제목
- **스크롤 트리거**: 각 섹션별 진입 애니메이션
- **호버 효과**: 카드 및 버튼 인터랙션
- **로딩 스피너**: 폼 제출 시

## 📱 반응형 브레이크포인트

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `≥ 1024px`

## 🚀 Vercel 배포

### GitHub 연동 배포

1. GitHub에 저장소 푸시
2. [Vercel](https://vercel.com)에 로그인
3. "Import Project" 선택
4. GitHub 저장소 선택
5. 자동 배포 완료!

### 환경 설정

Vercel은 자동으로 다음을 감지합니다:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📧 섹션별 주요 내용

### 1. 히어로 섹션

- 타이핑 애니메이션이 포함된 메인 제목
- 핵심 정보 (시간, 기간, 방식)
- CTA 버튼

### 2. 일정 & 시간

- 8주차 세부 일정표
- 시간 및 진행 방식 안내

### 3. 스터디 목표

- 4가지 핵심 목표 제시
- 스터디의 철학과 접근법

### 4. 비교표

- 기존 AI 스터디 vs 개편된 AI 스터디
- 6가지 항목별 상세 비교

### 5. 타임라인

- 1주차 오리엔테이션
- 2-8주차 주제별 세션
- 예시 주제 소개

### 6. 추천 대상

- 9가지 타겟 페르소나
- 각각의 니즈와 상황

### 7. 혜택

- 5가지 핵심 혜택
- 통계 정보

### 8. 스터디장 소개

- 역량 및 경험
- 주요 성과
- 핵심 메시지

### 9. 신청 폼

- 실시간 유효성 검사
- 로딩 상태 표시
- 성공/실패 피드백

## 🎯 SEO 최적화

- 메타 태그 설정
- Open Graph 프로토콜
- 시맨틱 HTML 구조
- 접근성 고려 (ARIA 레이블)

## 🔧 커스터마이징

### 색상 변경

`tailwind.config.js`에서 색상 팔레트를 수정할 수 있습니다.

### 애니메이션 조정

각 컴포넌트의 `variants` 객체에서 애니메이션을 커스터마이징할 수 있습니다.

### 내용 수정

각 컴포넌트 파일에서 텍스트와 데이터를 직접 수정할 수 있습니다.

## 📞 문의사항

프로젝트 관련 문의사항이 있으시면 언제든지 연락주세요!

- 📧 Email: study@example.com
- 📞 Phone: 010-1234-5678

---

**Made with ❤️ for AI learners**
