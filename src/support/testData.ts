import { faker } from "@faker-js/faker";
import crypto from "crypto";

export function randomGenericTitle() {
  const now = new Date().getTime();
  return `${faker.internet.userName()} ${now}`;
}

export function randomTaskName(taskName: string) {
  const now = new Date().valueOf() + crypto.randomBytes(8).toString("hex");
  return `${taskName}${now}`;
}
