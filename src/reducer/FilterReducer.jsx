

const FilterReducer = (state, action) => {
    switch (action.type) { 
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                all_products: [...action.payload],
                filter_products: [...action.payload]
            }
        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true
            }
        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false
            }
        
        default:
            return state;
    }
}

export default FilterReducer;