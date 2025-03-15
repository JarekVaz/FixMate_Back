# FixMate Backend 🛠️

Backend de la plataforma FixMate, desarrollado en Node.js con Express. Proporciona APIs para gestión de usuarios, servicios, reservas, pagos y reseñas, cumpliendo con altos estándares de seguridad y rendimiento.

---

## **Estructura del Proyecto** 📂

```plaintext
FixmateBackend/
├── config/          # Configuraciones globales (BD, middlewares)
├── controllers/     # Lógica de endpoints (usuarios, pagos, reservas)
├── models/          # Modelos de Sequelize (Usuarios, Servicios, Reservas)
├── routes/          # Definición de rutas API (/api/auth, /api/services)
├── services/        # Servicios auxiliares (notificaciones, chat, búsqueda)
├── utils/           # Utilidades (JWT, validación, seguridad)
├── tests/           # Pruebas unitarias e integración
├── .env             # Variables de entorno
└── index.js           # Punto de entrada del servidor
```

---

## **Tecnologías Clave** 🛠️

- **Framework:** Express.js
- **Base de Datos:** PostgreSQL + Sequelize (ORM)
- **Autenticación:** JWT, Passport.js, MFA
- **Pagos:** Stripe/PayPal (APIs)
- **Seguridad:** Helmet, CORS, rate-limiting, express-validator
- **Logging:** Morgan
- **Documentación:** Swagger (OpenAPI)

---

## **Configuración Inicial** ⚙️

### 1. Clonar el repositorio

```bash
git clone https://github.com/QueenPeluchitos/FixmateBackend.git
cd FixmateBackend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno (.env)

```env
PORT=3000
DB_HOST=localhost
DB_NAME=fixmate_db
DB_USER=postgres
DB_PASSWORD=tu_contraseña
JWT_SECRET=clave_secreta_jwt
STRIPE_API_KEY=clave_stripe
GOOGLE_MAPS_API_KEY=clave_google_maps
```

### 4. Iniciar el servidor

```bash
npm start  # Modo desarrollo (con nodemon)
```

---

## **Endpoints Principales** 🔗

| Ruta                 | Método | Descripción                   |
| -------------------- | ------ | ----------------------------- |
| `/api/auth/register` | POST   | Registro de usuarios          |
| `/api/auth/login`    | POST   | Inicio de sesión + JWT        |
| `/api/services`      | GET    | Búsqueda con filtros          |
| `/api/bookings`      | POST   | Crear reserva                 |
| `/api/payments`      | POST   | Procesar pago (Stripe/PayPal) |
| `/api/reviews`       | POST   | Enviar reseña                 |

> **Nota:** Consulta la documentación Swagger en `/api-docs` después de iniciar el servidor.

---

## **Contribución** 👥

1. **Instalar dependencias de desarrollo:**

   ```bash
   npm install -D jest supertest
   ```

2. **Ejecutar pruebas:**

   ```bash
   npm test  # Ejecuta todas las pruebas en /tests
   ```

3. **Seguir estándares:**
   - Validar entradas con `express-validator`.
   - Usar migraciones de Sequelize para cambios en la BD.
   - Formatear código con Prettier/ESLint (opcional).

---

## **Requisitos del Sistema** 📋

- Node.js v18+
- PostgreSQL v15+
- NPM v9+

---

## **Licencia** 📄

ISC © 2025 FixMate Team.  
**Repositorio:** [github.com/QueenPeluchitos/FixmateBackend](https://github.com/QueenPeluchitos/FixmateBackend)

---
