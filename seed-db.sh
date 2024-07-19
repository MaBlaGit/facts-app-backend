#!/bin/sh
set -e
pnpm prisma migrate dev --name init
pnpm ts-node seed.ts
echo "Database has been seeded with initial data."
