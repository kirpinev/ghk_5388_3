import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import icon1 from "./assets/icon1.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import image from "./assets/image.png";
import eyes from "./assets/eyes.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import React, { useState } from "react";
import { Tab, Tabs } from "@alfalab/core-components/tabs";
import { SelectedId } from "@alfalab/core-components/tabs/typings";
import { ThxLayout } from "./thx/ThxLayout";
import { sendDataToGA } from "./utils/events";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thx, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [step, setStep] = useState(1);
  const [refill, setRefill] = useState<SelectedId>("Всем");
  const [spending, setSpending] = useState<SelectedId>("Всем");

  const handleRefill = (
    _: React.MouseEvent,
    { selectedId }: { selectedId: SelectedId },
  ) => {
    setRefill(selectedId);
  };

  const handleSpending = (
    _: React.MouseEvent,
    { selectedId }: { selectedId: SelectedId },
  ) => {
    setSpending(selectedId);
  };

  const submit = () => {
    setLoading(true);
    sendDataToGA({ option: `${refill}/${spending}` }).then(() => {
      setLoading(false);
      setThx(true);
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  const clickContinue = () => {
    window.gtag("event", "5388_dalee_click", {
      variant_name: "ghk_5388_3",
    });
  };

  if (thx) {
    return <ThxLayout />;
  }

  return (
    <>
      {step === 1 && (
        <div className={appSt.container}>
          <div className={appSt.box}>
            <img
              src={image}
              alt="Картинка"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>

          <Gap size={24} />

          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="medium"
            className={appSt.productsTitle}
          >
            Семейный счёт
          </Typography.TitleResponsive>
          <Gap size={4} />
          <Typography.Text
            tag="p"
            view="primary-large"
            style={{ marginBottom: 0 }}
          >
            Откроем счёт для вас и близких
          </Typography.Text>

          <Gap size={16} />

          <div className={appSt.benefits}>
            <div className={appSt.benefit}>
              <img
                src={icon4}
                alt=""
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  tag="p"
                  view="primary-large"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Бесплатное обслуживание
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  color="secondary"
                  style={{ marginBottom: 0 }}
                >
                  Навсегда и без условий
                </Typography.Text>
              </div>
            </div>
            <div className={appSt.benefit}>
              <img
                src={icon1}
                alt=""
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  tag="p"
                  view="primary-large"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Бюджет семьи в одном месте
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  color="secondary"
                  style={{ marginBottom: 0 }}
                >
                  Покупки и кэшбек
                </Typography.Text>
              </div>
            </div>
            <div className={appSt.benefit}>
              <img
                src={icon3}
                alt=""
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  tag="p"
                  view="primary-large"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Общие финансы
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  color="secondary"
                  style={{ marginBottom: 0 }}
                >
                  Без лишних переводов друг другу
                </Typography.Text>
              </div>
            </div>
            <div className={appSt.benefit}>
              <img
                src={icon5}
                alt=""
                width={48}
                height={48}
                style={{ objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  tag="p"
                  view="primary-large"
                  weight="bold"
                  style={{ marginBottom: 0 }}
                >
                  Настройка истории
                </Typography.Text>
                <Typography.Text
                  tag="p"
                  view="primary-medium"
                  color="secondary"
                  style={{ marginBottom: 0 }}
                >
                  Выбирайте, какие траты видны участникам
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={appSt.container}>
          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="medium"
            className={appSt.productsTitle}
          >
            Кто видит операции
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text
            tag="p"
            view="primary-medium"
            style={{ marginBottom: 0 }}
          >
            Выберите, кто из участников счета может видеть пополнения и траты по
            семейному счёту
          </Typography.Text>

          <Gap size={24} />

          <Typography.Text
            tag="p"
            view="primary-medium"
            weight="bold"
            style={{ marginBottom: 0 }}
          >
            Операции пополнения по семейному счёту видны
          </Typography.Text>

          <Gap size={8} />

          <Tabs view="secondary" selectedId={refill} onChange={handleRefill}>
            <Tab key="1" id="Всем" title="Всем" />
            <Tab key="2" id="Только мне" title="Только мне" />
          </Tabs>

          <Gap size={24} />

          <Typography.Text
            tag="p"
            view="primary-medium"
            weight="bold"
            style={{ marginBottom: 0 }}
          >
            Мои траты по семейному счёту видны
          </Typography.Text>

          <Gap size={8} />

          <Tabs
            view="secondary"
            selectedId={spending}
            onChange={handleSpending}
          >
            <Tab key="1" id="Всем" title="Всем" />
            <Tab key="2" id="Только мне" title="Только мне" />
          </Tabs>

          <Gap size={32} />

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              padding: "1rem",
              borderRadius: "1rem",
              backgroundColor: "#F2F3F5",
            }}
          >
            <img src={eyes} alt="Глаза" width={24} height={24} />
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0 }}
            >
              Независимо от настроек видимости, все участники будут видеть
              баланс совместного счёта
            </Typography.Text>
          </div>
        </div>
      )}

      <Gap size={96} />

      {step === 1 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile
            loading={loading}
            onClick={() => {
              clickContinue();
              setStep(2);
            }}
            block
            view="primary"
          >
            Далее
          </ButtonMobile>
        </div>
      )}

      {step === 2 && (
        <div className={appSt.bottomBtnThx}>
          <ButtonMobile loading={loading} onClick={submit} block view="primary">
            Открыть счёт
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
