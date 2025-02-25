import { useTranslation } from "react-i18next";
import "./Loading.css";

const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">{t("loading")}</div>
    </div>
  );
};

export default Loading;
