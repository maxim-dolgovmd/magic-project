
type StatusType = 'Закрытые' | 'Отмененные' | 'Переданные курьеру' | 'в работе' | 'готовые';

export const statusCategories: Record<string, StatusType > = {
    'closed': 'Закрытые',
    'canceled': 'Отмененные',
    'handed over to courier': 'Переданные курьеру',
    'in preparation': 'в работе',
   'ready': 'готовые',
}