import { Typography } from "@alfalab/core-components/typography";
import moon from "../assets/moon.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "5388_finish_click", {
      variant_name: "ghk_5388_3",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={moon}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="medium"
          defaultMargins
          weight="bold"
        >
          Сервис ещё в разработке
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Мы выбираем лучшее решение, чтобы вам точно понравилось. С нетерпением
          ждём, когда всё заработает, чтобы показать вам.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={submit}
          href="alfabank:///multistep-route?fromModule=FORM&alias=card-order-alias&version=2&flowType=FAMILY_ACCOUNT"
        >
          Спасибо, понятно!
        </ButtonMobile>
      </div>
    </>
  );
};
