const salons = [
  {
    id: "s1",
    name: "Luma Atelier",
    region: "seoul",
    area: "홍대",
    rating: 4.9,
    distance: "0.8km",
    price: "₩₩",
    languages: ["EN", "JP", "CN"],
    specialties: ["커트", "컬러", "웨이브"],
  },
  {
    id: "s2",
    name: "Mori & Co",
    region: "seoul",
    area: "청담",
    rating: 4.8,
    distance: "1.4km",
    price: "₩₩₩",
    languages: ["EN", "FR"],
    specialties: ["메이크업", "스타일링"],
  },
  {
    id: "s3",
    name: "Seafoam Studio",
    region: "busan",
    area: "광안리",
    rating: 4.7,
    distance: "0.5km",
    price: "₩₩",
    languages: ["EN", "CN"],
    specialties: ["커트", "헤드스파"],
  },
  {
    id: "s4",
    name: "Jeju Muse",
    region: "jeju",
    area: "서귀포",
    rating: 4.85,
    distance: "1.1km",
    price: "₩₩",
    languages: ["EN", "TH"],
    specialties: ["컬러", "메이크업"],
  },
  {
    id: "s5",
    name: "Velvet Line",
    region: "daegu",
    area: "동성로",
    rating: 4.6,
    distance: "0.9km",
    price: "₩",
    languages: ["EN", "JP"],
    specialties: ["펌", "클리닉"],
  },
  {
    id: "s6",
    name: "River Bloom",
    region: "seoul",
    area: "성수",
    rating: 4.75,
    distance: "1.9km",
    price: "₩₩",
    languages: ["EN", "ES"],
    specialties: ["커트", "펌"],
  },
];

