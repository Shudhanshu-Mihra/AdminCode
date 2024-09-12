// import { ROUTES } from 'constants/routes';
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { ActionMeta, SingleValue } from 'react-select';
// import { useNavigate } from 'react-router-dom';
// import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
// import { format } from 'date-fns';

// import { IState } from 'services/redux/reducer';
// // import {
// //   getFormatedCurrencies,
// //   getReceiptDetailsCurrentSelectItem,
// // } from 'services/utils';

// // // import {
// // //   getAllMasterItems,
// // //   updateReceiptItem,
// // // } from 'screens/ReceiptDetails/receiptDetails.api';
// // // import {
// // //   setIsFetchingDate,
// // //   updateReceipt,
// // // } from 'screens/Inbox/reducer/inbox.reducer';
// // // import { setItemsForSelect } from 'screens/ReceiptDetails/reducer/receiptDetails.reducer';

// // import {
// //   getInputFields,
// //   photoDetailsContentInitialState,
// // } from './photoDetailsContent.constants';

// // import { ROUTES } from 'constants/routes';
// import { DATE_FORMATS } from 'constants/strings';
// import { date } from 'yup';


// export const usePhotoDetailsContentState = () => {

//   const navigate = useNavigate();

//   const {

//     RIdata: { selectedReciept }
//   } = useSelector((state: IState) => state);


// useEffect(() => {
//   if (selectedReciept) {
//     setState((prevState) => ({
//       ...prevState,
//       dateValue: selectedReciept?.created || null,
//     }));
//   }
// }, [selectedReciept?.id]);

//   const [state, setState] = useState({
//     currencyValue: selectedReciept?.type_currency || '',
//     dateValue: selectedReciept?.created || null,
//     formattedDate: selectedReciept?.created
//     ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
//     : '',  // Provide    RIdata: []
//   });//
//   const [ButtonValue, setButtonValue] = useState('');

//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const onCancelButtonClickHandler = () => navigate(-1);


//   const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setButtonValue(event.currentTarget.value);
//   };


  
// useEffect(() => {
//   if (selectedReciept) {
//     setState(prevState => ({
//       ...prevState,
//       dateValue: selectedReciept.created || null,
//       formattedDate: selectedReciept.created
//         ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
//         : ''
//     }));
//   }
// }, [selectedReciept?.id]);
  
  
// const onChangeDate = (date: Date) => {
//   setIsOpen(!isOpen);
//   setState(prevState => ({
//     ...prevState,
//     dateValue: date,
//     formattedDate: format(date, DATE_FORMATS[0].value)
//   }));
//   };
  
// // const onCancelButtonClickHandler = () => navigate(-1);

// // const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
// //   setButtonValue(event.currentTarget.value);
// // };

// const saveReceiptHandler = async () => {
//   try {
//     const payload = {
//       id: selectedReciept?.id || '',
//       currency: selectedReciept?.type_currency || '',
//       vat_code: selectedReciept?.vat_code || ''
//     };

//     setIsLoading(true);
//     const { data } = await updateReceiptItem(payload);
//     setIsLoading(false);
//     navigate(ROUTES.pendingriData);
//   } catch (error) {
//     console.log(error);
//     setIsLoading(false);
//   }
// };

// return {
//   ...state,  // Make sure to return formattedDate
//   isLoading,
//   isOpen,
//   onChangeDate,
//   onCancelButtonClickHandler,
//   onChangeRadioButtonHandler,
//   saveReceiptHandler
// };
// };



// import { ROUTES } from 'constants/routes';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
// import { format } from 'date-fns';
// import { IState } from 'services/redux/reducer';
// import { DATE_FORMATS } from 'constants/strings';

// export const usePhotoDetailsContentState = () => {
//   const navigate = useNavigate();
//   const { RIdata: { selectedReciept } } = useSelector((state: IState) => state);

//   const [state, setState] = useState({
//     currencyValue: selectedReciept?.type_currency || '',
//     dateValue: selectedReciept?.created || null,
//     formattedDate: selectedReciept?.created
//       ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
//       : ''
//   });

//   const [buttonValue, setButtonValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (selectedReciept) {
//       setState({
//         currencyValue: selectedReciept.type_currency || '',
//         dateValue: selectedReciept.created || null,
//         formattedDate: selectedReciept.created
//           ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
//           : ''
//       });
//     }
//   }, [selectedReciept?.id]);

