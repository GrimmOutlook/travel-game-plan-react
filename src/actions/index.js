export const CREATE_NEW_TRIP = 'CREATE_NEW_TRIP';
export const createNewTrip = (tripName, startDate, endDate, address, tripDetails) => ({
    type: CREATE_NEW_TRIP,
    tripName,
    startDate,
    endDate,
    address,
    tripDetails
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

