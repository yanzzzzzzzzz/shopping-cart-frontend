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
    initItems() {
      this.selectedItems = [
        {
          id: 2,
          productId: 2,
          productVariantId: 3,
          amount: 2,
          userId: 8,
          imageUrl:
            'https://down-tw.img.susercontent.com/file/tw-11134207-7r98x-ltmx8rmlz5i3dd',
          name: '全新 紅米 Redmi 13C 4G/128GB 6.7吋雙卡 八核心 內建Google 手機',
          price: 2950,
          variantName: '128G送手機殼',
        },
        {
          id: 3,
          productId: 1,
          productVariantId: 1,
          amount: 12,
          userId: 8,
          imageUrl:
            'https://www.jyes.com.tw/data/goods/gallery/202010/1602666830323793536.jpg',
          name: 'iPhone 12 Pro Max',
          price: 23900,
          variantName: '256G',
        },
        {
          id: 4,
          productId: 2,
          productVariantId: 4,
          amount: 1,
          userId: 8,
          imageUrl:
            'https://down-tw.img.susercontent.com/file/tw-11134207-7r98x-ltmx8rmlz5i3dd',
          name: '全新 紅米 Redmi 13C 4G/128GB 6.7吋雙卡 八核心 內建Google 手機',
          price: 3250,
          variantName: '256G送手機殼',
        },
      ];
    },
  },
});
