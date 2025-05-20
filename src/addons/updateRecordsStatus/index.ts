// コンテンツスクリプト: 複数のレコードのステータスを更新 (準備中)

(() => {
  console.log(
    "[Kintone Dev Tools] updateRecordsStatus.js (content script) loaded."
  );

  async function updateStatuses() {
    console.log("[Kintone Dev Tools] updateStatuses function called.");
    alert(
      "「複数のレコードのステータスを更新」機能は現在準備中です。\nコンソールにダミーの情報を出力します。"
    );

    try {
      const appId = kintone.app.getId();
      if (!appId) {
        console.error("[Kintone Dev Tools] App ID not found.");
        alert("アプリIDが取得できませんでした。");
        return;
      }

      // ダミーのレコード情報と更新内容
      const dummyRecordsToUpdate = [
        { id: 1, action: "処理開始", assignee: "user1" }, // 例: レコードID 1 のステータスを「処理開始」に、作業者を user1 に
        { id: 5, action: "完了" }, // 例: レコードID 5 のステータスを「完了」に (作業者は変更しない場合)
      ];

      console.log(
        "[Kintone Dev Tools] Dummy records to update status:",
        dummyRecordsToUpdate
      );
      console.log(
        "[Kintone Dev Tools] Target App ID for status update:",
        appId
      );

      // 実際のAPI呼び出しはここに実装します。
      // const params = {
      //   app: appId,
      //   records: dummyRecordsToUpdate.map(r => ({
      //     id: r.id,
      //     action: r.action,
      //     assignee: r.assignee, // assignee はオプション
      //   })),
      // };
      // const response = await (kintone as any).api(
      //   (kintone as any).api.url("/k/v1/records/status.json", true),
      //   "PUT",
      //   params
      // );
      // console.log("[Kintone Dev Tools] Status update response:", response);
      // alert("ステータス更新処理が完了しました（ダミー）。コンソールを確認してください。");

      console.warn(
        "[Kintone Dev Tools] Status update API call is not implemented yet."
      );
    } catch (error) {
      console.error(
        "[Kintone Dev Tools] Error in dummy status update process:",
        error
      );
      alert("ステータス更新処理中にエラーが発生しました（ダミー）。");
    }
  }

  // DOMの準備ができてから実行
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    updateStatuses();
  } else {
    document.addEventListener("DOMContentLoaded", updateStatuses);
  }
})();
