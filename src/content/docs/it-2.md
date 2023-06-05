---
title: "Can I use?"
description: "Keynote Introduction"
---

## 2. Result: It doesn't work for IE + Safari

**fallback-shared-worker.ts**

```ts
export class SharedWorkerPolyfill implements SharedWorker, EventTarget, AbstractWorker {
  public postMessage(message: any, transfer?: Transferable[]) {
  ...
};

export const initSharedWorkerFallback = () => {
  if (!isSharedWorkerSupported) {
    globalThis.SharedWorker = SharedWorkerPolyfill;
  }
};
```

**worker.runner.ts**

```ts
...
initSharedWorkerFallback();
const sharedWorker = new SharedWorker();
sharedWorker.port.start();
```
