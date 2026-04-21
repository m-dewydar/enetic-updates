import { homePeople } from "@/lib/data";

export function personSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPersonBySlug(slug: string) {
  return homePeople.find((person) => personSlug(person.name) === slug);
}
