// typescript/main.ts
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}