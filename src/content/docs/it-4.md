---
title: "Name for SW"
description: "Keynote Introduction"
---

## 4. 3 Tabs -> 3 Shared Workers ??

**webpack.config.ts**

```ts
rules: [
  {
    test: /\.worker\.[tj]s$/i,
    loader: "worker-loader",
    options: {
      worker: "SharedWorker",
      filename: () => `scripts/[name].[chunkhash].js`,
      publicPath: () => "/scripts",
    },
  },
];
```
