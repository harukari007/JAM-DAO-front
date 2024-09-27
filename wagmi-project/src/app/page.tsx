function App() {
  return (
    <div className="px-20 py-5">
      <h1 className="text-xl font-bold py-10">Top</h1>
      <article>
        <h3 className="text-lg">使い方</h3>
        <br />
        <ol className="list-decimal ml-5">
          <li>
            右上の MetaMask ボタンを押してウォレットをコネクトする（チェーンを
            Sepolia にしてください）
          </li>
          <li>初期設定を済ませる</li>
          <li>提案作成から議題を作成する</li>
          <li>提案から作成した提案議題が取得できるか確認する</li>
          <li>JAM‐DAO登録から自分のアカウントを登録する</li>
          <li>JAM‐DAO参加メンバーから登録した自分のアカウントが取得できるか確認する</li>
          <li>投票から提案に投票を行う</li>
        </ol>
      </article>
    </div>
  );
}

export default App;
