// コンテンツスクリプト: ダミーデータ作成 (準備中)

(() => {
  console.log(
    "[Kintone Dev Tools] createDummyData.js (content script) loaded."
  );

  function showComingSoonAlert() {
    alert("「ダミーデータ作成」機能は現在準備中です。");
    console.log(
      "[Kintone Dev Tools] createDummyData feature is under construction."
    );
  }

  // DOMの準備ができてから実行
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    showComingSoonAlert();
  } else {
    document.addEventListener("DOMContentLoaded", showComingSoonAlert);
  }
})();
