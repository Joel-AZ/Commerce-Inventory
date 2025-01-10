export function slugify (slug: string): string {
  return slug
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase()
}
