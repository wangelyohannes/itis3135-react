import useTitle from "./useTitle";
import "./styles/cards.css";
export default function Cards() {
  useTitle("Cards");
  return (
    <>
      <h2>Playing Cards</h2>

      <div id="playing-cards">
        <div class="card">
          <div class="left">
            <span>A</span>
            <span>♠</span>
          </div>
          <div class="middle">
            <span>♠</span>
            <span>♠</span>
          </div>
          <div class="right">
            <span>♠</span>
            <span>A</span>
          </div>
        </div>

        <div class="card red">
          <div class="left">
            <span>2</span>
            <span>♦</span>
          </div>
          <div class="middle">
            <span>♦</span>
            <span>♦</span>
          </div>
          <div class="right">
            <span>♦</span>
            <span>2</span>
          </div>
        </div>

        <div class="card">
          <div class="left">
            <span>4</span>
            <span>♣</span>
          </div>
          <div class="middle">
            <span>♣♣</span>
            <span>♣♣</span>
          </div>
          <div class="right">
            <span>♣</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </>
  );
}