const i18n = {
  ko: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "서비스 안내",
    "nav.partners": "파트너 미용실",
    "nav.language": "언어",
    "hero.eyebrow": "FOREIGNER FRIENDLY BOOKING",
    "hero.title": "여행 중에도, 원하는 스타일 그대로.",
    "hero.lead":
      "지역과 일정, 원하는 이미지 한 장이면 끝. 외국인이 자주 찾는 검증된 미용실을 추천하고 예약까지 한 번에 연결합니다.",
    "metric.salons": "검증 미용실",
    "metric.languages": "지원 언어",
    "metric.rating": "만족도",
    "form.title": "빠른 추천 받기",
    "form.subtitle": "입력 즉시 주변 베스트 살롱을 추천합니다.",
    "form.region": "지역",
    "form.regionPlaceholder": "지역 선택",
    "form.neighborhood": "상세 위치 (예: 홍대)",
    "form.date": "날짜",
    "form.time": "시간",
    "form.service": "서비스 유형",
    "service.cut": "커트",
    "service.color": "염색",
    "service.perm": "펌",
    "service.spa": "헤드스파",
    "service.makeup": "메이크업",
    "form.image": "원하는 스타일 이미지",
    "form.imagePlaceholder": "이미지 미리보기",
    "form.notes": "요청사항",
    "form.notesPlaceholder": "언어 지원, 알레르기, 선호 스타일 등을 적어주세요.",
    "form.submit": "추천 받기",
    "results.title": "추천 미용실",
    "results.subtitle": "입력한 일정과 이미지에 가장 가까운 미용실을 선별했습니다.",
    "results.placeholderTitle": "추천 결과가 여기에 표시됩니다.",
    "results.placeholderBody": "지역과 일정 입력 후 추천 받기를 눌러주세요.",
    "results.emptyTitle": "해당 지역에 추천 가능한 미용실이 없습니다.",
    "results.emptyBody": "다른 지역을 선택하거나 날짜를 변경해 주세요.",
    "results.requiredTitle": "필수 정보를 먼저 입력해 주세요.",
    "results.requiredBody": "지역, 날짜, 시간을 입력하면 추천 결과가 표시됩니다.",
    "steps.title": "예약 과정",
    "steps.subtitle": "외국인도 쉽게 예약할 수 있도록 번역과 결제까지 연결합니다.",
    "steps.one": "입력",
    "steps.oneBody": "지역, 날짜, 시간, 이미지를 입력합니다.",
    "steps.two": "추천",
    "steps.twoBody": "리뷰와 외국인 만족도를 기준으로 선별합니다.",
    "steps.three": "예약",
    "steps.threeBody": "다국어 컨시어지가 예약을 확정합니다.",
    "modal.close": "닫기",
    "modal.title": "예약 확인",
    "modal.cancel": "취소",
    "modal.next": "예약 진행",
    "modal.back": "뒤로",
    "payment.title": "결제 정보",
    "payment.desc": "보증금을 결제하면 예약이 확정됩니다.",
    "payment.name": "이름",
    "payment.email": "이메일",
    "payment.phone": "연락처",
    "payment.card": "카드 끝 4자리",
    "payment.policy": "취소 정책에 동의합니다.",
    "payment.deposit": "예약 보증금",
    "payment.pay": "보증금 결제",
    "payment.processing": "결제 처리 중",
    "success.title": "예약 완료",
    "success.desc": "확정 안내를 이메일과 문자로 전송합니다.",
    "success.email": "이메일",
    "success.sms": "문자",
    "success.resendEmail": "이메일 재전송",
    "success.resendSms": "문자 재전송",
    "status.ready": "대기",
    "status.sending": "전송 중",
    "status.sent": "전송됨",
    "success.done": "완료",
    "card.match": "매칭",
    "card.languages": "언어",
    "card.specialties": "특화",
    "card.book": "예약하기",
    "region.seoul": "서울",
    "region.busan": "부산",
    "region.jeju": "제주",
    "region.daegu": "대구",
    "success.message": "예약이 완료되었습니다. {salon}에서 {date} {time}에 뵐게요. 컨시어지가 30분 내에 연락드립니다.",
  },
  en: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "How it works",
    "nav.partners": "Partner salons",
    "nav.language": "Language",
    "hero.eyebrow": "FOREIGNER FRIENDLY BOOKING",
    "hero.title": "Your look, even while traveling.",
    "hero.lead":
      "Pick a region, date, time, and reference image. We match you with top-rated salons and secure the booking.",
    "metric.salons": "Verified salons",
    "metric.languages": "Languages",
    "metric.rating": "Satisfaction",
    "form.title": "Get instant matches",
    "form.subtitle": "Find the best salons around your location in seconds.",
    "form.region": "Region",
    "form.regionPlaceholder": "Select region",
    "form.neighborhood": "Neighborhood (e.g. Hongdae)",
    "form.date": "Date",
    "form.time": "Time",
    "form.service": "Service type",
    "service.cut": "Cut",
    "service.color": "Color",
    "service.perm": "Perm",
    "service.spa": "Head spa",
    "service.makeup": "Makeup",
    "form.image": "Style reference",
    "form.imagePlaceholder": "Image preview",
    "form.notes": "Notes",
    "form.notesPlaceholder": "Language support, allergies, preferred style, etc.",
    "form.submit": "Get matches",
    "results.title": "Recommended salons",
    "results.subtitle": "We picked the closest matches to your schedule and style.",
    "results.placeholderTitle": "Your recommendations will appear here.",
    "results.placeholderBody": "Choose region, date, time, then request matches.",
    "results.emptyTitle": "No salons available in this area.",
    "results.emptyBody": "Try another region or date.",
    "results.requiredTitle": "Please fill in the required fields.",
    "results.requiredBody": "Region, date, and time are needed to show matches.",
    "steps.title": "Booking steps",
    "steps.subtitle": "Translation and payment are handled so travelers can book easily.",
    "steps.one": "Input",
    "steps.oneBody": "Add region, date, time, and an image.",
    "steps.two": "Match",
    "steps.twoBody": "We rank salons by reviews and traveler ratings.",
    "steps.three": "Book",
    "steps.threeBody": "Multilingual concierge confirms the reservation.",
    "modal.close": "Close",
    "modal.title": "Confirm booking",
    "modal.cancel": "Cancel",
    "modal.next": "Continue",
    "modal.back": "Back",
    "payment.title": "Payment details",
    "payment.desc": "Pay the deposit to confirm your booking.",
    "payment.name": "Full name",
    "payment.email": "Email",
    "payment.phone": "Phone",
    "payment.card": "Last 4 digits",
    "payment.policy": "I agree to the cancellation policy.",
    "payment.deposit": "Deposit",
    "payment.pay": "Pay deposit",
    "payment.processing": "Processing payment",
    "success.title": "Booking complete",
    "success.desc": "We will send confirmation by email and SMS.",
    "success.email": "Email",
    "success.sms": "SMS",
    "success.resendEmail": "Resend email",
    "success.resendSms": "Resend SMS",
    "status.ready": "Ready",
    "status.sending": "Sending",
    "status.sent": "Sent",
    "success.done": "Done",
    "card.match": "Match",
    "card.languages": "Languages",
    "card.specialties": "Specialties",
    "card.book": "Book now",
    "region.seoul": "Seoul",
    "region.busan": "Busan",
    "region.jeju": "Jeju",
    "region.daegu": "Daegu",
    "success.message": "Your booking is confirmed. See you at {salon} on {date} at {time}. Our concierge will contact you within 30 minutes.",
  },
  ja: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "サービス案内",
    "nav.partners": "提携サロン",
    "nav.language": "言語",
    "hero.eyebrow": "FOREIGNER FRIENDLY BOOKING",
    "hero.title": "旅先でも理想のスタイルを。",
    "hero.lead":
      "エリア・日時・参考画像を入力するだけ。高評価サロンをマッチングし予約まで行います。",
    "metric.salons": "認証サロン",
    "metric.languages": "対応言語",
    "metric.rating": "満足度",
    "form.title": "すぐにおすすめ",
    "form.subtitle": "現在地周辺の人気サロンをすぐに提案します。",
    "form.region": "エリア",
    "form.regionPlaceholder": "エリアを選択",
    "form.neighborhood": "詳細エリア (例: ホンデ)",
    "form.date": "日付",
    "form.time": "時間",
    "form.service": "サービス",
    "service.cut": "カット",
    "service.color": "カラー",
    "service.perm": "パーマ",
    "service.spa": "ヘッドスパ",
    "service.makeup": "メイク",
    "form.image": "参考画像",
    "form.imagePlaceholder": "画像プレビュー",
    "form.notes": "リクエスト",
    "form.notesPlaceholder": "言語対応・アレルギー・希望スタイルなど。",
    "form.submit": "おすすめを見る",
    "results.title": "おすすめサロン",
    "results.subtitle": "入力内容に最も近いサロンを選定しました。",
    "results.placeholderTitle": "おすすめ結果がここに表示されます。",
    "results.placeholderBody": "エリアと日時を入力してから押してください。",
    "results.emptyTitle": "このエリアのおすすめはありません。",
    "results.emptyBody": "別のエリアや日程をお試しください。",
    "results.requiredTitle": "必須情報を入力してください。",
    "results.requiredBody": "エリア・日付・時間が必要です。",
    "steps.title": "予約の流れ",
    "steps.subtitle": "翻訳と決済までサポートします。",
    "steps.one": "入力",
    "steps.oneBody": "エリア、日付、時間、画像を入力します。",
    "steps.two": "推薦",
    "steps.twoBody": "レビューと旅行者評価で選定します。",
    "steps.three": "予約",
    "steps.threeBody": "多言語コンシェルジュが確定します。",
    "modal.close": "閉じる",
    "modal.title": "予約確認",
    "modal.cancel": "キャンセル",
    "modal.next": "次へ",
    "modal.back": "戻る",
    "payment.title": "支払い情報",
    "payment.desc": "デポジットの支払いで予約が確定します。",
    "payment.name": "氏名",
    "payment.email": "メール",
    "payment.phone": "連絡先",
    "payment.card": "カード下4桁",
    "payment.policy": "キャンセルポリシーに同意します。",
    "payment.deposit": "デポジット",
    "payment.pay": "支払う",
    "payment.processing": "決済処理中",
    "success.title": "予約完了",
    "success.desc": "確認メールとSMSを送信します。",
    "success.email": "メール",
    "success.sms": "SMS",
    "success.resendEmail": "メール再送",
    "success.resendSms": "SMS再送",
    "status.ready": "待機",
    "status.sending": "送信中",
    "status.sent": "送信済み",
    "success.done": "完了",
    "card.match": "一致度",
    "card.languages": "言語",
    "card.specialties": "得意",
    "card.book": "予約する",
    "region.seoul": "ソウル",
    "region.busan": "プサン",
    "region.jeju": "チェジュ",
    "region.daegu": "テグ",
    "success.message": "予約が確定しました。{salon}で{date} {time}にお会いしましょう。30分以内に連絡します。",
  },
  zh: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "服务介绍",
    "nav.partners": "合作沙龙",
    "nav.language": "语言",
    "hero.eyebrow": "FOREIGNER FRIENDLY BOOKING",
    "hero.title": "旅行中也能保持理想发型。",
    "hero.lead": "选择区域、日期、时间与参考图片，我们会匹配高评分沙龙并完成预约。",
    "metric.salons": "认证沙龙",
    "metric.languages": "支持语言",
    "metric.rating": "满意度",
    "form.title": "快速推荐",
    "form.subtitle": "立即找到附近最合适的沙龙。",
    "form.region": "区域",
    "form.regionPlaceholder": "选择区域",
    "form.neighborhood": "详细位置 (如 弘大)",
    "form.date": "日期",
    "form.time": "时间",
    "form.service": "服务类型",
    "service.cut": "剪发",
    "service.color": "染发",
    "service.perm": "烫发",
    "service.spa": "头皮护理",
    "service.makeup": "化妆",
    "form.image": "参考图片",
    "form.imagePlaceholder": "图片预览",
    "form.notes": "备注",
    "form.notesPlaceholder": "语言支持、过敏信息、偏好等。",
    "form.submit": "获取推荐",
    "results.title": "推荐沙龙",
    "results.subtitle": "已为你筛选最匹配的沙龙。",
    "results.placeholderTitle": "推荐结果将在这里显示。",
    "results.placeholderBody": "选择区域与时间后点击获取推荐。",
    "results.emptyTitle": "该区域暂无推荐沙龙。",
    "results.emptyBody": "请尝试其他区域或日期。",
    "results.requiredTitle": "请先填写必填信息。",
    "results.requiredBody": "需要区域、日期和时间才能推荐。",
    "steps.title": "预约流程",
    "steps.subtitle": "提供翻译与支付支持，轻松预约。",
    "steps.one": "填写",
    "steps.oneBody": "输入区域、日期、时间与图片。",
    "steps.two": "匹配",
    "steps.twoBody": "依据评价与旅客满意度筛选。",
    "steps.three": "预约",
    "steps.threeBody": "多语种顾问完成确认。",
    "modal.close": "关闭",
    "modal.title": "确认预约",
    "modal.cancel": "取消",
    "modal.next": "继续",
    "modal.back": "返回",
    "payment.title": "支付信息",
    "payment.desc": "支付订金即可确认预约。",
    "payment.name": "姓名",
    "payment.email": "邮箱",
    "payment.phone": "联系方式",
    "payment.card": "卡号后四位",
    "payment.policy": "我同意取消政策。",
    "payment.deposit": "订金",
    "payment.pay": "支付订金",
    "payment.processing": "支付处理中",
    "success.title": "预约完成",
    "success.desc": "确认信息将通过邮箱和短信发送。",
    "success.email": "邮箱",
    "success.sms": "短信",
    "success.resendEmail": "重新发送邮箱",
    "success.resendSms": "重新发送短信",
    "status.ready": "待发送",
    "status.sending": "发送中",
    "status.sent": "已发送",
    "success.done": "完成",
    "card.match": "匹配度",
    "card.languages": "语言",
    "card.specialties": "擅长",
    "card.book": "立即预约",
    "region.seoul": "首尔",
    "region.busan": "釜山",
    "region.jeju": "济州",
    "region.daegu": "大邱",
    "success.message": "预约已确认。我们将在{date} {time}于{salon}见面，顾问会在30分钟内联系你。",
  },
};

