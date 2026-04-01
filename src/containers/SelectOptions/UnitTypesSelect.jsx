import React, { Fragment, useEffect, useState } from "react";
import MethodGet from "../../config/Service";
import Select from "react-select";

const UnitTypesSelect = (props) => {
  const [unitTypes, setUnitTypes] = useState([]);

  useEffect(() => {
    let url = "/unit-types/grouped";
    MethodGet(url)
      .then((res) => {
        setUnitTypes(res.data.data);
      })
      .catch((error) => {
        console.error(error, "error al obtener los tipos de unidades");
      });
  }, []);

  const groupedOptions =
    unitTypes?.map((category) => ({
      label: category.name,
      options: category.unitTypes.map((unit) => ({
        value: unit.id,
        label: `${unit.name} — hasta ${unit.capacity} pasajeros`,
        vehicleName: unit.name, // Guardamos los datos puros por si acaso
        capacity: unit.capacity,
      })),
    })) || [];

  const formatGroupLabel = (data) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>— {data.label}</span>
    </div>
  );

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "12px", // Bordes más redondos (puedes subirlo a 20px para estilo píldora)
      padding: "2px 8px", // Espaciado interno para que no se vea apretado
      borderColor: state.isFocused ? "#01528C" : "#ced4da", // Azul al hacer clic
      boxShadow: state.isFocused ? "0 0 0 1px #01528C" : "none", // Brillo sutil al enfocar
      minHeight: "45px", // Un poco más alto para que luzca mejor
      cursor: "pointer",
      "&:hover": {
        borderColor: "#01528C", // Cambia el borde al pasar el mouse
      },
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "12px", // También redondeamos la lista de opciones
      overflow: "hidden", // Para que las opciones no se salgan de las esquinas redondas
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Sombra elegante
      zIndex: 100,
    }),

    // 3. ENCABEZADO DE GRUPO (Lo que ya teníamos)
    groupHeading: (base) => ({
      ...base,
      color: "#A3BB13",
      textTransform: "uppercase",
      fontWeight: "600",
      fontSize: "12px",
      letterSpacing: "1px",
      paddingLeft: "15px",
      paddingTop: "10px",
    }),

    // 4. LAS OPCIONES INDIVIDUALES
    option: (base, state) => ({
      ...base,
      paddingLeft: "25px", // Indentación para que se vea ordenado bajo el grupo
      color: state.isSelected ? "white" : "#01528C",
      backgroundColor: state.isSelected ? "#01528C" : "transparent",
      cursor: "pointer",
      fontSize: "14px",
      transition: "all 0.2s ease", // Animación suave al pasar el mouse
      "&:hover": {
        backgroundColor: state.isSelected ? "#01528C" : "#f4f7f9",
        color: "#01528C",
      },
    }),

    // 5. VALOR SELECCIONADO Y PLACEHOLDER
    singleValue: (base) => ({
      ...base,
      color: "#01528C",
      fontWeight: "500",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#a0aec0",
    }),

    // 6. LOS INDICADORES (Flecha y separador)
    dropdownIndicator: (base) => ({
      ...base,
      color: "#01528C", // Flecha del color azul de tu marca
      "&:hover": {
        color: "#A3BB13", // Cambia a verde al pasar el mouse
      },
    }),
    indicatorSeparator: () => ({
      display: "none", // Quitamos la rayita vertical para un look más limpio
    }),
  };

  const detectarCambiosTypeUnit = (value) => {
    props.detectarCambiosTypeUnit(value);
  };

  return (
    <Fragment>
      <Select
        placeholder='Selecciona tipo de unidad...'
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        styles={selectStyles}
        onChange={(value) => detectarCambiosTypeUnit(value)}
        isClearable
        // Esto previene que se cierre el menú si haces clic fuera rápidamente
        blurInputOnSelect={true}
      />
    </Fragment>
  );
};

export default UnitTypesSelect;
