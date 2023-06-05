---
title: "Hack"
description: "Keynote Introduction"
---

## 3. Problems with CDN and White label stores

**worker.runner.ts**

```ts
//-- DO NO MOVE THESE LINES ----------
const prevWPP = __webpack_public_path__;
__webpack_public_path__ = `${globalThis.location.origin}${WHITE_LABEL_STORE_PREFIX}/`;
//-- DO NO MOVE THESE LINES ----------

const sharedWorker = new SharedWorker();
sharedWorker.port.start();

//-- DO NO MOVE THESE LINES ----------
__webpack_public_path__ = prevWPP;
//-- DO NO MOVE THESE LINES ----------
export const port = sharedWorker.port;
```
