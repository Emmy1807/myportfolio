# Docker-Only Setup Guide

This portfolio uses **Docker** for all development and deployment. The root-level Next.js app is **not used**.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed
- Docker Compose installed

### Start the Stack

```powershell
cd C:\Users\Dell 5400\Desktop\portfolio

# Start all services (database, backend, frontend)
docker-compose up -d

# Check status
docker-compose ps
```

### Access Your Portfolio

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:3000 | React UI |
| **Backend** | http://localhost:5000 | Express API |
| **Database** | localhost:5432 | PostgreSQL |

---

## 📂 Architecture

```
docker-compose.yml
├── postgres (portfolio-db)          → Database
│   └── Port: 5432
├── backend (portfolio-backend)      → Node.js + Express + Prisma
│   ├── Port: 5000
│   ├── Auto-migrates database
│   └── Connected to database via Docker network
└── frontend (portfolio-frontend)    → React + Vite
    ├── Port: 3000
    └── Calls backend at http://backend:5000/api
```

---

## 🛠️ Common Commands

### View Logs
```powershell
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Stop Everything
```powershell
docker-compose down
```

### Stop & Remove All Data
```powershell
docker-compose down -v
```

### Rebuild (after code changes)
```powershell
docker-compose up --build -d
```

### Run Commands Inside Containers
```powershell
# Access backend shell
docker exec -it portfolio-backend sh

# Access database shell
docker exec -it portfolio-db psql -U postgres -d portfolio

# Run Prisma commands
docker exec portfolio-backend npx prisma studio
docker exec portfolio-backend npx prisma db push
```

---

## 📝 Environment Variables

All configured automatically in `docker-compose.yml`:

**Backend (.env in docker-compose)**
- `DATABASE_URL=postgresql://postgres:postgres@postgres:5432/portfolio`
- `PORT=5000`
- `NODE_ENV=development`

**Frontend (.env in docker-compose)**
- `REACT_APP_API_URL=http://backend:5000/api`

---

## ✨ Features

✅ Automatic database migrations on startup  
✅ Hot reload for source code changes  
✅ No .env files needed on host machine  
✅ Isolated Docker network (no port conflicts)  
✅ Production-ready configuration  
✅ Easy to deploy (same setup anywhere)

---

## 🚫 Why Not Use Root Next.js App?

The root-level Next.js app (`npm run dev`) is **not used** because:
- Docker setup is cleaner and more maintainable
- Separates frontend/backend concerns properly
- Works the same in production
- Avoids local database configuration issues

**Ignore the root-level files:**
- `pages/`
- `lib/prisma.js`
- `.next/`
- `next.config.js`

These are only kept for reference.

---

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Stop conflicting services
docker-compose down

# Or use different ports in docker-compose.yml
```

### Database Connection Error
```powershell
# Check if postgres is healthy
docker-compose ps

# View database logs
docker-compose logs postgres
```

### Frontend Can't Reach Backend
- Check backend is running: `docker-compose logs -f backend`
- Verify API URL in frontend: Should be `http://backend:5000/api` (inside Docker network)

---

## 📚 Next Steps

1. ✅ Verify all containers are running: `docker-compose ps`
2. ✅ Visit http://localhost:3000 to see your portfolio
3. ✅ Seed database if needed: `docker exec portfolio-backend npm run seed`
4. ✅ View Prisma Studio: `docker exec portfolio-backend npx prisma studio`

Enjoy your containerized portfolio! 🎉
