/**
 * 竜樹伐採 - メインJavaScript
 * スクロールアニメーション、ナビゲーション、FAQ、フォーム処理
 */

document.addEventListener('DOMContentLoaded', () => {
  // === ナビゲーション制御 ===
  initNavbar();

  // === ハンバーガーメニュー ===
  initHamburger();

  // === スクロールアニメーション ===
  initScrollAnimations();

  // === カウントアップアニメーション ===
  initCountUp();

  // === FAQアコーディオン ===
  initFAQ();

  // === 施工事例フィルター ===
  initWorksFilter();

  // === フォーム処理 ===
  initContactForm();

  // === パーティクル生成 ===
  initParticles();

  // === 固定CTA制御 ===
  initFixedCTA();

  // === microCMS連携 ===
  initMicroCMS();
});


/**
 * microCMSからデータを取得して画像を反映
 */
async function initMicroCMS() {
  const SERVICE_DOMAIN = 'ryuju-bassay';
  const API_KEY = 'C19NcMk2pmhiOQDOUG8J6crFYk7WfcHddGsb';
  const ENDPOINT = 'site-config'; // ユーザーに作成してもらうエンドポイント名

  try {
    const response = await fetch(`https://${SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}`, {
      headers: {
        'X-MICROCMS-API-KEY': API_KEY
      }
    });

    if (!response.ok) {
      console.warn('microCMS: データの取得に失敗しました。スキーマ設定が未完了の可能性があります。');
      return;
    }

    const data = await response.json();
    
    // 画像の反映（取得できた場合のみ）
    if (data.heroImage && data.heroImage.url) {
      const hero = document.getElementById('hero-section');
      if (hero) hero.style.backgroundImage = `url(${data.heroImage.url})`;
    }

    if (data.serviceSpecial && data.serviceSpecial.url) {
      const img = document.getElementById('cms-img-special');
      if (img) img.src = data.serviceSpecial.url;
    }

    if (data.serviceFelling && data.serviceFelling.url) {
      const img = document.getElementById('cms-img-felling');
      if (img) img.src = data.serviceFelling.url;
    }

    if (data.serviceForestry && data.serviceForestry.url) {
      const img = document.getElementById('cms-img-forestry');
      if (img) img.src = data.serviceForestry.url;
    }

    console.log('microCMS: データの反映が完了しました。');
  } catch (error) {
    console.error('microCMS連携エラー:', error);
  }
}


/**
 * ナビゲーション - スクロール時の背景変更
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}


/**
 * ハンバーガーメニューの開閉制御
 */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // メニュー内リンクをクリックしたら閉じる
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}


/**
 * スクロール時のフェードインアニメーション（IntersectionObserver使用）
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
}


/**
 * 数字カウントアップアニメーション
 */
function initCountUp() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.count);
          if (target === 0) return;
          animateCount(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}


/**
 * 数字カウントアップ処理
 * @param {HTMLElement} element - 対象要素
 * @param {number} target - 目標値
 */
function animateCount(element, target) {
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    // イージング（ease-out）
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}


/**
 * FAQアコーディオンの開閉制御
 */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 他のアイテムを閉じる
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // 現在のアイテムを切り替え
      item.classList.toggle('active', !isActive);
    });
  });
}


/**
 * 施工事例のカテゴリフィルター
 */
function initWorksFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');
  if (!filterBtns.length || !workCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // ボタンのアクティブ状態を切り替え
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // カードの表示/非表示
      workCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}


/**
 * お問い合わせフォームの処理
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 簡易バリデーション
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('必須項目をすべて入力してください。');
      return;
    }

    // メールアドレスの簡易チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('正しいメールアドレスを入力してください。');
      return;
    }

    // 送信ボタンの状態更新
    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.textContent = '送信中...';
    submitBtn.disabled = true;

    // Formspreeへの送信処理
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // フォームを成功メッセージに置換
        form.innerHTML = `
          <div class="form-success">
            <div class="form-success-icon">✅</div>
            <h3>送信完了しました</h3>
            <p>
              お問い合わせありがとうございます。<br>
              通常1〜2営業日以内にご返信いたします。<br>
              しばらくお待ちください。
            </p>
          </div>
        `;
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert("送信に失敗しました。時間をおいて再度お試しください。");
          }
        });
      }
    }).catch(error => {
      alert("通信エラーが発生しました。ネットワーク接続を確認してください。");
    }).finally(() => {
      if (submitBtn) {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  });
}


/**
 * ヒーロー背景のパーティクルエフェクト
 */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (4 + Math.random() * 4) + 's';
    particle.style.width = (2 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}


/**
 * モバイル固定CTAの表示制御
 */
function initFixedCTA() {
  const fixedCTA = document.getElementById('fixed-cta');
  const hero = document.getElementById('hero');
  if (!fixedCTA || !hero) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fixedCTA.style.transform = 'translateY(100%)';
        } else {
          fixedCTA.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.3 }
  );

  fixedCTA.style.transition = 'transform 0.3s ease';
  fixedCTA.style.transform = 'translateY(100%)';
  observer.observe(hero);
}
