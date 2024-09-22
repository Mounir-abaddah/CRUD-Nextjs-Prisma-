import { PrismaClient } from "@prisma/client";

// Déclaration du type pour le client Prisma dans l'espace global
declare global {
  var prisma: PrismaClient | undefined;
}

// Utiliser une instance globale de Prisma ou en créer une nouvelle
export const prisma = globalThis.prisma || new PrismaClient();

// Si on n'est pas en production, attacher Prisma à l'objet global
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}
