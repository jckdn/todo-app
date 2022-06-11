import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import itemApi from "../../api-client/item-api";

export type ItemsState = Item[];

export interface Item {
  id?: number;
  title: string;
  complete: boolean;
}

const initialState: ItemsState = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    /**
     * An example action-type to case-reducer mapping that could go here, which generates
     * an action that we can export.
     *
     * ```
     * addItem: (items, action: PayloadAction<Item>) => {
     *   items.push(action.payload);
     * },
     * ```
     */
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchItems.fulfilled,
        (items, action: PayloadAction<ItemsState>) => {
          return action.payload;
        }
      )
      .addCase(addItem.fulfilled, (items, action: PayloadAction<Item>) => {
        items.push(action.payload);
      })
      .addCase(updateItem.fulfilled, (items, action: PayloadAction<Item>) => {
        const updatedItem = action.payload;

        return items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      })
      .addCase(deleteItem.fulfilled, (items, action: PayloadAction<number>) => {
        return items.filter((item) => item.id !== action.payload);
      });
  },
});

/**
 * Export any generated actions like this (if we had any, currently we only have thunk
 * actions).
 *
 * ```
 * export const { addItem } = itemsSlice.actions;
 * ```
 */

export default itemsSlice.reducer;

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  return await itemApi.getItems();
});

export const addItem = createAsyncThunk("items/addItem", async (item: Item) => {
  return await itemApi.addItem(item);
});

export const updateItem = createAsyncThunk(
  "items/updateItem",
  async (item: Item) => {
    return await itemApi.addItem(item);
  }
);

export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async (id: number) => {
    await itemApi.deleteItem(id);

    return id;
  }
);