//   const onCancelButtonClickHandler = () => navigate(-1);

//   const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setButtonValue(event.currentTarget.value);
//   };

//   const onChangeDate = (date: Date) => {
//     setIsOpen(!isOpen);
//     setState(prevState => ({
//       ...prevState,
//       dateValue: date,
//       formattedDate: format(date, DATE_FORMATS[0].value)
//     }));
//   };

//   const saveReceiptHandler = async () => {
//     try {
//       const payload = {
//         id: selectedReciept?.id || '',
//         currency: state.currencyValue,
//         vat_code: selectedReciept?.vat_code || ''
//       };

//       setIsLoading(true);
//       await updateReceiptItem(payload);
//       navigate(ROUTES.pendingriData);
//     } catch (error) {
//       console.error('Error updating receipt:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     ...state,
//     isLoading,
//     isOpen,
//     onChangeDate,
//     onCancelButtonClickHandler,
//     onChangeRadioButtonHandler,
//     saveReceiptHandler
//   };
// };


import { ROUTES } from 'constants/routes';
import React, { useEffect, useState ,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateReceiptItem } from 'screens/RecieptInvoiceDataList/RecieptInvoiceDataList.api';
import { format } from 'date-fns';
import { IState } from 'services/redux/reducer';
import { DATE_FORMATS } from 'constants/strings';
import { date } from 'yup';

export const usePhotoDetailsContentState = () => {
  const navigate = useNavigate();
  const { RIdata: { selectedReciept } } = useSelector((state: IState) => state);

  // Update state type to reflect Date values
  const [state, setState] = useState({
    currencyValue: selectedReciept?.type_currency || '',
    dateValue: selectedReciept?.created ? new Date(selectedReciept.created) : null,
    formattedDate: selectedReciept?.created 
      ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
      : '',
    status:selectedReciept?.status || ''
  });

  const [buttonValue, setButtonValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedReciept) {
      setState({
        currencyValue: selectedReciept.type_currency || '',
        dateValue: selectedReciept.created ? new Date(selectedReciept.created) : null,
        formattedDate: selectedReciept.created 
          ? format(new Date(selectedReciept.created), DATE_FORMATS[0].value)
          : '',
          status:selectedReciept?.status
        
      });
    }
  }, [selectedReciept?.id]);

  const onCancelButtonClickHandler = () => navigate(-1);

  
  const onDatePickerClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    datePickerRef.current &&
      datePickerRef?.current.contains(e.target as Node) &&
      setIsOpen(!isOpen);
    console.log("datePickerRef.current :- ",datePickerRef.current);
  };

  const onChangeRadioButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setButtonValue(event.currentTarget.value);
    console.log("buttonValue :--- ", buttonValue);
  };

  const onChangeDate = (date: Date) => {
    // setIsOpen(!isOpen);
    setState(prevState => ({
      ...prevState,
      dateValue: date,
      formattedDate: format(date, DATE_FORMATS[0].value)
    }));
    console.log("Selected Date:", date); // Raw date object
  console.log("Formatted Date:", format(date, DATE_FORMATS[0].value)); // Formatted date
  };

  const onForbiddenCharacterClick = (event: React.KeyboardEvent) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+') {
      event.preventDefault();
    }
  };

  const saveReceiptHandler = async () => {
    try {
      const payload = {
        id: selectedReciept?.id || '',
        // currency: state.currencyValue,
        // vat_code: selectedReciept?.vat_code || '',
        // receipt_date:  state.dateValue || selectedReciept?.created ,
        type:selectedReciept?.type ||''
        // status:  state.dateValue || selectedReciept?.created ,
      };

      setIsLoading(true);
      await updateReceiptItem(payload);
      navigate(ROUTES.pendingriData);
    } catch (error) {
      console.error('Error updating receipt:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickOutsideDatePickerHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    datePickerRef.current &&
      !datePickerRef?.current.contains(event.target as Node) &&
      setIsOpen(false);
  };
  const datePickerRef = useRef<HTMLButtonElement>(null);

  console.log("sstate-----",state);
  return {
    ...state,
    isLoading,
    isOpen,
    onChangeDate,
    onCancelButtonClickHandler,
    onChangeRadioButtonHandler,
    saveReceiptHandler,
    onDatePickerClickHandler,
    datePickerRef,
    onClickOutsideDatePickerHandler,
    onForbiddenCharacterClick
  };
};