const localeMap = {
  ko: "ko-KR",
  en: "en-US",
  ja: "ja-JP",
  zh: "zh-CN",
};

const pricing = {
  seoul: {
    ko: { currency: "KRW", amount: 20000 },
    en: { currency: "USD", amount: 25 },
    ja: { currency: "JPY", amount: 2500 },
    zh: { currency: "CNY", amount: 140 },
  },
  busan: {
    ko: { currency: "KRW", amount: 18000 },
    en: { currency: "USD", amount: 22 },
    ja: { currency: "JPY", amount: 2200 },
    zh: { currency: "CNY", amount: 120 },
  },
  jeju: {
    ko: { currency: "KRW", amount: 22000 },
    en: { currency: "USD", amount: 28 },
    ja: { currency: "JPY", amount: 2800 },
    zh: { currency: "CNY", amount: 160 },
  },
  daegu: {
    ko: { currency: "KRW", amount: 16000 },
    en: { currency: "USD", amount: 19 },
    ja: { currency: "JPY", amount: 2000 },
    zh: { currency: "CNY", amount: 110 },
  },
};

const form = document.getElementById("booking-form");
const resultsGrid = document.getElementById("results-grid");
const imageInput = document.getElementById("style-image");
const imagePreview = document.getElementById("image-preview");
const modal = document.getElementById("booking-modal");
const modalSummary = document.getElementById("modal-summary");
const closeModal = document.getElementById("close-modal");
const cancelBooking = document.getElementById("cancel-booking");
const confirmBooking = document.getElementById("confirm-booking");
const backToConfirm = document.getElementById("back-to-confirm");
const payNow = document.getElementById("pay-now");
const finishBooking = document.getElementById("finish-booking");
const modalSteps = Array.from(document.querySelectorAll(".modal-step"));
const successMessage = document.getElementById("success-message");
const paymentForm = document.getElementById("payment-form");
const depositAmount = document.getElementById("deposit-amount");
const emailStatus = document.getElementById("email-status");
const smsStatus = document.getElementById("sms-status");
const resendEmail = document.getElementById("resend-email");
const resendSms = document.getElementById("resend-sms");
const paymentName = document.getElementById("payment-name");
const paymentEmail = document.getElementById("payment-email");
const paymentPhone = document.getElementById("payment-phone");
const regionSelect = document.getElementById("region");
const languageSelect = document.getElementById("language");
const serviceChips = document.querySelectorAll("#service-type .chip");

