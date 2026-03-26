import { NotFoundError } from "../Errors/NotFoundError";
export const ensureFound = <T>(rows: T[], message: string): T => {
  if (rows.length === 0) {
    throw new NotFoundError(message);
  }
  return rows[0];
};