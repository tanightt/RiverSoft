const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isEdit: null,
  isExit: false,
  isAdd: false,
};

const modal = createSlice({
  name: 'global',
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
      state.isAdd = payload;
    },
    closeEditModal: state => {
      state.isEdit = null;
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
} = modal.actions;
