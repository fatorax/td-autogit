import test from "node:test";
import assert from "node:assert/strict";
import { addition } from "./calcul.mjs";
test("additionne deux nombres", () => {
 assert.equal(addition(2, 3), 5);
});
