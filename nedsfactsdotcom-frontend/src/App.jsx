import { Show, createSignal, onMount } from "solid-js";

function App() {

  const [fact, setFact] = createSignal()

  onMount(async () => { setFact(await getFact())});

  async function getFact() {
    const res = await fetch('http://localhost:4000/fact/education');
    return res.json();
  }
  return (
    <Show 
    when ={fact() != null}
    fallback={<div>Loading...</div>}>
      <div>
        <div>{fact().summary}</div>
        <div>{fact().description}</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={async () => setFact(await getFact())}>{console.log(fact())}</button>
      </div>
    </Show>
  );
}

export default App;
