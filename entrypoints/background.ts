import { browser } from "wxt/browser";
import ExtMessage, { MessageFrom, MessageType } from "@/entrypoints/types.ts";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id }); // background.js
});
