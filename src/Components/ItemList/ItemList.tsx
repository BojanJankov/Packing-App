import { useState } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { ItemModel } from "../../Model/item.model";
import {
  addNewItem,
  resetItems,
  sortItems,
} from "../../state/slices/items.slice";

function ItemList() {
  const items: ItemModel[] = useAppSelector((state) => state.items.value);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("title");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("essentials");
  const { gender } = useParams();

  const totalPackedItems = () => {
    return items.filter((item) => item.gender === gender && item.isPacked)
      .length;
  };
  const totalUnpackedItems = () => {
    return items.filter((item) => item.gender === gender && !item.isPacked)
      .length;
  };
  let sum = 0;
  const totalQuntity = (sum: number) => {
    items.map((item) => {
      if (item.gender === gender) {
        sum += item.quantity;
      }
    });
    return sum;
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="add-item-div">
        <input
          type="text"
          placeholder="Item title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="essentials">Essentials</option>
          <option value="toiletries">Toiletries</option>
        </select>
        <button
          className="add-item-btn"
          onClick={() => {
            if (!title) return;

            dispatch(addNewItem({ title, category, gender }));

            setTitle("");
          }}
        >
          Add item
        </button>
      </div>
      <div className="sort-item-div">
        <p>Sort by:</p>
        <select
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        >
          <option value="title">Title</option>
          <option value="quantity">Quantity</option>
          <option value="isPacked">IsPacked</option>
          <option value="isNotPacked">IsNotPacked</option>
        </select>
        <button
          onClick={() => {
            dispatch(sortItems(query));
          }}
        >
          Sort
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(resetItems());
          }}
        >
          Reset items
        </button>
      </div>
      <div className="items-container">
        <div className="toiletries-items">
          <h2>Toiletries:</h2>
          <div className="items">
            {items
              .filter((item) => item.gender === gender)
              .map(
                (item) =>
                  item.category === "toiletries" && (
                    <Item key={item.id} item={item} />
                  )
              )}
          </div>
        </div>
        <div className="essentials-items">
          <h2>Essentials:</h2>
          <div className="items">
            {items
              .filter((item) => item.gender === gender)
              .map(
                (item) =>
                  item.category === "essentials" && (
                    <Item key={item.id} item={item} />
                  )
              )}
          </div>
        </div>
      </div>
      {totalPackedItems() > 0 ? (
        <div className="next-destination-btn">
          <button
            onClick={() => {
              navigate("/destination");
            }}
          >
            Let's look for your destination!
          </button>
        </div>
      ) : null}
      <div className="results-container">
        <div className="total-results">
          <div className="results">
            <h2>Total items:</h2>
            <p>{items.filter((item) => item.gender === gender).length}</p>
          </div>
          <div className="results">
            <h2>Total quntity:</h2>
            <p>{totalQuntity(sum)}</p>
          </div>
          <div className="results">
            <h2>Total packed:</h2>
            <p>{totalPackedItems()}</p>
          </div>
          <div className="results">
            <h2>Total unpacked:</h2>
            <p>{totalUnpackedItems()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
