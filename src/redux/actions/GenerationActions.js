import ActionTypes from 'redux/ActionTypes';
import CertificateGenerator from 'utils/CertificateGenerator';

// - Action dispatched to set the outing date value
export const setOutingDateValue = (value) => {
  return {
    type: ActionTypes.setOutingDateValue,
    outingDateValue: value,
  };
};

// - Action dispatched to set the outing time value
export const setOutingTimeValue = (value) => {
  return {
    type: ActionTypes.setOutingTimeValue,
    outingTimeValue: value,
  };
};

// - Action dispatched to reset the outing values
export const resetOutingValue = () => {
  return {
    type: ActionTypes.resetOutingValue,
  };
};

// Thunk called to download the generated PDF certificate
export const generatePDFFile = (reason) => {
  return (dispatch, getState) => {
    const state = getState();
    const values = {
      name: state.personnalInformation.name,
      surname: state.personnalInformation.surname,
      birthday: state.personnalInformation.birthday,
      birthPlace: state.personnalInformation.birthPlace,
      address: state.personnalInformation.address,
      city: state.personnalInformation.city,
      postalCode: state.personnalInformation.postalCode,
      outingDate: state.generationData.outingDate,
      outingTime: state.generationData.outingTime,
      generationDate: state.generationData.generationDate,
      generationTime: state.generationData.generationTime,
      reason: reason,
    };
    const certificateGenerator = new CertificateGenerator();
    certificateGenerator.downloadPdf(values);
  };
};
