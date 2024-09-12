// import { FC } from 'react';

// import { CheckboxItem } from '../../Checkbox';
// import { CustomDatePicker } from '../../CustomDatePicker';
// import { CustomSelect } from '../../CustomSelect';
// import { Input } from '../../Input';
// import { TInputFields } from '../photoDetailsContent.constants';
// import { PhotoDetailsContentItem } from '../PhotoDetailsContentItem';

// import { FiedlsBoxStyles as Styled } from './FiledsBox.style';
// import { IRecieptInvoiceData } from 'screens/RIDATA/types/RIdata.type';

// interface IFieldsBox {
//   inputFields: IRecieptInvoiceData;
//   onDatePickerClickHandler?: (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => void;
//   onClickOutsideDatePickerHandler?: (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => void;
//   isOpen?: boolean;
//   formattedDate?: string;
//   datePickerRef?: React.RefObject<HTMLButtonElement>;
//   selectedDate?: Date | null;
//   onForbiddenCharacterClick?: (event: React.KeyboardEvent<Element>) => void;
// }

// export const FieldsBox: FC<IFieldsBox> = (props) => {
//   const {
//     inputFields,
//     // datePickerRef,
//     // formattedDate,
//     // isOpen,
//     // selectedDate,
//     onForbiddenCharacterClick,
//     // onClickOutsideDatePickerHandler,
//     // onDatePickerClickHandler,
//   } = props;

//   const expression = "\b(?:Net|Tax|Total)\b";

//   const isInputField = (item: any): item is { inputType: string; value: string; isTextArea?: boolean } => {
//     return item.type === 'input' || item.type === 'number';
//   };

//   const isCheckboxField = (item: any): item is { value: boolean; onChangeCheckbox: (e: any) => void; labelText: string } => {
//     return item.type === 'checkbox';
//   };

//   console.log();
//   return (
//     <>
//       {inputFields.map((item) => (
//         item.label != "Net" && item.label != "Tax" && item.label != "Total" &&
//         <PhotoDetailsContentItem key={item.label} label={item.label}>
//           {item.type === 'date' ? (
//             // <CustomDatePicker
//             //   isInputDate
//             //   onChange={item.onChangeDate}
//             //   onDatePickerClickHandler={onDatePickerClickHandler}
//             //   onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
//             //   isDatePickerOpen={isOpen}
//             //   selectedDate={selectedDate}
//             //   formattedDate={formattedDate}
//             //   datePickerRef={datePickerRef}
//               // />
//           <> <h1>dete selector  </h1>  </>
//           ) : item.type === 'select' ? (
//             <CustomSelect
//               value={item.value}
//               options={item.options}
//               onChangeValueHandler={item.onChangeSelect}
//               marginBottom="0px"
//               isDisabled={item.isDisabled}
//               isRemoveBorder
//             />
//           ) : isInputField(item) ? (
//             <Input
//               value={item.value}
//               inputType={item.inputType}
//               onChangeValue={item.onChange}
//               isTextArea={item.isTextArea}
//               isHiddenLabel
//               isNoMargin
//               isRemoveBorder
//               onKeyDown={onForbiddenCharacterClick}
//             />
//           ) : isCheckboxField(item) ? (
//             // <Styled.CheckBoxWrapper>
//             //   <CheckboxItem
//             //     name={item.label}
//             //     isChecked={item.value}
//             //     labelText={item.labelText}
//             //     onChange={item.onChangeCheckbox}
//             //   />
//                     // </Styled.CheckBoxWrapper>
//           <><h1>isCheckboxField</h1></>
//           ) : null}
//         </PhotoDetailsContentItem>
//       ))}
//     </>
//   );
// };


// /* import { FC } from 'react';

// import { CheckboxItem } from '../../../Checkbox';
// import { CustomDatePicker } from '../../../CustomDatePicker';
// import { CustomSelect } from '../../../CustomSelect';
// import { Input } from '../../../Input';
// import { TInputFields } from '../photoDetailsContent.constants';
// import { PhotoDetailsContentItem } from '../PhotoDetailsContentItem';

// import { FiedlsBoxStyles as Styled } from './FiledsBox.style';

// interface IFieldsBox {
//   inputFields: TInputFields;
//   onDatePickerClickHandler: (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => void;
//   onClickOutsideDatePickerHandler: (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => void;
//   isOpen: boolean;
//   formattedDate: string;
//   datePickerRef: React.RefObject<HTMLButtonElement>;
//   selectedDate: Date | null;
//   onForbiddenCharacterClick: (event: React.KeyboardEvent<Element>) => void;
// }

// export const FieldsBox: FC<IFieldsBox> = (props) => {
//   const {
//     inputFields,
//     datePickerRef,
//     formattedDate,
//     isOpen,
//     selectedDate,
//     onForbiddenCharacterClick,
//     onClickOutsideDatePickerHandler,
//     onDatePickerClickHandler,
//   } = props;

