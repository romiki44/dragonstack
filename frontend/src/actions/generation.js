import {GENERATION} from './types';
import {BACKEND} from '../config';

export const fetchGeneration=()=> dispach=>{
  dispach({type: GENERATION.FETCH});

  return fetch(`${BACKEND.ADDRESS}/generation`)
    .then(response=>response.json())
    .then(json=>{
      if(json.type==='error') {
        dispach({
          type: GENERATION.FETCH_ERROR,
          message: json.message
        });
      } else {
        dispach({
          type: GENERATION.FETCH_SUCCESS,
          generation: json.generation
        });
      }
    })
    .catch(error=>dispach({
      type: GENERATION.FETCH_ERROR,
      message: error.message
    }));
};