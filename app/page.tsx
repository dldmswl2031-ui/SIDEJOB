"use client";

import Image from "next/image";
import { toBlob, toPng } from "html-to-image";
import { useMemo, useRef, useState } from "react";

type Hustle = {
  id: string;
  name: string;
  short: string;
  image: string;
  starter: string;
  memeLead: string;
  drips: string[];
};

type QuizOption = {
  label: string;
  points: Partial<Record<string, number>>;
};

type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

const hustles: Hustle[] = [
  {
    id: "airbnb",
    name: "에어비앤비 셋업형",
    short: "공간 운영 감각 + 세팅 디테일형",
    image: "/hustles/airbnb.svg",
    starter: "근처 숙소 5개 분석표 만들고, 체크인 가이드 템플릿부터 만들어서 소규모 대행으로 시작",
    memeLead: "인테리어보다 체크리스트가 더 예쁜 사람",
    drips: [
      "침구 각 잡는 순간 뇌가 평온해지는 유형.",
      "후기 별점 4.9를 위해 밤 11시에 전구도 갈아끼울 상.",
      "게스트보다 호스트 정책을 더 잘 읽는 실무파.",
    ],
  },
  {
    id: "coupang",
    name: "쿠팡 배달 실전형",
    short: "체력 + 즉시수익 선호형",
    image: "/hustles/coupang.svg",
    starter: "평일/주말 시간대별 시급 로그 2주만 기록해서 나한테 맞는 골든타임 고정",
    memeLead: "생각보다 몸이 답인 걸 인정한 사람",
    drips: [
      "실행력이 계획을 이긴다는 걸 몸으로 증명하는 타입.",
      "운동앱보다 배송앱이 더 건강해지는 아이러니.",
      "오늘 벌고 오늘 통장에 찍히는 속도감 중독자.",
    ],
  },
  {
    id: "emoticon",
    name: "이모티콘 창작형",
    short: "캐릭터 감성 + 꾸준함형",
    image: "/hustles/emoticon.svg",
    starter: "감정 16개 세트 스케치부터 만들고, 카카오/네이버 제출 규격 체크리스트 확보",
    memeLead: "현실은 빡센데 캐릭터는 해맑은 사람",
    drips: [
      "드립 하나로 사람들 저장 버튼 누르게 만드는 재능.",
      "퇴근 후 한 컷씩 쌓아서 결국 승인 받는 집요함.",
      "감정표현을 파일명으로 정리하는 디테일 장인.",
    ],
  },
  {
    id: "stocks",
    name: "주식 데이터 몰입형",
    short: "리스크 감수 + 분석 집착형",
    image: "/hustles/stocks.svg",
    starter: "원칙 3개(손절/분할/비중)만 먼저 고정하고, 1개월 모의기록 후 소액 실전",
    memeLead: "차트 볼 때만 집중력이 초인간 모드",
    drips: [
      "뉴스 알림이 카톡보다 먼저 오는 시장 체질.",
      "수익보다 복기 노트를 더 오래 보는 냉정파.",
      "FOMO를 참아내는 날이 곧 실력인 걸 아는 타입.",
    ],
  },
  {
    id: "detailpage",
    name: "상세페이지 제작형",
    short: "판매심리 + 디자인 구성형",
    image: "/hustles/detailpage.svg",
    starter: "동일 제품 10개 상세페이지 비교해 구조 템플릿 만들고, 샘플 3개로 포트폴리오 오픈",
    memeLead: "문장 한 줄로 장바구니를 흔드는 사람",
    drips: [
      "비포/애프터 배치만으로 구매욕을 끌어올리는 타입.",
      "디자인 감각보다 전환 흐름을 먼저 보는 실무러.",
      "썸네일 1픽셀 차이로 밤새 고민할 장인력.",
    ],
  },
  {
    id: "wallpaper",
    name: "도배 기술직 성장형",
    short: "현장감 + 기술 숙련형",
    image: "/hustles/wallpaper.svg",
    starter: "보조부터 시작해 시공 전/후 사진 포트폴리오를 쌓고, 지역 커뮤니티 레퍼런스 확보",
    memeLead: "손기술 레벨업에 진심인 현실파",
    drips: [
      "결과물이 눈에 보이면 동기부여가 폭발하는 타입.",
      "경력 쌓일수록 단가가 올라가는 구조를 좋아함.",
      "현장 난이도 올라가도 표정 변화 없는 프로 모드.",
    ],
  },
  {
    id: "homeprotector",
    name: "홈프로텍터 유튜버형",
    short: "설명력 + 콘텐츠 루틴형",
    image: "/hustles/homeprotector.svg",
    starter: "보안/생활팁 30초 쇼츠 10개 먼저 올리고, 조회 잘 나온 포맷만 반복",
    memeLead: "정보 주면서 캐릭터까지 가져가는 사람",
    drips: [
      "카메라 켜면 말빨이 살아나는 설명 장인.",
      "썸네일 문구 하나로 클릭을 부르는 후킹형.",
      "조회수보다 저장률 보는 꾸준함이 강점.",
    ],
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    question: "Q1. 주말에 4시간 비면 뭘 먼저 하고 싶어?",
    options: [
      { label: "몸 써서 바로 돈 되는 일", points: { coupang: 3, wallpaper: 2 } },
      { label: "그림/콘텐츠 만들기", points: { emoticon: 3, homeprotector: 2 } },
      { label: "분석하고 전략 짜기", points: { stocks: 3, airbnb: 2 } },
      { label: "판매문구/디자인 고도화", points: { detailpage: 3, emoticon: 1 } },
    ],
  },
  {
    question: "Q2. 리스크를 고르라면?",
    options: [
      { label: "체력은 쓰지만 확실히 버는 쪽", points: { coupang: 3, wallpaper: 3 } },
      { label: "시간 걸려도 작품 쌓이는 쪽", points: { emoticon: 3, homeprotector: 2 } },
      { label: "손익 출렁여도 수익폭 큰 쪽", points: { stocks: 3 } },
      { label: "클라이언트 피드백 많은 쪽", points: { detailpage: 3, airbnb: 2 } },
    ],
  },
  {
    question: "Q3. 사람들이 나를 자주 뭐라고 해?",
    options: [
      { label: "정리 잘하고 꼼꼼해", points: { airbnb: 3, detailpage: 2 } },
      { label: "센스 있고 드립 잘쳐", points: { emoticon: 3, homeprotector: 2 } },
      { label: "끈기 있고 성실해", points: { wallpaper: 3, coupang: 2 } },
      { label: "숫자/데이터 좋아해", points: { stocks: 3, airbnb: 1 } },
    ],
  },
  {
    question: "Q4. 돈 벌면 가장 좋은 포인트는?",
    options: [
      { label: "즉시 통장에 찍히는 맛", points: { coupang: 3, wallpaper: 2 } },
      { label: "내 브랜드가 쌓이는 맛", points: { homeprotector: 3, emoticon: 2 } },
      { label: "고객 성과로 인정받는 맛", points: { detailpage: 3, airbnb: 2 } },
      { label: "복리로 커지는 숫자", points: { stocks: 3 } },
    ],
  },
  {
    question: "Q5. 내가 더 자신 있는 건?",
    options: [
      { label: "사람 상대하며 일정 관리", points: { airbnb: 3, coupang: 1 } },
      { label: "아이디어를 시각화", points: { emoticon: 3, detailpage: 2 } },
      { label: "현장 기술 습득", points: { wallpaper: 3 } },
      { label: "정보 전달과 카메라", points: { homeprotector: 3, stocks: 1 } },
    ],
  },
  {
    question: "Q6. 제일 싫은 상황은?",
    options: [
      { label: "수익이 느리게 나는 것", points: { coupang: 3, detailpage: 2 } },
      { label: "반복 노동이 너무 많은 것", points: { stocks: 2, homeprotector: 3 } },
      { label: "사람 피드백이 너무 많은 것", points: { stocks: 3, emoticon: 2 } },
      { label: "장비/도구 없이 막 시작하는 것", points: { airbnb: 2, wallpaper: 3 } },
    ],
  },
];

