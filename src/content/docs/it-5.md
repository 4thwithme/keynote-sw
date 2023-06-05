---
title: "Hack #2"
description: "Keynote Introduction"
---

## 4. Hack #2

**worker.runner.ts**

```ts
const sharedWorker = new SharedWorker(
  /* webpackChunkName: "ecommerce-worker" */
  new URL("./ecommerce-socket.worker.ts", import.meta.url),
  { name: "ecommerce-worker" }
);
```

**webpack.config.ts**

```ts
new WebpackShellPluginNext({
  onBuildEnd: overwriteWorkerPublicPathAfterBuild({
    bundleType,
    rootDir: __dirname,
    outputPublicPath: publicPath,
  }),
}),
```
