import { Typography } from "@alfalab/core-components/typography";
import moon from "../assets/moon.png";
import { thxSt } from "./style.css";

export const ThxLayout = () => {
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
          Мы выбираем лучшие штучки, чтобы вам точно понравилось. С нетерпением
          ждём, когда всё заработает, чтобы показать вам.
        </Typography.Text>
      </div>
    </>
  );
};
