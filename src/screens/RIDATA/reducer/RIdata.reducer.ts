import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRIDATA_INITIAL_STATE } from '../types/RIdata.type';

// Initial state with an empty array for recieptInvoiceData
export const RIDATA_INITIAL_STATE: IRIDATA_INITIAL_STATE = {
  recieptInvoiceData: [
    {
      id: "",
      custom_id: "",
      description: null,
      status: "",
      photos: "",
      created: "",
      updated: "",
      active_status: true,
      approved_status: true,
      payment_status: true,
      publish_status: true,
      vat_code: "",
      net: "",
      tax: "",
      total: "",
      type_date: null,
      type_user: null,
      type: "",
      type_currency:''
    },
  ],
  selectedReciept: null,
  selectedReceiptIndex:null,
  selectedRecieptType:"",
  selectedRecieptPhoto:[]

};

const initialState = RIDATA_INITIAL_STATE;

export const RIdataSlice = createSlice({
    name: 'RIdataSlice',
    initialState,
    reducers: {
      setRecieptInvoiceData: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<IRIDATA_INITIAL_STATE['recieptInvoiceData']>
      ) => {
        state.recieptInvoiceData = action.payload;
      },
      selectReceipt: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<number>
      ) => {
        state.selectedReceiptIndex = action.payload;
        state.selectedReciept = state.recieptInvoiceData.find((item, index) => index === action.payload) || null
      },
      selectRecieptType: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<string>
      ) => {
        if (state.selectedReciept) {
          // Update the type of the selected receipt
          state.selectedReciept.type = action.payload;
          state.selectedRecieptType = action.payload;
        }
      },
      selectRecieptPhoto: (
        state: IRIDATA_INITIAL_STATE,
        action: PayloadAction<string[]>
      ) => {
        if (state.selectedReciept) {
          // Update the type of the selected receipt
          // state.selectedReciept.photos = action.payload;
          // state.selectedRecieptPhoto = action.payload;
          state.selectedRecieptPhoto = action.payload;
        }
      },
    },
  });
  
  export const { setRecieptInvoiceData ,selectReceipt ,selectRecieptType ,selectRecieptPhoto } = RIdataSlice.actions;
  
  export const RIdataReducer = RIdataSlice.reducer;