if (window.Sentry) {
  Sentry.init({
    dsn: "https://4d1972748534f0a10f5e32cf0d798f14@o4512208216129536.ingest.de.sentry.io/4512208591913040",
    release: "b3-versioning@1.2.1",
    environment: "dev",
  });
} else {
  console.warn("Sentry n'a pas pu être chargé (bloqueur de pub ?)");
}
