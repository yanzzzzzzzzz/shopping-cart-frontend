import { CartItem } from '@/Model/type';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    selectedItems: [] as CartItem[],
  }),
  actions: {
    setItems(items: CartItem[]) {
      this.selectedItems = items;
    },
    clearItems() {
      this.selectedItems = [];
    },
  },
});
