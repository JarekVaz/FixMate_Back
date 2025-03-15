# FixMate Backend 🛠️

Backend de la plataforma FixMate, desarrollado en Node.js con Express. Proporciona APIs para gestión de usuarios, servicios, reservas, pagos y reseñas, cumpliendo con altos estándares de seguridad y rendimiento.

---

## **Requisitos del Backend** 📋

### **Requisitos Funcionales**

- [ ] **REQ-F-001**: Búsqueda avanzada con filtros (ubicación, disponibilidad, precio, etc.).
- [ ] **REQ-F-002**: Verificación de profesionistas (documentos, certificaciones).
- [ ] **REQ-F-003**: Sistema de reseñas y calificaciones verificadas.
- [ ] **REQ-F-004**: Gestión de perfiles de usuarios y profesionistas (CRUD).
- [ ] **REQ-F-005**: Registro y seguimiento de servicios contratados (historial).
- [ ] **REQ-F-006**: Agenda integrada con recordatorios automáticos.
- [ ] **REQ-F-007**: Integración de pagos seguros (Stripe/PayPal).
- [ ] **REQ-F-008**: Modelos de monetización (comisiones, planes premium).
- [ ] **REQ-F-009**: Generación de reportes y estadísticas.
- [ ] **REQ-F-010**: Gestión de cancelaciones y reembolsos automatizados.

### **Requisitos No Funcionales**

#### **Seguridad**

- [ ] **REQ-NF-004**: Autenticación multifactor (MFA).
- [ ] **REQ-NF-005**: Cifrado de datos sensibles (AES-256, TLS 1.3).
- [ ] **REQ-NF-007**: Protección contra ataques (SQL Injection, XSS, CSRF).
- [ ] **REQ-NF-008**: Políticas de contraseñas seguras (12+ caracteres).
- [ ] **REQ-NF-011**: Monitoreo de seguridad en tiempo real.

#### **Rendimiento**

- [ ] **REQ-NF-001**: Soporte para 5,000 usuarios simultáneos.
- [ ] **REQ-NF-002**: Tiempo de respuesta rápido (<2 segundos en consultas).
- [ ] **REQ-NF-003**: Manejo de 100 transacciones/minuto.

#### **Disponibilidad**

- [ ] **REQ-NF-014**: 99.9% de disponibilidad anual.
- [ ] **REQ-NF-015**: Ventanas de mantenimiento programado (máx. 4h/mes).

#### **Mantenibilidad**

- [ ] **REQ-NF-016**: Código modular y documentado.
- [ ] **REQ-NF-017**: Actualizaciones sin interrupciones.

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
npm run dev  # Modo desarrollo (con nodemon)
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
