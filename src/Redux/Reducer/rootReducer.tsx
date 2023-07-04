import { combineReducers } from 'redux'
import activePageReducer from './activePageReducer'
import favouritesReducer from './favouritesReducer'
import postAdDetailsReducer from './PostAdDetailsReducer'
import searchInputString from './searchInputReducer'
import serverPhotosReducer from './serverPhotosArrayRedux'
import previewPhotosReducer from './previewPhotosReducer'

const rootReducer = combineReducers({activePageCount:activePageReducer,FavList:favouritesReducer,postAdDetails:postAdDetailsReducer, searchInputRedux:searchInputString, serverPhotos:serverPhotosReducer, previewPhotos:previewPhotosReducer})

export default rootReducer