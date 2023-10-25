import * as bcrypt from 'bcrypt';

export function generateHash(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export async function validateHash(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
