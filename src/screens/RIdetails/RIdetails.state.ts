import { useState ,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { selectedRecieptPhoto } from "../RIDATA/reducer/RIdata.reducer";
import { IState } from 'services/redux/reducer';
import { selectReceipt } from '../RIDATA/reducer/RIdata.reducer';
import { getImageUrlFromAws } from 'screens/RIDATA/RIdata.api';
import { IImageView } from 'screens/RIDATA/types/RIdata.type';
export const useRIDetailsState = () => {
//   console.log('useReceiptDetailsState  call here ');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState('');
//   const [isPDF, setIsPDF] = useState(false);
//   const [isImageLoading, setImageLoading] = useState(false);
  
  
  const {
    RIdata: {
      selectedReceiptIndex,
      selectedReciept,
      selectedRecieptType,
      recieptInvoiceData,
      selectedRecieptPhoto,
    }
    } = useSelector((state: IState) => state);
    
//   console.warn('receipt view -------', imageSrc);

  const onGoBackHandler = () => navigate(-1);

//   const onClickGetNextReceiptHandler = () => {
//     if (Number(selectedReceiptIndex) + 1 >= recieptInvoiceData.length) return;
//     dispatch(selectReceipt(Number(selectedReceiptIndex) + 1));
//     let ImageKey = {
//       keys: selectedRecieptPhoto
// }

//     onFetchReceiptImageHandler(ImageKey)
  //   };
  const onClickGetNextReceiptHandler = () => {
    if (Number(selectedReceiptIndex) + 1 >= recieptInvoiceData.length) return;
  
    const nextReceiptIndex = Number(selectedReceiptIndex) + 1;
    dispatch(selectReceipt(nextReceiptIndex));
  
    // //storing image next url 
    // const nextReceiptImageIndex =  selectedReciept?.photos;
    // console.log("selectedRecieptPhoto :-" , selectedReciept?.photos);

    // //for image api calling 
    // const ImageKey = {
    //   keys:nextReceiptImageIndex ? (Array.isArray(nextReceiptImageIndex) ? nextReceiptImageIndex : [nextReceiptImageIndex]) : []
    // };
    // onFetchReceiptImageHandler(ImageKey);
  };

  const onClickGetPrevReceiptHandler = () => {
    if (Number(selectedReceiptIndex) <= 1) return;

    dispatch(selectReceipt(Number(selectedReceiptIndex) - 1));
  };
  
  const onFetchReceiptImageHandler = useCallback(async (ImageKey:IImageView) => {
    try {
      const payload = ImageKey;
      const { data } = await getImageUrlFromAws(payload);
      console.log('Fetched data:', data);

      // Assuming the API response has the data array
        // dispatch(selectedRecieptPhoto(data.url));
        setImageUrl(data.url) 
    
    } catch (error) {
      console.error('Failed to fetch receipts:', error);
    }
  }, [dispatch]);

//   const onGetReceiptImageHandler = async () => {
//     try {
//       setImageLoading(true);
//       selectedReceipt?.photos[0].match(/.pdf/g) ? setIsPDF(true) : setIsPDF(false);
//         // console.warn('----', selectedReceipt);
//       const { data } = await getReceiptImage(
//         selectedReceipt?.photos[0] || '',
//         token,
//         active_account || ''
//       );
//       // console.warn('receipt view -------', data);
//       setImageSrc(URL.createObjectURL(data) || '');
//       setImageLoading(false);
//     } catch (error) {
//       console.log(error);
//       setImageLoading(false);
//     } finally {
//       setImageLoading(false);
//     }
//   };

  return {
      selectedReceiptIndex,
    selectedReciept,
    selectedRecieptType,
    recieptInvoiceData,
    selectedRecieptPhoto,
    imageUrl,
    // imageSrc,
    // receipts,
    // selectedReceiptIndex,
    // isImageLoading,
    // isPDF,
    // onGetReceiptImageHandler,
    onGoBackHandler,
    onClickGetNextReceiptHandler,
    onClickGetPrevReceiptHandler,
    onFetchReceiptImageHandler
  };
};
