# 🛒 Comparador de Precios de Supermercado (Métrica: Precio por Kilo)

Este proyecto consiste en una aplicación de consola interactiva desarrollada en JavaScript. Su objetivo es resolver un problema cotidiano al ir de compras: la dificultad para comparar el valor real de productos (como el queso) cuando vienen presentados en diferentes marcas, empaques y cantidades de gramos (ej. 350g, 400g, 500g).

La aplicación recopila los datos de los productos, estandariza matemáticamente sus pesos a kilogramos, calcula el **Precio por Kilo ($/Kg)** de cada uno y determina automáticamente cuál es la opción más conveniente para el bolsillo del usuario.

---

## 🛠️ Requerimientos Técnicos Implementados

El código fue desarrollado utilizando las siguientes estructuras:

*   **Entrada y salida de datos:** Uso de `alert()` para notificar estados, `prompt()` para capturar la información del usuario y `console.log()` para mostrar el desglose final.
*   **Variables:** Uso correcto de `const` para valores que permanecen fijos (como la categoría o las referencias del arreglo) y `let` para datos que mutan en el flujo (como los contadores o la lista ordenada).
*   **Objetos:** Cada producto ingresado se modela como un objeto con propiedades específicas: `nombre`, `precioOriginal`, `gramosOriginales` y `precioPorKilo`.
*   **Arreglos (Arrays):** Utilización de un arreglo llamado `listaQuesos` que almacena de forma dinámica los objetos de los productos ingresados para su posterior análisis.
*   **Funciones con parámetros y retorno:** Implementación de funciones modulares e independientes (`calcularKilos` y `calcularPrecioPorKilo`) que reciben argumentos numéricos, realizan operaciones matemáticas y retornan el resultado esperado.
*   **Estructuras condicionales:** Uso de bloques `if / else if / else` para validar que el usuario no introduzca datos vacíos (`NaN`) o montos menores o iguales a cero, protegiendo al programa de errores de ejecución.
*   **Bucles y Métodos de Arrays:** 
    *   Ciclo `for` tradicional para controlar la cantidad exacta de repeticiones según el número de productos que el usuario desea evaluar.
    *   Método `.forEach()` para recorrer de manera moderna el array e imprimir el listado.
    *   Método `.sort()` para ordenar algorítmicamente los objetos de menor a mayor precio y encontrar el producto más conveniente.

---

## 🚀 Cómo Ejecutar el Proyecto

1.  Asegúrate de tener los archivos `index.html` y `calculadora_de_quesos.js` (o el nombre que le hayas dado a tu script) en la misma carpeta.
2.  Abre el archivo `index.html` haciendo doble clic desde tu navegador web preferido (Chrome, Edge, Firefox, etc.).
3.  Sigue las instrucciones en las ventanas emergentes ingresando la cantidad de productos a comparar y los datos que se te soliciten.
4.  Una vez finalizado el ingreso, presiona la tecla **F12** en tu navegador para abrir las **Herramientas de Desarrollador** y entra en la pestaña **Consola** (*Console*) para visualizar la tabla de comparación y descubrir el producto ganador.
