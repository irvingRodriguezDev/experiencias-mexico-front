import React from "react";
import cars from "../assets/cars.svg";
import cordinador from "../assets/cordinador.svg";
import money from "../assets/money.svg";
import booking from "../assets/booking.svg";
import dates from "../assets/dates.svg";
import locations from "../assets/locations.svg";

const benefits = [
  {
    num: "01",
    title: "Unidades Cómodas y Seguras",
    desc: "Transporte confortable para que disfrutes cada kilómetro del camino.",
    img: cars,
  },
  {
    num: "02",
    title: "Viajes Seguros",
    desc: "Seguro de viajero incluido y cada detalle cuidado para tu tranquilidad.",
    img: booking,
  },
  {
    num: "03",
    title: "Coordinador de Grupo",
    desc: "Acompañamiento personalizado durante todo el recorrido.",
    img: cordinador,
  },
  {
    num: "04",
    title: "Salidas Cercanas a Ti",
    desc: "Múltiples puntos de salida pensados para tu comodidad.",
    img: locations,
  },
  {
    num: "05",
    title: "Precios Accesibles",
    desc: "Experiencias extraordinarias a precios que cuidan tu bolsillo.",
    img: money,
  },
  {
    num: "06",
    title: "Salidas Programadas",
    desc: "Nuevas fechas y destinos para que siempre tengas una próxima aventura.",
    img: dates,
  },
];

const BenefitCard = ({ num, title, desc, img }) => (
  <div
    style={{
      flexShrink: 0,
      width: 300,
      margin: "0 14px",
      borderRadius: 16,
      border: "1.5px solid rgba(1,82,140,0.10)",
      padding: "32px 28px 28px",
      background: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(1,82,140,0.06)",
      transition: "box-shadow 0.35s, border-color 0.35s, transform 0.35s",
      cursor: "default",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(1,82,140,0.13)";
      e.currentTarget.style.borderColor = "#A3BB13";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "0 2px 16px rgba(1,82,140,0.06)";
      e.currentTarget.style.borderColor = "rgba(1,82,140,0.10)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Acento superior */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, #01528C, #A3BB13)",
        borderRadius: "16px 16px 0 0",
      }}
    />

    {/* Imagen SVG */}
    <div
      style={{
        width: "100%",
        height: 150,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
        background: "#f6f6f6",
        borderRadius: 10,
        padding: "12px 0",
      }}
    >
      <img
        src={img}
        alt={title}
        style={{ height: 120, width: "auto", objectFit: "contain" }}
      />
    </div>

    {/* Texto */}
    <div
      style={{
        fontSize: 26,
        fontWeight: "bold",
        color: "#01528C",
        fontFamily: "'Jost', sans-serif",
        lineHeight: 1.25,
        marginBottom: 8,
        textAlign: "center",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: 19,
        fontWeight: "bolder",
        color: "rgba(1,82,140,0.65)",
        fontFamily: "'Jost', sans-serif",
        lineHeight: 1.7,
      }}
    >
      {desc}
    </div>
  </div>
);

const WhyOur = () => (
  <section
    style={{
      background: "#f6f6f6",
      padding: "72px 0 64px",
      overflow: "hidden",
      fontFamily: "'Jost', sans-serif",
    }}
  >
    <link
      href='https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&display=swap'
      rel='stylesheet'
    />

    {/* Header */}
    <div style={{ textAlign: "center", marginBottom: 52, padding: "0 32px" }}>
      <p
        style={{
          fontSize: 67,
          fontWeight: "bold",
          letterSpacing: "0.75em",
          color: "#A3BB13",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Nuestra promesa
      </p>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 54px)",
          fontWeight: 300,
          color: "#01528C",
          lineHeight: 1.15,
          margin: "0 0 16px",
        }}
      >
        Por qué viajar con{" "}
        <span style={{ fontWeight: 600, color: "#01528C" }}>nosotros</span>
      </h2>
      {/* Línea decorativa */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 32,
            height: 2,
            background: "#01528C",
            borderRadius: 2,
            opacity: 0.8,
          }}
        />
        <div
          style={{
            width: 48,
            height: 3,
            background: "#A3BB13",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            width: 32,
            height: 2,
            background: "#01528C",
            borderRadius: 2,
            opacity: 0.8,
          }}
        />
      </div>
    </div>

    {/* Marquee — una sola fila */}
    <div style={{ position: "relative" }}>
      {/* Fades laterales */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 100,
          background: "linear-gradient(to right, #f6f6f6, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 100,
          background: "linear-gradient(to left, #f6f6f6, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          animation: "marquee-wtu 36s linear infinite",
          width: "max-content",
          paddingBottom: 12,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...benefits, ...benefits].map((b, i) => (
          <BenefitCard key={i} {...b} />
        ))}
      </div>
    </div>

    {/* Separador inferior */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "48px 48px 0",
        marginTop: 8,
      }}
    >
      <span style={{ flex: 1, height: 3, background: "rgba(1,82,140,0.9)" }} />
      <span
        style={{
          fontSize: 40,
          fontWeight: "bold",
          letterSpacing: "0.35em",
          color: "#01528C",
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        Cada detalle, cuidado
      </span>
      <span style={{ flex: 1, height: 3, background: "rgba(1,82,140,0.9)" }} />
    </div>

    <style>{`
      @keyframes marquee-wtu {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default WhyOur;
