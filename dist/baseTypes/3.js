//У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі.
//Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
export {};
//# sourceMappingURL=3.js.map