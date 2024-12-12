export interface Sale {
  id?: number;
  product_id: number;
  quantity: number;
  selling_price: number;
  unit_cost: number;
  margin?: number;
  sale_date: string;
  customer_id?: number | null;
  payment_method: 'Espèces' | 'Carte' | 'Virement' | 'Chèque';
  status: 'En attente' | 'Confirmé' | 'Annulé';
  notes?: string | null;
}