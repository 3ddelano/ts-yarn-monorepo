import 'server-only';

import { PrismaClient } from '@prisma/client';


declare global {
  var cachedPrisma: PrismaClient | undefined;
}


export const database = new PrismaClient();