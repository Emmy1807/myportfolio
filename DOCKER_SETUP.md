# Docker Setup Guide

## Prerequisites
- Docker Desktop installed: https://www.docker.com/products/docker-desktop
- Windows 10/11 with WSL2 enabled (usually default now)

## Quick Start

### 1. Start PostgreSQL Container
```powershell
cd "C:\Users\Dell 5400\Desktop\portfolio"
docker-compose up -d
```

This will:
- Download PostgreSQL 15 Alpine image (first time only)
- Start the container in background
- Expose port 5432
- Create a `portfolio` database

### 2. Verify Database is Running
```powershell
docker-compose ps
```

You should see:
```
NAME         STATUS
portfolio-db  Up (healthy)
```

### 3. Run Database Migrations
```powershell
npm run prisma:migrate
```

### 4. Seed Database (Optional)
```powershell
npm run seed
```

### 5. Start Development Servers
```powershell
npm run dev
```

## Common Commands

### Stop PostgreSQL
```powershell
docker-compose down
```

### Stop and Remove Data
```powershell
docker-compose down -v
```

### View Database Logs
```powershell
docker-compose logs postgres
```

### Access PostgreSQL CLI
```powershell
docker-compose exec postgres psql -U postgres -d portfolio
```

Then you can run SQL commands like:
```sql
\dt                    -- List all tables
\l                     -- List all databases
SELECT * FROM "Project";  -- View projects
\q                     -- Exit
```

### Rebuild Container
```powershell
docker-compose down -v
docker-compose up -d --build
```

## Environment Variables

The `docker-compose.yml` automatically sets:
- **POSTGRES_USER:** postgres
- **POSTGRES_PASSWORD:** postgres
- **POSTGRES_DB:** portfolio
- **Port:** 5432

These match your `.env` file defaults.

## Troubleshooting

### Container won't start
```powershell
docker-compose logs postgres
```

### Port 5432 already in use
Change port in `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"  # Local port changed to 5433
```

Then update `.env`:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/portfolio"
```

### Permission denied on Windows
Run PowerShell as Administrator or enable non-admin Docker access in Docker Desktop settings.

## Full Workflow Example

```powershell
# 1. Start Docker container
docker-compose up -d

# 2. Wait a few seconds for container to be healthy
docker-compose ps

# 3. Run migrations to create tables
npm run prisma:migrate

# 4. Seed sample data (optional)
npm run seed

# 5. Start development
npm run dev

# Backend will be at http://localhost:5000
# Frontend will be at http://localhost:3000
```

## Data Persistence

Your database data is stored in a Docker volume (`postgres_data`). This means:
- ✅ Data persists even if you stop the container
- ✅ Run `docker-compose up` again and data is still there
- ❌ `docker-compose down -v` will delete all data

## Next Steps

Once Docker is running and migrations complete, you can:
1. Run `npm run dev` to start both servers
2. Visit http://localhost:3000 for frontend
3. API available at http://localhost:5000/api
