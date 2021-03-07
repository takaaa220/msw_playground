import "./App.css";

function App() {
  const login = async () => {
    await fetch("/login", { method: "POST" });
    alert("ログインしました");
  };

  const getUser = async () => {
    const res = await fetch("/user", {
      headers: { "content-type": "application/json" },
    });

    const user = await res.json();
    alert(JSON.stringify(user));
  };

  return (
    <div>
      <button onClick={login}>ログイン</button>
      <button onClick={getUser}>ユーザー取得</button>
    </div>
  );
}

export default App;
