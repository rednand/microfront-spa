import { registerApplication, start } from "single-spa";

fetch("https://run.mocky.io/v3/73190df6-8d99-4dd6-871c-7324ab03fff1")
  .then((resp) => resp.json())
  .then((data) => {
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