//   const isInputField = (item: any): item is { inputType: string; value: string; isTextArea?: boolean } => {
//     return item.type === 'input' || item.type === 'number';
//   };

//   const isCheckboxField = (item: any): item is { value: boolean; onChangeCheckbox: (e: any) => void; labelText: string } => {
//     return item.type === 'checkbox';
//   };

//   return (
//     <>
//       {inputFields.map((item) => (
//         <PhotoDetailsContentItem key={item.label} label={item.label}>
//           {item.type === 'date' ? (
//             <CustomDatePicker
//               isInputDate
//               onChange={item.onChangeDate}
//               onDatePickerClickHandler={onDatePickerClickHandler}
//               onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
//               isDatePickerOpen={isOpen}
//               selectedDate={selectedDate}
//               formattedDate={formattedDate}
//               datePickerRef={datePickerRef}
//             />
//           ) : item.type === 'select' ? (
//             <CustomSelect
//               value={item.value}
//               options={item.options}
//               onChangeValueHandler={item.onChangeSelect}
//               marginBottom="0px"
//               isDisabled={item.isDisabled}
//               isRemoveBorder
//             />
//           ) : item.inputType === 'number' ? (
//             <Input
//               value={item.value as string}
//               inputType={item.inputType}
//               onChangeValue={item.onChange}
//               isTextArea={item.isTextArea}
//               isHiddenLabel
//               isNoMargin
//               isRemoveBorder
//               onKeyDown={onForbiddenCharacterClick}
//             />
//           ) : item.type === 'input' ? (
//             <Input
//               value={item.value as string}
//               inputType={item.inputType}
//               onChangeValue={item.onChange}
//               isTextArea={item.isTextArea}
//               isHiddenLabel
//               isRemoveBorder
//               isNoMargin
//             />
//           ) : (
//             <Styled.CheckBoxWrapper>
//               <CheckboxItem
//                 name={item.label}
//                 isChecked={item.value as boolean}
//                 labelText={item.labelText}
//                 onChange={item.onChangeCheckbox}
//               />
//             </Styled.CheckBoxWrapper>
//           )}
//         </PhotoDetailsContentItem>
//       ))}
//     </>
//   );
// };
//  */


// import { FC } from 'react';
// import { Input } from '../../Input'; // Assuming Input is used to display field values
// import { FiedlsBoxStyles as Styled } from './FiledsBox.style'; // Assuming this is for styling
// import { IRecieptInvoiceData } from 'screens/RIDATA/types/RIdata.type';

// interface IFieldsBox {
//   inputFields: IRecieptInvoiceData | null;
//   onForbiddenCharacterClick?: (event: React.KeyboardEvent<Element>) => void;
// }

// export const FieldsBox: FC<IFieldsBox> = (props) => {
//   const {
//     inputFields,
//     onForbiddenCharacterClick,
//   } = props;

//   return (
//     <>
//       <Styled.Container>
//         {inputFields ? (
//           Object.entries(inputFields).map(([key, value], index) => (
//             <Styled.FieldItem key={index}>
//               <label>{key}</label>
//               <Input
//                 value={typeof value === 'string' ? value : String(value)} // Ensure all values are strings for input
//                 onKeyDown={onForbiddenCharacterClick} // Assuming you want to prevent certain key inputs
//                 inputName={key} // Assuming the field name corresponds to the key
//               />
//             </Styled.FieldItem>
//           ))
//         ) : (
//           <p>No input fields available</p> // Show message if inputFields is null
//         )}
//       </Styled.Container>
//     </>
//   );
// };


// ---------------------------------------------------------------------------------------------------------


// import { FC } from 'react';
// import { Input } from '../../Input'; // Assuming Input is used to display field values
// import { FiedlsBoxStyles as Styled } from './FiledsBox.style'; // Assuming this is for styling
// import { IRecieptInvoiceData } from 'screens/RIDATA/types/RIdata.type';

// interface IFieldsBox {
//   inputFields: IRecieptInvoiceData | null;
//   onForbiddenCharacterClick?: (event: React.KeyboardEvent<Element>) => void;
//   formattedDate?: string;
// }

// // Define the custom labels for each field
// const FIELD_LABELS: { [key: string]: string } = {
//   type_user: 'Supplier',
//   type_date: 'Date',
//   type_currency: 'Currency',
//   net: 'Net Amount',
//   vat_code: 'VAT Code',
//   tax: 'Tax Amount',
//   total: 'Total Amount',
// };

// // const FIELDS_TO_DISPLAY = ['type_user', 'type_date', 'type_currency', 'net', 'vat_code', 'tax', 'total'];
// const FIELDS_TO_DISPLAY = ['type_user', 'type_date', 'type_currency'];

