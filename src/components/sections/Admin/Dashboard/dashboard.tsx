"use client";
import React from "react";
import OrdersChart from "./OrdersChart";
import SalaryChart from "./SalaryChart";
import { useTranslations } from "next-intl";

const DashboardSection: React.FC = (): JSX.Element => {
  const t = useTranslations("DashboardSection");

  return (
    <section className="flex min-h-[calc(100vh-90px)] h-full flex-col gap-6">
      <div className={`flex items-start justify-between gap-[30px]`}>
        <OrdersChart />
        <SalaryChart />
      </div>
      <div className={`flex h-full items-start gap-[30px]`}>
        <div className={`h-full max-h-[470px] basis-3/5 w-full rounded-xl bg-[#27283C] p-10`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>{t("assignedRisk")}</h3>
          <p className={`flex h-full items-center justify-center`}>{t("noRisksAssigned")}</p>
        </div>
        <div className={`h-full max-h-[470px] basis-2/5 w-full rounded-xl bg-[#27283C] p-10`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>{t("assignedActionItems")}</h3>
          <p className={`flex h-full items-center justify-center`}>{t("noActionItems")}</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
