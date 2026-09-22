// ============================================================
//  南屯自走車 · 體驗版韌體（純按鈕、超慢、不會邊走邊轉）
//
//  這是要讓學生「先開開看、然後嫌」的版本：
//    ● 速度很慢（SLOW = 25）
//    ● 只吃按鈕：前進 / 左 / 右
//    ● 左右轉是「原地打轉」，要停下來才能轉，不會邊走邊轉
//  學生嫌了之後，就會想在 iPad 加方向盤、在這支程式加差速。
//
//  安裝：新專案 → 加「南屯遙控車」擴充（會自動帶藍牙）
//        → 專案設定 No Pairing Required
//        → 切 JavaScript 貼上本檔 → 燒錄 micro:bit V2
//  搭配 iPad 控制台的「★ 基本版面」（前進 / 左 / 右 三顆按鈕）。
// ============================================================

let SLOW = 25   // 體驗版速度，很慢（0~100）。想讓學生更想改，就設更小。

nantunCar.startRemote()

// 前進：兩輪一起慢慢走
nantunCar.onButtonDown(nantunCar.Btn.FWD, function () {
    nantunCar.setWheels(SLOW, SLOW)
})
nantunCar.onButtonUp(nantunCar.Btn.FWD, function () {
    nantunCar.stopCar()
})

// 左：原地左轉（左輪倒、右輪正）—— 要停下來才能轉，很不順
nantunCar.onButtonDown(nantunCar.Btn.LEFT, function () {
    nantunCar.setWheels(-SLOW, SLOW)
})
nantunCar.onButtonUp(nantunCar.Btn.LEFT, function () {
    nantunCar.stopCar()
})

// 右：原地右轉
nantunCar.onButtonDown(nantunCar.Btn.RIGHT, function () {
    nantunCar.setWheels(SLOW, -SLOW)
})
nantunCar.onButtonUp(nantunCar.Btn.RIGHT, function () {
    nantunCar.stopCar()
})

// 持續回傳循跡值，iPad 儀表板數字會跳動（代表通訊正常）
basic.forever(function () {
    nantunCar.report("LINE", nantunCar.lineValue())
    basic.pause(150)
})