// export const FieldsBox: FC<IFieldsBox> = (props) => {
//   const {
//     inputFields,
//     onForbiddenCharacterClick,
//     formattedDate
//   } = props;

//   return (
//     // <Styled.Container>
//     <>
      
//         {inputFields ? (
//           Object.entries(inputFields)
//             .filter(([key]) => FIELDS_TO_DISPLAY.includes(key)) // Filter the fields to only include the specified ones
//             .map(([key, value], index) => (
//               // <Styled.FieldItem key={index}>
//               {kay === 'type_date' ? (
//                             <CustomDatePicker
//                               isInputDate
//                               onChange={item.onChangeDate}
//                               onDatePickerClickHandler={onDatePickerClickHandler}
//                               onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
//                               isDatePickerOpen={isOpen}
//                               selectedDate={selectedDate}
//                               formattedDate={formattedDate}
//                               datePickerRef={datePickerRef}
//                             />
                         
//                           ) : (
//                             <Input
//                             text={FIELD_LABELS[key] || key}
//                             value={typeof value === 'string' ? value : String(value)}
//                             onKeyDown={onForbiddenCharacterClick}
//                             inputName={key}
//                             formattedDate={formattedDate}
//                             isInputDate={isInputDate}
//                               />
//                           )}
//                 //
                  
//               // </Styled.FieldItem>
//             ))
//         ) : (
//           <h1>empty data</h1>
//         )}
//     </>
// // </Styled.Container>
        
    
//   );
// };

//-------------------------------------------------------------------------------------------------------


import { FC } from 'react';
import { Input } from '../../Input'; // Assuming Input is used to display field values
import { FiedlsBoxStyles as Styled } from './FiledsBox.style'; // Assuming this is for styling
import { IRecieptInvoiceData } from 'screens/RIDATA/types/RIdata.type';
import { CustomDatePicker } from 'components/CustomDatePicker';
import { PhotoDetailsContent } from '../PhotoDetailsContent';
import { PhotoDetailsContentItem } from '../PhotoDetailsContentItem';

// Define the custom labels for each field
const FIELD_LABELS: { [key: string]: string } = {
  type_user: 'Supplier',
  type_date: 'Date',
  type_currency: 'Currency',
  net: 'Net Amount',
  vat_code: 'VAT Code',
  tax: 'Tax Amount',
  total: 'Total Amount',
};

// Define the fields to display
const FIELDS_TO_DISPLAY = ['type_user', 'type_date', 'type_currency'];

interface IFieldsBox {
  inputFields: IRecieptInvoiceData | null;
  onForbiddenCharacterClick?: (event: React.KeyboardEvent<Element>) => void;
  onFieldChange?: (fieldName: string, value: string) => void; // Added handler for field changes
  formattedDate?: string;
  onDatePickerClickHandler?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  isOpen?: boolean;
  datePickerRef?: React.RefObject<HTMLButtonElement> | undefined;
  onClickOutsideDatePickerHandler?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
  selectedDate?: Date | null | undefined
}

export const FieldsBox: FC<IFieldsBox> = ({
  inputFields,
  onForbiddenCharacterClick,
  formattedDate,
  onFieldChange,
  onDatePickerClickHandler,
  isOpen,
  datePickerRef,
  onClickOutsideDatePickerHandler,
  selectedDate
}) => {

  const handleFieldChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFieldChange) {
      onFieldChange(fieldName, e.target.value);
    }
  };

  return (
    <Styled.Container>
      {inputFields ? (
        Object.entries(inputFields)
          .filter(([key]) => FIELDS_TO_DISPLAY.includes(key)) // Filter the fields to only include the specified ones
          .map(([key, value], index) => (
            // <Styled.FieldItem key={index}>
            <PhotoDetailsContentItem  label={FIELD_LABELS[key] }>

              {key === 'type_date' ? (
                <CustomDatePicker
                  isInputDate
                  // onChange={item.onChangeDate} // Ensure item.onChangeDate is properly defined
                  onDatePickerClickHandler={onDatePickerClickHandler} // Ensure this handler is defined
                  onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler} // Ensure this handler is defined
                  isDatePickerOpen={isOpen} // Ensure isOpen is properly defined
                  selectedDate={selectedDate} // Ensure selectedDate is defined
                  formattedDate={formattedDate}
                  datePickerRef={datePickerRef} // Ensure datePickerRef is properly defined
                />
              ) : (
                <Input
                  // text={FIELD_LABELS[key] || key}
                    value={typeof value === 'string' ? value : String(value)}
                    onKeyDown={onForbiddenCharacterClick}
                    onChangeValue={handleFieldChange(key)}
                  // inputName={key}
                   // Assuming `isInputDate` is dependent on the key
                />
                )}
            </PhotoDetailsContentItem>
          ))
        ) : (
          <h1>empty data</h1>
        )}
    </Styled.Container>
  );
};
