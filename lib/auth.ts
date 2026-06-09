import { pbkdf2Sync, randomBytes, timingSafeEqual } from "crypto";

declare global {
  // eslint-disable-next-line no-var
  var __devUsers:
    | Array<{
        _id: string;
        name: string;
        email: string;
        passwordHash: string;
      }>
    | undefined;
}

const PEPPER = process.env.AUTH_PEPPER || "pms-tog-local";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = pbkdf2Sync(
    password,
    `${salt}${PEPPER}`,
    100_000,
    64,
    "sha512",
  ).toString("hex");

  return `${salt}:${derivedKey}`;
}

export function verifyPassword(password: string, storedHash: string) {
  if (!storedHash || typeof storedHash !== "string") return false;

  if (!storedHash.includes(":")) {
    return storedHash === password;
  }

  const [salt, expectedHash] = storedHash.split(":");
  if (!salt || !expectedHash) return false;

  const derivedKey = pbkdf2Sync(
    password,
    `${salt}${PEPPER}`,
    100_000,
    64,
    "sha512",
  ).toString("hex");
  const expectedBuffer = Buffer.from(expectedHash, "hex");
  const actualBuffer = Buffer.from(derivedKey, "hex");

  if (expectedBuffer.length !== actualBuffer.length) return false;

  return timingSafeEqual(expectedBuffer, actualBuffer);
}

export function getDevelopmentUser(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = globalThis.__devUsers?.find(
    (user) => user.email.toLowerCase() === normalizedEmail,
  );

  if (existingUser) return existingUser;

  const demoEmail = (process.env.AUTH_DEMO_EMAIL || "demo@pms.com")
    .trim()
    .toLowerCase();
  if (normalizedEmail !== demoEmail) return null;

  const fallbackUser = {
    _id: "dev-demo-user",
    name: "Demo User",
    email: demoEmail,
    passwordHash: hashPassword(process.env.AUTH_DEMO_PASSWORD || "demo1234"),
  };

  globalThis.__devUsers = [fallbackUser];
  return fallbackUser;
}

export function createDevelopmentUser(user: {
  name: string;
  email: string;
  passwordHash: string;
}) {
  const normalizedEmail = user.email.trim().toLowerCase();
  const existingUser = globalThis.__devUsers?.find(
    (existing) => existing.email.toLowerCase() === normalizedEmail,
  );

  if (existingUser) return existingUser;

  const createdUser = {
    _id: `dev-${Date.now()}`,
    name: user.name,
    email: normalizedEmail,
    passwordHash: user.passwordHash,
  };

  globalThis.__devUsers = [...(globalThis.__devUsers || []), createdUser];
  return createdUser;
}
