# 작업 보고서: PROJECT ARCHIVE · 보유 핵심 역량 수정

## 1. 요청 요약
- PROJECT ARCHIVE의 4개 프로젝트에 「역할」 항목 추가, 기존 `기획전략 % / 제작총괄 %` 표시 제거
- `Behind the AD` 프로젝트의 RESULT 본문·지표 수치 갱신 (이탈률 88% → 21%, 67%p 감소 / 금요일 23시)
- 보유 핵심 역량에 `PowerPoint / Google Slides / Excel` 추가

## 2. 변경 파일
| 파일 | 변경 요약 |
| --- | --- |
| `src/types.ts` | `ProjectData`에서 `contribution` 제거, `role: string` 필드 신설 |
| `src/data.ts` | 4개 프로젝트 `role` 추가 / `contribution` 제거, Behind the AD `result` 및 `metrics` 갱신, `skillGroups`에 `Productivity & Office` 그룹 추가 |
| `src/App.tsx` | 하단 영역의 `기획전략 % / 제작총괄 %` UI를 `역할 ROLE` UI로 교체, Behind the AD 비주얼 카드 수치(`88% ➡️ 21%`, `Friday 23:00`) 갱신 |

## 3. 프로젝트별 적용 내용
### 3-1. CJ ScreenX 경쟁 PT
- 역할: **타깃 인식 분석 / 컨셉 도출 / 제안서 플로우 설계 / 발표 / 제작 디렉팅**

### 3-2. Behind the AD 채널 운영 및 데이터 분석
- 역할: **광고 트렌드 리서치 / 콘텐츠 주제 기획 / GA4 기반 유입 분석 / 소개 페이지 카피 개선**
- RESULT 본문(전):
  > 첫 화면 이탈률 68% 도출 후 ... 44%p 감소(22% 도달) ... 목요일 23시 ...
- RESULT 본문(후):
  > 첫 화면 이탈률 **88%** 도출 후, 히어로 마이크로 카피를 4차례에 걸쳐 수정한 결과 이탈률이 **67%p 감소(21% 도달)**했으며, 요일·시간 분석을 거쳐 **금요일 23시** 등 주 타깃 최적 활동 시간을 특정하여 도달 효과를 극대화함.
- 지표 갱신:
  - 소개 페이지 이탈률: `68% ➡️ 22% (-46%)` → `88% ➡️ 21% (-67%p)`
  - 황금 시간대 도달률: `평일 23시 입증` → `금요일 23시 입증`
- 비주얼 카드: `68% ➡️ 22%` → `88% ➡️ 21%`, `Thursday 23:00` → `Friday 23:00`

### 3-3. 폰트티랩 X 브랜디드 릴스
- 역할: **대학생 타깃 인사이트 도출 / 상황형 콘텐츠 컨셉 기획 / 릴스 대본 구성 / 촬영·편집 디렉팅**

### 3-4. 애드파워 제37회 전시회 『캐취미』 총괄 디렉팅
- 역할: **관람객 감정선 설계 / 메인 홍보 영상 기획 / 촬영·편집 총괄**

## 4. 보유 핵심 역량 추가
- 신규 그룹 `Productivity & Office`
  - `PowerPoint`
  - `Google Slides`
  - `Excel`

## 5. UI 레이아웃 변경 (PROJECT ARCHIVE 하단부)
- 변경 전: 한 줄에 `USED TOOLS …` 좌측 / `기획전략 N% · 제작총괄 N%` 우측
- 변경 후: 상단에 `역할 ROLE: …` 한 줄, 하단에 `USED TOOLS …` 한 줄 (2단 stack)
  - 역할 텍스트가 길어도 줄바꿈으로 자연스럽게 렌더링되도록 `flex-wrap` 적용

## 6. 검증
- `npx tsc --noEmit` → 에러 없음 (✅)
- `npx vite build` → `✓ 1674 modules transformed.` 정상 빌드, `dist/assets/index-*.js 248.15 kB` (✅)
- Vite dev 서버(`127.0.0.1:5180`) 기동 후 `curl`로 트랜스폼된 모듈 응답 확인:
  - `src/data.ts`에 새 RESULT 문구·지표·`PowerPoint/Google Slides/Excel`이 포함됨
  - `src/App.tsx`에 `역할 ROLE:` 라벨, `curProject.role` 바인딩, `88% ➡️ 21%`, `Friday 23:00 (+41%)` 노드가 포함됨

## 7. 남은 한계 (추정 영역)
- 실제 브라우저 시각 확인은 CLI 환경 특성상 수행하지 않음. 마크업·번들·타입체크 레벨에서는 회귀 없음이 확인됐으나, 폰트 가중치나 한 줄 길이로 인한 줄바꿈 모양은 **추정** 영역. 필요 시 브라우저에서 직접 확인 요청드립니다.
