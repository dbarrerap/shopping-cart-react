# Shopping Cart con React y Context API

Este proyecto es una aplicación de carrito de compras de una sola página (SPA) construida con React. La aplicación demuestra un uso efectivo de los hooks de React, incluyendo `useContext` y `useReducer`, para un manejo de estado global limpio y escalable.

## Resumen del Proyecto

La aplicación muestra una lista de productos que los usuarios pueden agregar a un carrito de compras. Los usuarios pueden ver los artículos en el carrito, aumentar o disminuir la cantidad de cada artículo y vaciar el carrito por completo. La interfaz está diseñada con Bootstrap para ser moderna y responsiva.

## Características

-   **Listado de Productos**: Muestra una lista de productos con su nombre, descripción y precio.
-   **Carrito de Compras**: Funcionalidad completa de carrito de compras.
    -   Agregar productos al carrito.
    -   Aumentar/disminuir la cantidad de productos en el carrito.
    -   Eliminar productos del carrito (al disminuir la cantidad a cero).
    -   Vaciar todo el carrito.
-   **Manejo de Estado Global**: Utiliza `useContext` y `useReducer` para un manejo de estado centralizado y eficiente.
-   **Interfaz Responsiva**: Construida con Bootstrap para una experiencia de usuario consistente en diferentes dispositivos.

## Tecnologías Utilizadas

-   **React (v19.1.1)**: Biblioteca para construir la interfaz de usuario.
-   **Vite**: Herramienta de construcción y servidor de desarrollo.
-   **Bootstrap (v5.3.7)**: Framework de CSS para el diseño y la interfaz de usuario.
-   **React Icons (v5.5.0)**: Para la inclusión de iconos SVG.
-   **ESLint**: Para el linting y la calidad del código.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas modular y organizada para promover la mantenibilidad y escalabilidad.

```
/
├─── public/
├─── src/
│    ├─── assets/
│    ├─── components/
│    │    ├─── Cart.jsx
│    │    ├─── CartItem.jsx
│    │    ├─── Header.jsx
│    │    ├─── ProductItem.jsx
│    │    ├─── ProductList.jsx
│    │    └─── index.js
│    ├─── contexts/
│    │    ├─── CartContext.js
│    │    └─── CartProvider.jsx
│    ├─── data.js
│    ├─── App.jsx
│    ├─── main.jsx
│    └─── ...
└─── ...
```

## Lógica Principal y Manejo del Estado

El núcleo de la lógica de la aplicación reside en el `CartProvider.jsx`, que utiliza un `useReducer` para gestionar el estado del carrito.

-   **`cartReducer`**: Una función pura que maneja todas las acciones que pueden modificar el estado del carrito:
    -   `ADD_ITEM`: Agrega un producto al carrito o incrementa su cantidad si ya existe.
    -   `INCREASE_ITEM`: Incrementa la cantidad de un artículo.
    -   `DECREASE_ITEM`: Disminuye la cantidad de un artículo o lo elimina si la cantidad es 1.
    -   `RESET_CART`: Vacía todos los artículos del carrito.
-   **`CartContext`**: Proporciona el `estado` del carrito y la función `dispatch` a todos los componentes que lo necesiten, evitando el "prop drilling".

## Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd shopping-cart-react
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo de Vite.
-   `npm run build`: Compila la aplicación para producción.
-   `npm run lint`: Ejecuta ESLint para analizar el código.
-   `npm run preview`: Sirve la build de producción localmente.