const state = {
  lang: "ko",
  selectedService: "cut",
  selectedSalon: null,
  lastInputs: null,
  lastResults: [],
  deposit: null,
  confirmations: {
    email: null,
    sms: null,
  },
};

function t(key) {
  return i18n[state.lang][key] || key;
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat(localeMap[state.lang], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getDeposit(region) {
  if (!region || !pricing[region]) return null;
  return pricing[region][state.lang] || pricing[region].ko;
}

function updateDepositDisplay() {
  const region = regionSelect.value;
  const deposit = getDeposit(region);
  state.deposit = deposit;
  if (!deposit) {
    depositAmount.textContent = "-";
    return;
  }
  depositAmount.textContent = formatCurrency(deposit.amount, deposit.currency);
}

function updateConfirmationStatus() {
  emailStatus.textContent = state.confirmations.email
    ? t(state.confirmations.email)
    : t("status.ready");
  smsStatus.textContent = state.confirmations.sms
    ? t(state.confirmations.sms)
    : t("status.ready");
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.documentElement.setAttribute("lang", state.lang);
  updateDynamicText();
  updateDepositDisplay();
  updateConfirmationStatus();
}

function updateDynamicText() {
  if (!imageInput.files.length) {
    imagePreview.innerHTML = `<p>${t("form.imagePlaceholder")}</p>`;
  }

  if (state.lastInputs && state.lastResults.length) {
    renderResults(state.lastResults, state.lastInputs);
  }

  if (state.selectedSalon && state.lastInputs) {
    modalSummary.textContent = buildSummary(state.selectedSalon, state.lastInputs);
  }

  if (state.selectedSalon && state.lastInputs) {
    successMessage.textContent = buildSuccess(state.selectedSalon, state.lastInputs);
  }
}

function serviceLabel(serviceKey) {
  return t(`service.${serviceKey}`);
}

serviceChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    serviceChips.forEach((btn) => btn.classList.remove("active"));
    chip.classList.add("active");
    state.selectedService = chip.dataset.value;
  });
});

