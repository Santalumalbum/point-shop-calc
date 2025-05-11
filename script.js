let savedItems = [];

function calculatePoints() {
  const price = parseFloat(document.getElementById("price").value);
  if (!price) return alert("価格を入力してください");
  const points = Math.ceil(price / 1.5);
  document.getElementById("result").textContent = `${points} ポイントで購入可能`;
}

function saveData() {
  const price = parseFloat(document.getElementById("price").value);
  if (!price) return alert("価格を入力してください");
  const points = Math.ceil(price / 1.5);
  savedItems.push({ price, points });
  updateList();
  document.getElementById("price").value = "";
  document.getElementById("result").textContent = "";
}

function updateList() {
  const list = document.getElementById("savedList");
  list.innerHTML = "";
  savedItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.points}ポイント → ${item.price}円`;
    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.onclick = () => {
      savedItems.splice(index, 1);
      updateList();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function deleteAll() {
  if (confirm("すべての履歴を削除しますか？")) {
    savedItems = [];
    updateList();
    document.getElementById("totalResult").textContent = "";
  }
}

function showTotal() {
  const totalPoints = savedItems.reduce((sum, item) => sum + item.points, 0);
  const totalYen = savedItems.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalResult").textContent =
    `合計：${totalPoints}ポイントで${totalYen}円分の買い物ができます。`;
}
