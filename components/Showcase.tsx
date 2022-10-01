import React from "react";
import ShowCaseItem from "./ShowCaseItem";

const itemCSS: string = "font-sans justify-center text-center flex gap-6 pb-4";
const headerCSS: string = "flex items-center justify-center content-center text-3xl font-sans pt-12 pb-2"
const pCSS: string = "font-sans text-center items-center content-center"

export default function Showcase() {
  return (
    <>
      <div className={headerCSS}>Kode<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Denne siden"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/dennesiden.jpg"
          description="Mitt første soloprosjekt, for å bedre lære Typescript, TailWind og React. Det blir spennende å se tilbake på koden om noen år."
        />
        <ShowCaseItem
          text="Null Stress"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/null.jpg"
          description="Avslutningsprosjekt AW Academy. Jeg og tre andre laget en fullstack løsning på kort tid. C#, JavaScript, ASP.NET web-API, Next.js Twilio, Azure mm."
        />
      </div>

      <div className={headerCSS}>Forskning<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Mastergrad i psykologi"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/master.jpg"
          description="Jeg skrev mastergraden min om hvordan mennesker kan rettferdiggjøre å eklsudere andre fra sosiale fellesskap."
        />

        <ShowCaseItem
          text="Vitenskapelig publikasjon"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/pub.jpg"
          description="Forskningsprosjekt som ble publisert i Evolutionary Psychological Science. Å publisere forskning nærliggende dagsaktuell debattemaer har lært meg mye om hvordan andre kan bruke ord fra forskning i politisk kontekst. Hint: Twitter."
        />
      </div>

      <div className={headerCSS}>Hobbyprosjekter<p className={pCSS}></p></div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Self-hosted cloud"
          imgurl="https://cloud.bechsor.no"
          imgsrc="/nc.jpg"
          description="Jeg er veldig opptatt av hvordan data om meg lagres og forvaltes. Jeg har derfor satt opp en egen skytjeneste hjemmefra, med Rasperry Pi og NextCloud."
        />

        <ShowCaseItem
          text="Kronikk i BT"
          imgurl="https://www.bt.no/btmeninger/debatt/i/28qgXy/hvem-vil-du-vaere-etter-gjenaapningen"
          imgsrc="/bt.jpg"
          description="Jeg mente litt av hvert under koronatiden. Halvveis i kjedsomhet skrev jeg en kronikk, som faktisk ble publisert. Den handler egentlig om meg selv."
        />
      </div>
    </>
  );
}
