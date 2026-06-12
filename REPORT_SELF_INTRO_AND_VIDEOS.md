# 작업 보고서: 자기소개서(BUILD-UP STORY) 및 영상(PRODUCTION) 업데이트

## 1. 요청 요약
- BUILD-UP STORY 섹션을 자기소개서 3섹션 본문으로 교체
- 하단 PRODUCTION 섹션의 영상 리스트를 사용자가 제공한 영상 목록으로 교체, YouTube 링크 클릭 가능 + 썸네일 이미지 노출
- 작업 완료 후 배포

## 2. 변경 파일
| 파일 | 변경 요약 |
| --- | --- |
| `src/data.ts` | `storyStages` 3개 항목을 자기소개서 본문으로 교체 / `outsourcingVideos` 4개 → 8개로 교체, `url?: string` 필드 추가 |
| `src/App.tsx` | storyStages 설명에 `whitespace-pre-line` 적용(단락 개행 표시), 영상 카드에 YouTube 썸네일 이미지·외부 링크·`▶ YOUTUBE` 배지 추가 |

## 3. 자기소개서 (BUILD-UP STORY) 본문
| 단계 | 배지 | 제목 |
| --- | --- | --- |
| 01 | 프레임 너머의 각성 | 화면 너머의 프레임을 깨고, 사람의 인식을 설계하는 기획으로 |
| 02 | 대상을 만든 전략 | 감 앞에서는 치열하게, 타깃 데이터 앞에서는 정교하게 이뤄낸 '대상'의 순간 |
| 03 | 0→2,000 실행 증명 | 0에서 2,000까지 직접 구르며 증명한, 실행형 AE |

- 각 단계의 `description`은 사용자가 보낸 본문 전문을 그대로 반영. JS 문자열 내 `'`, `"` 혼용으로 인한 이스케이프 이슈를 피하기 위해 백틱(template literal)으로 작성.
- 3단계 본문은 자기소개서 마지막 종결 문단(`저는 아이디어만 던지고 뒷짐 지는 기획자가 아닙니다 …`)을 빈 줄(`\n\n`)로 구분하여 본문 끝에 포함. `whitespace-pre-line` CSS로 줄바꿈이 렌더링에 반영됨.
- 섹션 헤더 `인식이 바뀌는 지점을 설계하게 된 3단계 빌드업 서사`는 그대로 유지(3섹션 구조와 의미가 맞음).

## 4. PRODUCTION 영상 리스트 (총 8개)
| 카드 | 제목 | 링크 |
| --- | --- | --- |
| 1 | 기아대책 X 기아(주) 주니어 글로벌 봉사단 3기 - 영상 1 | (링크 미제공) |
| 2 | 기아대책 X 기아(주) 주니어 글로벌 봉사단 3기 - 영상 2 | https://youtu.be/iZ0nYJQce8E |
| 3 | 제37회 애드파워 전시회 『캐취미』 | (링크 미제공) |
| 4 | 『캐취미 Epilogue : 거리 너머의 두번째 이야기』 | (링크 미제공) |
| 5 | 다큐멘터리 숲스토리 (외주 필름) | https://youtu.be/DWJ2YePkQ-Y |
| 6 | 굿다이닝스 브랜드 영상 (외주 필름) | https://youtu.be/D--t5qAmZCY |
| 7 | 더영캠프 메이킹 필름 | https://youtu.be/7xTCUoGBmOk |
| 8 | 해외 선교영상 | https://youtu.be/nymQREocSfM |

- URL이 있는 카드는 카드 전체가 새 탭으로 열리는 `<a target="_blank" rel="noopener noreferrer">`로 감싸지고, 우상단에 `▶ YOUTUBE` 배지·하단에 `▶ YouTube ↗` 보조 링크가 표시됨.
- URL이 있는 카드의 썸네일 배경은 `https://img.youtube.com/vi/{ID}/hqdefault.jpg` (영구적으로 제공되는 hqdefault) 이미지를 사용. 그 위에 어두운 그라데이션·텍스트 라벨 오버레이.
- URL이 없는 카드는 기존 placeholder UI 유지(그리드 패턴 + Play 아이콘).

### ⚠️ 추정 영역 (HQ 확인 필요)
- 카드별 `period`(기간)는 사용자가 명시하지 않은 영상이 있어 **추정** 값을 입력했습니다.
  - 기아 봉사단 영상 1·2: `2025.07` (experience 이력 기반)
  - 캐취미 메인: `2025.10`, 에필로그: `2025.11` (전시회 프로젝트 기간 기반)
  - 숲스토리 / 굿다이닝스 / 더영캠프: `2025` (연 단위 단정)
  - 해외 선교영상: `2024` (단정)
- `role` 텍스트도 사용자가 별도로 지정하지 않아 기획·촬영·편집 기본 표현으로 작성. 필요 시 수정 가능.
- 추정·임의값 부분은 사용자가 알려주시면 `src/data.ts`에서 그대로 교체 가능합니다.

## 5. 검증
- `npx tsc --noEmit` → 에러 없음 (✅)
- `npx vite build` → `✓ 1674 modules transformed.` 정상 빌드, `253.40 kB / 76.76 kB gzip` (✅)
- Vite dev 서버에서 `curl`로 변환 모듈 확인:
  - `data.ts`에 새 storyStages(`화면 너머의 프레임…`, `0에서 2,000까지…`) 및 새 outsourcingVideos(`kfhi-1` ~ `mission-overseas` 8개) 포함 (✅)
  - `App.tsx`에 `youtu.be/...` 정규식 매칭, `img.youtube.com/vi/.../hqdefault.jpg` 썸네일 URL 생성, `whitespace-pre-line` 클래스, `▶ YOUTUBE` 배지 노드 포함 (✅)
- pre-existing CSS `@import` 경고는 본 작업과 무관.

## 6. 배포
- 원격: `https://github.com/faboo-dev/portfolio.git` (origin)
- 절차: 변경 3개 src 파일 + 이번 보고서 + 직전 보고서를 main에 커밋 후 `git push origin main`.
- 별도 Vercel/Netlify/firebase 설정 파일은 레포에 없음 — 배포는 깃 원격에 연결된 호스팅(Vercel 등)이 자동으로 반영할 것으로 **추정**. 자동 배포가 연결돼 있지 않다면 푸시만으로는 실서비스 반영이 되지 않을 수 있으니, 미연동 시 HQ가 호스팅 콘솔에서 한 번 더 트리거해 주십시오.

## 7. 한계 (추정 영역)
- 브라우저에서 직접 픽셀 단위로 본 것이 아니므로, 줄바꿈/썸네일 종횡비/모바일 그리드는 **추정** 영역.
- 자동 배포 연결 여부는 직접 확인 불가 — `git push` 성공 외에 호스팅 측 반영은 HQ 측에서 확인 부탁드립니다.
