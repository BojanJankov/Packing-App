import "./ItemPage.css";
import ItemList from "../../Components/ItemList/ItemList";

function ItemPage() {
  return (
    <section className="ItemPage">
      <div className="item-lists-container">
        <ItemList />
      </div>
    </section>
  );
}

export default ItemPage;
