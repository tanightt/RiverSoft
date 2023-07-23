const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isEdit: null,
  isExit: false,
  isAdd: false,
  isDelete: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAddModal: state => {
      state.isAdd = true;
    },
    closeAddModal: state => {
      state.isAdd = false;
    },
    openLogOutModal: state => {
      state.isExit = true;
    },
    closeLofOutModal: state => {
      state.isExit = false;
    },
    openEditModal: (state, { payload }) => {
      state.isEdit = payload;
    },
    closeEditModal: state => {
      state.isEdit = null;
    },
    openDeleteModal: (state, { payload }) => {
      state.isDelete = payload;
    },
    closeDeleteModal: state => {
      state.isDelete = false;
    },
  },
});

export const modalReducer = modal.reducer;
export const {
  openAddModal,
  closeAddModal,
  openLogOutModal,
  closeLofOutModal,
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
} = modal.actions;