languageSelect.addEventListener("change", (event) => {
  state.lang = event.target.value;
  applyTranslations();
});

regionSelect.addEventListener("change", () => {
  updateDepositDisplay();
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    imagePreview.innerHTML = `<p>${t("form.imagePlaceholder")}</p>`;
    return;
  }
  const url = URL.createObjectURL(file);
  imagePreview.innerHTML = `<img src="${url}" alt="업로드된 스타일 이미지">`;
});

function buildSummary(salon, inputs) {
  const location = inputs.neighborhood || salon.area;
  const service = serviceLabel(state.selectedService);
  return `${salon.name} · ${location} · ${inputs.date} ${inputs.time} · ${service}`;
}

function buildSuccess(salon, inputs) {
  return t("success.message")
    .replace("{salon}", salon.name)
    .replace("{date}", inputs.date)
    .replace("{time}", inputs.time);
}

function buildCard(salon, score, inputs) {
  const card = document.createElement("article");
  card.className = "salon-card";
  card.innerHTML = `
    <h3>${salon.name}</h3>
    <div class="card-meta">
      <span class="tag">${salon.area}</span>
      <span>${salon.distance}</span>
      <span>${salon.price}</span>
      <span>⭐ ${salon.rating}</span>
    </div>
    <p class="score">${t("card.match")} ${score}%</p>
    <div class="card-meta">
      <span>${t("card.languages")}: ${salon.languages.join(", ")}</span>
      <span>${t("card.specialties")}: ${salon.specialties.join(", ")}</span>
    </div>
    <button class="primary book" data-id="${salon.id}">${t("card.book")}</button>
  `;

  const button = card.querySelector(".book");
  button.addEventListener("click", () => {
    state.selectedSalon = salon;
    state.lastInputs = inputs;
    state.confirmations = { email: null, sms: null };
    modalSummary.textContent = buildSummary(salon, inputs);
    successMessage.textContent = buildSuccess(salon, inputs);
    updateConfirmationStatus();
    updateDepositDisplay();
    showStep(1);
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });

  return card;
}

