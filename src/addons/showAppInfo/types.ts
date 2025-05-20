// フォームフィールドのプロパティ (簡略版)
export interface FieldProperty {
  type: string; // フィールドタイプ (TEXT, NUMBER, etc.)
  code: string; // フィールドコード
  label: string; // フィールド名 (ラベル)
  // 以下、フィールドタイプによって様々なプロパティが存在するが、ここでは代表的なものや共通的なものをオプショナルで定義
  required?: boolean;
  defaultValue?: string | number | string[];
  options?: string | { [key: string]: { label: string; index: string } }; // ラジオボタン、ドロップダウンなど
  // ... その他、必要に応じて追加
}

export interface AppInfo {
  appId: string | null;
  appName: string | null;
  spaceId?: string;
  threadId?: string;
  creatorName?: string;
  createdAt?: string;
  modifierName?: string;
  modifiedAt?: string;
  fields?: { [fieldCode: string]: FieldProperty }; // フィールド情報
}
