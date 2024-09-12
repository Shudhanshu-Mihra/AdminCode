import { FC, useEffect, memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from "../StatusBar";
import { ButtonsBox } from "../ButtonsBox";
import { FieldsBox } from "./FieldsBox";
// import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";
import { PhotoDetailsContentStyles as Styled } from "./PhotoDetailsContent.style";
import { PhotoDetailsContentItem } from "./PhotoDetailsContentItem";
import { ButtonsBoxNew } from "../ButtonBoxNew";
import { CheckboxItem } from "components/Checkbox";

import PurchaseTable from "components/Purchases/PurchasesTable";
// import { PhotoDetailsTabs } from "../PhotoDetailsContent";
import { IState } from 'services/redux/reducer';
import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";

interface ChildProps {
	changePaid: boolean;
	fnChangePaid: () => void;
	actionValue: boolean;
	fnGetPayStatus: (what: boolean | undefined) => void;
	// onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	changePublish: boolean;
	fnChangePublish: () => void;
	newPublish: boolean;
	getLivePublish:(what: boolean | undefined) => void;
}

export const PhotoDetailsContent: FC<ChildProps> = memo((props) => {
	const { changePaid, fnChangePaid, actionValue, fnGetPayStatus } = props;
	const { changePublish, fnChangePublish, newPublish, getLivePublish } = props;
	// console.log("!!!!!!!!!!!!!!!!! - RDContent child-form", actionValue);
	// const {changePaid} = props;
	const {
	// 	selectedReciept
	// 	inputFields,
	// 	// receiptItem,
	// 	statusValue,
	// 	paymentStatus,
	// 	// receiptid,
		dateValue,
		isOpen,
		isLoading,
		formattedDate,
		datePickerRef,
		saveReceiptHandler,
		onChangeRadioButtonHandler,
		onCancelButtonClickHandler,
		onClickOutsideDatePickerHandler,
		onDatePickerClickHandler,
	// 	// onGetAllMasterItemsHandler,
		onForbiddenCharacterClick,

	// 	paymentStatusFromState,
	// 	publishStatusFromState,
	// 	onChangePaymentStatus,
	// 	paymentStatusHandler,
	// 	publishStatusHandler,
	// 	onChangePublishStatus,
	} = usePhotoDetailsContentState();
	
	const {
		
		    RIdata: { selectedReciept }
		  } = useSelector((state: IState) => state);

	useEffect(() => {
		// if (changePaid) {
		// 	// console.log('chnage in paid&&&&&&', changePaid);
		// 	paymentStatusHandler(actionValue);
		// 	fnChangePaid();
		// }

		// onGetAllMasterItemsHandler();
		// fnGetPayStatus(paymentStatusFromState);
	}, []);
// }, [changePaid ,paymentStatusFromState ,receiptid]);

	// useEffect(() => {
	// 	onGetAllMasterItemsHandler();
	// 	fnGetPayStatus(paymentStatusFromState);
	// }, [paymentStatusFromState, receiptid]);
	
	// useEffect(() => {
	// 	if (changePaid) {
	// 		// console.log('chnage in paid&&&&&&', changePaid);
	// 		paymentStatusHandler(actionValue);
	// 		fnChangePaid();
	// 	}
	// }, [changePaid]);

	// useEffect(() => {
	// 	onGetAllMasterItemsHandler();
	// 	getLivePublish(publishStatusFromState);
	// }, [publishStatusFromState, receiptid]);
	// useEffect(() => {
	// 	if (changePublish) {
	// 		// console.log('chnage in paid&&&&&&', changePaid);
	// 		publishStatusHandler(newPublish);
	// 		fnChangePublish();
	// 	}
	// }, [changePublish]);
	// console.log("selectedReciept?.status ::::" ,selectedReciept?.status );
	return (
		<Styled.ReceiptDetailContent>
			<Styled.StatusBarWrapper>
				<PhotoDetailsContentItem label="Status">
					<StatusBar status={selectedReciept?.status } />
				</PhotoDetailsContentItem>
				 <PhotoDetailsContentItem label="Recept ID">
					<StatusBar rid={selectedReciept?.custom_id} />
				</PhotoDetailsContentItem> 
			</Styled.StatusBarWrapper>

			<Styled.FormFieldWrapper>
				<FieldsBox
					inputFields={selectedReciept}
					onDatePickerClickHandler={onDatePickerClickHandler}
					onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
					isOpen={isOpen}
					formattedDate={formattedDate}
					datePickerRef={datePickerRef}
					selectedDate={dateValue ? new Date(dateValue) : null}
					onForbiddenCharacterClick={onForbiddenCharacterClick}
				/>
			</Styled.FormFieldWrapper>
			<Styled.ReceiptItemTable>
				<h4>Details</h4>
			{/* {selectedReciept.map((items) => <Styled.items>{items}</Styled.items>): 'no data'} */}
				<PurchaseTable inputFields={selectedReciept}/>
			</Styled.ReceiptItemTable>
			{/* <Styled.ReceiptStatusContainer>
				<Styled.CheckboxContainer>
					<CheckboxItem
						name={"Payment status"}
						isChecked={paymentStatus}
						// isChecked={false}
						labelText={"Mark as Paid"}
						onChange={onChangePaymentStatus}
					/>
					<CheckboxItem
						name={"Publish status"}
						isChecked={isPublishStatus}
						// isChecked={true}
						labelText={"Mark as Published"}
						onChange={onChangePublishStatus}
					/>
				</Styled.CheckboxContainer>
				<Styled.Description>
					<Styled.DescriptionInput type="text" placeholder="Description" />
				</Styled.Description>
			</Styled.ReceiptStatusContainer> */}
			<Styled.Footer>
				<ButtonsBoxNew onRejectButtonClickHandler={onChangeRadioButtonHandler} isLoading={isLoading} />
				<ButtonsBox saveReceiptHandler={saveReceiptHandler} onCancelButtonClickHandler={onCancelButtonClickHandler} isLoading={isLoading} onApproveButtonClickHandler={onChangeRadioButtonHandler} />
			</Styled.Footer>
		</Styled.ReceiptDetailContent>
	);
});
