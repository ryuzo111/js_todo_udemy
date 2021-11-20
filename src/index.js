import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    // 文字リストに追加する要素
    const text = completeTarget.firstElementChild.innerText;

    // Divタグを初期化
    completeTarget.textContent = null;

    document.getElementById("incomplete-list").removeChild(completeTarget);

    const div2 = document.createElement("div");
    div2.className = "list-row";

    const li2 = document.createElement("li");
    li2.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得する。
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    div2.appendChild(li2);
    div2.appendChild(backButton);
    document.getElementById("complete-list").appendChild(div2);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //  押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
