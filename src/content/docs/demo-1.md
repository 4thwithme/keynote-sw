---
title: "Main Thread"
description: "Keynote Introduction"
---

<a href="/keynotesw/demo">Demo</a>

```ts
const btn = document.getElementById("button");
const inputBase = document.getElementById("num-1") as HTMLInputElement;
const inputPow = document.getElementById("num-2") as HTMLInputElement;
const results = document.getElementById("results") as HTMLOListElement;

const BC = new BroadcastChannel("test");
const myWorker = new SharedWorker("src/workers/shared-worker.js", "SW_TEST");
myWorker.port.start();

if (btn && inputBase && inputPow) {
	btn.addEventListener("click", () => {
		const base = inputBase.value ?? 0;
		const pow = inputPow.value ?? 0;
		console.log("[MAIN THREAD] (Sending message) to worker: ", base, pow);
		myWorker.port.postMessage({ base, pow });
	});
}
BC.addEventListener("message", (e) => {
	console.log("[MAIN THREAD] (Received message) from worker: ", e.data);
	const li = document.createElement("li");
	li.textContent = `${e.data.base ?? 0} ^ ${e.data.pow ?? 0} = ${e.data.res}`;
	results.append(li);
});
```
