import { ItemModel } from "../../Model/item.model";
import "./Item.css";
import { useAppDispatch } from "../../utils/hooks";
import {
  addQuntityItem,
  isPackedItem,
  removeIsPackedItem,
  removeQuntityItem,
} from "../../state/slices/items.slice";

interface ItemProps {
  item: ItemModel;
}

function Item({ item }: ItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="Item">
      <h4 className="item-title">{item.description}</h4>
      <div className="item-info">
        <span>Quantity:</span>
        <button
          onClick={() => {
            dispatch(removeQuntityItem(item));
          }}
        >
          -
        </button>
        <strong>{item.quantity}</strong>
        <button
          onClick={() => {
            dispatch(addQuntityItem(item));
          }}
        >
          +
        </button>
      </div>
      <div className="item-packed-info">
        <span>Packed:</span>
        <button
          className="packed-btn"
          onClick={() => {
            if (!item.isPacked && item.quantity >= 1) {
              dispatch(isPackedItem(item));
            } else {
              dispatch(removeIsPackedItem(item));
            }
          }}
        >
          {item.isPacked ? "✔" : "❌"}
        </button>
      </div>
    </div>
  );
}

export default Item;
