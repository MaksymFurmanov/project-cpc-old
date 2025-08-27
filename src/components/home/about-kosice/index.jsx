import styles from "./about-kosice.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react"; // ⬅️ Обов'язковий імпорт

export default function AboutKosice() {
  const { t } = useTranslation("home");
  const bgLayerRef = useRef(null);

  useEffect(() => {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const bgElement = bgLayerRef.current;

    if (isIos && bgElement) {
      bgElement.classList.add(styles['ios-parallax']);

      const handleScroll = () => {
        // Отримуємо позицію контейнера на сторінці
        const rect = bgElement.getBoundingClientRect();
        // Розраховуємо відстань, на яку потрібно прокрутити фон
        // -0.3 - це швидкість скролу, налаштуйте для бажаного ефекту
        const bgPosition = -rect.top * 0.3;
        
        bgElement.style.backgroundPosition = `50% ${bgPosition}px`;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <article>
      <div ref={bgLayerRef} className={styles.bgLayer}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2>{t("aboutKosice.title")}</h2>
          <p>{t("aboutKosice.text")}</p>
        </div>
      </div>
    </article>
  );
}


