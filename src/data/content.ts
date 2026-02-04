export const content = {
  home: {
    hero: {
      title: "Daily Dose",
      subtitle: "Professionelle Dienstleistungen für Ihr Unternehmen",
      description: "Wir unterstützen Sie dabei, Ihre Geschäftsziele zu erreichen und Ihr Unternehmen erfolgreich zu entwickeln. Mit unserer Expertise und individuellen Lösungen bringen wir Sie voran.",
      primaryButton: {
        text: "Jetzt starten",
        href: "/kontakt"
      },
      secondaryButton: {
        text: "Mehr erfahren",
        href: "/service"
      }
    },
    sections: [
      {
        type: "warumDDoC",
        title: "Warum Daily Dose of Content?",
        content: "Wir kümmern uns um Ihren kompletten Social-Media-Auftritt, von der Idee bis zum Posting.\n\nKeine Zeit für Social Media? Kein Problem. Wir entwickeln kreative Content-Ideen, produzieren professionelle Videos und übernehmen auch das Posten für Sie. So bleibt Ihr Unternehmen dauerhaft sichtbar, ohne dass Sie sich selbst darum kümmern müssen.",
        backgroundColor: "white" as const
      },
      {
        type: "clientLogos",
        title: "Diese Unternehmen haben uns bereits ihr Vertrauen geschenkt",
        backgroundColor: "gray" as const
      },
      {
        type: "servicesOverview",
        title: "Unsere Leistungen",
        backgroundColor: "white" as const
      },
      {
        type: "grafiken",
        title: "Professionelle Grafikerstellung",
        backgroundColor: "white" as const
      },
      // {
      //   type: "imageText",
      //   title: "Warum Daily Dose of Content?",
      //   content: "Wir kümmern uns um Ihren kompletten Social-Media-Auftritt, von der Idee bis zum Posting.\n\nKeine Zeit für Social Media? Kein Problem. Wir entwickeln kreative Content-Ideen, produzieren professionelle Videos und übernehmen auch das Posten für Sie. So bleibt Ihr Unternehmen dauerhaft sichtbar, ohne dass Sie sich selbst darum kümmern müssen.",
      //   imagePosition: "left" as const,
      //   backgroundColor: "gray" as const,
      //   images: ["/social-media-management-laptop.png"]
      // },
      {
        type: "customVideo",
        title: "Innovative Lösungen",
        content: "Mit modernsten Technologien und bewährten Methoden entwickeln wir Lösungen, die Ihr Unternehmen voranbringen.\n\nUnsere Expertise umfasst verschiedene Bereiche, von der strategischen Planung bis zur praktischen Umsetzung.",
        backgroundColor: "gray" as const
      },
      {
        type: "contactCTA",
        backgroundColor: "white" as const
      }
    ]
  },
  referenzen: {
    title: "Unsere Referenzen",
    content: "Wir sind stolz auf die erfolgreichen Projekte, die wir für unsere Kunden realisiert haben.\n\nUnsere Arbeit spricht für sich - von kleinen Startups bis hin zu etablierten Unternehmen haben wir bereits vielen Kunden dabei geholfen, ihre Ziele zu erreichen.\n\nVertrauen Sie auf unsere Erfahrung und lassen Sie sich von unseren Erfolgsgeschichten inspirieren."
  },
  ueberUns: {
    hero: {
      title: "Lernen Sie uns kennen.",
      content: "Ich bin Amelie Klein, 20 Jahre alt, und studiere Sales & Marketing an der Hochschule Niederrhein in Mönchengladbach.\n\nIm Sommer 2024 habe ich Daily Dose of Content gegründet, mit einer klaren Vision: Unternehmen den Social-Media-Auftritt so einfach wie möglich zu machen und ihnen dadurch mehr Sichtbarkeit auf den sozialen Medien zu verschaffen.",
      image: "/jr-consulting-ceo-studio.jpg",
      imagePosition: "left" as const
    },
    sections: [
      {
        type: "imageText",
        title: "Unser Leitbild",
        content: "Soziale Medien sind heute unverzichtbar - sowohl im privaten als auch im geschäftlichen Bereich.\nDennoch fehlt es vielen Unternehmen im Alltag an Zeit, Know-how oder Ressourcen, um ihren Social Media Auftritt strategisch und konsequent umzusetzen. Oft bleibt das Thema auf der Strecke - oder es werden hohe Summen in Agenturen investiert, ohne das messbare Ergebnisse erzielt werden.\n\n**Genau hier setzen wir an**\n\nBei Daily Dose of Content übernehmen wir nicht nur die komplette social media Betreuung - wir schaffen echten Mehrwert. Mit klarer Strategie, professionellem Content und kreativen Ideen sorgen wir dafür, dass Ihre Marke sichtbar wird, Vertrauen aufbaut und langfristig wächst.\n\n**Effizient, individuell und mit spürbaren Ergebnissen.**",
        imagePosition: "left" as const,
        backgroundColor: "gray" as const,
        images: ["/taegliche-dosis-content-grafik.png"]
      },
      {
        type: "imageText",
        title: "Unsere Vision",
        content: "Unternehmen sollen sich keine Gedanken mehr über Social Media machen müssen - wir übernehmen alles. Schnell, effizient und professionell sorgen wir für einen starken Auftritt, während unsere Kund:innen sich voll auf ihr Kerngeschäft konzentrieren können.",
        imagePosition: "right" as const,
        backgroundColor: "white" as const,
        images: ["/amelie-klein-social-media-agentur.jpg"],
        button: {
          text: "Kontakt aufnehmen",
          href: "/kontakt"
        }
      }
    ]
  },
  kontakt: {
    title: "Kontakt",
    content: "Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren?\n\nWir freuen uns darauf, von Ihnen zu hören und gemeinsam zu besprechen, wie wir Ihnen helfen können.\n\nKontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.\n\nE-Mail: klein@dailydoseofcontent.de\nTelefon: +49 157 58774195"
  }
}