function renderResults(items, inputs) {
  resultsGrid.innerHTML = "";
  if (items.length === 0) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <h3>${t("results.emptyTitle")}</h3>
        <p>${t("results.emptyBody")}</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const score = Math.min(99, Math.round(item.rating * 20 + 8 - index * 3));
    resultsGrid.appendChild(buildCard(item, score, inputs));
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const region = document.getElementById("region").value;
  const neighborhood = document.getElementById("neighborhood").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!region || !date || !time) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <h3>${t("results.requiredTitle")}</h3>
        <p>${t("results.requiredBody")}</p>
      </div>
    `;
    return;
  }

  const filtered = salons
    .filter((salon) => salon.region === region)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  state.lastInputs = { region, neighborhood, date, time };
  state.lastResults = filtered;
  renderResults(filtered, state.lastInputs);
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});

function showStep(stepNumber) {
  modalSteps.forEach((step) => {
    step.classList.toggle(
      "is-active",
      Number(step.dataset.step) === stepNumber
    );
  });
}

function setConfirmationStatus(channel, statusKey) {
  state.confirmations[channel] = statusKey;
  updateConfirmationStatus();
}

function fakePaymentAPI(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, id: `PAY-${Date.now()}`, payload });
    }, 800);
  });
}

function fakeSendConfirmationAPI(channel, payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, channel, sentAt: new Date().toISOString(), payload });
    }, 600);
  });
}

async function sendConfirmations() {
  setConfirmationStatus("email", "status.sending");
  setConfirmationStatus("sms", "status.sending");
  await Promise.all([
    fakeSendConfirmationAPI("email", {
      email: paymentEmail.value,
      salon: state.selectedSalon?.name,
    }),
    fakeSendConfirmationAPI("sms", {
      phone: paymentPhone.value,
      salon: state.selectedSalon?.name,
    }),
  ]);
  setConfirmationStatus("email", "status.sent");
  setConfirmationStatus("sms", "status.sent");
}

function closeBookingModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function resetPaymentForm() {
  paymentForm.reset();
  state.confirmations = { email: null, sms: null };
  updateConfirmationStatus();
}

closeModal.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

cancelBooking.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeBookingModal();
    resetPaymentForm();
  }
});

confirmBooking.addEventListener("click", () => {
  if (!state.selectedSalon) return;
  showStep(2);
});

backToConfirm.addEventListener("click", () => {
  showStep(1);
});

payNow.addEventListener("click", () => {
  if (!paymentForm.reportValidity()) return;
  if (!state.selectedSalon || !state.lastInputs) return;
  const originalLabel = payNow.textContent;
  payNow.disabled = true;
  payNow.textContent = t("payment.processing");
  fakePaymentAPI({
    salonId: state.selectedSalon.id,
    service: state.selectedService,
    name: paymentName.value,
    email: paymentEmail.value,
    phone: paymentPhone.value,
    deposit: state.deposit,
  }).then(() => {
    showStep(3);
    sendConfirmations();
  }).finally(() => {
    payNow.disabled = false;
    payNow.textContent = originalLabel;
  });
});

finishBooking.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

applyTranslations();
