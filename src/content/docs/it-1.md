---
title: "Webpack + Runner"
description: "Keynote Introduction"
---

## 1. No examples of prod. code for React + Webpack + SW

**webpack.config.ts**

```ts
  module: {
    rules: [
      {
        test: /\.worker\.ts$/i,
        loader: 'worker-loader',
        options: { worker: 'SharedWorker' },
      },
    ],
  },
```

**worker.runner.ts**

```ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SharedWorker from "./socket.worker.ts";

const sharedWorker = new SharedWorker();
sharedWorker.port.start();

export const port = sharedWorker.port;
```
