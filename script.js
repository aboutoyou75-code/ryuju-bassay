const SITE_CONFIG = {
  // 本番公開前に電話番号、LINE URL、送信先メールを設定してください。
  phone: "090-2014-7439",
  lineUrl: "https://lin.ee/thISnveh",
  email: "ryuzyuchop@gmail.com"
};

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const phoneHref = SITE_CONFIG.phone ? SITE_CONFIG.phone.replace(/[^\d+]/g, "") : "";

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  if (!(link instanceof HTMLAnchorElement)) return;
  if (SITE_CONFIG.phone) {
    link.href = `tel:${phoneHref}`;
  } else {
    link.href = "#estimate-form";
    link.setAttribute("title", "電話番号をSITE_CONFIGに設定してください");
  }
});

document.querySelectorAll("[data-line-link]").forEach((link) => {
  if (!(link instanceof HTMLAnchorElement)) return;
  if (SITE_CONFIG.lineUrl) {
    link.href = SITE_CONFIG.lineUrl;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.href = "#estimate-form";
    link.setAttribute("title", "LINE URLをSITE_CONFIGに設定してください");
  }
});

const form = document.querySelector("[data-estimate-form]");
const resultPanel = document.querySelector("[data-contact-result]");
const messageOutput = document.querySelector("[data-message-output]");
const copyMessageButton = document.querySelector("[data-copy-message]");
const mailMessageButton = document.querySelector("[data-mail-message]");
const copyPhoneButton = document.querySelector("[data-copy-phone]");
let latestConsultationMessage = "";

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const fallbackTextarea = document.createElement("textarea");
  fallbackTextarea.value = text;
  fallbackTextarea.setAttribute("readonly", "");
  fallbackTextarea.style.position = "fixed";
  fallbackTextarea.style.inset = "0 auto auto 0";
  fallbackTextarea.style.opacity = "0";
  document.body.appendChild(fallbackTextarea);
  fallbackTextarea.focus();
  fallbackTextarea.select();
  document.execCommand("copy");
  fallbackTextarea.remove();
};

const buildConsultationMessage = (data) => {
  const lines = [
    "竜樹伐採への概算見積相談",
    "",
    `お名前: ${data.get("name") || ""}`,
    `連絡先: ${data.get("contact") || ""}`,
    `現場住所または市町村: ${data.get("address") || ""}`,
    `木の本数: ${data.get("count") || ""}`,
    `処分希望: ${data.get("disposal") || ""}`,
    `周辺状況: ${data.get("risk") || ""}`,
    "",
    "お困りごと:",
    `${data.get("message") || ""}`,
    "",
    "写真はこの画面から自動送信されません。LINEまたはメール送信時に写真を添付して送ります。"
  ];

  return lines.join("\n");
};

if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    latestConsultationMessage = buildConsultationMessage(data);

    if (messageOutput instanceof HTMLTextAreaElement) {
      messageOutput.value = latestConsultationMessage;
    }

    if (resultPanel instanceof HTMLElement) {
      resultPanel.hidden = false;
      resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}

if (copyMessageButton instanceof HTMLButtonElement) {
  copyMessageButton.addEventListener("click", () => {
    if (!latestConsultationMessage) return;

    copyText(latestConsultationMessage).then(() => {
      copyMessageButton.textContent = "コピーしました";
      window.setTimeout(() => {
        copyMessageButton.textContent = "相談内容をコピー";
      }, 1800);
    }).catch(() => {
      alert(latestConsultationMessage);
    });
  });
}

if (mailMessageButton instanceof HTMLButtonElement) {
  if (SITE_CONFIG.email) {
    mailMessageButton.addEventListener("click", () => {
      if (!latestConsultationMessage) return;
      const subject = encodeURIComponent("竜樹伐採への概算見積相談");
      const body = encodeURIComponent(latestConsultationMessage);
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    });
  } else {
    mailMessageButton.disabled = true;
    mailMessageButton.setAttribute("title", "送信先メールをSITE_CONFIGに設定してください");
  }
}

if (copyPhoneButton instanceof HTMLButtonElement) {
  if (SITE_CONFIG.phone) {
    copyPhoneButton.addEventListener("click", () => {
      copyText(SITE_CONFIG.phone).then(() => {
        copyPhoneButton.textContent = "電話番号をコピーしました";
        window.setTimeout(() => {
          copyPhoneButton.textContent = "電話番号をコピー";
        }, 1800);
      }).catch(() => {
        alert(SITE_CONFIG.phone);
      });
    });
  } else {
    copyPhoneButton.disabled = true;
    copyPhoneButton.setAttribute("title", "電話番号をSITE_CONFIGに設定してください");
  }
}
