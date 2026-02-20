import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./offer.css";

import lanchas from "../../assets/lanchas.webp";
import pareja from "../../assets/pareja.webp";
import china from "../../assets/nuevo-europa.webp";
import rosa from "../../assets/rosa.webp";

import WorldIcon from "../icons/WorldIcon";
import PackageIcon from "../icons/PackageIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Offer = () => {
  return (
    <Box className='offer'>
      {/* Imagen decorativa */}
      <motion.img
        src={china}
        className='offer-bg'
        alt=''
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <Box className='offer-container'>
        {/* ===== TEXTO ===== */}
        <Box
          className='offer-left'
          component={motion.div}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Typography className='offer-subtitle'>
              Planea tu próxima aventura
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography className='offer-title'>
              Viaja cuando quieras, <br />
              como siempre soñaste
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography className='offer-text'>
              Sal de lo convencional y descubre experiencias auténticas.
              Diseñamos viajes únicos para quienes buscan algo más que un
              destino: buscan recuerdos inolvidables.
            </Typography>
          </motion.div>

          {/* FEATURES */}
          <motion.div variants={fadeUp} className='offer-feature'>
            <WorldIcon />
            <Box>
              <Typography fontWeight={600} color='#01528C'>
                Agencia experta en experiencias
              </Typography>
              <Typography className='feature-text'>
                Creamos viajes personalizados en los destinos más increíbles.
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeUp} className='offer-feature'>
            <PackageIcon />
            <Box>
              <Typography fontWeight={600} color='#A3BB13'>
                Viajes seguros y confiables
              </Typography>
              <Typography className='feature-text'>
                Te acompañamos en cada paso para que solo te preocupes por
                disfrutar.
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button
              size='large'
              sx={{
                bgcolor: "#A3BB13",
                borderRadius: "12px",
                fontWeight: "bold",
                color: "#01528C",
              }}
              onClick={() =>
                window.scrollBy({
                  top: -1090,
                  behavior: "smooth",
                })
              }
            >
              Descubrir experiencias →
            </Button>
          </motion.div>
        </Box>

        {/* ===== IMÁGENES ===== */}
        <Box className='offer-right'>
          <Typography
            component={motion.div}
            className='offer-watermark'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            VIAJAR
          </Typography>

          <motion.img
            src={
              "https://grupoenconcreto.com/wp-content/uploads/2025/03/El-Pueblo-MagicoMascota-celebrara-en-grande-su-140-aniversario-scaled.jpg"
            }
            className='offer-main-img'
            alt=''
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.img
            src={
              "https://travelgrafia.co/wp-content/uploads/2025/01/Pueblo-Magico-de-Queretaro.jpg"
            }
            className='offer-float-img'
            alt=''
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <img src={rosa} className='offer-deco' alt='' />
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
