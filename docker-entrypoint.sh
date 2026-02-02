#!/bin/bash
set -e

# Allow connections from all hosts without SSL
cat > /tmp/pg_hba_update.conf << 'EOF'
# PostgreSQL Client Authentication Configuration
local   all             all                                     trust
hostnossl all           all             0.0.0.0/0               trust
host    all             postgres        127.0.0.1/32            trust
host    all             postgres        ::1/128                 trust
local   replication     all                                     trust
hostnossl replication   all             0.0.0.0/0               trust
EOF

# Give it time to initialize first
sleep 2

# Replace pg_hba.conf
cp /tmp/pg_hba_update.conf /var/lib/postgresql/data/pg_hba.conf
chmod 600 /var/lib/postgresql/data/pg_hba.conf
chown postgres:postgres /var/lib/postgresql/data/pg_hba.conf

# Reload the configuration
su - postgres -c "pg_ctl reload -D /var/lib/postgresql/data" || true

exec "$@"
