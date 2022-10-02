import React from "react";
import ShowCaseItem from "./ShowCaseItem";

const itemCSS: string = "font-sans justify-center text-center flex gap-2 pb-4";
const headerCSS: string = "flex items-center justify-center content-center text-3xl font-sans pt-12 pb-2"
const pCSS: string = "font-sans text-center items-center content-center"

export default function Showcase() {
  return (
    <>
      <div className={headerCSS}>Kode<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Denne siden"
          imgurl="https://github.com/jebeso/portefolje"
          imgsrc="/dennesiden.jpg"
          description="Laget for å lære mer om Typescript, TailWind og React. Og for å vise alle hvor kul jeg tror jeg er."
        />
        <ShowCaseItem
          text="Null Stress"
          imgurl="https://null-stress-solution-nullfront-m3jd.vercel.app/"
          imgsrc="/null.jpg"
          description="Avslutningsprosjekt AW Academy. C#, JavaScript, ASP.NET Web-API, Next.js, Twilio, Azure..."
        />
      </div>

      <div className={headerCSS}>Forskning<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Mastergrad i psykologi"
          imgurl="https://cloud.bechsor.no/s/AHckbAQW8p4gQ4e"
          imgsrc="/master.jpg"
          description="Masteroppgave om hvordan mennesker rettferdiggjør å ekskludere andre fra sosiale grupper."
        />

        <ShowCaseItem
          text="Vitenskapelig publikasjon"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/pub.jpg"
          description="Forskningsprosjekt som jeg gjennomførte. Publisert i Evolutionary Psychological Science."
        />
      </div>

      <div className={headerCSS}>Hobbyprosjekter<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Self-hosted cloud"
          imgurl="https://cloud.bechsor.no"
          imgsrc="/nc.jpg"
          description="Jeg er veldig opptatt av eierskap over egen data. Satt opp på Rasperry Pi med NextCloud."
        />

        <ShowCaseItem
          text="Kronikk i BT"
          imgurl="https://cloud.bechsor.no/s/CNaCxMsNEMAXqPe"
          imgsrc="/bt.jpg"
          description="Jeg skrev en kronikk under pandemien som ble publisert i avisen. Artig å skrive!"
        />
      </div>
    </>
  );
}
