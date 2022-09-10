import { Context, OfflineState, OnlineState } from "./state";

// 状態(Stateクラス)が振る舞いを持つことで
// 以下の場合 if (state === "online") などのif文を減らす事ができる
// 状態が切り替わるタイミングで　何らかの処理を行うといった使い方もある

const onlineState = new OnlineState();
const offlineState = new OfflineState();

const ctx = new Context(offlineState);

ctx.logState(); // status is offline

ctx.State = onlineState;

ctx.logState(); // status is online!"
