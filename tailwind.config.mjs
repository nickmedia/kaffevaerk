/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require('tailwind-hamburgers'),
  ],
  theme: {
    extend: {
      colors: {
        //Surface farver - Brun & Grøn
        brun50: "#F7F5F3", //farve til lighter surface
        brun200: "#DBD1C7", //farve til subtle surface
        brun300: "#C9BCAB", //farve til default surface
        brun400: "#B7A48E", //farve til darker surface

        gron200: "#D6D8CA", //farve til lighter surface
        gron300: "#C0C4B0", //farve til subtle surface
        gron500: "#959C79", //farve til default surface
        gron700: "#5C6149", //farve til darker surface

        // Tekst farver
        pdefault: "#231B15", //farve til body tekst / brødtekst & button secondary
        phvid: "#FFFFFF", //farve til button primary
        pgron: "#405937", //farve til nav links og headline V1
        pgul: "#F2911B", //farve til headline V2
        pbrun: "#C9BCAB", //farve til headline V3
        pstøvet: "#787E5D", //farve til subtitles

        // Grå
        grey50: "#F0F0EF",
        grey100: "#E4E3E2",
        grey200: "#C6C4C3",
        grey300: "#ABA7A6",
        grey400: "#8D8986",
        grey500: "#706C6A",
        grey600: "#585654",
        grey700: "#444240",
        grey800: "#444240",
        grey900: "#181716",
        grey950: "#0A0A0A",

        // Mørk brun
        mbrun50: "#EEE7E2",
        mbrun100: "#DFD3C9",
        mbrun200: "#BDA390",
        mbrun300: "#9B775B",
        mbrun400: "#644D3A",
        mbrun500: "#2C221A",
        mbrun600: "#231B15",
        mbrun700: "#1A140F",
        mbrun800: "#100C09",
        mbrun900: "#090706",
        mbrun950: "#030202",

        // Brun
        brun50: "#F7F5F3",
        brun100: "#EDE8E2",
        brun200: "#DBD1C7",
        brun300: "#C9BCAB",
        brun400: "#B7A48E",
        brun500: "#A68E74",
        brun600: "#897158",
        brun700: "#675541",
        brun800: "#44392D",
        brun900: "#221C16",
        brun950: "#130F0C",

        // Mørk grøn
        mgron50: "#EBF1E9",
        mgron100: "#D6E4D3",
        mgron200: "#ADC7A4",
        mgron300: "#85AB77",
        mgron400: "#85AB77",
        mgron500: "#405937",
        mgron600: "#34482D",
        mgron700: "#273621", //hover button
        mgron800: "#192315",
        mgron900: "#0E130C",
        mgron950: "#070906",

        // Støvet grøn
        sgron50: "#F3F4F0",
        sgron100: "#EAEBE4",
        sgron200: "#D6D8CA",
        sgron300: "#C0C4B0",
        sgron400: "#A9AF92",
        sgron500: "#959C79",
        sgron600: "#787E5D",
        sgron700: "#5C6149",
        sgron800: "#3D4130",
        sgron900: "#1F2018",
        sgron950: "#0E0F0B",

        // Gul
        gul50: "#FEF3E7",
        gul100: "#FDEAD5",
        gul200: "#FAD3A3",
        gul300: "#F7BE78",
        gul400: "#F6A748",
        gul500: "#F2911B",
        gul600: "#CB750C",
        gul700: "#9A5909",
        gul800: "#653A06",
        gul900: "#351F03",
        gul950: "#190E01",

        // Beige
        beige50: "#FFFDFA",
        beige100: "#FFFCF5",
        beige200: "#FFF9EB",
        beige300: "#FFF5E0",
        beige400: "#FFF2D6",
        beige500: "#FFEFCD",
        beige600: "#FFD270",
        beige700: "#FFB512",
        beige800: "#B87E00",
        beige900: "#5C3F01",
        beige950: "#2E1F00",
      },

      fontFamily: {
        sigurd: ["Sigurd", "sans-serif"], //Font til specielle headers
        poppins: ["Poppins", "sans-serif"], //Font til headere brødtekst
      },

      fontSize: {
        //Desktop
        specialh1: "4rem", //Bruges til headlineSpecial - h1
        specialh2: "3rem", //Bruges til headlineSpecial - h2
        specialh3: "2rem", //Bruges til headlineSpecial - h3
        specialh4: "1.5rem", //Bruges til headlineSpecial - h4
        specialforside: "3.5rem", //Bruges til forside

        normalh1: "4rem", //Bruges til headline - h1
        normalh2: "3rem", //Bruges til headline - h2
        normalh3: "2rem", //Bruges til headline - h3
        normalh4: "1.5rem", //Bruges til headline - h4
        normalmail: "0.875rem", //Bruges til headline til mails / nyhedsbrev

        psmall: "0.875rem", //Bruges til small text
        pnormal: "1rem", //Bruges til normal text
        pbold: "1rem", //Bruges til bold text
        link: "1.125rem", //Bruges til link text
        mail: "0.75rem", //Bruges til bold text i mails / nyhedsbrev
        mailbold: "0.75rem", //Bruges til bold text i mails / nyhedsbrev
        subtitle: " 1.25rem", //Bruges til subtitles

        //Mobil
        mspecialh1: "2.5rem", //Bruges til headlineSpecial - h1
        mspecialh2: "2rem", //Bruges til headlineSpecial - h2
        mspecialh3: "1.75rem", //Bruges til headlineSpecial - h3
        mspecialh4: "1.25rem", //Bruges til headlineSpecial - h4

        mnormalh1: "2.5rem", //Bruges til headline - h1
        mnormalh2: "2rem", //Bruges til headline - h2
        mnormalh3: "1.75rem", //Bruges til headline - h3
        mnormalh4: "1.25rem", //Bruges til headline - h4

        mpsmall: "0.75rem", //Bruges til small text
        mpnormal: "0.875rem", //Bruges til normal text
        mpbold: "0.875rem", //Bruges til bold text
        mlink: "0.875rem", //Bruges til link text
        msubtitle: " 1.125rem", //Bruges til subtitles
      },

      padding: {
        //Desktop
        xs: "8px", //X-small padding
        s: "18px", //Small padding
        m: "28px", //Medium padding
        lg: "40px", //Large padding
        xl: "70px", //X-Large padding

        //Mobil
      },

      spacing: {
        //Desktop
        s: "10px", //Small gap
        m: "20px", //Medium gap
        lg: "44px", //Large gap
        xl: "60px", //X-large gap
        xxl: "99px", //XX-large gap
        bigxl: "540px", //Forsidevideo gap

        //Mobil
      },

      borderRadius: {
        //Desktop
        xs: "8px", //X-small borderradius
        s: "12px", //Small borderradius
        m: "18px", //Medium borderradius
        lg: "28px", //Large borderradius
        xl: "52px", //X-large borderradius
        xxl: "70px", //XX-large borderradius
        full: "99px", //Full borderradius
      },

      boxShadow: {
        skygge: "0 10px 30px rgba(77, 70, 69, 0.10)", //Skygge på cards
      },
    },
  },
};

