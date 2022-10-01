import React from "react";
import ShowCaseItem from "./ShowCaseItem";

const itemCSS: string = "font-sans justify-center text-center flex gap-6 pb-4";
const headerCSS: string = "flex items-center justify-center content-center text-3xl font-sans pt-12 pb-2"
const pCSS: string = "font-sans text-center items-center content-center"

export default function Showcase() {
  return (
    <>
      <div className={headerCSS}>
        Kode
          <p className={pCSS}></p>
      </div>
      
      <div className={itemCSS}>

        <ShowCaseItem
          text="Denne siden"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/dennesiden.jpg"
          description="Dette er det første prosjektet jeg skrev på egenhånd, for å bedre lære Typescript, TailWind og React. Det blir spennende å se tilbake på koden om noen år! Trykk på bildet for å se, but be gentle."
        />

        <ShowCaseItem
          text="Null Stress"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/dennesiden.jpg"
          description="Avslutningsprosjekt. Vi var fire som lagde en fullverdig back-to-frontend løsning på to uker. Kjempegøy og krevende med kort fartstid som koder. C#, JavaScript, ASP.NET web-API, Next.js Twilio, Azure mm."
        />
      </div>



      <div className={headerCSS}>
        Forskning
        <p className={pCSS}></p>
      </div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Mastergrad i psykologi"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/master.jpg"
          description="Mastergraden min i psykologi handlet om hva som får mennesker til å rettferdiggjøre sosial eksklusjon."
        />

        <ShowCaseItem
          text="Vitenskapelig publikasjon"
          imgurl="https://link.springer.com/article/10.1007/s40806-016-0048-6"
          imgsrc="/pub.jpg"
          description="I 2016 skrev og publiserte et et forskningsprosjekt, i tillegg til masteren min. Det har fått overraskende mange sitasjoner."
        />
      </div>

      <div className={headerCSS}>
        Hobbyprosjekter
        <p className={pCSS}></p>
      </div>
      <div className={itemCSS}>

        <ShowCaseItem
          text="Self-hosted cloud"
          imgurl="https://cloud.bechsor.no"
          imgsrc="/nc.jpg"
          description="Jeg er veldig opptatt av hvem som har tilgang til min data. Derfor har jeg satt opp en egen skytjeneste hjemmefra, med Rasperry Pi og NextCloud."
        />
        
        <ShowCaseItem
          text="Kronikk i BT"
          imgurl="https://www.bt.no/btmeninger/debatt/i/28qgXy/hvem-vil-du-vaere-etter-gjenaapningen"
          imgsrc="/bt.jpg"
          description="Jeg mente litt av hvert under koronatiden og skrev, halvveis i kjedsomhet, en kronikk som faktisk ble publisert."
        />
      </div>
    </>
  );
}
