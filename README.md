# Shopping Cart con React y Context API

Este proyecto es una aplicación de carrito de compras de una sola página (SPA) construida con React. La aplicación demuestra un uso efectivo de los hooks de React, incluyendo `useContext` y `useReducer`, para un manejo de estado global limpio y escalable.

## Resumen del Proyecto

La aplicación muestra una lista de productos que los usuarios pueden agregar a un carrito de compras. Los usuarios pueden ver los artículos en el carrito, aumentar o disminuir la cantidad de cada artículo y vaciar el carrito por completo. La interfaz está diseñada con Bootstrap para ser moderna y responsiva.

## Características

-   **Listado de Productos**: Muestra una lista de productos con su nombre, descripción y precio.
-   **Detalle del Producto**: Muestra una vista detallada de un producto seleccionado.
-   **Carrito de Compras**: Funcionalidad completa de carrito de compras.
    -   Agregar productos al carrito.
    -   Aumentar/disminuir la cantidad de productos en el carrito.
    -   Eliminar productos del carrito (al disminuir la cantidad a cero).
    -   Vaciar todo el carrito.
-   **Persistencia del Carrito**: El estado del carrito se guarda localmente usando `localforage`, permitiendo que persista entre sesiones.
-   **Página de Checkout**: Una página de resumen del pedido accesible desde el carrito.
-   **Manejo de Estado Global**: Utiliza `useContext` y `useReducer` para un manejo de estado centralizado y eficiente.
-   **Interfaz Responsiva**: Construida con Bootstrap para una experiencia de usuario consistente en diferentes dispositivos.
-   **Enrutamiento**: Utiliza `react-router-dom` para la navegación entre las distintas páginas.

## Tecnologías Utilizadas

-   **React (v19.1.1)**: Biblioteca para construir la interfaz de usuario.
-   **Vite**: Herramienta de construcción y servidor de desarrollo.
-   **Bootstrap (v5.3.7)**: Framework de CSS para el diseño y la interfaz de usuario.
-   **React Icons (v5.5.0)**: Para la inclusión de iconos SVG.
-   **React Router DOM (v7.8.2)**: Para el manejo de rutas en la aplicación.
-   **LocalForage**: Para el almacenamiento offline del carrito.
-   **ESLint**: Para el linting y la calidad del código.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas modular y organizada para promover la mantenibilidad y escalabilidad, separando componentes reutilizables de las páginas principales.

```
/
├─── public/
├─── src/
│    ├─── assets/
│    ├─── components/
│    │    ├─── Cart.jsx
│    │    ├─── CartItem.jsx
│    │    ├─── Header.jsx
│    │    └─── ProductItem.jsx
│    ├─── contexts/
│    │    ├─── CartContext.js
│    │    └─── CartProvider.jsx
│    ├─── pages/
│    │    ├─── CheckoutPage.jsx
│    │    ├─── ProductDetail.jsx
│    │    └─── ProductList.jsx
│    ├─── data.json
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
-   **Persistencia con `localforage`**: El estado del carrito se sincroniza con el almacenamiento del navegador en cada cambio, y se carga al iniciar la aplicación para una experiencia de usuario persistente.

## Enrutamiento

La aplicación utiliza `react-router-dom` para gestionar la navegación. Las rutas principales son:

-   `/`: Muestra la lista de productos (`ProductList`).
-   `/product/:id`: Muestra la vista de detalle de un producto específico (`ProductDetail`).
-   `/checkout`: Muestra la página de resumen del pedido y pago (`CheckoutPage`).

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