const initialAnswers = Array(quizQuestions.length).fill(-1);

export default function HomePage() {
  const resultCardRef = useRef<HTMLDivElement | null>(null);
  const [rouletteIndex, setRouletteIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [rouletteResult, setRouletteResult] = useState<Hustle | null>(null);

  const [answers, setAnswers] = useState<number[]>(initialAnswers);
  const [quizResult, setQuizResult] = useState<Hustle | null>(null);
  const [topMatches, setTopMatches] = useState<Array<{ hustle: Hustle; score: number }>>([]);
  const [captureBusy, setCaptureBusy] = useState(false);
  const [captureError, setCaptureError] = useState("");

  const completion = useMemo(() => answers.filter((x) => x !== -1).length, [answers]);

  const spinRoulette = () => {
    if (spinning) return;
    setSpinning(true);
    setRouletteResult(null);

    const intervalId = setInterval(() => {
      setRouletteIndex((prev) => (prev + 1 + Math.floor(Math.random() * 2)) % hustles.length);
    }, 90);

    setTimeout(() => {
      clearInterval(intervalId);
      const finalIndex = Math.floor(Math.random() * hustles.length);
      setRouletteIndex(finalIndex);
      setRouletteResult(hustles[finalIndex]);
      setSpinning(false);
    }, 2400);
  };

  const setAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  };

  const runTest = () => {
    if (answers.some((a) => a === -1)) return;

    const scoreMap: Record<string, number> = Object.fromEntries(hustles.map((h) => [h.id, 0]));

    quizQuestions.forEach((question, qIndex) => {
      const selected = question.options[answers[qIndex]];
      Object.entries(selected.points).forEach(([id, point]) => {
        scoreMap[id] += point ?? 0;
      });
    });

    const sorted = [...hustles]
      .map((hustle) => ({ hustle, score: scoreMap[hustle.id] }))
      .sort((a, b) => b.score - a.score);

    setTopMatches(sorted.slice(0, 3));
    setQuizResult(sorted[0].hustle);
  };

  const resetTest = () => {
    setAnswers(initialAnswers);
    setQuizResult(null);
    setTopMatches([]);
    setCaptureError("");
  };

  const roastLine = useMemo(() => {
    if (!quizResult) return "";
    const key = answers.reduce((sum, idx) => sum + Math.max(idx, 0), 0);
    const roastIdx = key % quizResult.drips.length;
    return quizResult.drips[roastIdx];
  }, [answers, quizResult]);

  const createResultFilename = () => {
    const safeName = (quizResult?.name ?? "result").replace(/\s+/g, "-");
    return `sidejob-${safeName}.png`;
  };

  const downloadResultImage = async () => {
    if (!resultCardRef.current || !quizResult) return;
    setCaptureBusy(true);
    setCaptureError("");
    try {
      const dataUrl = await toPng(resultCardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#fffaf5",
      });
      const link = document.createElement("a");
      link.download = createResultFilename();
      link.href = dataUrl;
      link.click();
    } catch {
      setCaptureError("이미지 저장에 실패했어요. 다시 시도해주세요.");
    } finally {
      setCaptureBusy(false);
    }
  };

  const shareResultImage = async () => {
    if (!resultCardRef.current || !quizResult) return;
    setCaptureBusy(true);
    setCaptureError("");
    try {
      const blob = await toBlob(resultCardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#fffaf5",
      });
      if (!blob) throw new Error("blob-empty");

      const file = new File([blob], createResultFilename(), { type: "image/png" });
      const canNativeShare =
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [file] });

      if (canNativeShare) {
        await navigator.share({
          title: `부업 결과: ${quizResult.name}`,
          text: `너 뭐 나왔냐 ㅋㅋ 나는 ${quizResult.name} 나옴`,
          files: [file],
        });
      } else {
        await downloadResultImage();
      }
    } catch {
      setCaptureError("공유에 실패했어요. 저장 버튼으로 받아서 공유해보세요.");
    } finally {
      setCaptureBusy(false);
    }
  };

  return (
    <main className="fun-page">
      <section className="container hero">
        <p className="small-label">Side Job Party Test</p>
        <h1>월 1000 얘기 들리면 흔들리는 사람용, 부업 룰렛/테스트</h1>
        <p>
          진지하게 고르되 결과는 가볍게 웃자. 룰렛 한 번 돌리고, 테스트까지 하면
          <strong> "너 뭐 나왔냐 ㅋㅋ" </strong>
          바로 보낼 수 있는 결과가 나옵니다.
        </p>
      </section>

      <section className="container split">
        <article className="card block roulette-block">
          <div className="block-head">
            <h2 className="section-title">부업 룰렛</h2>
            <span className="chip">운빨 100%</span>
          </div>

          <div className="roulette-list">
            {hustles.map((hustle, idx) => (
              <button
                key={hustle.id}
                type="button"
                className={`roulette-item ${rouletteIndex === idx ? "active" : ""}`}
                onClick={() => setRouletteIndex(idx)}
              >
                {hustle.name}
              </button>
            ))}
          </div>

          <button type="button" className="action-button" onClick={spinRoulette} disabled={spinning}>
            {spinning ? "돌아가는 중..." : "룰렛 돌리기"}
          </button>

          {rouletteResult && (
            <div className="result-lite">
              <Image src={rouletteResult.image} alt={rouletteResult.name} width={640} height={420} />
              <p className="badge-line">룰렛 당첨: {rouletteResult.name}</p>
              <p>{rouletteResult.drips[0]}</p>
            </div>
          )}
        </article>

        <article className="card block">
          <div className="block-head">
            <h2 className="section-title">부업 성향 테스트</h2>
            <span className="chip">문항 {completion}/{quizQuestions.length}</span>
          </div>

          <div className="question-list">
            {quizQuestions.map((q, qIdx) => (
              <div key={q.question} className="q-item">
                <p className="q-title">{q.question}</p>
                <div className="opt-grid">
                  {q.options.map((opt, oIdx) => (
                    <button
                      key={opt.label}
                      type="button"
                      className={`opt-btn ${answers[qIdx] === oIdx ? "selected" : ""}`}
                      onClick={() => setAnswer(qIdx, oIdx)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="test-actions">
            <button
              type="button"
              className="action-button"
              onClick={runTest}
              disabled={completion !== quizQuestions.length}
            >
              결과 보기
            </button>
            <button type="button" className="ghost-button" onClick={resetTest}>
              다시 하기
            </button>
          </div>
        </article>
      </section>

      {quizResult && (
        <section className="container">
          <article className="card final-result">
            <div ref={resultCardRef} className="capture-target">
            <p className="small-label">테스트 결과</p>
            <h3>{quizResult.name}</h3>
            <p className="one-line">{quizResult.short}</p>
            <p className="roast">
              {quizResult.memeLead}. {roastLine}
            </p>
            <p className="share">너 뭐 나왔냐 ㅋㅋ 나는 {quizResult.name} 나옴</p>
            </div>
            <div className="capture-actions">
              <button type="button" className="action-button" onClick={downloadResultImage} disabled={captureBusy}>
                {captureBusy ? "이미지 생성 중..." : "결과 이미지 저장"}
              </button>
              <button type="button" className="ghost-button" onClick={shareResultImage} disabled={captureBusy}>
                공유하기
              </button>
            </div>
            {captureError && <p className="capture-error">{captureError}</p>}

            <div className="result-body">
              <Image src={quizResult.image} alt={quizResult.name} width={640} height={420} />
              <div className="result-text">
                <p>
                  <strong>시작 팁:</strong> {quizResult.starter}
                </p>
                <p>
                  <strong>현실 체크:</strong> 월 1000은 누구에게나 보장되는 숫자가 아니라,
                  맞는 판에서 오래 버틴 사람에게 확률이 올라갑니다.
                </p>
                <div className="top-list">
                  {topMatches.map((item, idx) => (
                    <div key={item.hustle.id} className="top-item">
                      <span>{idx + 1}위</span>
                      <span>{item.hustle.name}</span>
                      <span>{item.score}점</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      <section className="container">
        <div className="all-cards">
          {hustles.map((h) => (
            <article key={h.id} className="card mini-card">
              <Image src={h.image} alt={h.name} width={640} height={420} />
              <h4>{h.name}</h4>
              <p>{h.short}</p>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .fun-page {
          padding: 44px 0 90px;
        }
        .hero {
          background: linear-gradient(130deg, #fff5e8 0%, #e9f4ff 58%, #fff0d8 100%);
          border: 1px solid rgba(16, 17, 19, 0.08);
          border-radius: 24px;
          box-shadow: 0 14px 28px rgba(16, 17, 19, 0.08);
          padding-top: 52px;
          padding-bottom: 52px;
          margin-bottom: 18px;
        }
        .hero h1 {
          margin: 0 0 10px;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.08;
          max-width: 860px;
        }
        .hero p {
          margin: 0;
          max-width: 760px;
          line-height: 1.65;
          font-size: 17px;
        }
        .split {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 14px;
          align-items: start;
        }
        .block {
          display: grid;
          gap: 12px;
        }
        .block-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .chip {
          border-radius: 999px;
          background: rgba(16, 17, 19, 0.08);
          padding: 6px 11px;
          font-size: 12px;
          font-family: "Manrope", "Arial", sans-serif;
        }
        .roulette-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .roulette-item {
          border: 1px solid rgba(16, 17, 19, 0.12);
          background: #fff;
          border-radius: 12px;
          padding: 10px;
          text-align: left;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        .roulette-item.active {
          background: #2f7be8;
          color: #fff;
          border-color: #2f7be8;
          transform: translateY(-1px);
        }
        .action-button,
        .ghost-button {
          border-radius: 12px;
          padding: 11px 14px;
          font-size: 14px;
          font-family: "Manrope", "Arial", sans-serif;
        }
        .action-button {
          background: #202124;
          color: #fff;
        }
        .action-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .ghost-button {
          background: #e7ebef;
          color: #202124;
        }
        .result-lite img,
        .mini-card img,
        .result-body img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          border: 1px solid rgba(16, 17, 19, 0.08);
        }
        .badge-line {
          margin: 10px 0 4px;
          font-size: 13px;
          font-family: "Manrope", "Arial", sans-serif;
          color: rgba(16, 17, 19, 0.75);
        }
        .question-list {
          display: grid;
          gap: 14px;
          max-height: 660px;
          overflow: auto;
          padding-right: 4px;
        }
        .q-item {
          border: 1px solid rgba(16, 17, 19, 0.08);
          border-radius: 14px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.72);
        }
        .q-title {
          margin: 0 0 8px;
          font-weight: 700;
        }
        .opt-grid {
          display: grid;
          gap: 7px;
        }
        .opt-btn {
          border: 1px solid rgba(16, 17, 19, 0.14);
          background: #fff;
          border-radius: 10px;
          padding: 9px 10px;
          text-align: left;
          font-size: 13px;
        }
        .opt-btn.selected {
          border-color: #ff8f3e;
          background: rgba(255, 143, 62, 0.15);
        }
        .test-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .final-result {
          margin-top: 16px;
          display: grid;
          gap: 8px;
        }
        .final-result h3 {
          margin: 0;
          font-size: 30px;
        }
        .capture-target {
          display: grid;
          gap: 8px;
        }
        .capture-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .capture-error {
          margin: 0;
          color: #a12b2b;
          font-size: 13px;
          font-family: "Manrope", "Arial", sans-serif;
        }
        .one-line {
          margin: 0;
          font-weight: 700;
        }
        .roast {
          margin: 0;
          line-height: 1.6;
        }
        .share {
          width: fit-content;
          margin: 0;
          border-radius: 999px;
          padding: 6px 12px;
          background: rgba(47, 123, 232, 0.14);
          color: #184b94;
          font-family: "Manrope", "Arial", sans-serif;
          font-size: 13px;
        }
        .result-body {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 12px;
          margin-top: 8px;
        }
        .result-text {
          display: grid;
          gap: 10px;
          align-content: start;
        }
        .result-text p {
          margin: 0;
          line-height: 1.55;
        }
        .top-list {
          display: grid;
          gap: 6px;
        }
        .top-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 8px;
          border: 1px solid rgba(16, 17, 19, 0.08);
          border-radius: 10px;
          padding: 8px 10px;
          font-size: 13px;
        }
        .all-cards {
          margin-top: 16px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .mini-card {
          display: grid;
          gap: 8px;
          align-content: start;
        }
        .mini-card h4 {
          margin: 0;
          font-size: 18px;
        }
        .mini-card p {
          margin: 0;
          font-size: 14px;
          color: rgba(16, 17, 19, 0.72);
        }
        @media (max-width: 1020px) {
          .split {
            grid-template-columns: 1fr;
          }
          .result-body {
            grid-template-columns: 1fr;
          }
          .all-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 700px) {
          .fun-page {
            padding-top: 18px;
          }
          .hero {
            padding-top: 34px;
            padding-bottom: 34px;
          }
          .hero p {
            font-size: 15px;
          }
          .roulette-list {
            grid-template-columns: 1fr;
          }
          .all-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
