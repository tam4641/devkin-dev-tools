// コンテンツスクリプト: フィールドコード変更 (準備中)

(() => {
  console.log(
    "[Kintone Dev Tools] changeFieldCodes.js (content script) loaded."
  );

  function showComingSoonAlert() {
    alert("「フィールドコード変更」機能は現在準備中です。");
    console.log(
      "[Kintone Dev Tools] changeFieldCodes feature is under construction."
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
