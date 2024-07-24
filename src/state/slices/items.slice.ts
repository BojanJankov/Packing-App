import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemModel } from "../../Model/item.model";
import itemsJSON from "../../data/items.json";
import { v4 as uuid } from "uuid";

interface ItemsState {
  value: ItemModel[];
}

const initialState: ItemsState = {
  value: itemsJSON.map((item) => {
    return { ...item, quantity: 0, isPacked: false };
  }),
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addQuntityItem(state, { payload: selectedItem }: PayloadAction<ItemModel>) {
      for (const item of state.value) {
        if (item.id === selectedItem.id) {
          item.quantity++;
          break;
        }
      }
    },
    removeQuntityItem(
      state,
      { payload: selectedItem }: PayloadAction<ItemModel>
    ) {
      for (const item of state.value) {
        if (item.id === selectedItem.id) {
          if (item.quantity > 0) item.quantity--;
          break;
        }
      }
    },
    isPackedItem(state, { payload: selectedItem }: PayloadAction<ItemModel>) {
      for (const item of state.value) {
        if (item.id === selectedItem.id) {
          item.isPacked = true;
          break;
        }
      }
    },
    removeIsPackedItem(
      state,
      { payload: selectedItem }: PayloadAction<ItemModel>
    ) {
      for (const item of state.value) {
        if (item.id === selectedItem.id) {
          item.isPacked = false;
          break;
        }
      }
    },
    resetItems(state) {
      for (const item of state.value) {
        item.quantity = 0;
        item.isPacked = false;
      }
    },
    sortItems(state, { payload: query }: PayloadAction<string>) {
      let copyStateValue = [...state.value];
      if (query === "title") {
        copyStateValue.sort((a, b) =>
          b.description.toLowerCase() > a.description.toLowerCase() ? 1 : -1
        );
      }
      if (query === "quantity") {
        copyStateValue.sort((a, b) =>
          Number(b.quantity) > Number(a.quantity) ? 1 : -1
        );
      }
      if (query === "isPacked") {
        copyStateValue.sort((a, b) => (b.isPacked > a.isPacked ? 1 : -1));
      }
      if (query === "isNotPacked") {
        copyStateValue.sort((a, b) => (!b.isPacked > !a.isPacked ? 1 : -1));
      }
      state.value = copyStateValue;
    },
    addNewItem(state, { payload: { title, category, gender } }) {
      const foundItem = state.value.find((item) => item.description === title);

      if (foundItem) return;

      const newItem: ItemModel = {
        id: uuid(),
        description: title,
        isPacked: false,
        quantity: 0,
        category: category,
        gender: gender,
      };
      state.value = [...state.value, newItem];
    },
  },
});

export const {
  addQuntityItem,
  removeIsPackedItem,
  removeQuntityItem,
  resetItems,
  isPackedItem,
  addNewItem,
  sortItems,
} = itemsSlice.actions;

export default itemsSlice;
