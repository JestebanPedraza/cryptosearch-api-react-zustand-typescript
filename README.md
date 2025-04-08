# Descripción de la app 💹
Aplicación para consultar precios diversas criptomonedas en diferentes monedas. La aplicación está construida utilizando TypeScript y hace uso de una API externa para obtener los datos de precios en tiempo real.

## 💻 Tecnologías Utilizadas
- React 
- TypeScript: Para un desarrollo tipado y más seguro.
- API de CryptoCompare: Para obtener datos de precios de criptomonedas en tiempo real.
- Zustand: Para la gestión del estado de la aplicación.
- Zod: Para los types de las respuestas de la API
  
## 🧠 Lógica de la Aplicación
La aplicación se basa en dos funciones principales:
- Carga de Criptomonedas: Obtiene una lista de criptomonedas disponibles y actualiza el estado de la aplicación con esta información.
- Obtención de Precios: Toma un par de criptomoneda y moneda, y obtiene el precio actual de la criptomoneda en la moneda especificada. Durante la obtención de datos, el estado de loading se actualiza para reflejar el estado de la solicitud.

## 🌐 Enlace a la app
[Da click aquí para experimentar con la app](https://regal-seahorse-d3f514.netlify.app/)
