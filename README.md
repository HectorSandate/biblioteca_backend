# 📚 Biblioteca Pública de México

Aplicación para la gestión de libros de la Biblioteca Pública de México, desarrollada como parte de una prueba técnica.

---

## 🚀 Descripción General

La aplicación permite registrar, visualizar, buscar y actualizar libros de forma eficiente, brindando una experiencia moderna tanto en la interfaz de usuario como en la gestión de datos.

---

## 🛠️ Tecnologías Utilizadas

### **Backend:**

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

### **Servicios Externos:**

- [Cloudinary](https://cloudinary.com/) (para almacenamiento de imágenes)

---

## ✨ Características Principales

1. **Registro de Libros:**

   - Nombre del libro
   - ISBN
   - Estatus (Prestado, Perdido, Disponible)
   - Categoría (Acción, Romance, Aventura, etc.)
   - Imagen del libro (subida a Cloudinary)

2. **Visualización y Búsqueda:**

   - Vista previa de libros en un diseño tipo Netflix
   - Búsqueda rápida con barra de búsqueda
   - Filtros por estado y categorías

3. **Actualización de Libros:**

   - Editar información del libro
   - Actualizar estatus, categoría e imagen

4. **Integración Backend-Frontend:**

   - Comunicación mediante API REST
   - Manejo de errores y validación de datos

---

## ⚙️ Instalación y Configuración

### 🚀 **1. Clonar el Repositorio:**


# Entra en la carpeta del proyecto
cd biblioteca-publica
```

```

### 🌐 **2. Configurar el Backend:**

```bash
# Ir a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Ejecutar el servidor
npm run dev
```

### 🗂️ **3 Configurar Variables de Entorno:**
(POR CORREO)


## 🚀 Uso de la Aplicación

1. Registrar nuevos libros con información detallada.
2. Buscar libros rápidamente usando la barra de búsqueda.
3. Visualizar libros por categorías.
4. Editar la información de los libros existentes.

---

## 📡 Documentación de la API (para Postman)

### **1. Obtener Libros (GET):**

```bash
GET /api/books
```

### **2. Registrar Nuevo Libro (POST):**

```bash
POST /api/books

# Ejemplo de cuerpo JSON:
{
  "name": "El Principito",
  "isbn": "123456789",
  "status": "Disponible",
  "category": "Aventura",
  "image": "https://cloudinary.com/example.jpg"
}
```

### **3. Actualizar Libro (PUT):**

```bash
PUT /api/books/:id

# Ejemplo de cuerpo JSON:
{
  "name": "El Principito (Edición Especial)",
  "isbn": "987654321",
  "status": "Prestado",
  "category": "Clásicos"
}
```

### **4. Eliminar Libro (DELETE):**

```bash
DELETE /api/books/:id
```

---

## 🔐 Variables de Entorno

Asegúrate de configurar correctamente el archivo `.env` tanto en el frontend como en el backend.

**Importante:** No compartas este archivo en repositorios públicos.

---

## 👤 Autor

- **Nombre:** [Diaz Sandate Hector Jose]
- **GitHub:** [https://github.com/HectorSandate]
- **Correo:** [hectorjosediazsandate@gmail.com]


