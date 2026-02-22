import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./discover.css";

import image1 from "../../assets/image (2).webp";
import image2 from "../../assets/image (3).webp";
import image5 from "../../assets/image (5).webp";
import image6 from "../../assets/image (6).webp";
import Logo from "../../assets/LOGO EXPERIENCIAS MEXICO VECTOR.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Discover = () => {
  return (
    <Box className='discover'>
      {/* IMÁGENES */}
      <motion.img
        src={
          "https://cdn.yate.co/img/blog/2023/14/la-quebrada-acapulco-hxb.jpg"
        }
        className='discover-img img-top-left'
        alt=''
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.img
        src={
          "https://cdn.sanity.io/images/atvntylo/production/c8ff1d250ad10ddefadec5bdb472a5f3a3bace2b-1080x1920.webp?w=750&q=65&fit=clip&auto=format"
        }
        className='discover-img img-bottom-left'
        alt=''
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      />

      {/* CONTENIDO CENTRAL */}
      <Box
        className='discover-content'
        component={motion.div}
        variants={stagger}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <img
            src={Logo}
            className='discover-logo'
            alt='Experiencias por México'
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography color='#01528C' fontWeight='bold' fontSize='30px'>
            Experiencias Destacadas
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography className='discover-title'>
            Descubre cada rincón <br /> de México con nosotros
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Typography className='discover-text'>
            Creamos experiencias auténticas en México: escapadas románticas,
            aventuras en solitario y viajes en familia, diseñados a tu medida
            para que vivas momentos inolvidables.
          </Typography>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{
              borderRadius: "12px",
              fontWeight: "bold",
              color: "#A3BB13",
              bgcolor: "#01528C",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollBy({
                top: 680,
                behavior: "smooth",
              })
            }
          >
            Explorar experiencias
          </Button>
        </motion.div>
      </Box>

      <motion.img
        src={
          "https://hips.hearstapps.com/hmg-prod/images/santo-domingo-church-exterior-royalty-free-image-1717095458.jpg?crop=1.00xw:0.977xh;0,0&resize=1120:*"
        }
        className='discover-img img-top-right'
        alt=''
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
      />

      <motion.img
        src={
          "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/Jalisco_Mazamitla_Calles_BIC-ok.jpg"
        }
        className='discover-img img-bottom-right'
        alt=''
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        viewport={{ once: true }}
      />
    </Box>
  );
};

export default Discover;
