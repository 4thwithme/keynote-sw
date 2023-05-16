---
title: "Shared Worker Thread"
description: "Keynote Introduction"
---

**go to in browser:**
```ts
chrome://inspect/#workers
```

```ts
const BC = new BroadcastChannel("test");

onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    console.log("[WORKER THREAD] (Received message): ", e.data, e.ports);

    const res = e.data.base ** e.data.pow;
    BC.postMessage({ res, base: e.data.base, pow: e.data.pow });
  });

  port.start();
};
```
